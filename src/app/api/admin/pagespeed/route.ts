import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const targetUrl = encodeURIComponent("https://codenclicksit.in/");
    
    // Fetch Desktop
    const desktopRes = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${targetUrl}&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo`
    );
    const desktopData = await desktopRes.json();
    
    // Fetch Mobile
    const mobileRes = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${targetUrl}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo`
    );
    const mobileData = await mobileRes.json();

    if (desktopData.error || mobileData.error) {
      return NextResponse.json({ error: "PageSpeed API returned an error" }, { status: 500 });
    }

    const extractScores = (data: any) => ({
      performance: Math.round((data.lighthouseResult?.categories?.performance?.score || 0) * 100),
      accessibility: Math.round((data.lighthouseResult?.categories?.accessibility?.score || 0) * 100),
      bestPractices: Math.round((data.lighthouseResult?.categories?.['best-practices']?.score || 0) * 100),
      seo: Math.round((data.lighthouseResult?.categories?.seo?.score || 0) * 100),
      coreWebVitals: {
        lcp: data.lighthouseResult?.audits?.['largest-contentful-paint']?.displayValue || "N/A",
        cls: data.lighthouseResult?.audits?.['cumulative-layout-shift']?.displayValue || "N/A",
        tbt: data.lighthouseResult?.audits?.['total-blocking-time']?.displayValue || "N/A",
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        desktop: extractScores(desktopData),
        mobile: extractScores(mobileData),
      }
    });

  } catch (error: any) {
    console.error("PageSpeed Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch PageSpeed data", details: error.message }, { status: 500 });
  }
}

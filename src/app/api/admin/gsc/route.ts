import { NextResponse } from "next/server";
import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const siteUrl = process.env.GSC_SITE_URL;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!siteUrl || !clientEmail || !privateKey) {
      return NextResponse.json({ error: "GSC credentials missing" }, { status: 400 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });

    // Last 30 Days (GSC data is usually delayed by 2 days, so we go back 32 days to 2 days ago)
    const endDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 32 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    // Request 1: Top Queries
    const queriesResponse = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 20,
      }
    });

    // Request 2: Top Pages
    const pagesResponse = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['page'],
        rowLimit: 10,
      }
    });

    // Request 3: Daily Timeline
    const timelineResponse = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['date'],
      }
    });

    // Request 4: Overall Totals
    const totalsResponse = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        queries: queriesResponse.data.rows || [],
        pages: pagesResponse.data.rows || [],
        timeline: timelineResponse.data.rows || [],
        totals: totalsResponse.data.rows?.[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 }
      }
    });

  } catch (error: any) {
    console.error("GSC Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch GSC data", details: error.message }, { status: 500 });
  }
}

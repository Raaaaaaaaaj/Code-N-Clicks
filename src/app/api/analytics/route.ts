import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { path, visitorId, deviceType, browser, os, referrer, utmSource, utmMedium, utmCampaign, isNewVisitor } = data;

    if (!path || !visitorId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const headersList = headers();
    const country = headersList.get("x-vercel-ip-country") || "Unknown";
    const city = headersList.get("x-vercel-ip-city") || "Unknown";

    const analytics = await prisma.analytics.create({
      data: {
        path,
        visitorId,
        deviceType: deviceType || "desktop",
        browser,
        os,
        country,
        city,
        referrer,
        utmSource,
        utmMedium,
        utmCampaign,
        isNewVisitor,
        entryPage: path,
      },
    });

    return NextResponse.json({ success: true, id: analytics.id }, { status: 201 });
  } catch (error) {
    console.error("Analytics logging failed:", error);
    return NextResponse.json({ error: "Failed to log analytics" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const { id, sessionDuration, exitPage } = data;

    if (!id || typeof sessionDuration !== 'number') {
      return NextResponse.json({ error: "Missing id or duration" }, { status: 400 });
    }

    await prisma.analytics.update({
      where: { id },
      data: { sessionDuration, exitPage },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to update session duration:", error);
    return NextResponse.json({ error: "Failed to update duration" }, { status: 500 });
  }
}

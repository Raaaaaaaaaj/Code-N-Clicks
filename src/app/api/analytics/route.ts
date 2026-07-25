import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { path, visitorId, deviceType, browser, os, country, city, referrer } = data;

    if (!path || !visitorId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

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
    const { id, sessionDuration } = data;

    if (!id || typeof sessionDuration !== 'number') {
      return NextResponse.json({ error: "Missing id or duration" }, { status: 400 });
    }

    await prisma.analytics.update({
      where: { id },
      data: { sessionDuration },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to update session duration:", error);
    return NextResponse.json({ error: "Failed to update duration" }, { status: 500 });
  }
}

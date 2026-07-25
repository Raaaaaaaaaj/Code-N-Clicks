import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { path, visitorId, deviceType } = data;

    if (!path || !visitorId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await prisma.analytics.create({
      data: {
        path,
        visitorId,
        deviceType: deviceType || "desktop",
      },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Analytics logging failed:", error);
    return NextResponse.json({ error: "Failed to log analytics" }, { status: 500 });
  }
}

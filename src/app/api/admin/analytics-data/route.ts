import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { subDays, format, startOfDay } from "date-fns";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 1. Totals
    const totalViews = await prisma.analytics.count();
    const uniqueVisitors = await prisma.analytics.groupBy({
      by: ['visitorId'],
    });
    
    const totalLeads = await prisma.contactLead.count();
    const totalBlogs = await prisma.blogPost.count({ where: { isPublished: true } });

    // 2. Traffic over last 7 days
    const trafficData = [];
    for (let i = 6; i >= 0; i--) {
      const date = subDays(new Date(), i);
      const start = startOfDay(date);
      const end = new Date(start.getTime() + 24 * 60 * 60 * 1000);
      
      const dayViews = await prisma.analytics.count({
        where: {
          createdAt: {
            gte: start,
            lt: end,
          }
        }
      });
      
      const dayVisitors = await prisma.analytics.groupBy({
        by: ['visitorId'],
        where: {
          createdAt: {
            gte: start,
            lt: end,
          }
        }
      });

      trafficData.push({
        date: format(date, "MMM dd"),
        views: dayViews,
        visitors: dayVisitors.length,
      });
    }

    // 3. Device distribution
    const devices = await prisma.analytics.groupBy({
      by: ['deviceType'],
      _count: {
        deviceType: true
      }
    });
    
    const deviceData = devices.map(d => ({
      device: d.deviceType.charAt(0).toUpperCase() + d.deviceType.slice(1),
      count: d._count.deviceType
    }));

    // 4. Popular Pages
    const popularRaw = await prisma.analytics.groupBy({
      by: ['path'],
      _count: {
        path: true
      },
      orderBy: {
        _count: {
          path: 'desc'
        }
      },
      take: 5
    });

    const popularPages = popularRaw.map(p => ({
      path: p.path,
      views: p._count.path
    }));

    return NextResponse.json({
      totals: {
        views: totalViews,
        uniqueVisitors: uniqueVisitors.length,
        leads: totalLeads,
        blogs: totalBlogs
      },
      trafficData,
      deviceData,
      popularPages
    });

  } catch (error) {
    console.error("Failed to aggregate analytics:", error);
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const propertyId = process.env.GA4_PROPERTY_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!propertyId || !clientEmail || !privateKey) {
      return NextResponse.json({ error: "GA4 credentials missing" }, { status: 400 });
    }

    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      }
    });

    // Request 1: Daily Timeline (Last 30 Days)
    const [timelineResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'date' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'newUsers' },
        { name: 'sessions' },
      ],
      keepEmptyRows: true,
      orderBys: [{ dimension: { dimensionName: 'date' }, desc: false }]
    });

    // Request 2: Overall Totals & Engagement
    const [totalsResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'bounceRate' },
        { name: 'averageSessionDuration' },
      ],
    });

    // Request 3: Top Pages
    const [pagesResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'activeUsers' }],
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
      limit: 10,
    });

    // Format Timeline
    const timeline = timelineResponse.rows?.map(row => ({
      date: row.dimensionValues?.[0].value,
      activeUsers: parseInt(row.metricValues?.[0].value || '0'),
      newUsers: parseInt(row.metricValues?.[1].value || '0'),
      sessions: parseInt(row.metricValues?.[2].value || '0'),
    })) || [];

    // Format Totals
    const totals = {
      activeUsers: parseInt(totalsResponse.rows?.[0]?.metricValues?.[0].value || '0'),
      bounceRate: parseFloat(totalsResponse.rows?.[0]?.metricValues?.[1].value || '0').toFixed(2),
      avgSessionDuration: parseInt(totalsResponse.rows?.[0]?.metricValues?.[2].value || '0'),
    };

    // Format Pages
    const topPages = pagesResponse.rows?.map(row => ({
      path: row.dimensionValues?.[0].value,
      users: parseInt(row.metricValues?.[0].value || '0'),
    })) || [];

    return NextResponse.json({
      success: true,
      data: {
        timeline,
        totals,
        topPages
      }
    });

  } catch (error: any) {
    console.error("GA4 Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch GA4 data", details: error.message }, { status: 500 });
  }
}

"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";
import { Users, FileText, MousePointerClick, TrendingUp, Loader2 } from "lucide-react";
import { format, subDays, startOfDay, parseISO } from "date-fns";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    totals: { leads: number; blogs: number; views: number; uniqueVisitors: number };
    trafficData: any[];
    deviceData: any[];
    popularPages: any[];
  } | null>(null);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const res = await fetch("/api/admin/analytics-data");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch analytics");
      } finally {
        setLoading(false);
      }
    }
    fetchAnalytics();
  }, []);

  if (loading || !data) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  const { totals, trafficData, deviceData, popularPages } = data;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 text-white">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-white">Analytics Overview</h1>
        <p className="text-neutral-400">Track your website traffic, lead conversions, and content performance.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-400">Total Page Views</CardTitle>
            <MousePointerClick className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{totals.views}</div>
            <p className="text-xs text-green-500 mt-1 flex items-center"><TrendingUp className="w-3 h-3 mr-1"/> Logged via tracker</p>
          </CardContent>
        </Card>
        
        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-400">Unique Visitors</CardTitle>
            <Users className="w-4 h-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{totals.uniqueVisitors}</div>
            <p className="text-xs text-neutral-500 mt-1">Based on local sessions</p>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-400">Total Leads Generated</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{totals.leads}</div>
            <p className="text-xs text-neutral-500 mt-1">From contact forms</p>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-400">Published Blogs</CardTitle>
            <FileText className="w-4 h-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{totals.blogs}</div>
            <p className="text-xs text-neutral-500 mt-1">Live on website</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Chart */}
        <Card className="col-span-1 lg:col-span-2 bg-neutral-900 border-neutral-800 text-white">
          <CardHeader>
            <CardTitle className="text-white">Traffic Overview (Last 7 Days)</CardTitle>
            <CardDescription className="text-neutral-400">Daily page views and unique visitors.</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0D6CFC" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0D6CFC" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                  itemStyle={{ color: '#e4e4e7' }}
                />
                <Legend />
                <Area type="monotone" dataKey="views" name="Page Views" stroke="#0D6CFC" fillOpacity={1} fill="url(#colorViews)" />
                <Area type="monotone" dataKey="visitors" name="Unique Visitors" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorVisitors)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Device Distribution */}
        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader>
            <CardTitle className="text-white">Device Breakdown</CardTitle>
            <CardDescription className="text-neutral-400">Where your traffic comes from.</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deviceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="device" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip 
                  cursor={{fill: '#27272a', opacity: 0.4}}
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="count" name="Visits" fill="#0D6CFC" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card className="bg-neutral-900 border-neutral-800 text-white">
        <CardHeader>
          <CardTitle className="text-white">Top Performing Pages</CardTitle>
          <CardDescription className="text-neutral-400">The most visited routes on your website.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-neutral-950 rounded-lg border border-neutral-800">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="font-medium font-mono text-sm">{page.path}</div>
                </div>
                <div className="font-bold">{page.views} <span className="text-neutral-500 text-sm font-normal">views</span></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart, Pie, Cell } from "recharts";
import { Users, MousePointerClick, TrendingUp, Loader2, Clock, Globe, Laptop, Chrome, Link as LinkIcon } from "lucide-react";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    totals: { leads: number; blogs: number; views: number; uniqueVisitors: number; avgDuration: number };
    trafficData: any[];
    deviceData: any[];
    popularPages: any[];
    advancedData: { os: any[]; browser: any[]; country: any[]; referrer: any[] };
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

  const { totals, trafficData, deviceData, popularPages, advancedData } = data;
  const PIE_COLORS = ['#0D6CFC', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 text-white">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-white">Advanced Analytics</h1>
        <p className="text-neutral-400">Deep insights into your traffic, demographics, and technology.</p>
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
            <CardTitle className="text-sm font-medium text-neutral-400">Avg. Session Time</CardTitle>
            <Clock className="w-4 h-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{formatDuration(totals.avgDuration)}</div>
            <p className="text-xs text-neutral-500 mt-1">Time spent actively on site</p>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-neutral-400">Total Leads</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{totals.leads}</div>
            <p className="text-xs text-neutral-500 mt-1">From contact forms</p>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Overview */}
      <Card className="bg-neutral-900 border-neutral-800 text-white">
        <CardHeader>
          <CardTitle className="text-white">Traffic Overview (Last 7 Days)</CardTitle>
          <CardDescription className="text-neutral-400">Daily page views and unique visitors over time.</CardDescription>
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

      {/* Granular Data Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Device Breakdown */}
        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Laptop className="w-5 h-5 text-blue-500" />
              <CardTitle className="text-white text-lg">Devices</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deviceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="device" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip cursor={{fill: '#27272a', opacity: 0.4}} contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }} />
                <Bar dataKey="count" name="Visits" fill="#0D6CFC" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Browser Breakdown */}
        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Chrome className="w-5 h-5 text-purple-500" />
              <CardTitle className="text-white text-lg">Top Browsers</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={advancedData.browser} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="count">
                  {advancedData.browser.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* OS Breakdown */}
        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Laptop className="w-5 h-5 text-green-500" />
              <CardTitle className="text-white text-lg">Top OS</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={advancedData.os} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="count">
                  {advancedData.os.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[(index+2) % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geographic Locations */}
        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <CardTitle className="text-white text-lg">Top Countries</CardTitle>
            </div>
            <CardDescription className="text-neutral-400">Where your visitors are located globally.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {advancedData.country.length === 0 && <p className="text-neutral-500 text-sm">No geographic data yet.</p>}
              {advancedData.country.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-xs">{index + 1}</div>
                    <div className="font-medium text-sm">{item.name}</div>
                  </div>
                  <div className="font-bold text-sm">{item.count} <span className="text-neutral-500 font-normal">visits</span></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources / Referrers */}
        <Card className="bg-neutral-900 border-neutral-800 text-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-orange-500" />
              <CardTitle className="text-white text-lg">Top Traffic Sources</CardTitle>
            </div>
            <CardDescription className="text-neutral-400">How users found your website.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {advancedData.referrer.length === 0 && <p className="text-neutral-500 text-sm">No referrer data yet.</p>}
              {advancedData.referrer.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-950 rounded-lg border border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-xs">{index + 1}</div>
                    <div className="font-medium text-sm truncate max-w-[200px]">{item.name === "Direct" ? "Direct / None" : item.name}</div>
                  </div>
                  <div className="font-bold text-sm">{item.count} <span className="text-neutral-500 font-normal">visits</span></div>
                </div>
              ))}
            </div>
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

"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart, Pie, Cell } from "recharts";
import { Users, MousePointerClick, TrendingUp, Loader2, Clock, Globe, Laptop, Chrome, Link as LinkIcon, Search, Gauge, AlertCircle } from "lucide-react";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("internal");

  // Data states
  const [internalData, setInternalData] = useState<any>(null);
  const [ga4Data, setGa4Data] = useState<any>(null);
  const [gscData, setGscData] = useState<any>(null);
  const [pageSpeedData, setPageSpeedData] = useState<any>(null);

  useEffect(() => {
    async function fetchInternal() {
      try {
        const res = await fetch("/api/admin/analytics-data");
        const json = await res.json();
        setInternalData(json);
      } catch (error) {
        console.error("Failed to fetch internal analytics");
      } finally {
        setLoading(false);
      }
    }
    fetchInternal();
  }, []);

  const loadGa4 = async () => {
    if (ga4Data) return;
    try {
      const res = await fetch("/api/admin/ga4");
      const json = await res.json();
      setGa4Data(json);
    } catch(e) {}
  };

  const loadGsc = async () => {
    if (gscData) return;
    try {
      const res = await fetch("/api/admin/gsc");
      const json = await res.json();
      setGscData(json);
    } catch(e) {}
  };

  const loadPageSpeed = async () => {
    if (pageSpeedData) return;
    try {
      const res = await fetch("/api/admin/pagespeed");
      const json = await res.json();
      setPageSpeedData(json);
    } catch(e) {}
  };

  if (loading || !internalData) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  const { totals, trafficData, deviceData, popularPages, advancedData } = internalData;
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
        <h1 className="text-3xl font-bold mb-2 text-white">Analytics Dashboard</h1>
        <p className="text-neutral-400">Deep insights into your traffic, SEO, and performance.</p>
      </div>

      <Tabs defaultValue="internal" className="w-full" onValueChange={(v) => {
        setActiveTab(v);
        if (v === "ga4") loadGa4();
        if (v === "gsc") loadGsc();
        if (v === "pagespeed") loadPageSpeed();
      }}>
        <TabsList className="bg-neutral-900 border border-neutral-800 h-12 w-full justify-start overflow-x-auto rounded-lg mb-8">
          <TabsTrigger value="internal" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Built-in Tracker</TabsTrigger>
          <TabsTrigger value="ga4" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Google Analytics 4</TabsTrigger>
          <TabsTrigger value="gsc" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Search Console</TabsTrigger>
          <TabsTrigger value="pagespeed" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">SEO & Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="internal" className="space-y-6">
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
                      {advancedData.browser.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

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
                      {advancedData.os.map((entry: any, index: number) => (
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
            <Card className="bg-neutral-900 border-neutral-800 text-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <CardTitle className="text-white text-lg">Top Countries</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {advancedData.country.length === 0 && <p className="text-neutral-500 text-sm">No geographic data yet.</p>}
                  {advancedData.country.map((item: any, index: number) => (
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

            <Card className="bg-neutral-900 border-neutral-800 text-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-orange-500" />
                  <CardTitle className="text-white text-lg">Traffic Sources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {advancedData.referrer.length === 0 && <p className="text-neutral-500 text-sm">No referrer data yet.</p>}
                  {advancedData.referrer.map((item: any, index: number) => (
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
        </TabsContent>

        <TabsContent value="ga4" className="space-y-6">
          {!ga4Data ? (
            <div className="flex h-[300px] items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-blue-500" /></div>
          ) : ga4Data.error ? (
            <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-lg flex flex-col items-center justify-center text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-bold text-red-500 mb-2">Google Analytics Error</h3>
              <p className="text-red-400">{ga4Data.error}</p>
              <p className="text-neutral-400 text-sm mt-2 max-w-md">{ga4Data.details}</p>
              <p className="text-neutral-400 text-sm mt-4">Make sure your `GA4_PROPERTY_ID`, `GOOGLE_CLIENT_EMAIL`, and `GOOGLE_PRIVATE_KEY` environment variables are correctly set in Vercel.</p>
            </div>
          ) : (
            <div className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-neutral-900 border-neutral-800 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-400">Active Users (30d)</CardTitle>
                    <Users className="w-4 h-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{ga4Data.data.totals.activeUsers}</div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-neutral-800 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-400">Bounce Rate</CardTitle>
                    <TrendingUp className="w-4 h-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{ga4Data.data.totals.bounceRate}%</div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-neutral-800 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-400">Avg Session</CardTitle>
                    <Clock className="w-4 h-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{formatDuration(ga4Data.data.totals.avgSessionDuration)}</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-neutral-900 border-neutral-800 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Active Users (Last 30 Days)</CardTitle>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ga4Data.data.timeline} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorGa4Views" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="date" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => {
                        const str = String(val);
                        return str.substring(4,6) + '/' + str.substring(6,8);
                      }} />
                      <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                      <RechartsTooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }} />
                      <Area type="monotone" dataKey="activeUsers" stroke="#f59e0b" fillOpacity={1} fill="url(#colorGa4Views)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="gsc" className="space-y-6">
          {!gscData ? (
            <div className="flex h-[300px] items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-blue-500" /></div>
          ) : gscData.error ? (
            <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-lg flex flex-col items-center justify-center text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-bold text-red-500 mb-2">Search Console Error</h3>
              <p className="text-red-400">{gscData.error}</p>
              <p className="text-neutral-400 text-sm mt-2 max-w-md">{gscData.details}</p>
              <p className="text-neutral-400 text-sm mt-4">Make sure your `GSC_SITE_URL`, `GOOGLE_CLIENT_EMAIL`, and `GOOGLE_PRIVATE_KEY` environment variables are correctly set in Vercel.</p>
            </div>
          ) : (
            <div className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-neutral-900 border-neutral-800 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-400">Total Clicks</CardTitle>
                    <MousePointerClick className="w-4 h-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{gscData.data.totals.clicks}</div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-neutral-800 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-400">Total Impressions</CardTitle>
                    <Users className="w-4 h-4 text-purple-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{gscData.data.totals.impressions}</div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-neutral-800 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-400">Avg. CTR</CardTitle>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{(gscData.data.totals.ctr * 100).toFixed(2)}%</div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-900 border-neutral-800 text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-400">Avg. Position</CardTitle>
                    <Search className="w-4 h-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{gscData.data.totals.position.toFixed(1)}</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-neutral-900 border-neutral-800 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Top Search Queries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {gscData.data.queries.length === 0 && <p className="text-neutral-500">No data available.</p>}
                      {gscData.data.queries.map((q: any, i: number) => (
                        <div key={i} className="flex justify-between items-center bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                          <span className="font-medium text-sm truncate max-w-[200px]">{q.keys?.[0]}</span>
                          <span className="font-bold text-sm text-blue-400">{q.clicks} clicks</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900 border-neutral-800 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Top Organic Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {gscData.data.pages.length === 0 && <p className="text-neutral-500">No data available.</p>}
                      {gscData.data.pages.map((p: any, i: number) => (
                        <div key={i} className="flex justify-between items-center bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                          <span className="font-mono text-xs text-neutral-300 truncate max-w-[200px]">{p.keys?.[0]?.replace('https://codenclicksit.in', '')}</span>
                          <span className="font-bold text-sm text-blue-400">{p.clicks} clicks</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="pagespeed" className="space-y-6">
          {!pageSpeedData ? (
            <div className="flex h-[300px] items-center justify-center flex-col gap-4">
               <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
               <p className="text-neutral-400 animate-pulse">Running live PageSpeed analysis. This takes ~15 seconds...</p>
            </div>
          ) : pageSpeedData.error ? (
            <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-lg flex flex-col items-center justify-center text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-lg font-bold text-red-500 mb-2">PageSpeed Error</h3>
              <p className="text-red-400">{pageSpeedData.error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Desktop */}
              <Card className="bg-neutral-900 border-neutral-800 text-white">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Laptop className="w-5 h-5 text-blue-400" />
                    <CardTitle className="text-white">Desktop Performance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 text-center">
                      <div className={`text-4xl font-black mb-1 ${pageSpeedData.data.desktop.performance >= 90 ? 'text-green-500' : pageSpeedData.data.desktop.performance >= 50 ? 'text-orange-500' : 'text-red-500'}`}>
                        {pageSpeedData.data.desktop.performance}
                      </div>
                      <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Performance</div>
                    </div>
                    <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 text-center">
                      <div className={`text-4xl font-black mb-1 ${pageSpeedData.data.desktop.seo >= 90 ? 'text-green-500' : pageSpeedData.data.desktop.seo >= 50 ? 'text-orange-500' : 'text-red-500'}`}>
                        {pageSpeedData.data.desktop.seo}
                      </div>
                      <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">SEO</div>
                    </div>
                    <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 text-center">
                      <div className={`text-4xl font-black mb-1 ${pageSpeedData.data.desktop.accessibility >= 90 ? 'text-green-500' : pageSpeedData.data.desktop.accessibility >= 50 ? 'text-orange-500' : 'text-red-500'}`}>
                        {pageSpeedData.data.desktop.accessibility}
                      </div>
                      <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Accessibility</div>
                    </div>
                    <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 text-center">
                      <div className={`text-4xl font-black mb-1 ${pageSpeedData.data.desktop.bestPractices >= 90 ? 'text-green-500' : pageSpeedData.data.desktop.bestPractices >= 50 ? 'text-orange-500' : 'text-red-500'}`}>
                        {pageSpeedData.data.desktop.bestPractices}
                      </div>
                      <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Best Practices</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mobile */}
              <Card className="bg-neutral-900 border-neutral-800 text-white">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <CardTitle className="text-white">Mobile Performance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 text-center">
                      <div className={`text-4xl font-black mb-1 ${pageSpeedData.data.mobile.performance >= 90 ? 'text-green-500' : pageSpeedData.data.mobile.performance >= 50 ? 'text-orange-500' : 'text-red-500'}`}>
                        {pageSpeedData.data.mobile.performance}
                      </div>
                      <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Performance</div>
                    </div>
                    <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 text-center">
                      <div className={`text-4xl font-black mb-1 ${pageSpeedData.data.mobile.seo >= 90 ? 'text-green-500' : pageSpeedData.data.mobile.seo >= 50 ? 'text-orange-500' : 'text-red-500'}`}>
                        {pageSpeedData.data.mobile.seo}
                      </div>
                      <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">SEO</div>
                    </div>
                    <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 text-center">
                      <div className={`text-4xl font-black mb-1 ${pageSpeedData.data.mobile.accessibility >= 90 ? 'text-green-500' : pageSpeedData.data.mobile.accessibility >= 50 ? 'text-orange-500' : 'text-red-500'}`}>
                        {pageSpeedData.data.mobile.accessibility}
                      </div>
                      <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Accessibility</div>
                    </div>
                    <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 text-center">
                      <div className={`text-4xl font-black mb-1 ${pageSpeedData.data.mobile.bestPractices >= 90 ? 'text-green-500' : pageSpeedData.data.mobile.bestPractices >= 50 ? 'text-orange-500' : 'text-red-500'}`}>
                        {pageSpeedData.data.mobile.bestPractices}
                      </div>
                      <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Best Practices</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

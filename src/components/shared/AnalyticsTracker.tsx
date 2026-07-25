"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function generateVisitorId() {
  return 'visitor_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

function getDeviceType() {
  if (typeof window === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "tablet";
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "mobile";
  return "desktop";
}

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Do not track admin routes
    if (pathname?.startsWith("/admin")) return;

    let visitorId = localStorage.getItem("cnc_visitor_id");
    if (!visitorId) {
      visitorId = generateVisitorId();
      localStorage.setItem("cnc_visitor_id", visitorId);
    }

    const deviceType = getDeviceType();

    // Fire and forget analytics event
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        visitorId,
        deviceType,
      }),
      // Keepalive ensures the request is sent even if the user navigates away quickly
      keepalive: true,
    }).catch(e => console.error("Analytics error", e));

  }, [pathname]);

  return null; // Silent component
}

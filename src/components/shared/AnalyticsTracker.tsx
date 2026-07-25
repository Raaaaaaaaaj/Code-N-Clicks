"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function generateVisitorId() {
  return 'visitor_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

function getDeviceType(ua: string) {
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return "tablet";
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return "mobile";
  return "desktop";
}

function getOS(ua: string) {
  if (/Windows/i.test(ua)) return "Windows";
  if (/Mac/i.test(ua)) return "macOS";
  if (/X11|Linux/i.test(ua)) return "Linux";
  if (/Android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  return "Unknown OS";
}

function getBrowser(ua: string) {
  if (/Edg/i.test(ua)) return "Edge";
  if (/Chrome/i.test(ua)) return "Chrome";
  if (/Firefox/i.test(ua)) return "Firefox";
  if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) return "Safari";
  if (/Opera|OPR/i.test(ua)) return "Opera";
  return "Unknown Browser";
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const sessionRef = useRef<{ id: string | null; startTime: number }>({ id: null, startTime: 0 });

  useEffect(() => {
    if (pathname?.startsWith("/admin")) return;

    let visitorId = localStorage.getItem("cnc_visitor_id");
    if (!visitorId) {
      visitorId = generateVisitorId();
      localStorage.setItem("cnc_visitor_id", visitorId);
    }

    const ua = navigator.userAgent;
    const referrer = document.referrer || "Direct";
    
    const sendPayload = async () => {
      let country = "Unknown";
      let city = "Unknown";
      
      // Attempt to get Geo Location silently via free API
      try {
        const geoRes = await fetch("https://ipapi.co/json/");
        if (geoRes.ok) {
          const geo = await geoRes.json();
          country = geo.country_name || "Unknown";
          city = geo.city || "Unknown";
        }
      } catch (e) {
        // Silently fail if blocked by adblockers
      }

      try {
        const res = await fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path: pathname,
            visitorId,
            deviceType: getDeviceType(ua),
            browser: getBrowser(ua),
            os: getOS(ua),
            referrer,
            country,
            city
          }),
          keepalive: true,
        });

        if (res.ok) {
          const data = await res.json();
          if (data.id) {
            sessionRef.current = { id: data.id, startTime: Date.now() };
          }
        }
      } catch (e) {
        console.error("Analytics init failed", e);
      }
    };

    sendPayload();

    // Track when user leaves or hides the page to calculate exact session duration
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && sessionRef.current.id) {
        const durationSeconds = Math.round((Date.now() - sessionRef.current.startTime) / 1000);
        
        // Use sendBeacon for more reliable delivery when page unloads
        const payload = JSON.stringify({ id: sessionRef.current.id, sessionDuration: durationSeconds });
        const blob = new Blob([payload], { type: "application/json" });
        navigator.sendBeacon("/api/analytics", blob);
        
        // Alternatively use fetch with keepalive if beacon fails
        fetch("/api/analytics", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true
        }).catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleVisibilityChange);

    return () => {
      handleVisibilityChange();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleVisibilityChange);
    };

  }, [pathname]);

  return null;
}

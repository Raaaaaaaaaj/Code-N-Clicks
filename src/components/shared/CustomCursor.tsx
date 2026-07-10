"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  const isHovered = useRef(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch
    const checkTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (checkTouch) {
      setIsTouchDevice(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Make visible on initialization
    dot.style.opacity = "1";
    ring.style.opacity = "1";

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };

      // Select interactive elements
      const target = e.target as HTMLElement;
      const interactive = target?.closest("a, button, [role='button'], .group, select, input, textarea");
      
      if (interactive) {
        if (!isHovered.current) {
          isHovered.current = true;
          // Scale up outer ring, change border and background
          ring.style.width = "48px";
          ring.style.height = "48px";
          ring.style.marginLeft = "-24px";
          ring.style.marginTop = "-24px";
          ring.style.borderColor = "#C8FF3D";
          ring.style.backgroundColor = "rgba(200, 255, 61, 0.12)";
          
          dot.style.transform = "scale(1.8)";
          dot.style.backgroundColor = "#FF6B5E";
        }
      } else {
        if (isHovered.current) {
          isHovered.current = false;
          // Reset outer ring and dot styles
          ring.style.width = "26px";
          ring.style.height = "26px";
          ring.style.marginLeft = "-13px";
          ring.style.marginTop = "-13px";
          ring.style.borderColor = "#0D6CFC";
          ring.style.backgroundColor = "transparent";
          
          dot.style.transform = "scale(1)";
          dot.style.backgroundColor = "#0D6CFC";
        }
      }
    };

    const handleMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // LERP (Linear Interpolation) loop for organic trail lag
    let animId: number;
    const render = () => {
      const targetX = mouseCoords.current.x;
      const targetY = mouseCoords.current.y;
      
      // Interpolate coordinates: current + (target - current) * ease factor
      ringCoords.current.x += (targetX - ringCoords.current.x) * 0.16;
      ringCoords.current.y += (targetY - ringCoords.current.y) * 0.16;

      // Update positions using GPU hardware-accelerated translate3d transforms
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) ${isHovered.current ? "scale(1.8)" : "scale(1)"}`;
      ring.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0)`;

      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Ring Trail Cursor (Hardware accelerated LERP coordinates) */}
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] border-2 -ml-[13px] -mt-[13px] opacity-0 transition-all duration-200 ease-out will-change-transform"
        style={{
          width: "26px",
          height: "26px",
          borderColor: "#0D6CFC",
        }}
      />
      {/* Inner Precision Dot Cursor (Follows mouse 1:1) */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999] bg-[#0D6CFC] -ml-[4px] -mt-[4px] opacity-0 transition-all duration-300 will-change-transform"
      />
    </>
  );
}

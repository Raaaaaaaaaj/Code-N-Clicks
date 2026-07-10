"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsNearBottom(progress > 85);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (isNearBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div 
      onClick={handleScrollAction}
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-row items-center gap-3 select-none group transition-opacity duration-300 ${
        isNearBottom ? "cursor-pointer pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Vertical Label */}
      <div className="flex flex-col items-end">
        <span 
          className={`text-[9px] font-mono tracking-widest uppercase transition-colors duration-300 [writing-mode:vertical-rl] rotate-180 ${
            isNearBottom 
              ? "text-brand-blue group-hover:text-brand-coral font-bold" 
              : "text-brand-graphite/40"
          }`}
        >
          {isNearBottom ? "BACK TO TOP" : "SCROLL TO EXPLORE"}
        </span>
      </div>

      {/* Progress Line Track */}
      <div className="w-[6px] h-[120px] bg-brand-graphite/10 rounded-full overflow-hidden relative border border-brand-graphite/5">
        {/* Progress Fill with Solid Branded Green */}
        <div 
          className="absolute top-0 left-0 w-full bg-[#fc6a5f] rounded-full transition-all duration-75"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
}

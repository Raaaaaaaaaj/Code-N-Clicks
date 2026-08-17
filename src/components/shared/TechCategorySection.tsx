"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Monitor, Server, Database, Cloud, BrainCircuit, BarChart3, Brush, type LucideIcon } from "lucide-react";
import { TechCategory, getTechIconUrl } from "@/data/technologiesData";
import { cn } from "@/lib/utils";

const categoryIconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  BarChart3,
  Brush,
};

interface TechCategorySectionProps {
  category: TechCategory;
}

export const TechCategorySection: React.FC<TechCategorySectionProps> = ({ category }) => {
  const CatIcon = categoryIconMap[category.iconName] || Monitor;
  const isDark = Boolean(category.isDark);

  // Embla setup for mobile carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
    });
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Section background styles
  const getBgClass = () => {
    if (category.bgVariant === "darker") return "bg-[#060913] text-white border-b-2 border-slate-800";
    if (category.bgVariant === "dark") return "bg-[#0B0F19] text-white border-b-2 border-slate-800";
    if (category.bgVariant === "mist") return "bg-brand-mist text-brand-graphite border-b-2 border-brand-graphite";
    return "bg-white text-brand-graphite border-b-2 border-brand-graphite";
  };

  return (
    <section className={cn("py-16 lg:py-24 relative overflow-hidden", getBgClass())}>
      {/* Abstract dark section backgrounds */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="flex items-center gap-3.5">
            <div
              className={cn(
                "w-10 h-10 border-2 rounded-lg flex items-center justify-center shrink-0",
                isDark
                  ? "bg-slate-900 border-slate-700 text-brand-blue"
                  : "bg-white border-brand-graphite text-brand-blue"
              )}
            >
              <CatIcon className="w-5 h-5" />
            </div>
            <h2
              className={cn(
                "text-4xl md:text-5xl font-heading font-extrabold tracking-tight",
                isDark ? "text-white" : "text-brand-graphite"
              )}
            >
              {category.title}
            </h2>
          </div>
          <p
            className={cn(
              "leading-relaxed font-sans max-w-2xl pl-0 sm:pl-13",
              isDark ? "text-slate-300" : "text-brand-graphite/80"
            )}
          >
            {category.intro}
          </p>
        </div>

        {/* DESKTOP GRID (md and larger) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.techs.map((tech) => (
            <div
              key={tech.name}
              className={cn(
                "p-6 rounded-[24px] transition-all duration-300 relative overflow-hidden group h-full flex flex-col justify-between",
                isDark
                  ? "bg-[#111827] border-2 border-slate-700/80 shadow-premium hover:shadow-flat hover:border-brand-blue"
                  : "bg-white border-2 border-brand-graphite shadow-premium hover:shadow-flat"
              )}
            >
              <div className="relative z-10 pr-10">
                <h3
                  className={cn(
                    "text-xl font-heading font-bold mb-1.5",
                    isDark ? "text-white" : "text-brand-graphite"
                  )}
                >
                  {tech.name}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed font-sans",
                    isDark ? "text-slate-300" : "text-brand-graphite/70"
                  )}
                >
                  {tech.desc}
                </p>
              </div>

              <div className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none select-none z-0 flex items-center justify-center">
                <img
                  src={getTechIconUrl(tech.name)}
                  alt=""
                  className={cn(
                    "w-full h-full object-contain transition-all duration-500",
                    isDark
                      ? "grayscale opacity-[0.25] group-hover:grayscale-0 group-hover:opacity-[0.55] group-hover:scale-110 group-hover:rotate-12"
                      : "grayscale opacity-[0.18] group-hover:grayscale-0 group-hover:opacity-[0.40] group-hover:scale-110 group-hover:rotate-12"
                  )}
                />
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE CAROUSEL (sm and smaller, < md) */}
        <div className="block md:hidden">
          <div className="overflow-hidden py-2" ref={emblaRef}>
            <div className="flex -ml-4">
              {category.techs.map((tech, idx) => (
                <div
                  key={tech.name}
                  className="pl-4 min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[70%]"
                >
                  <div
                    className={cn(
                      "p-6 rounded-[24px] transition-all duration-300 relative overflow-hidden group min-h-[160px] flex flex-col justify-between",
                      isDark
                        ? "bg-[#111827] border-2 border-slate-700/80 shadow-premium"
                        : "bg-white border-2 border-brand-graphite shadow-premium"
                    )}
                  >
                    <div className="relative z-10 pr-10">
                      <h3
                        className={cn(
                          "text-lg font-heading font-bold mb-1.5",
                          isDark ? "text-white" : "text-brand-graphite"
                        )}
                      >
                        {tech.name}
                      </h3>
                      <p
                        className={cn(
                          "text-xs leading-relaxed font-sans",
                          isDark ? "text-slate-300" : "text-brand-graphite/70"
                        )}
                      >
                        {tech.desc}
                      </p>
                    </div>

                    <div className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none select-none z-0 flex items-center justify-center">
                      <img
                        src={getTechIconUrl(tech.name)}
                        alt=""
                        className={cn(
                          "w-full h-full object-contain transition-all duration-500",
                          isDark
                            ? "grayscale opacity-[0.25]"
                            : "grayscale opacity-[0.18]"
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          {scrollSnaps.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {scrollSnaps.map((_, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 focus:outline-none",
                      isSelected
                        ? "w-6 bg-brand-blue"
                        : isDark
                        ? "w-2 bg-slate-700 hover:bg-slate-500"
                        : "w-2 bg-brand-graphite/20 hover:bg-brand-graphite/50"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                    type="button"
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

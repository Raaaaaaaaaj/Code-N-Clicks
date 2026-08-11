"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive?: boolean;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive = true,
  className,
}) => {
  const { name, role, company, content, rating, initials, verified } = testimonial;

  // Render stars (full stars, fractional indicator, and empty stars)
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.8;
  const emptyStars = 5 - Math.ceil(rating);

  const displayInitials =
    initials ||
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between h-full p-7 md:p-9 rounded-[28px] border-2 transition-all duration-500 ease-out select-none",
        isActive
          ? "bg-white border-brand-graphite shadow-flat-blue scale-100 opacity-100 z-10"
          : "bg-brand-mist/80 border-brand-graphite/20 shadow-premium scale-[0.96] opacity-70 hover:opacity-90 hover:scale-[0.98]",
        className
      )}
    >
      {/* Decorative Active Indicator Bar */}
      <div
        className={cn(
          "absolute top-0 left-8 right-8 h-1 rounded-b-full transition-opacity duration-300",
          isActive ? "bg-brand-blue opacity-100" : "bg-transparent opacity-0"
        )}
      />

      <div>
        {/* Top Bar: Rating & Quote Icon */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-1 items-center">
              {Array.from({ length: fullStars }).map((_, j) => (
                <Star
                  key={`full-${j}`}
                  className="w-4 h-4 fill-brand-coral text-brand-coral drop-shadow-sm"
                />
              ))}
              {hasHalfStar && (
                <div className="relative w-4 h-4">
                  <Star className="absolute inset-0 w-4 h-4 text-brand-graphite/20" />
                  <div className="absolute inset-0 overflow-hidden w-[50%]">
                    <Star className="w-4 h-4 fill-brand-coral text-brand-coral" />
                  </div>
                </div>
              )}
              {Array.from({ length: emptyStars }).map((_, j) => (
                <Star key={`empty-${j}`} className="w-4 h-4 text-brand-graphite/20" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-brand-graphite/70 ml-1">
              {rating.toFixed(1)}
            </span>
          </div>

          <div
            className={cn(
              "w-10 h-10 rounded-2xl flex items-center justify-center transition-colors duration-300",
              isActive ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-graphite/5 text-brand-graphite/40"
            )}
          >
            <Quote className="w-5 h-5 rotate-180" />
          </div>
        </div>

        {/* Review Body */}
        <p className="text-sm md:text-base text-brand-graphite/90 leading-relaxed font-sans italic mb-8 min-h-[90px]">
          "{content}"
        </p>
      </div>

      {/* Client Identity Block */}
      <div className="pt-6 border-t border-brand-graphite/10 flex items-center justify-between gap-3 mt-auto">
        <div className="flex items-center gap-3.5">
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-extrabold text-sm tracking-wider shadow-sm flex-shrink-0">
              {displayInitials}
            </div>
            {verified && (
              <div
                className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 text-brand-blue shadow-sm"
                title="Verified Client Review"
              >
                <CheckCircle2 className="w-3.5 h-3.5 fill-brand-blue text-white" />
              </div>
            )}
          </div>

          <div>
            <h4 className="text-sm font-heading font-extrabold text-brand-graphite leading-snug flex items-center gap-1.5">
              {name}
            </h4>
            <p className="text-xs font-mono text-brand-graphite/60 mt-0.5">
              <span className="font-semibold">{role}</span>
              {company && (
                <>
                  <span className="mx-1 text-brand-graphite/30">•</span>
                  <span>{company}</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

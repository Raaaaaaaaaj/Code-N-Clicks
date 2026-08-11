"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Testimonial, testimonials as defaultTestimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { cn } from "@/lib/utils";

interface TestimonialsCarouselProps {
  reviews?: Testimonial[];
  autoplayInterval?: number;
  className?: string;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  reviews = defaultTestimonials,
  autoplayInterval = 5000,
  className,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  // Initialize snaps and listeners
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

  // Autoplay functionality with pause-on-interaction
  useEffect(() => {
    if (!emblaApi || !isPlaying || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [emblaApi, isPlaying, isPaused, autoplayInterval]);

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <div
      className={cn("relative w-full max-w-7xl mx-auto py-4 px-2 sm:px-4", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client Testimonials Carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Embla Viewport */}
      <div className="overflow-hidden py-6 px-1 cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-4 items-stretch">
          {reviews.map((testimonial, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={testimonial.id || testimonial.name + index}
                className="pl-4 min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-[46%] xl:basis-[38%] transition-all duration-500"
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${index + 1} of ${reviews.length}`}
              >
                <TestimonialCard testimonial={testimonial} isActive={isActive} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls & Pagination Dots Bar */}
      <div className="flex items-center justify-between gap-4 mt-8 pt-4 px-4 max-w-2xl mx-auto">
        {/* Previous Button */}
        <button
          onClick={scrollPrev}
          className="w-11 h-11 rounded-full border-2 border-brand-graphite bg-white hover:bg-brand-blue hover:text-white hover:border-brand-blue text-brand-graphite flex items-center justify-center transition-all duration-300 shadow-flat hover:shadow-none focus:outline-none focus:ring-2 focus:ring-brand-blue active:translate-x-0.5 active:translate-y-0.5"
          aria-label="Previous testimonial"
          type="button"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue",
                  isSelected
                    ? "w-8 bg-brand-blue shadow-sm"
                    : "w-2.5 bg-brand-graphite/20 hover:bg-brand-graphite/50"
                )}
                aria-label={`Go to review slide ${index + 1}`}
                aria-current={isSelected ? "true" : "false"}
                type="button"
              />
            );
          })}
        </div>

        {/* Play/Pause Autoplay Toggle & Next Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full border border-brand-graphite/20 bg-white/80 text-brand-graphite/60 hover:text-brand-graphite hover:border-brand-graphite flex items-center justify-center transition-colors text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
            title={isPlaying ? "Pause autoplay" : "Start autoplay"}
            type="button"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          <button
            onClick={scrollNext}
            className="w-11 h-11 rounded-full border-2 border-brand-graphite bg-white hover:bg-brand-blue hover:text-white hover:border-brand-blue text-brand-graphite flex items-center justify-center transition-all duration-300 shadow-flat hover:shadow-none focus:outline-none focus:ring-2 focus:ring-brand-blue active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Next testimonial"
            type="button"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimationOptions {
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  stagger?: number;
  triggerHook?: string;
}

/**
 * Hook to reveal an element with a smooth fade-in and vertical translation.
 */
export function useScrollFadeUp(options?: AnimationOptions) {
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !elementRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const el = elementRef.current;

    // Set initial offscreen state
    gsap.set(el, { opacity: 0, y: options?.y ?? 30, x: options?.x ?? 0 });

    const anim = gsap.to(el, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: options?.duration ?? 0.8,
      delay: options?.delay ?? 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: options?.triggerHook ?? "top 88%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      anim.kill();
    };
  }, [options?.delay, options?.duration, options?.y, options?.x, options?.triggerHook]);

  return elementRef;
}

/**
 * Hook to reveal all direct children of a container sequentially (staggered).
 * Perfect for cards, list grids, or icon blocks.
 */
export function useScrollStagger(options?: AnimationOptions) {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const children = Array.from(container.children);

    if (children.length === 0) {
      return;
    }

    // Set initial offscreen state for all children
    gsap.set(children, { opacity: 0, y: options?.y ?? 30, x: options?.x ?? 0 });

    const anim = gsap.to(children, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: options?.duration ?? 0.8,
      stagger: options?.stagger ?? 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: options?.triggerHook ?? "top 82%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      anim.kill();
    };
  }, [options?.delay, options?.duration, options?.y, options?.x, options?.stagger, options?.triggerHook]);

  return containerRef;
}

/**
 * Hook to apply a subtle translation based on scroll position (parallax).
 * Works best on large background or detail images.
 */
export function useScrollParallax(speed: number = 0.15) {
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !elementRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const el = elementRef.current;

    const anim = gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      anim.kill();
    };
  }, [speed]);

  return elementRef;
}

"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scrubbed entrance: opacity/translate/scale track scroll position exactly,
 * so the element moves with the user's finger or wheel — fully reversible.
 * Without JS (or with reduced motion) the content simply renders visible.
 */
export default function ScrollScrub({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.96;
      const end = vh * 0.5;
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      el.style.opacity = `${0.12 + 0.88 * p}`;
      el.style.transform = `translateY(${((1 - p) * 34).toFixed(1)}px) scale(${(0.955 + 0.045 * p).toFixed(3)})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

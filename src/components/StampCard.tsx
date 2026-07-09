"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function StampCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [stamped, setStamped] = useState(false);
  const [nonce, setNonce] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStamped(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const restamp = () => {
    setStamped(true);
    setNonce((n) => n + 1);
  };

  return (
    <div
      ref={ref}
      onClick={restamp}
      className="relative cursor-pointer select-none"
      title="Tap to stamp"
    >
      <div key={nonce} className={stamped && !reduced ? "animate-card-shake" : undefined}>
        {children}
        {stamped && (
          <div className="pointer-events-none absolute right-5 top-5">
            <span
              className={`block rounded-lg border-[3px] border-brand-red-light px-3 py-1 text-lg font-black uppercase tracking-[0.18em] text-brand-red-light ${
                reduced ? "-rotate-12" : "animate-stamp-slam"
              }`}
              style={{ boxShadow: "inset 0 0 14px rgba(251, 74, 95, 0.3)" }}
            >
              Approved
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

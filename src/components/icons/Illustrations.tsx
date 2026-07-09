"use client";

import { useEffect, useState } from "react";

type IllustrationProps = { className?: string };

const FLIGHT_PATH = "M70 300C260 90 520 60 730 110";

function usePrefersMotion() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return animate;
}

export function FlightPathIllustration({ className }: IllustrationProps) {
  const animate = usePrefersMotion();

  return (
    <svg
      viewBox="0 0 800 400"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="180" cy="230" r="150" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />
      <path d="M30 230h300M180 80v300M65 140c60 30 190 30 230 0M65 320c60-30 190-30 230 0" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <path
        d={FLIGHT_PATH}
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeDasharray="2 10"
        strokeLinecap="round"
        className={animate ? "animate-dash-flow" : undefined}
      />
      <circle cx="70" cy="300" r="6" fill="currentColor" fillOpacity="0.8" className={animate ? "animate-pulse" : undefined} />
      <circle cx="730" cy="110" r="6" fill="currentColor" fillOpacity="0.8" className={animate ? "animate-pulse" : undefined} />
      {!animate && (
        <g transform="translate(430 78) rotate(-18)">
          <path
            d="M0 0l22-6 26 6-26 6-22-6Zm22-6 8-16 6 2-4 14M22 6l8 16 6-2-4-14"
            fill="currentColor"
            fillOpacity="0.85"
          />
        </g>
      )}
    </svg>
  );
}

export function CompassBadgeIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="64" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="1 8" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 100 + Math.cos(angle) * 90;
        const y1 = 100 + Math.sin(angle) * 90;
        const x2 = 100 + Math.cos(angle) * 82;
        const y2 = 100 + Math.sin(angle) * 82;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
        );
      })}
      <path d="M100 55 114 100 100 145 86 100Z" fill="currentColor" fillOpacity="0.65" />
    </svg>
  );
}

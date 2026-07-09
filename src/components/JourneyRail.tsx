"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type Chapter = { key: string; label: string; icon: ReactNode };

const CHAPTERS: Chapter[] = [
  {
    key: "consult",
    label: "Consult",
    icon: (
      <g>
        <circle r="9" />
        <path d="M3 -3 1 3 -3 1 -1 -3Z" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    key: "process",
    label: "Apply",
    icon: (
      <g>
        <rect x="-6" y="-8" width="12" height="16" rx="1.3" />
        <path d="M-3 1 -1 3 3 -2" />
      </g>
    ),
  },
  {
    key: "visa",
    label: "Visa",
    icon: (
      <g>
        <rect x="-6" y="-8" width="12" height="16" rx="1.3" />
        <circle cy="-2" r="2.2" />
        <path d="M-2.4 4c0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4" />
      </g>
    ),
  },
  {
    key: "fly",
    label: "Fly",
    icon: (
      <path
        d="M-8 1l8-2.2 9 2.2-9 2.2L-8 1Zm8-2.2 3-6 2 .6-1.3 5M8-1.2l3 6 2-.6-1.3-5"
        fill="currentColor"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: "study",
    label: "Study",
    icon: (
      <g>
        <path d="M-9 -1.5 0 -6l9 4.5L0 3 -9 -1.5Z" />
        <path d="M-5.5 0.4v3.6c0 1.1 2.4 2.1 5.5 2.1s5.5-1 5.5-2.1V0.4" />
      </g>
    ),
  },
  {
    key: "work",
    label: "Work",
    icon: (
      <g>
        <rect x="-8" y="-4" width="16" height="11" rx="1.5" />
        <path d="M-4 -4v-2a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 4 -6v2" />
        <path d="M-8 1h16" />
      </g>
    ),
  },
  {
    key: "settle",
    label: "Settle",
    icon: (
      <g>
        <path d="M-8 -0.5 0 -7l8 6.5" />
        <path d="M-6 -2v7.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V-2" />
      </g>
    ),
  },
];

export default function JourneyRail() {
  const [active, setActive] = useState(-1);
  const fillRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const fractionsRef = useRef<number[]>([]);
  const activeRef = useRef(-1);

  useEffect(() => {
    const measure = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
      fractionsRef.current = els.map((el) => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        return Math.min(1, Math.max(0, (top - window.innerHeight * 0.45) / maxScroll));
      });
      fractionsRef.current.forEach((f, i) => {
        const btn = nodeRefs.current[i];
        if (btn) btn.style.top = `${f * 100}%`;
      });
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      if (fillRef.current) fillRef.current.style.height = `${progress * 100}%`;
      let act = -1;
      fractionsRef.current.forEach((f, i) => {
        if (progress >= f) act = i;
      });
      if (act !== activeRef.current) {
        activeRef.current = act;
        setActive(act);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    const settle = setTimeout(() => {
      measure();
      update();
    }, 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      clearTimeout(settle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i: number) => {
    const el = document.querySelectorAll<HTMLElement>("[data-chapter]")[i];
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <div className="fixed right-4 top-1/2 z-40 hidden h-[62vh] w-10 -translate-y-1/2 md:block">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rounded bg-slate-400/30" />
        <div
          ref={fillRef}
          className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 rounded bg-gradient-to-b from-brand-red via-gold to-brand-blue"
          style={{ height: "0%" }}
        />
        {CHAPTERS.map((ch, i) => (
          <button
            key={ch.key}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            onClick={() => goTo(i)}
            title={`Chapter ${i + 1} · ${ch.label}`}
            aria-label={`Go to chapter ${i + 1}: ${ch.label}`}
            className={`absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md ring-1 transition-all duration-300 ${
              i <= active
                ? "scale-100 text-brand-red ring-brand-red/40"
                : "scale-90 text-slate-300 ring-slate-200"
            }`}
            style={{ top: `${(i / (CHAPTERS.length - 1)) * 100}%` }}
          >
            <svg
              key={i === active ? `active-${i}` : `idle-${i}`}
              viewBox="-12 -12 24 24"
              className={`h-5 w-5 ${i === active ? "animate-pill-pop" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {ch.icon}
            </svg>
          </button>
        ))}
      </div>

      <div
        className={`fixed bottom-5 left-4 z-40 flex items-center gap-2 rounded-full bg-ink/90 px-3.5 py-2 text-xs font-semibold text-white shadow-lg ring-1 ring-white/15 backdrop-blur transition-all duration-300 md:hidden ${
          active >= 0 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {active >= 0 && (
          <span key={active} className="flex items-center gap-2 animate-pill-pop">
            <svg
              viewBox="-12 -12 24 24"
              className="h-4 w-4 text-gold-light"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {CHAPTERS[active].icon}
            </svg>
            <span>
              {active + 1}/{CHAPTERS.length} · {CHAPTERS[active].label}
            </span>
          </span>
        )}
      </div>
    </>
  );
}

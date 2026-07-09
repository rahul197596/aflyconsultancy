"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import Link from "next/link";

type Stage = {
  key: string;
  tag: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  icon: ReactNode;
};

const STAGES: Stage[] = [
  {
    key: "consult",
    tag: "Step 1 · Consult",
    title: "You Reach Out",
    description:
      "A free consultation to understand your goals, budget, and background — no pressure, no sales pitch.",
    href: "/contact",
    linkLabel: "Book a free consultation",
    icon: (
      <g>
        <circle r="9" />
        <path d="M3 -3 1 3 -3 1 -1 -3Z" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    key: "apply",
    tag: "Step 2 · Process",
    title: "We Shortlist & Apply",
    description:
      "We match you to universities that genuinely fit, then handle every application, SOP, and document end to end.",
    href: "/services/university-selection",
    linkLabel: "See University Selection & Application Support",
    icon: (
      <g>
        <rect x="-6" y="-8" width="12" height="16" rx="1.3" />
        <path d="M-3 1 -1 3 3 -2" />
      </g>
    ),
  },
  {
    key: "visa",
    tag: "Step 3 · Process",
    title: "Your Visa Gets Approved",
    description:
      "Structured document prep and mock interviews mean visa refusals — usually avoidable — stay avoided.",
    href: "/services/visa-guidance",
    linkLabel: "See Visa Guidance",
    icon: (
      <g>
        <rect x="-6" y="-8" width="12" height="16" rx="1.3" />
        <circle cy="-2" r="2.2" />
        <path d="M-2.4 4c0-1.3 1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4" />
      </g>
    ),
  },
  {
    key: "travel",
    tag: "Step 4 · Travel",
    title: "You Travel Abroad",
    description:
      "A full pre-departure briefing on accommodation, banking, and student life — so you land prepared, not overwhelmed.",
    href: "/services/pre-departure-briefing",
    linkLabel: "See Pre-Departure Briefing",
    icon: (
      <g>
        <path
          d="M-8 1l8-2.2 9 2.2-9 2.2L-8 1Zm8-2.2 3-6 2 .6-1.3 5M8-1.2l3 6 2-.6-1.3-5"
          fill="currentColor"
          strokeLinejoin="round"
        />
      </g>
    ),
  },
  {
    key: "study",
    tag: "Step 5 · Study",
    title: "You Study, We Stay With You",
    description:
      "Struggling with coursework once classes start? We connect you with tutor referrals and academic guidance so you stay on track to graduate.",
    href: "/services/post-visa-support",
    linkLabel: "See academic support",
    icon: (
      <g>
        <path d="M-10 -1.5 0 -6l10 4.5L0 3 -10 -1.5Z" />
        <path d="M-6 0.2v4c0 1.2 2.6 2.3 6 2.3s6-1.1 6-2.3v-4" />
      </g>
    ),
  },
  {
    key: "work",
    tag: "Step 6 · Work",
    title: "You Work — Then Build a Career",
    description:
      "CV building and job search support for part-time work during your studies, and full-time roles once you graduate.",
    href: "/services/post-visa-support",
    linkLabel: "See job search support",
    icon: (
      <g>
        <rect x="-9" y="-4.5" width="18" height="12" rx="1.5" />
        <path d="M-4.5 -4.5v-2.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v2.5" />
        <path d="M-9 1h18" />
      </g>
    ),
  },
  {
    key: "settle",
    tag: "Step 7 · Settle",
    title: "You Settle Abroad",
    description:
      "When you're ready to stay long-term, we guide you through settlement options and connect you with trusted immigration lawyers for PR and long-term visa pathways.",
    href: "/services/post-visa-support",
    linkLabel: "See settlement support",
    icon: (
      <g>
        <path d="M-9 -0.5 0 -8l9 7.5" />
        <path d="M-7 -2v8.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8.5" />
      </g>
    ),
  },
];

const NODE_COUNT = STAGES.length;
const VIEW_H = 800;
const PAD = 40;
const PATH_D = `M40 ${PAD} L40 ${VIEW_H - PAD}`;

export default function JourneyStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const travelerRef = useRef<SVGCircleElement>(null);
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);
  const mobileBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progressPath = progressRef.current;
    if (!section || !track || !progressPath) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const totalLength = track.getTotalLength();
    progressPath.style.strokeDasharray = `${totalLength}`;

    const setActive = (index: number) => {
      panelRefs.current.forEach((el, i) => {
        if (!el) return;
        if (i === index) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.pointerEvents = "auto";
        } else {
          el.style.opacity = "0";
          el.style.transform = i < index ? "translateY(-14px)" : "translateY(14px)";
          el.style.pointerEvents = "none";
        }
      });
      nodeRefs.current.forEach((el, i) => {
        el?.classList.toggle("path-node-active", i <= index);
      });
      if (counterRef.current) counterRef.current.textContent = `${index + 1} / ${NODE_COUNT}`;
    };

    if (reduced) {
      progressPath.style.strokeDashoffset = "0";
      setActive(NODE_COUNT - 1);
      if (mobileBarRef.current) mobileBarRef.current.style.transform = "scaleX(1)";
      return;
    }

    let raf = 0;
    let lastIndex = -1;

    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;

      progressPath.style.strokeDashoffset = `${totalLength * (1 - progress)}`;
      if (mobileBarRef.current) mobileBarRef.current.style.transform = `scaleX(${progress})`;

      if (travelerRef.current) {
        const point = track.getPointAtLength(totalLength * progress);
        travelerRef.current.setAttribute("cx", `${point.x}`);
        travelerRef.current.setAttribute("cy", `${point.y}`);
      }

      const index = Math.min(NODE_COUNT - 1, Math.round(progress * (NODE_COUNT - 1)));
      if (index !== lastIndex) {
        lastIndex = index;
        setActive(index);
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
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
    <section
      ref={sectionRef}
      style={{ height: `${NODE_COUNT * 85}vh` }}
      className="relative bg-ink text-white"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="mb-8 text-center md:mb-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light">
              Your Journey With Us
            </p>
            <h2 className="mt-4 text-2xl font-bold md:text-3xl">From First Call to Settled Abroad</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
            <div className="hidden md:block">
              <svg viewBox={`0 0 80 ${VIEW_H}`} className="h-[52vh] w-20 overflow-visible text-white/15">
                <path ref={trackRef} d={PATH_D} fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  ref={progressRef}
                  d={PATH_D}
                  fill="none"
                  stroke="currentColor"
                  className="text-gold"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {STAGES.map((stage, i) => {
                  const y = PAD + (i / (NODE_COUNT - 1)) * (VIEW_H - PAD * 2);
                  return (
                    <g
                      key={stage.key}
                      ref={(el) => {
                        nodeRefs.current[i] = el;
                      }}
                      transform={`translate(40 ${y})`}
                      className="path-node text-white/25 transition-colors duration-500 [&.path-node-active]:text-gold"
                    >
                      <circle r="15" fill="var(--ink)" stroke="currentColor" strokeWidth="1.5" />
                      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        {stage.icon}
                      </g>
                    </g>
                  );
                })}
                <circle ref={travelerRef} r="5" className="text-brand-red-light" fill="currentColor" cx="40" cy={PAD} />
              </svg>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <span ref={counterRef} className="flex-none text-sm font-semibold text-gold-light">
                1 / {NODE_COUNT}
              </span>
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                <div ref={mobileBarRef} className="h-full w-full origin-left bg-gold" style={{ transform: "scaleX(0)" }} />
              </div>
            </div>

            <div className="relative h-64 sm:h-56">
              {STAGES.map((stage, i) => (
                <div
                  key={stage.key}
                  ref={(el) => {
                    panelRefs.current[i] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-center transition-all duration-500"
                  style={{ opacity: i === 0 ? 1 : 0, pointerEvents: i === 0 ? "auto" : "none" }}
                >
                  <p className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-light">
                    {stage.tag}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold md:text-3xl">{stage.title}</h3>
                  <p className="mt-3 max-w-md text-slate-300">{stage.description}</p>
                  <Link
                    href={stage.href}
                    className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-gold-light transition-colors hover:text-gold"
                  >
                    {stage.linkLabel} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

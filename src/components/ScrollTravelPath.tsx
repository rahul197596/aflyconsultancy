"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

export type TravelNode = {
  key: string;
  fraction: number;
  x: number;
  y: number;
  icon: ReactNode;
  label?: string;
};

type ScrollTravelPathProps = {
  viewBox: string;
  pathD: string;
  nodes: TravelNode[];
  travelerIcon: ReactNode;
  className?: string;
};

export default function ScrollTravelPath({
  viewBox,
  pathD,
  nodes,
  travelerIcon,
  className,
}: ScrollTravelPathProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const travelerRef = useRef<SVGGElement>(null);
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const progressPath = progressRef.current;
    const traveler = travelerRef.current;
    if (!root || !track || !progressPath) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const totalLength = track.getTotalLength();
    progressPath.style.strokeDasharray = `${totalLength}`;

    if (reduced) {
      progressPath.style.strokeDashoffset = "0";
      nodeRefs.current.forEach((el) => el?.classList.add("path-node-active"));
      if (traveler) traveler.style.opacity = "0";
      return;
    }

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.92;
      const end = vh * 0.2;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

      progressPath.style.strokeDashoffset = `${totalLength * (1 - progress)}`;

      if (traveler) {
        const point = track.getPointAtLength(totalLength * progress);
        const ahead = track.getPointAtLength(Math.min(totalLength, totalLength * progress + 1));
        const angle = (Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180) / Math.PI;
        traveler.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle})`);
        traveler.style.opacity = progress > 0.01 && progress < 0.999 ? "1" : "0";
      }

      nodes.forEach((node, i) => {
        const el = nodeRefs.current[i];
        if (!el) return;
        el.classList.toggle("path-node-active", progress >= node.fraction - 0.02);
      });
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
  }, [nodes]);

  return (
    <div ref={rootRef} className={className}>
      <svg viewBox={viewBox} className="h-auto w-full overflow-visible">
        <path
          ref={trackRef}
          d={pathD}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="2"
        />
        <path
          ref={progressRef}
          d={pathD}
          fill="none"
          stroke="currentColor"
          className="text-brand-red"
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeDasharray="1 11"
          strokeLinecap="round"
        />

        {nodes.map((node, i) => (
          <g
            key={node.key}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            transform={`translate(${node.x} ${node.y})`}
            className="path-node text-slate-300 transition-colors duration-500 [&.path-node-active]:text-brand-red"
          >
            <circle r="18" fill="white" stroke="currentColor" strokeWidth="1.5" />
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500"
            >
              {node.icon}
            </g>
            {node.label && (
              <text
                y="34"
                textAnchor="middle"
                className="fill-current text-[13px] font-semibold"
              >
                {node.label}
              </text>
            )}
          </g>
        ))}

        <g ref={travelerRef} className="text-gold transition-opacity duration-300" style={{ opacity: 0 }} fill="currentColor">
          {travelerIcon}
        </g>
      </svg>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

const NODES = [
  { x: 80, label: "Consult" },
  { x: 360, label: "Apply" },
  { x: 640, label: "Visa" },
  { x: 920, label: "Fly" },
] as const;

const PATH = `M${NODES[0].x} 60 L${NODES[3].x} 60`;

const nodeIcons = [
  // compass (consultation)
  <g key="compass">
    <circle cx="0" cy="0" r="11" />
    <path d="M3.5 -3.5 1 3.5 -3.5 1 -1 -3.5Z" fill="currentColor" stroke="none" />
  </g>,
  // document check (apply)
  <g key="doc">
    <rect x="-7" y="-9" width="14" height="18" rx="1.5" />
    <path d="M-3.5 1 -1 3.5 4 -2.5" />
  </g>,
  // passport (visa)
  <g key="passport">
    <rect x="-7" y="-9" width="14" height="18" rx="1.5" />
    <circle cx="0" cy="-2" r="2.6" />
    <path d="M-2.8 5c0-1.6 1.3-2.8 2.8-2.8s2.8 1.2 2.8 2.8" />
  </g>,
  // plane (fly)
  <g key="plane">
    <path
      d="M-9 1l9-2.5 11 2.5-11 2.5L-9 1Zm9-2.5 3.5-7 2.5.8-1.5 6M9-1.5l3.5 7 2.5-.8-1.5-6"
      fill="currentColor"
      strokeLinejoin="round"
    />
  </g>,
];

export default function StudyJourney() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAnimate(!reduced);
  }, []);

  return (
    <svg
      viewBox="0 0 1000 120"
      className="mx-auto mt-4 h-auto w-full max-w-4xl text-brand-blue"
      aria-hidden="true"
    >
      <path
        d={PATH}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="2"
      />
      <path
        d={PATH}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeDasharray="1 11"
        strokeLinecap="round"
        className={animate ? "animate-dash-flow" : undefined}
      />

      {NODES.map((node, i) => (
        <g key={node.label} transform={`translate(${node.x} 60)`}>
          <circle r="18" fill="white" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
          <g
            className="text-brand-red"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {nodeIcons[i]}
          </g>
        </g>
      ))}

      {animate && (
        <g fill="currentColor" className="text-gold">
          <g>
            <path
              d="M-8 2.5l16-4.5 8 2-16 4.5L-8 2.5Zm16-4.5 3-6 2 .6-1.5 5M8-2l3 6 2-.6-1.5-5"
              strokeLinejoin="round"
            />
            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" path={PATH} />
          </g>
        </g>
      )}
    </svg>
  );
}

import ScrollTravelPath, { type TravelNode } from "@/components/ScrollTravelPath";

const START_X = 80;
const END_X = 920;

const NODE_ICONS = [
  <g key="compass">
    <circle cx="0" cy="0" r="11" />
    <path d="M3.5 -3.5 1 3.5 -3.5 1 -1 -3.5Z" fill="currentColor" stroke="none" />
  </g>,
  <g key="doc">
    <rect x="-7" y="-9" width="14" height="18" rx="1.5" />
    <path d="M-3.5 1 -1 3.5 4 -2.5" />
  </g>,
  <g key="passport">
    <rect x="-7" y="-9" width="14" height="18" rx="1.5" />
    <circle cx="0" cy="-2" r="2.6" />
    <path d="M-2.8 5c0-1.6 1.3-2.8 2.8-2.8s2.8 1.2 2.8 2.8" />
  </g>,
  <g key="plane">
    <path
      d="M-9 1l9-2.5 11 2.5-11 2.5L-9 1Zm9-2.5 3.5-7 2.5.8-1.5 6M9-1.5l3.5 7 2.5-.8-1.5-6"
      fill="currentColor"
      strokeLinejoin="round"
    />
  </g>,
];

const NODE_FRACTIONS = [0, 1 / 3, 2 / 3, 1];

const nodes: TravelNode[] = NODE_FRACTIONS.map((fraction, i) => ({
  key: `node-${i}`,
  fraction,
  x: START_X + fraction * (END_X - START_X),
  y: 60,
  icon: NODE_ICONS[i],
}));

const travelerIcon = (
  <path
    d="M-8 2.5l16-4.5 8 2-16 4.5L-8 2.5Zm16-4.5 3-6 2 .6-1.5 5M8-2l3 6 2-.6-1.5-5"
    strokeLinejoin="round"
  />
);

export default function StudyJourney() {
  return (
    <ScrollTravelPath
      viewBox="0 0 1000 120"
      pathD={`M${START_X} 60 L${END_X} 60`}
      nodes={nodes}
      travelerIcon={travelerIcon}
      className="mx-auto mt-4 max-w-4xl text-brand-blue"
    />
  );
}

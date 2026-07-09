import ScrollTravelPath, { type TravelNode } from "@/components/ScrollTravelPath";

const START_X = 90;
const END_X = 910;

const milestones = [
  {
    label: "Founded",
    icon: (
      <g>
        <circle cx="0" cy="0" r="11" />
        <path d="M0 -5v5l4 2.5" />
      </g>
    ),
  },
  {
    label: "500+ Placed",
    icon: (
      <g>
        <path d="M-6 6c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <circle cx="0" cy="-6" r="3.2" />
      </g>
    ),
  },
  {
    label: "British Council Certified",
    icon: (
      <g>
        <path d="M0 -9 8 -5v6c0 5-3.5 7.7-8 9-4.5-1.3-8-4-8-9v-6Z" />
        <path d="M-3.5 0 -1 2.5 3.5 -2.5" />
      </g>
    ),
  },
  {
    label: "98% Visa Success",
    icon: (
      <g>
        <rect x="-7" y="-9" width="14" height="18" rx="1.5" />
        <circle cx="0" cy="-2" r="2.6" />
        <path d="M-2.8 5c0-1.6 1.3-2.8 2.8-2.8s2.8 1.2 2.8 2.8" />
      </g>
    ),
  },
];

const FRACTIONS = [0, 1 / 3, 2 / 3, 1];

const nodes: TravelNode[] = FRACTIONS.map((fraction, i) => ({
  key: `milestone-${i}`,
  fraction,
  x: START_X + fraction * (END_X - START_X),
  y: 60,
  icon: milestones[i].icon,
  label: milestones[i].label,
}));

const travelerIcon = (
  <path
    d="M-8 2.5l16-4.5 8 2-16 4.5L-8 2.5Zm16-4.5 3-6 2 .6-1.5 5M8-2l3 6 2-.6-1.5-5"
    strokeLinejoin="round"
  />
);

export default function AboutTimeline() {
  return (
    <ScrollTravelPath
      viewBox="0 0 1000 140"
      pathD={`M${START_X} 60 L${END_X} 60`}
      nodes={nodes}
      travelerIcon={travelerIcon}
      className="mx-auto mt-6 max-w-4xl text-brand-blue"
    />
  );
}

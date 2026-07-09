import ScrollTravelPath from "@/components/ScrollTravelPath";

const planeIcon = (
  <path
    d="M-8 2.5l16-4.5 8 2-16 4.5L-8 2.5Zm16-4.5 3-6 2 .6-1.5 5M8-2l3 6 2-.6-1.5-5"
    strokeLinejoin="round"
  />
);

export default function JourneyConnector({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none mx-auto max-w-5xl px-6">
      <ScrollTravelPath
        viewBox="0 0 1000 170"
        pathD={flip ? "M940 15 C 580 15, 420 155, 60 155" : "M60 15 C 420 15, 580 155, 940 155"}
        nodes={[]}
        travelerIcon={planeIcon}
        className="text-brand-blue"
      />
    </div>
  );
}

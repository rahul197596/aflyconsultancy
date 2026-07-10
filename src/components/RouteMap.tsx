import { countries } from "@/data/countries";
import { countryFlags } from "@/components/icons/Flags";
import Reveal from "@/components/Reveal";

const SIZE = 700;
const CENTER = SIZE / 2;
const RADIUS = 260;

const points = countries.map((country, i) => {
  const angle = (i * (360 / countries.length) - 90) * (Math.PI / 180);
  const x = CENTER + RADIUS * Math.cos(angle);
  const y = CENTER + RADIUS * Math.sin(angle);
  return { country, x, y };
});

export default function RouteMap() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 h-full w-full text-gold">
        {points.map(({ country, x, y }) => (
          <path
            key={country.slug}
            d={`M${CENTER} ${CENTER} L${x} ${y}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeDasharray="1 9"
            strokeLinecap="round"
            className="animate-dash-flow"
          />
        ))}
        <circle cx={CENTER} cy={CENTER} r="34" fill="white" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
        <path
          d="M-9 1l9-2.5 11 2.5-11 2.5L-9 1Zm9-2.5 3.5-7 2.5.8-1.5 6M9-1.5l3.5 7 2.5-.8-1.5-6"
          fill="currentColor"
          transform={`translate(${CENTER} ${CENTER}) rotate(-45)`}
        />
      </svg>

      {points.map(({ country, x, y }, i) => {
        const Flag = countryFlags[country.slug as keyof typeof countryFlags];
        return (
          <div
            key={country.slug}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(x / SIZE) * 100}%`, top: `${(y / SIZE) * 100}%` }}
          >
            <Reveal delay={i * 80}>
              <div className="flex flex-col items-center gap-1.5">
                <div className="h-8 w-11 overflow-hidden rounded-md shadow-lg ring-1 ring-white/20">
                  <Flag className="h-full w-full" />
                </div>
                <span className="whitespace-nowrap text-[11px] font-semibold text-white/80">
                  {country.name}
                </span>
              </div>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}

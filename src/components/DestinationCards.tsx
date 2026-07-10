import Link from "next/link";
import { countries } from "@/data/countries";
import { countryFlags } from "@/components/icons/Flags";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

const plateGradients: Record<string, string> = {
  "united-kingdom": "from-brand-blue/15 via-brand-blue/5 to-brand-red/10",
  "united-states": "from-brand-blue/10 via-white to-brand-red/15",
  canada: "from-brand-red/15 via-white to-brand-red/5",
  australia: "from-brand-blue/15 via-sky-100 to-brand-blue/5",
  ireland: "from-emerald-100 via-white to-gold/15",
  germany: "from-gold/20 via-white to-brand-red/10",
  "new-zealand": "from-brand-blue/15 via-sky-50 to-brand-red/10",
  europe: "from-[#003399]/15 via-white to-gold/20",
};

export default function DestinationCards() {
  return (
    <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
      {countries.map((country, i) => {
        const Flag = countryFlags[country.slug as keyof typeof countryFlags];
        return (
          <Reveal
            key={country.slug}
            delay={(i % 3) * 90}
            className="w-[76%] flex-none snap-start sm:w-auto sm:flex-auto"
          >
            <TiltCard className="h-full">
            <Link
              href={`/countries/${country.slug}`}
              className="group block h-full overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_2px_6px_rgba(0,0,0,0.04),0_8px_20px_rgba(0,0,0,0.1)]"
            >
              <div
                className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${plateGradients[country.slug] ?? "from-slate-100 to-slate-200"}`}
              >
                <svg
                  viewBox="0 0 400 300"
                  className="pointer-events-none absolute inset-0 h-full w-full text-brand-blue/20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M-20 240 C 110 140, 290 130, 420 60"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="1 9"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="block h-16 w-24 overflow-hidden rounded-lg shadow-md ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
                  <Flag className="h-full w-full" />
                </span>
                <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm">
                  {country.highlights[0]}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-foreground">{country.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500 line-clamp-2">
                  {country.blurb}
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-foreground">{country.costShort}</span>
                  <span className="flex-none text-sm font-semibold text-brand-red transition-transform duration-200 group-hover:translate-x-0.5">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
            </TiltCard>
          </Reveal>
        );
      })}
    </div>
  );
}

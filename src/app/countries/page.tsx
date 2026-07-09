import Link from "next/link";
import type { Metadata } from "next";
import { countries } from "@/data/countries";
import Reveal from "@/components/Reveal";
import { countryFlags } from "@/components/icons/Flags";

const description =
  "Explore popular study-abroad destinations — the UK, USA, Canada, Australia, Ireland, and Germany — with Afly Consultancy Services.";

export const metadata: Metadata = {
  title: "Study Destinations",
  description,
  openGraph: { title: "Study Destinations", description },
  twitter: { title: "Study Destinations", description },
};

export default function CountriesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-aurora-1" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl animate-aurora-2" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light">
            Where You Could Study
          </p>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Popular Study Destinations</h1>
          <p className="mt-4 text-slate-300">
            Every country offers a different mix of cost, career outcomes,
            and lifestyle. Here's a quick look at where our students go —
            and we'll help you figure out which fits you best.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {countries.map((country, i) => {
            const Flag = countryFlags[country.slug as keyof typeof countryFlags];
            return (
            <Reveal
              key={country.slug}
              delay={(i % 3) * 100}
              className="w-[82%] flex-none snap-start sm:w-[60%] md:w-auto md:flex-auto"
            >
              <Link
                href={`/countries/${country.slug}`}
                className="block h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-10 w-14 overflow-hidden rounded-lg shadow-sm ring-1 ring-slate-200">
                  {Flag ? <Flag className="h-full w-full" /> : null}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-brand-blue">
                  {country.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {country.blurb}
                </p>
                <ul className="mt-4 space-y-2">
                  {country.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-red">
                  Learn more →
                </span>
              </Link>
            </Reveal>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-50 p-10 text-center">
          <h2 className="text-2xl font-bold text-brand-blue">
            Not sure which country is right for you?
          </h2>
          <p className="mt-2 text-slate-600">
            Book a free consultation and we'll help you compare options
            based on your budget, course, and career goals.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-md shadow-brand-red/25 active:scale-[0.98] transition-all hover:bg-brand-red-light hover:shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

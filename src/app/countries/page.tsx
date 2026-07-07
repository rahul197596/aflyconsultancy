import Link from "next/link";
import type { Metadata } from "next";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Study Destinations | Afly Consultancy Services",
  description:
    "Explore popular study-abroad destinations — the UK, USA, Canada, Australia, Ireland, and Germany — with Afly Consultancy Services.",
};

export default function CountriesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-blue py-20 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red-light">
            Where You Could Study
          </p>
          <h1 className="mt-4 text-4xl font-bold">Popular Study Destinations</h1>
          <p className="mt-4 text-slate-300">
            Every country offers a different mix of cost, career outcomes,
            and lifestyle. Here's a quick look at where our students go —
            and we'll help you figure out which fits you best.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10 text-3xl">
                {country.flag}
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
          ))}
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
            className="mt-6 inline-block rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-light"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

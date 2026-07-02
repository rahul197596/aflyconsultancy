import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Destinations | Afly Consultancy Services",
  description:
    "Explore popular study-abroad destinations — the UK, USA, Canada, Australia, Ireland, and Germany — with Afly Consultancy Services.",
};

const countries = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    blurb:
      "World-renowned universities, shorter degree durations, and strong post-study work options via the Graduate Route.",
    highlights: [
      "1-year Master's programs",
      "2-year post-study work visa",
      "Globally recognized degrees",
    ],
  },
  {
    flag: "🇺🇸",
    name: "United States",
    blurb:
      "The widest range of courses and research opportunities, with flexible curriculums and strong industry links.",
    highlights: [
      "STEM OPT extension up to 3 years",
      "Extensive scholarship opportunities",
      "Top-ranked research universities",
    ],
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    blurb:
      "Affordable, high-quality education with clear pathways to permanent residency for international graduates.",
    highlights: [
      "Post-Graduation Work Permit up to 3 years",
      "Strong PR pathways",
      "Welcoming to international students",
    ],
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    blurb:
      "High living standards, part-time work rights while studying, and a growing list of in-demand skilled courses.",
    highlights: [
      "Post-study work visa up to 4 years",
      "Part-time work rights during study",
      "Strong vocational & university pathways",
    ],
  },
  {
    flag: "🇮🇪",
    name: "Ireland",
    blurb:
      "An English-speaking gateway to Europe with a booming tech and pharma sector and generous stay-back options.",
    highlights: [
      "2-year stay-back for Master's graduates",
      "Home to major EU tech hubs",
      "Compact, student-friendly cities",
    ],
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    blurb:
      "Low or no tuition fees at public universities, with a strong focus on engineering, and technology programs.",
    highlights: [
      "Little to no tuition at public universities",
      "18-month post-study job search visa",
      "Strong engineering & tech industry",
    ],
  },
];

export default function CountriesPage() {
  return (
    <div>
      <section className="bg-brand-blue py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
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
            <div
              key={country.name}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <div className="text-4xl">{country.flag}</div>
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
            </div>
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

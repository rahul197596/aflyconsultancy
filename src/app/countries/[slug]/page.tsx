import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries } from "@/data/countries";

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return {};
  return {
    title: `Study in ${country.name} | Afly Consultancy Services`,
    description: country.blurb,
  };
}

export default async function CountryDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  return (
    <div>
      <section className="bg-brand-blue py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-5xl">{country.flag}</div>
          <h1 className="mt-4 text-4xl font-bold">Study in {country.name}</h1>
          <p className="mt-4 text-slate-300">{country.blurb}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-brand-blue">Why {country.name}?</h2>
            <ul className="mt-4 space-y-2">
              {country.highlights.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-brand-blue">Popular Courses</h2>
            <ul className="mt-4 space-y-2">
              {country.popularCourses.map((course) => (
                <li key={course} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-brand-blue">Intakes</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{country.intakes}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-brand-blue">Work Rights</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{country.workRights}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 md:col-span-2">
            <h2 className="text-lg font-semibold text-brand-blue">Estimated Costs</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{country.costEstimate}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-slate-50 p-10 text-center">
          <h2 className="text-2xl font-bold text-brand-blue">
            Ready to explore {country.name}?
          </h2>
          <p className="text-slate-600">
            Talk to a counsellor about your options for studying in {country.name}.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-light"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/countries"
            className="text-sm font-semibold text-brand-red hover:text-brand-red-light"
          >
            ← Back to all destinations
          </Link>
        </div>
      </section>
    </div>
  );
}

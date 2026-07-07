import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { serviceIcons } from "@/components/icons/ServiceIcons";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    openGraph: { title: service.title, description: service.description },
    twitter: { title: service.title, description: service.description },
  };
}

export default async function ServiceDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];

  return (
    <div>
      <section className="relative overflow-hidden bg-brand-blue py-20 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-brand-red-light">
            <Icon className="h-9 w-9" />
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-brand-red-light">
            Our Services
          </p>
          <h1 className="mt-2 text-4xl font-bold">{service.title}</h1>
          <p className="mt-4 text-slate-300">{service.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-brand-blue">What's Included</h2>
            <ul className="mt-4 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-brand-blue">How It Works</h2>
            <ol className="mt-4 space-y-3">
              {service.process.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-slate-50 p-10 text-center">
          <h2 className="text-2xl font-bold text-brand-blue">
            Ready to get started with {service.title.toLowerCase()}?
          </h2>
          <p className="text-slate-600">
            Talk to a counsellor and we'll walk you through the next steps.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-light"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/services"
            className="text-sm font-semibold text-brand-red hover:text-brand-red-light"
          >
            ← Back to all services
          </Link>
        </div>
      </section>
    </div>
  );
}

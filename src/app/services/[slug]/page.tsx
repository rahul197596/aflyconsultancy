import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { serviceIcons } from "@/components/icons/ServiceIcons";
import Reveal from "@/components/Reveal";
import ParallaxLayer from "@/components/ParallaxLayer";

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
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <ParallaxLayer speed={0.1} className="pointer-events-none absolute -left-24 -top-24 h-72 w-72">
          <div className="h-full w-full rounded-full bg-brand-red/25 blur-3xl animate-aurora-1" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.06} className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64">
          <div className="h-full w-full rounded-full bg-brand-blue/30 blur-3xl animate-aurora-2" />
        </ParallaxLayer>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold-light ring-1 ring-gold/30">
            <Icon className="h-9 w-9" />
          </div>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light">
            Our Services
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{service.title}</h1>
          <p className="mt-4 text-slate-300">{service.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
          <div className="h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition-shadow hover:shadow-md">
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
          </Reveal>

          <Reveal delay={120}>
          <div className="h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition-shadow hover:shadow-md">
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
          </Reveal>
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
            className="inline-block rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-md shadow-brand-red/25 active:scale-[0.98] transition-all hover:bg-brand-red-light hover:shadow-lg"
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

import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data/services";
import { serviceIcons } from "@/components/icons/ServiceIcons";

const description =
  "Explore Afly Consultancy Services' overseas education services: university selection, visa guidance, test preparation, scholarships, and more.";

export const metadata: Metadata = {
  title: "Services",
  description,
  openGraph: { title: "Services", description },
  twitter: { title: "Services", description },
};

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-blue py-20 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red-light">
            What We Offer
          </p>
          <h1 className="mt-4 text-4xl font-bold">Services Built Around You</h1>
          <p className="mt-4 text-slate-300">
            Every student's path abroad is different. Here's how we support
            yours, end to end.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
            return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-2xl border border-slate-200 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-1 ring-brand-red/10">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-brand-blue">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-block text-sm font-semibold text-brand-red">
                Learn more →
              </span>
            </Link>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-50 p-10 text-center">
          <h2 className="text-2xl font-bold text-brand-blue">
            Not sure where to start?
          </h2>
          <p className="mt-2 text-slate-600">
            Book a free consultation and we'll help you map out the right path.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-md shadow-brand-red/25 transition-all hover:bg-brand-red-light hover:shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

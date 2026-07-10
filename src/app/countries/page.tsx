import Link from "next/link";
import type { Metadata } from "next";
import RouteMap from "@/components/RouteMap";
import DestinationCards from "@/components/DestinationCards";

const description =
  "Explore popular study-abroad destinations — the UK, USA, Canada, Australia, New Zealand, Ireland, Germany, and Europe — with Afly Consultancy Services.";

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
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="text-center lg:text-left">
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
          <RouteMap />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <DestinationCards />

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

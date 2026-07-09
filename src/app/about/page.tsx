import type { Metadata } from "next";
import { EyeIcon, HeartIcon, ShieldCheckIcon } from "@/components/icons/InfoIcons";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import AboutTimeline from "@/components/AboutTimeline";

const description =
  "Learn about Afly Consultancy Services' mission, values, and 15+ years of experience helping students study abroad.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  openGraph: { title: "About Us", description },
  twitter: { title: "About Us", description },
};

const values = [
  {
    title: "Transparency",
    description:
      "We give honest recommendations, including when studying abroad isn't the right fit yet.",
    icon: EyeIcon,
  },
  {
    title: "Student-first",
    description:
      "Every decision we make is judged by one question: is this good for the student?",
    icon: HeartIcon,
  },
  {
    title: "Accountability",
    description:
      "We stay involved from the first consultation through to your arrival on campus.",
    icon: ShieldCheckIcon,
  },
];

const milestones = [
  { value: "500+", label: "Students Placed" },
  { value: "50+", label: "Partner Universities" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Visa Success Rate" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/25 blur-3xl animate-aurora-1" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-brand-blue/30 blur-3xl animate-aurora-2" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light">
            About Afly Consultancy Services
          </p>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
            Helping Students Study Abroad Since Day One
          </h1>
          <p className="mt-4 text-slate-300">
            For over 15 years, we've guided students through every stage of
            their overseas education journey — with honesty, expertise, and
            genuine care.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {milestones.map((m) => (
            <div key={m.label}>
              <CountUp value={m.value} className="text-3xl font-bold text-brand-red" />
              <p className="mt-1 text-sm text-slate-600">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl font-bold text-brand-blue">Our Story</h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Afly Consultancy Services was founded to solve a simple problem: too many
          students were making life-changing decisions about their education
          based on incomplete or biased advice. We set out to build a
          consultancy that puts the student's goals first — pairing deep
          knowledge of international admissions and visa processes with
          honest, personalized guidance.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Today, we've helped over 500 students get placed at more than 50
          partner universities across the UK and Europe, with a visa success
          rate of 98%. But the number we care about most is simpler: how many
          students land, settle in, and thrive.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-center text-2xl font-bold text-brand-blue">Our Journey So Far</h2>
        <AboutTimeline />
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-bold text-brand-blue">
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-1 ring-brand-red/10">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-blue">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-brand-blue">Certified & Recognized</h2>
        <p className="mt-4 text-slate-600">
          Afly Consultancy Services is a{" "}
          <strong className="text-brand-blue">British Council Certified UK Agent & Counsellor</strong>,
          working with accredited partner institutions and following
          recognized standards for education counselling, so you get advice
          you can trust.
        </p>
        <img
          src="/british-council-cert.png"
          alt="British Council Certified UK Agent & Counsellor"
          className="mx-auto mt-8 h-32 w-auto object-contain"
        />
      </section>
    </div>
  );
}

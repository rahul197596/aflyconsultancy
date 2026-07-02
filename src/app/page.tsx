import Link from "next/link";

const stats = [
  { value: "500+", label: "Students Placed" },
  { value: "50+", label: "Partner Universities" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Visa Success Rate" },
];

const services = [
  {
    title: "University Selection",
    description:
      "Personalized shortlists based on your profile, budget, and career goals across top destinations.",
  },
  {
    title: "Visa Guidance",
    description:
      "End-to-end visa documentation and interview preparation for higher approval rates.",
  },
  {
    title: "Test Preparation",
    description:
      "Structured coaching for IELTS, PTE, TOEFL, and other admission requirements.",
  },
  {
    title: "Scholarship Assistance",
    description:
      "Identify and apply for scholarships and financial aid you actually qualify for.",
  },
];

const testimonials = [
  {
    quote:
      "Afly Consultancy made my application to a UK university effortless. Every step, from shortlisting to visa filing, was handled with care.",
    name: "Priya S.",
    detail: "MSc Data Science, University of Leicester",
  },
  {
    quote:
      "I couldn't have prepared for IELTS or the visa interview without their support. Highly recommend to anyone planning to study abroad.",
    name: "Arjun M.",
    detail: "BA Business, University of East London",
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-blue to-brand-blue-light text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red-light">
              Overseas Education Consultants
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Your Journey to Study Abroad Starts Here
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              From choosing the right university to landing your visa, Afly
              Consultancy guides you through every step of studying abroad —
              with honest advice and a proven track record.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-light"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-brand-red-light">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-blue">How We Help You</h2>
          <p className="mt-4 text-slate-600">
            A complete support system so you can focus on preparing for your
            new life abroad — not paperwork.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 font-bold text-brand-red">
                {service.title.charAt(0)}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-blue">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-brand-red hover:text-brand-red-light"
          >
            View all services →
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue">
                Why Students Choose Afly
              </h2>
              <ul className="mt-8 space-y-6">
                {[
                  {
                    title: "Honest, student-first advice",
                    body: "We recommend what fits your goals and budget — not what pays us the highest commission.",
                  },
                  {
                    title: "End-to-end support",
                    body: "One team for shortlisting, applications, tests, visas, and pre-departure prep.",
                  },
                  {
                    title: "15+ years of track record",
                    body: "Hundreds of successful placements across the UK, Europe, and beyond.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold text-brand-blue">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
                >
                  <p className="text-sm italic leading-relaxed text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-brand-blue">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold">Ready to start your application?</h2>
            <p className="mt-2 text-slate-300">
              Talk to a counsellor and get a personalized study-abroad plan — free.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-light"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

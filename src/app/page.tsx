import Link from "next/link";
import { services } from "@/data/services";
import { serviceIcons } from "@/components/icons/ServiceIcons";
import FaqAccordion from "@/components/FaqAccordion";

const stats = [
  { value: "500+", label: "Students Placed" },
  { value: "50+", label: "Partner Universities" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Visa Success Rate" },
];

const featuredServices = services.slice(0, 4);

const partnerUniversities = [
  { name: "King's College London", logo: "/universities/Kings_college_london.png" },
  { name: "University of Leicester", logo: "/universities/University_of_Leicester.png" },
  { name: "University of East London", logo: "/universities/University_of_east_london.png" },
  { name: "Istituto Marangoni", logo: "/universities/istituto_marangoni.png" },
];

const processSteps = [
  {
    title: "Free Consultation",
    description: "Tell us your goals, budget, and background. We map out your realistic options.",
  },
  {
    title: "Shortlist & Apply",
    description: "We shortlist universities and courses, then handle applications end to end.",
  },
  {
    title: "Test Prep & Visa",
    description: "Structured test coaching and visa documentation, with mock interviews included.",
  },
  {
    title: "Fly & Settle In",
    description: "Pre-departure briefing on accommodation, travel, and student life abroad.",
  },
];

const faqs = [
  {
    question: "How much does it cost to work with Afly Consultancy Services?",
    answer:
      "Your first consultation is completely free. We'll walk you through our service fees for application, visa, and test-prep support based on your specific destination and course before you commit to anything.",
  },
  {
    question: "Which countries do you help students apply to?",
    answer:
      "We specialize in the UK, USA, Canada, Australia, Ireland, and Germany. See our Countries page for course options, intakes, and work rights for each destination.",
  },
  {
    question: "Do you help with scholarships and financial aid?",
    answer:
      "Yes. We screen you against university and external scholarships you're eligible for and support you through the application and essay process.",
  },
  {
    question: "What if my visa application is refused?",
    answer:
      "We prepare documentation and mock interviews specifically to minimize refusal risk. If a refusal does happen, we review the reasons with you and help you reapply or explore alternative options.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "It varies by destination and intake, but most students start the process 8-12 months before their intended intake to leave time for tests, applications, and visa processing.",
  },
];

const testimonials = [
  {
    quote:
      "Afly Consultancy Services made my application to a UK university effortless. Every step, from shortlisting to visa filing, was handled with care.",
    name: "Priya S.",
    detail: "MSc Data Science, University of Leicester · UK",
  },
  {
    quote:
      "I couldn't have prepared for IELTS or the visa interview without their support. Highly recommend to anyone planning to study abroad.",
    name: "Arjun M.",
    detail: "BA Business, University of East London · UK",
  },
  {
    quote:
      "They helped me compare Canada and Australia side by side and were upfront about costs and PR pathways. I felt like I was getting real advice, not a sales pitch.",
    name: "Sneha R.",
    detail: "MBA, University of Toronto · Canada",
  },
  {
    quote:
      "From shortlisting to my pre-departure briefing, the team was with me at every step. Landed in Melbourne knowing exactly what to expect.",
    name: "Karthik V.",
    detail: "MEng Software Engineering, Monash University · Australia",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue to-brand-blue-light text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red-light">
              Overseas Education Consultants · Aim High Fly High
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Your Journey to Study Abroad Starts Here
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              From choosing the right university to landing your visa, Afly
              Consultancy Services guides you through every step of studying
              abroad — with honest advice and a proven track record.
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

      <section className="border-b border-slate-100 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-6 text-center sm:flex-row sm:text-left">
          <img
            src="/british-council-cert.png"
            alt="British Council Certified UK Agent & Counsellor"
            className="h-14 w-auto object-contain"
          />
          <p className="text-sm font-medium text-slate-600">
            Afly Consultancy Services is a{" "}
            <span className="font-semibold text-brand-blue">
              British Council Certified UK Agent & Counsellor
            </span>
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
            Some of Our Partner Institutions
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-4">
            {partnerUniversities.map((uni) => (
              <img
                key={uni.name}
                src={uni.logo}
                alt={uni.name}
                className="mx-auto h-14 w-auto object-contain grayscale transition-all hover:grayscale-0"
              />
            ))}
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
          {featuredServices.map((service) => {
            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-blue">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </Link>
            );
          })}
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-blue">How It Works</h2>
            <p className="mt-4 text-slate-600">
              Four steps from your first conversation with us to landing
              abroad.
            </p>
          </div>

          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block" />
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-base font-semibold text-brand-blue">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-blue">
            Why Students Choose Afly Consultancy Services
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
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
                body: "Hundreds of successful placements across the UK, USA, Canada, Australia, and beyond.",
              },
            ].map((item) => (
              <div key={item.title} className="text-left">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                  ✓
                </span>
                <p className="mt-3 font-semibold text-brand-blue">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-blue">What Our Students Say</h2>
            <p className="mt-4 text-slate-600">
              Real students, placed across four different countries.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
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
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-blue">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-600">
              Answers to what most students ask before they get started.
            </p>
          </div>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-blue py-16 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
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

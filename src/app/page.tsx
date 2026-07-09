import Link from "next/link";
import { services } from "@/data/services";
import { serviceIcons } from "@/components/icons/ServiceIcons";
import { BookOpenIcon, BriefcaseIcon, HomeIcon } from "@/components/icons/InfoIcons";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { FlightPathIllustration, CompassBadgeIllustration } from "@/components/icons/Illustrations";
import StudyJourney from "@/components/StudyJourney";
import ParallaxLayer from "@/components/ParallaxLayer";

const stats = [
  { value: "500+", label: "Students Placed" },
  { value: "50+", label: "Partner Universities" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Visa Success Rate" },
];

const featuredServices = services.slice(0, 4);
const [heroService, ...restServices] = featuredServices;

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

const postVisaHighlights = [
  {
    icon: BookOpenIcon,
    title: "Academic Support",
    description:
      "Struggling with coursework once classes start? We connect you with tutor referrals and academic guidance so you stay on track.",
  },
  {
    icon: HomeIcon,
    title: "Accommodation Help",
    description:
      "From shortlisting to signing the lease, we help you find safe, affordable housing near your campus before and after you land.",
  },
  {
    icon: BriefcaseIcon,
    title: "Job Search Support",
    description:
      "CV building, interview prep, and job search help for both part-time work during your studies and full-time roles after graduation.",
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

function StarRow() {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 2 2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7-5.4-4.7 7.1-.7L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <ParallaxLayer speed={0.08} className="pointer-events-none absolute -left-24 -top-32 h-[28rem] w-[28rem]">
          <div className="h-full w-full rounded-full bg-brand-blue/40 blur-3xl animate-aurora-1" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.14} className="pointer-events-none absolute right-[-8rem] top-0 h-[26rem] w-[26rem]">
          <div className="h-full w-full rounded-full bg-brand-red/30 blur-3xl animate-aurora-2" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} className="pointer-events-none absolute bottom-[-10rem] left-1/2 -ml-[12rem] h-[24rem] w-[24rem]">
          <div className="h-full w-full rounded-full bg-gold/20 blur-3xl animate-aurora-3" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.04} className="pointer-events-none absolute inset-0 hidden md:block">
          <FlightPathIllustration className="h-full w-full text-gold-light" />
        </ParallaxLayer>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light">
              Aim High · Fly High
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Study Abroad,
              <span className="block bg-gradient-to-r from-brand-red-light via-gold to-brand-red-light bg-clip-text text-transparent">
                Done Right.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-slate-300">
              From choosing the right university to landing your visa — and
              everything after — Afly Consultancy Services guides your entire
              journey abroad.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-red/25 active:scale-[0.98] transition-all hover:bg-brand-red-light hover:shadow-lg"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <CompassBadgeIllustration className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 text-gold-light" />
            <div className="relative grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <CountUp
                    value={stat.value}
                    className={`text-4xl font-black ${i % 2 === 0 ? "text-gold-light" : "text-brand-red-light"}`}
                  />
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-6 text-center sm:flex-row sm:text-left">
          <img
            src="/british-council-cert.png"
            alt="British Council Certified UK Agent & Counsellor"
            className="h-12 w-auto object-contain"
          />
          <p className="text-sm font-medium text-slate-600">
            Afly Consultancy Services is a{" "}
            <span className="font-semibold text-brand-blue">
              British Council Certified UK Agent & Counsellor
            </span>
          </p>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-50 py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
          Some of Our Partner Institutions
        </p>
        <div
          className="pause-on-hover relative mt-8 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="animate-marquee flex w-max items-center gap-16">
            {[...partnerUniversities, ...partnerUniversities].map((uni, i) => (
              <img
                key={`${uni.name}-${i}`}
                src={uni.logo}
                alt={uni.name}
                className="h-12 w-auto flex-none object-contain grayscale transition-all hover:grayscale-0"
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

        <div className="mt-14">
          {heroService && (() => {
            const Icon = serviceIcons[heroService.slug as keyof typeof serviceIcons];
            return (
              <Reveal>
                <Link
                  href={`/services/${heroService.slug}`}
                  className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-xl transition-all duration-200 hover:-translate-y-1 sm:flex-row sm:items-center md:p-10"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-red/30 blur-3xl" />
                  <div className="relative flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-gold/15 text-gold-light ring-1 ring-gold/30">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold">{heroService.title}</h3>
                    <p className="mt-2 max-w-xl text-slate-300">{heroService.description}</p>
                  </div>
                  <span className="relative ml-auto flex-none text-sm font-semibold text-gold-light transition-transform group-hover:translate-x-1">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            );
          })()}
        </div>

        <div className="-mx-6 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
          {restServices.map((service, i) => {
            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
            return (
              <Reveal
                key={service.slug}
                delay={i * 100}
                className="w-[78%] flex-none snap-start sm:w-auto sm:flex-auto"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-1 ring-brand-red/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand-blue">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </Link>
              </Reveal>
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

      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-blue">How It Works</h2>
            <p className="mt-4 text-slate-600">
              Four steps from your first conversation with us to landing
              abroad.
            </p>
          </div>

          <StudyJourney />

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100} className="relative">
                <span className="pointer-events-none select-none text-7xl font-black text-brand-blue/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="-mt-4 text-lg font-semibold text-brand-blue">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-blue">
              Support That Doesn't End at Your Visa
            </h2>
            <p className="mt-4 text-slate-600">
              Landing is just the beginning. Here's how we stay with you
              after you arrive.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {postVisaHighlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-slate-200 p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold ring-1 ring-gold/20">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services/post-visa-support"
              className="text-sm font-semibold text-brand-red hover:text-brand-red-light"
            >
              Learn more about post-visa support →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Why Students Choose Afly Consultancy Services
          </h2>
          <div className="relative mt-12 grid gap-8 sm:grid-cols-3">
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
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="text-left">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">
                  ✓
                </span>
                <p className="mt-3 font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-blue">What Our Students Say</h2>
            <p className="mt-4 text-slate-600">
              Real students, placed across four different countries.
            </p>
          </div>
          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={(i % 2) * 100}
                className="w-[85%] flex-none snap-start sm:w-auto sm:flex-auto"
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <span className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-8xl text-brand-blue/5">
                    &rdquo;
                  </span>
                  <StarRow />
                  <p className="relative mt-3 text-sm italic leading-relaxed text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="relative mt-4 text-sm font-semibold text-brand-blue">{t.name}</p>
                  <p className="relative text-xs text-slate-500">{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
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

      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-red/25 blur-3xl animate-aurora-1" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/15 blur-3xl animate-aurora-2" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold">Ready to start your application?</h2>
            <p className="mt-2 text-slate-300">
              Talk to a counsellor and get a personalized study-abroad plan — free.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-red/25 active:scale-[0.98] transition-all hover:bg-brand-red-light hover:shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

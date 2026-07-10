import Link from "next/link";
import { services } from "@/data/services";
import { serviceIcons, PassportIcon } from "@/components/icons/ServiceIcons";
import { BookOpenIcon, BriefcaseIcon, CoinsIcon, CompassIcon, HomeIcon, ShieldCheckIcon } from "@/components/icons/InfoIcons";
import DestinationCards from "@/components/DestinationCards";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import ScrollScrub from "@/components/ScrollScrub";
import CountUp from "@/components/CountUp";
import { FlightPathIllustration, CompassBadgeIllustration } from "@/components/icons/Illustrations";
import ParallaxLayer from "@/components/ParallaxLayer";
import JourneyRail from "@/components/JourneyRail";
import JourneyConnector from "@/components/JourneyConnector";
import HeroPlayground from "@/components/HeroPlayground";
import StampCard from "@/components/StampCard";
import TiltCard from "@/components/TiltCard";

const stats = [
  { value: "500+", label: "Students Placed" },
  { value: "200+", label: "Partner Universities" },
  { value: "5+", label: "Years of Experience" },
  { value: "98%", label: "Visa Success Rate" },
];

const uniService = services.find((s) => s.slug === "university-selection")!;
const visaService = services.find((s) => s.slug === "visa-guidance")!;
const preDeparture = services.find((s) => s.slug === "pre-departure-briefing")!;
const applyServices = ["application-support", "test-preparation", "scholarship-assistance"].map(
  (slug) => services.find((s) => s.slug === slug)!
);

const partnerUniversities: { name: string; logo: string; showName?: boolean }[] = [
  { name: "King's College London", logo: "/universities/Kings_college_london.png" },
  { name: "University of Birmingham", logo: "/universities/birmingham.png", showName: true },
  { name: "University of Leicester", logo: "/universities/University_of_Leicester.png" },
  { name: "Arizona State University", logo: "/universities/asu.png", showName: true },
  { name: "University of Toronto", logo: "/universities/toronto.png", showName: true },
  { name: "Coventry University", logo: "/universities/coventry.png", showName: true },
  { name: "Northeastern University", logo: "/universities/northeastern.png", showName: true },
  { name: "University of East London", logo: "/universities/University_of_east_london.png" },
  { name: "Monash University", logo: "/universities/monash.svg", showName: true },
  { name: "University of Windsor", logo: "/universities/windsor.png", showName: true },
  { name: "Deakin University", logo: "/universities/deakin.png", showName: true },
  { name: "Istituto Marangoni", logo: "/universities/istituto_marangoni.png" },
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
      "We specialize in the UK, USA, Canada, Australia, New Zealand, Ireland, Germany, and the rest of Europe. See our Countries page for course options, intakes, and work rights for each destination.",
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

function ChapterTag({ n, label, dark = false }: { n: number; label: string; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
        dark
          ? "border-gold/30 bg-gold/10 text-gold-light"
          : "border-brand-red/20 bg-brand-red/5 text-brand-red"
      }`}
    >
      Chapter {n} · {label}
    </p>
  );
}

export default function Home() {
  return (
    <div>
      <JourneyRail />

      {/* Prologue — the dream */}
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
        <HeroPlayground />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-28 md:grid-cols-2">
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
              From your first phone call to the day you settle abroad for
              good — this page is the story of your journey, told in seven
              chapters.
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

        <div className="relative flex justify-center pb-8">
          <div className="flex flex-col items-center gap-1 text-gold-light/80">
            <span className="text-[11px] font-semibold uppercase tracking-widest">
              Scroll — the journey unfolds
            </span>
            <svg className="h-5 w-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
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

      {/* Chapter 1 — Consult */}
      <section data-chapter="consult" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-4 pt-20">
        <ScrollScrub className="mx-auto max-w-2xl text-center">
          <ChapterTag n={1} label="Consult" />
          <h2 className="mt-4 text-3xl font-bold text-brand-blue">
            It Starts With One Conversation
          </h2>
          <p className="mt-4 text-slate-600">
            You tell us your goals, budget, and background. A counsellor maps
            out your realistic options — honest, personalized, and completely
            free. No pressure, no sales pitch.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block text-sm font-semibold text-brand-red hover:text-brand-red-light"
          >
            Book your free consultation →
          </Link>
        </ScrollScrub>
      </section>

      <JourneyConnector />

      {/* Chapter 2 — Process */}
      <section data-chapter="process" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 pt-4">
        <ScrollScrub className="mx-auto max-w-2xl text-center">
          <ChapterTag n={2} label="The Process" />
          <h2 className="mt-4 text-3xl font-bold text-brand-blue">
            We Shortlist, Apply & Prepare You
          </h2>
          <p className="mt-4 text-slate-600">
            Universities that genuinely fit, applications handled end to end,
            test coaching, and every scholarship you're eligible for.
          </p>
        </ScrollScrub>

        <div className="mt-12">
          {(() => {
            const Icon = serviceIcons[uniService.slug as keyof typeof serviceIcons];
            return (
              <Reveal>
                <Link
                  href={`/services/${uniService.slug}`}
                  className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-xl transition-all duration-200 hover:-translate-y-1 sm:flex-row sm:items-center md:p-10"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-red/30 blur-3xl" />
                  <div className="relative flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-gold/15 text-gold-light ring-1 ring-gold/30">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold">{uniService.title}</h3>
                    <p className="mt-2 max-w-xl text-slate-300">{uniService.description}</p>
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
          {applyServices.map((service, i) => {
            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
            return (
              <Reveal
                key={service.slug}
                delay={i * 100}
                className="w-[78%] flex-none snap-start sm:w-auto sm:flex-auto"
              >
                <TiltCard className="h-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className="block h-full rounded-2xl border border-slate-200 p-6 shadow-sm transition-shadow duration-200 hover:shadow-xl"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-1 ring-brand-red/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-brand-blue">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </Link>
                </TiltCard>
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

      <section className="overflow-hidden bg-slate-50 py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
          Partner institutions we apply to on your behalf
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
              <div key={`${uni.name}-${i}`} className="flex flex-none items-center gap-3">
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
                />
                {uni.showName && (
                  <span className="max-w-[8.5rem] text-sm font-semibold leading-tight text-slate-500">
                    {uni.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <JourneyConnector flip />

      {/* Chapter 3 — Visa */}
      <section data-chapter="visa" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-white">
        <ParallaxLayer speed={0.1} className="pointer-events-none absolute -right-24 -top-24 h-72 w-72">
          <div className="h-full w-full rounded-full bg-brand-red/25 blur-3xl animate-aurora-1" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.06} className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64">
          <div className="h-full w-full rounded-full bg-brand-blue/30 blur-3xl animate-aurora-2" />
        </ParallaxLayer>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <ScrollScrub>
            <ChapterTag n={3} label="The Visa" dark />
            <h2 className="mt-4 text-3xl font-bold">The Stamp That Changes Everything</h2>
            <p className="mt-4 text-slate-300">{visaService.description}</p>
            <ul className="mt-6 space-y-3">
              {visaService.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/services/visa-guidance"
              className="mt-6 inline-block text-sm font-semibold text-gold-light hover:text-gold"
            >
              Explore Visa Guidance →
            </Link>
          </ScrollScrub>
          <Reveal delay={150}>
            <StampCard>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
                <PassportIcon className="mx-auto h-14 w-14 text-gold-light" />
                <CountUp value="98%" className="mt-4 block text-6xl font-black text-gold-light" />
                <p className="mt-2 text-slate-300">
                  of our students get their visa approved — because refusals are
                  usually avoidable with the right preparation.
                </p>
              </div>
            </StampCard>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* Chapter 4 — Fly */}
      <section data-chapter="fly" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-8">
        <ScrollScrub className="mx-auto max-w-2xl text-center">
          <ChapterTag n={4} label="The Flight" />
          <h2 className="mt-4 text-3xl font-bold text-brand-blue">Wheels Up — Eight Destinations</h2>
          <p className="mt-4 text-slate-600">{preDeparture.description}</p>
        </ScrollScrub>

        <DestinationCards />

        <p className="mt-8 text-center">
          <Link
            href="/services/pre-departure-briefing"
            className="text-sm font-semibold text-brand-red hover:text-brand-red-light"
          >
            See the full pre-departure briefing →
          </Link>
        </p>
      </section>

      <JourneyConnector flip />

      {/* Chapter 5 — Study */}
      <section data-chapter="study" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-8">
        <ScrollScrub className="mx-auto max-w-2xl text-center">
          <ChapterTag n={5} label="The Degree" />
          <h2 className="mt-4 text-3xl font-bold text-brand-blue">You Land. Classes Begin.</h2>
          <p className="mt-4 text-slate-600">
            Landing is just the beginning — we stay with you through your
            studies so you graduate on track.
          </p>
        </ScrollScrub>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold ring-1 ring-gold/20">
                <BookOpenIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-blue">Academic Support</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Struggling with coursework once classes start? We connect you
                with tutor referrals and academic guidance so you stay on
                track to finish your degree.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-slate-200 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold ring-1 ring-gold/20">
                <HomeIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-blue">Accommodation Help</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                From shortlisting to signing the lease, we help you find safe,
                affordable housing near your campus — before and after you
                land.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyConnector />

      {/* Chapter 6 — Work */}
      <section data-chapter="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-8">
        <ScrollScrub className="mx-auto max-w-2xl text-center">
          <ChapterTag n={6} label="The Career" />
          <h2 className="mt-4 text-3xl font-bold text-brand-blue">
            You Earn While You Learn — Then Launch a Career
          </h2>
          <p className="mt-4 text-slate-600">
            Work rights aren't just pocket money — they're the start of your
            career abroad. We help at both ends.
          </p>
        </ScrollScrub>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-1 ring-brand-red/10">
                <CoinsIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-blue">
                Part-Time While You Study
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                CV building, interview prep, and job search support for
                part-time roles that fit around your classes and your visa's
                work rights.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-slate-200 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-1 ring-brand-red/10">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-blue">
                Full-Time After Graduation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                As you approach graduation, we help you target full-time roles
                and post-study work visas so your degree turns into a career.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services/post-visa-support"
            className="text-sm font-semibold text-brand-red hover:text-brand-red-light"
          >
            See job search support →
          </Link>
        </div>
      </section>

      <JourneyConnector flip />

      {/* Chapter 7 — Settle */}
      <section data-chapter="settle" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-white">
        <ParallaxLayer speed={0.09} className="pointer-events-none absolute -left-24 -top-24 h-80 w-80">
          <div className="h-full w-full rounded-full bg-gold/15 blur-3xl animate-aurora-1" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.05} className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72">
          <div className="h-full w-full rounded-full bg-brand-blue/30 blur-3xl animate-aurora-2" />
        </ParallaxLayer>
        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollScrub className="mx-auto max-w-2xl text-center">
            <ChapterTag n={7} label="The New Home" dark />
            <h2 className="mt-4 text-3xl font-bold">You Stay. For Good.</h2>
            <p className="mt-4 text-slate-300">
              When you decide to make it permanent, we guide your settlement
              plan and connect you with trusted immigration lawyers for PR and
              long-term visa pathways.
            </p>
          </ScrollScrub>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: CompassIcon,
                title: "Settlement Planning",
                body: "We map your route from graduate visa to long-term residence based on your country and career.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Trusted Immigration Lawyers",
                body: "For the legal steps, we connect you with vetted immigration lawyers — the right expert at the right time.",
              },
              {
                icon: HomeIcon,
                title: "PR Pathway Guidance",
                body: "Permanent residency rules change often. We keep you pointed at the pathway that actually fits your profile.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-light ring-1 ring-gold/30">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services/post-visa-support"
              className="text-sm font-semibold text-gold-light hover:text-gold"
            >
              See settlement support →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollScrub className="text-center">
            <h2 className="text-3xl font-bold text-brand-blue">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-600">
              Answers to what most students ask before they get started.
            </p>
          </ScrollScrub>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <ParallaxLayer speed={0.08} className="pointer-events-none absolute -left-24 -top-24 h-80 w-80">
          <div className="h-full w-full rounded-full bg-brand-red/25 blur-3xl animate-aurora-1" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.05} className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72">
          <div className="h-full w-full rounded-full bg-gold/15 blur-3xl animate-aurora-2" />
        </ParallaxLayer>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold">
              Your story begins with Chapter 1.
            </h2>
            <p className="mt-2 text-slate-300">
              Book your free consultation — and start yours.
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

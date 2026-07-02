import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Afly Consultancy Services",
  description:
    "Explore Afly Consultancy Services' overseas education services: university selection, visa guidance, test preparation, scholarships, and more.",
};

const services = [
  {
    title: "University Selection",
    description:
      "We assess your academic profile, budget, and career ambitions to build a shortlist of universities and courses that genuinely fit — not just the ones with the biggest brand names.",
    points: [
      "Course and country matching",
      "Comparison of tuition, living costs, and outcomes",
      "Guidance on entry requirements",
    ],
  },
  {
    title: "Application Support",
    description:
      "From SOPs to recommendation letters, we help you put together a complete, compelling application for every university on your list.",
    points: [
      "Statement of Purpose review",
      "Document checklist and verification",
      "Application tracking across universities",
    ],
  },
  {
    title: "Visa Guidance",
    description:
      "Visa refusals are usually avoidable. We prepare your documentation and interview readiness so you apply with confidence.",
    points: [
      "Financial and document preparation",
      "Mock visa interviews",
      "Application form review",
    ],
  },
  {
    title: "Test Preparation",
    description:
      "Structured coaching and practice material for the English proficiency and standardized tests most universities require.",
    points: [
      "IELTS / PTE / TOEFL coaching",
      "Practice tests with feedback",
      "Flexible batch timings",
    ],
  },
  {
    title: "Scholarship Assistance",
    description:
      "We help identify scholarships, grants, and assistantships you're eligible for, and support you through the application process.",
    points: [
      "Scholarship eligibility screening",
      "Application and essay support",
      "Deadline tracking",
    ],
  },
  {
    title: "Pre-Departure Briefing",
    description:
      "Practical guidance for your move — accommodation, travel, banking, and settling in — so you land prepared, not overwhelmed.",
    points: [
      "Accommodation guidance",
      "Travel and forex checklist",
      "Orientation on student life abroad",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-brand-blue py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
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
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 p-8"
            >
              <h2 className="text-xl font-semibold text-brand-blue">{service.title}</h2>
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
            </div>
          ))}
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
            className="mt-6 inline-block rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-light"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

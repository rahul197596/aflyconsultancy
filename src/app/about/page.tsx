import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Afly Consultancy",
  description:
    "Learn about Afly Consultancy's mission, values, and 15+ years of experience helping students study abroad.",
};

const values = [
  {
    title: "Transparency",
    description:
      "We give honest recommendations, including when studying abroad isn't the right fit yet.",
  },
  {
    title: "Student-first",
    description:
      "Every decision we make is judged by one question: is this good for the student?",
  },
  {
    title: "Accountability",
    description:
      "We stay involved from the first consultation through to your arrival on campus.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-light">
            About Afly Consultancy
          </p>
          <h1 className="mt-4 text-4xl font-bold">
            Helping Students Study Abroad Since Day One
          </h1>
          <p className="mt-4 text-slate-300">
            For over 15 years, we've guided students through every stage of
            their overseas education journey — with honesty, expertise, and
            genuine care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl font-bold text-navy">Our Story</h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Afly Consultancy was founded to solve a simple problem: too many
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

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-bold text-navy">
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100"
              >
                <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-navy">Certified & Recognized</h2>
        <p className="mt-4 text-slate-600">
          Afly Consultancy works with accredited partner institutions and
          follows recognized standards for education counselling, ensuring
          you get advice you can trust.
        </p>
      </section>
    </div>
  );
}

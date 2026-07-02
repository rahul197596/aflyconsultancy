import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Afly Consultancy",
  description:
    "Get in touch with Afly Consultancy for a free study-abroad consultation.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-light">
            Get in Touch
          </p>
          <h1 className="mt-4 text-4xl font-bold">Let's Plan Your Journey</h1>
          <p className="mt-4 text-slate-300">
            Have a question, or ready to get started? Reach out and a
            counsellor will get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-slate-200 p-8">
              <h2 className="text-xl font-semibold text-navy">Send Us a Message</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form and it'll open in your email client, ready to send.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </h3>
                <p className="mt-1 text-navy">hello@aflyconsultancy.com</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </h3>
                <p className="mt-1 text-navy">+91 00000 00000</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Office Hours
                </h3>
                <p className="mt-1 text-navy">Monday – Saturday, 9:00 AM – 6:00 PM</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Address
                </h3>
                <p className="mt-1 text-navy">
                  Update with your office address here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

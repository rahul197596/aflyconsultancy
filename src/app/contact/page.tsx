import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons/InfoIcons";

const description =
  "Get in touch with Afly Consultancy Services for a free study-abroad consultation.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: { title: "Contact", description },
  twitter: { title: "Contact", description },
};

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-blue py-20 text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red-light">
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
              <h2 className="text-xl font-semibold text-brand-blue">Send Us a Message</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form and a counsellor will get back to you shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Email
                  </h3>
                  <p className="mt-1 text-brand-blue">info@aflyconsultancy.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Phone
                  </h3>
                  <p className="mt-1 text-brand-blue">+91 81251 44079</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Office Hours
                  </h3>
                  <p className="mt-1 text-brand-blue">Monday – Saturday, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Address
                  </h3>
                  <p className="mt-1 text-brand-blue">
                    Update with your office address here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

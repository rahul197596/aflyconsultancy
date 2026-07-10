import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/icons/InfoIcons";
import Reveal from "@/components/Reveal";
import ParallaxLayer from "@/components/ParallaxLayer";

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
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <ParallaxLayer speed={0.1} className="pointer-events-none absolute -left-24 -top-24 h-72 w-72">
          <div className="h-full w-full rounded-full bg-brand-red/25 blur-3xl animate-aurora-1" />
        </ParallaxLayer>
        <ParallaxLayer speed={0.06} className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64">
          <div className="h-full w-full rounded-full bg-gold/15 blur-3xl animate-aurora-2" />
        </ParallaxLayer>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light">
            Get in Touch
          </p>
          <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">Let's Plan Your Journey</h1>
          <p className="mt-4 text-slate-300">
            Have a question, or ready to get started? Reach out and a
            counsellor will get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
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
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-1 ring-brand-red/10">
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
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-1 ring-brand-red/10">
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
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-1 ring-brand-red/10">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Office Hours
                  </h3>
                  <p className="mt-1 text-brand-blue">Monday – Saturday, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <a
                href="https://wa.me/+918125144079"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-[#25D366]/10 p-4 transition-colors hover:bg-[#25D366]/20"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#25D366] text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.28A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.18c-1.6 0-3.13-.42-4.47-1.2l-.32-.19-3.12.76.77-3.13-.2-.32a8.17 8.17 0 0 1-1.26-4.3c0-4.55 3.7-8.25 8.25-8.25a8.19 8.19 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.7 8.25-8.25 8.25Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-brand-blue">Chat on WhatsApp</h3>
                  <p className="text-xs text-slate-600">Usually replies within a few minutes</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/aflyconsultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 p-4 transition-colors hover:from-[#833AB4]/20 hover:via-[#E1306C]/20 hover:to-[#F77737]/20"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-brand-blue">Follow on Instagram</h3>
                  <p className="text-xs text-slate-600">@aflyconsultancy</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl bg-slate-50 p-8 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Send your enquiry",
              body: "Fill out the form above, WhatsApp us, or use the Enquire Now button on any page.",
            },
            {
              step: "2",
              title: "We review your profile",
              body: "A counsellor looks at your goals, budget, and background before reaching out.",
            },
            {
              step: "3",
              title: "We call you back",
              body: "Expect a response within 24 hours to schedule your free consultation.",
            },
          ].map((item, i) => (
            <Reveal key={item.step} delay={i * 100} className="text-center sm:text-left">
              <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white sm:mx-0">
                {item.step}
              </span>
              <p className="mt-3 font-semibold text-brand-blue">{item.title}</p>
              <p className="mt-1 text-sm text-slate-600">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

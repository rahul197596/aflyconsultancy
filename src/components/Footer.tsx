import Link from "next/link";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/icons/InfoIcons";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-ink text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <img src="/logo.png" alt="Afly Consultancy Services" className="h-9 w-9 object-contain" />
            Afly Consultancy Services
          </div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-gold-light">
            Aim High Fly High
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Trusted guidance for students pursuing higher education abroad —
            from university selection to visa approval.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/aflyconsultancy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Afly Consultancy Services on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://wa.me/+918125144079"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Afly Consultancy Services on WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#25D366]"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.28A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.18c-1.6 0-3.13-.42-4.47-1.2l-.32-.19-3.12.76.77-3.13-.2-.32a8.17 8.17 0 0 1-1.26-4.3c0-4.55 3.7-8.25 8.25-8.25a8.19 8.19 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.7 8.25-8.25 8.25Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand-red-light">Home</Link></li>
            <li><Link href="/services" className="hover:text-brand-red-light">Services</Link></li>
            <li><Link href="/countries" className="hover:text-brand-red-light">Countries</Link></li>
            <li><Link href="/about" className="hover:text-brand-red-light">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-brand-red-light">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services/university-selection" className="hover:text-brand-red-light">University Selection</Link></li>
            <li><Link href="/services/visa-guidance" className="hover:text-brand-red-light">Visa Guidance</Link></li>
            <li><Link href="/services/test-preparation" className="hover:text-brand-red-light">Test Preparation</Link></li>
            <li><Link href="/services/scholarship-assistance" className="hover:text-brand-red-light">Scholarship Assistance</Link></li>
            <li><Link href="/services/post-visa-support" className="hover:text-brand-red-light">Post-Visa Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href="mailto:info@aflyconsultancy.com" className="flex items-center gap-2 hover:text-brand-red-light">
                <MailIcon className="h-4 w-4 flex-none" />
                info@aflyconsultancy.com
              </a>
            </li>
            <li>
              <a href="tel:+918125144079" className="flex items-center gap-2 hover:text-brand-red-light">
                <PhoneIcon className="h-4 w-4 flex-none" />
                +91 81251 44079
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 flex-none" />
              Mon – Sat, 9:00 AM – 6:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Afly Consultancy Services. All rights reserved.
      </div>
    </footer>
  );
}

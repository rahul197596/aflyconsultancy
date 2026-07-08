import Link from "next/link";

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
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>info@aflyconsultancy.com</li>
            <li>+91 81251 44079</li>
            <li>Mon – Sat, 9:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Afly Consultancy Services. All rights reserved.
      </div>
    </footer>
  );
}

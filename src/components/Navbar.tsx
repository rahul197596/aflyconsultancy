"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-navy">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white">
            A
          </span>
          Afly Consultancy
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-teal ${
                  pathname === link.href ? "text-teal" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-light md:inline-block"
        >
          Book Free Consultation
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-slate-700 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white"
              >
                Book Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

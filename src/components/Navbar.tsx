"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";
import { countries } from "@/data/countries";
import { serviceIcons } from "@/components/icons/ServiceIcons";
import { useMobileNav } from "@/components/MobileNavContext";

const trailingLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const { mobileNavOpen: mobileOpen, setMobileNavOpen: setMobileOpen } = useMobileNav();
  const [desktopMenu, setDesktopMenu] = useState<"services" | "countries" | null>(null);
  const [mobileSection, setMobileSection] = useState<"services" | "countries" | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu(menu: "services" | "countries") {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDesktopMenu(menu);
  }

  function scheduleClose() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setDesktopMenu(null), 150);
  }

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMenu(null);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDesktopMenu(null);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setDesktopMenu(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const isServicesActive = pathname.startsWith("/services");
  const isCountriesActive = pathname.startsWith("/countries");

  return (
    <header ref={navRef} className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-brand-blue">
          <img src="/logo.png" alt="Afly Consultancy Services" className="h-10 w-10 object-contain" />
          <span className="leading-tight">
            <span className="block text-xl font-bold">Afly Consultancy Services</span>
            <span className="block text-[11px] font-semibold uppercase tracking-widest text-brand-red">
              Aim High Fly High
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-brand-red ${
                pathname === "/" ? "text-brand-red" : "text-slate-600"
              }`}
            >
              Home
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => openMenu("services")}
            onMouseLeave={scheduleClose}
          >
            <button
              onClick={() => setDesktopMenu(desktopMenu === "services" ? null : "services")}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-red ${
                isServicesActive || desktopMenu === "services" ? "text-brand-red" : "text-slate-600"
              }`}
            >
              Services
              <ChevronIcon open={desktopMenu === "services"} />
            </button>

            {desktopMenu === "services" && (
              <div className="absolute left-1/2 top-full z-20 mt-3 w-[560px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-1">
                  {services.map((service) => {
                    const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                      >
                        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-brand-blue">
                            {service.title}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-slate-500 line-clamp-2">
                            {service.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-2 border-t border-slate-100 pt-3">
                  <Link
                    href="/services"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-brand-red hover:bg-slate-50"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li
            className="relative"
            onMouseEnter={() => openMenu("countries")}
            onMouseLeave={scheduleClose}
          >
            <button
              onClick={() => setDesktopMenu(desktopMenu === "countries" ? null : "countries")}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-red ${
                isCountriesActive || desktopMenu === "countries" ? "text-brand-red" : "text-slate-600"
              }`}
            >
              Countries
              <ChevronIcon open={desktopMenu === "countries"} />
            </button>

            {desktopMenu === "countries" && (
              <div className="absolute left-1/2 top-full z-20 mt-3 w-96 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-1">
                  {countries.map((country) => (
                    <Link
                      key={country.slug}
                      href={`/countries/${country.slug}`}
                      className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                    >
                      <span className="text-2xl">{country.flag}</span>
                      <span className="text-sm font-semibold text-brand-blue">
                        {country.name}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mt-2 border-t border-slate-100 pt-3">
                  <Link
                    href="/countries"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-brand-red hover:bg-slate-50"
                  >
                    View all destinations →
                  </Link>
                </div>
              </div>
            )}
          </li>

          {trailingLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${
                  pathname === link.href ? "text-brand-red" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-light md:inline-block"
        >
          Book Free Consultation
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-slate-700 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-slate-700 hover:text-brand-red"
              >
                Home
              </Link>
            </li>

            <li>
              <button
                onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
                className="flex w-full items-center justify-between py-2 text-sm font-medium text-slate-700 hover:text-brand-red"
              >
                Services
                <ChevronIcon open={mobileSection === "services"} />
              </button>
              {mobileSection === "services" && (
                <ul className="ml-3 flex flex-col gap-1 border-l border-slate-100 pl-3">
                  {services.map((service) => {
                    const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
                    return (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 py-1.5 text-sm text-slate-600 hover:text-brand-red"
                        >
                          <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          {service.title}
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm font-semibold text-brand-red"
                    >
                      View all services →
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => setMobileSection(mobileSection === "countries" ? null : "countries")}
                className="flex w-full items-center justify-between py-2 text-sm font-medium text-slate-700 hover:text-brand-red"
              >
                Countries
                <ChevronIcon open={mobileSection === "countries"} />
              </button>
              {mobileSection === "countries" && (
                <ul className="ml-3 flex flex-col gap-1 border-l border-slate-100 pl-3">
                  {countries.map((country) => (
                    <li key={country.slug}>
                      <Link
                        href={`/countries/${country.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 py-1.5 text-sm text-slate-600 hover:text-brand-red"
                      >
                        <span className="text-lg">{country.flag}</span>
                        {country.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/countries"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-sm font-semibold text-brand-red"
                    >
                      View all destinations →
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-slate-700 hover:text-brand-red"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-slate-700 hover:text-brand-red"
              >
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-block rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white"
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

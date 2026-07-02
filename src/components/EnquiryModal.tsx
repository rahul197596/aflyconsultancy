"use client";

import { useState, type FormEvent } from "react";
import { submitEnquiry } from "@/lib/enquiry";

const countries = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Ireland",
  "Germany",
  "Other",
];

export default function EnquiryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  if (!open) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await submitEnquiry({
      name,
      email,
      phone,
      country,
      message,
      source: "Enquiry Popup",
    });
    setStatus("done");
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
          </svg>
        </button>

        {status === "done" ? (
          <div className="py-6 text-center">
            <h2 className="text-xl font-semibold text-brand-blue">Thank you!</h2>
            <p className="mt-2 text-sm text-slate-600">
              We've received your enquiry and will get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-brand-red px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-red-light"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-brand-blue">Quick Enquiry</h2>
            <p className="mt-1 text-sm text-slate-600">
              Tell us a bit about your plans and we'll get in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
              />
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <textarea
                required
                rows={3}
                placeholder="What would you like help with?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-light disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

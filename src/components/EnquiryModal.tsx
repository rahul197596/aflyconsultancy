"use client";

import { useEffect, useState, type FormEvent } from "react";
import { submitEnquiry, QUALIFICATION_OPTIONS, INTAKE_OPTIONS } from "@/lib/enquiry";

const countries = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Ireland",
  "Germany",
  "Other",
];

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red";

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
  const [qualification, setQualification] = useState(QUALIFICATION_OPTIONS[0]);
  const [intake, setIntake] = useState(INTAKE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await submitEnquiry({
      name,
      email,
      phone,
      country,
      qualification,
      intake,
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
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8">
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
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-brand-blue">Thank you, {name.split(" ")[0]}!</h2>
            <p className="mt-2 text-sm text-slate-600">
              We've received your enquiry and a counsellor will get back to you shortly.
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
              Tell us a bit about your plans and a counsellor will get in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
                <input
                  type="tel"
                  required
                  pattern="[0-9+\(\)\s\-]{7,}"
                  title="Enter a valid phone number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>

              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  aria-label="Country of interest"
                  className={inputClass}
                >
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  aria-label="Highest qualification"
                  className={inputClass}
                >
                  {QUALIFICATION_OPTIONS.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={intake}
                onChange={(e) => setIntake(e.target.value)}
                aria-label="Preferred intake"
                className={inputClass}
              >
                {INTAKE_OPTIONS.map((i) => (
                  <option key={i} value={i}>
                    Intake: {i}
                  </option>
                ))}
              </select>

              <textarea
                required
                rows={3}
                placeholder="What would you like help with?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={inputClass}
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

"use client";

import { useState, type FormEvent } from "react";
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
  "mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const [qualification, setQualification] = useState(QUALIFICATION_OPTIONS[0]);
  const [intake, setIntake] = useState(INTAKE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

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
      source: "Contact Page",
    });
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-lg bg-brand-red/5 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-1 ring-brand-red/10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-3 font-semibold text-brand-blue">Thank you, {name.split(" ")[0]}!</p>
        <p className="mt-1 text-sm text-slate-600">
          We've received your message and a counsellor will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            required
            pattern="[0-9+\(\)\s\-]{7,}"
            title="Enter a valid phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="country" className="text-sm font-medium text-slate-700">
            Country of Interest
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={inputClass}
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qualification" className="text-sm font-medium text-slate-700">
            Highest Qualification
          </label>
          <select
            id="qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className={inputClass}
          >
            {QUALIFICATION_OPTIONS.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="intake" className="text-sm font-medium text-slate-700">
            Preferred Intake
          </label>
          <select
            id="intake"
            value={intake}
            onChange={(e) => setIntake(e.target.value)}
            className={inputClass}
          >
            {INTAKE_OPTIONS.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          What would you like to know?
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-md shadow-brand-red/25 transition-all hover:bg-brand-red-light hover:shadow-lg disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

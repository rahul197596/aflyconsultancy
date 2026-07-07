export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  country?: string;
  qualification?: string;
  intake?: string;
  message: string;
  source: string;
};

export const QUALIFICATION_OPTIONS = [
  "12th / High School",
  "Bachelor's Degree",
  "Master's Degree",
  "Other",
];

export const INTAKE_OPTIONS = [
  "Not sure yet",
  "September 2026",
  "January 2027",
  "September 2027",
];

const ENQUIRY_ENDPOINT_URL = "";
const FALLBACK_EMAIL = "info@aflyconsultancy.com";

export async function submitEnquiry(payload: EnquiryPayload) {
  if (!ENQUIRY_ENDPOINT_URL) {
    const subject = encodeURIComponent(
      `Enquiry from ${payload.name} (${payload.source})`
    );
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nCountry of interest: ${payload.country ?? "N/A"}\nHighest qualification: ${payload.qualification ?? "N/A"}\nPreferred intake: ${payload.intake ?? "N/A"}\n\n${payload.message}`
    );
    window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
    return;
  }

  await fetch(ENQUIRY_ENDPOINT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...payload, timestamp: new Date().toISOString() }),
  });
}

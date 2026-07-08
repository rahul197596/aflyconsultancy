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

const ENQUIRY_ENDPOINT_URL =
  "https://script.google.com/macros/s/AKfycbylqwL6-QAMcSbDqp65e3RoiqDBdX1z0g8_lFJqBUQxCR0wEVPOYudzbq6h0nPg1lV5CA/exec";
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

export type LiveChatPayload = {
  name: string;
  message: string;
};

export async function submitLiveChatMessage(payload: LiveChatPayload) {
  if (!ENQUIRY_ENDPOINT_URL) {
    const subject = encodeURIComponent(`Live chat message from ${payload.name}`);
    const body = encodeURIComponent(payload.message);
    window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
    return;
  }

  await fetch(ENQUIRY_ENDPOINT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      kind: "livechat",
      ...payload,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    }),
  });
}

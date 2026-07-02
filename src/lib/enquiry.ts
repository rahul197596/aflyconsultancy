export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  country?: string;
  message: string;
  source: string;
};

const ENQUIRY_ENDPOINT_URL = "";
const FALLBACK_EMAIL = "hello@aflyconsultancy.com";

export async function submitEnquiry(payload: EnquiryPayload) {
  if (!ENQUIRY_ENDPOINT_URL) {
    const subject = encodeURIComponent(
      `Enquiry from ${payload.name} (${payload.source})`
    );
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nCountry of interest: ${payload.country ?? "N/A"}\n\n${payload.message}`
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

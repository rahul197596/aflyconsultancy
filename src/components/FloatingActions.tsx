"use client";

import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";
import { useMobileNav } from "@/components/MobileNavContext";

const WHATSAPP_LINK = "https://wa.me/+918125144079";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const { mobileNavOpen } = useMobileNav();

  if (mobileNavOpen) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-red-light"
        >
          Enquire Now
        </button>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.28A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.18c-1.6 0-3.13-.42-4.47-1.2l-.32-.19-3.12.76.77-3.13-.2-.32a8.17 8.17 0 0 1-1.26-4.3c0-4.55 3.7-8.25 8.25-8.25a8.19 8.19 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.7 8.25-8.25 8.25Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
          </svg>
        </a>
      </div>

      <EnquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

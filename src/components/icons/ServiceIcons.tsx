type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GraduationCapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6 10.7v4.3c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.3" />
      <path d="M21 9v6" />
    </svg>
  );
}

export function DocumentCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M9 13.5l2 2 4-4.5" />
    </svg>
  );
}

export function PassportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="5" y="2.5" width="14" height="19" rx="1.5" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M9 16.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5" />
      <path d="M8 5.5h8" />
    </svg>
  );
}

export function PencilTestIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 19h5.5L19.5 9a2.1 2.1 0 0 0 0-3l-.5-.5a2.1 2.1 0 0 0-3 0L6 15.5V19z" />
      <path d="M13.5 6.5l3 3" />
      <path d="M4 19v-3.2" />
    </svg>
  );
}

export function ScholarshipIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="8.5" r="5" />
      <path d="M9.5 12.8 8 21l4-2 4 2-1.5-8.2" />
      <path d="M9.6 8.5h1.9l1-1.6 1 1.6h1.9l-1.5 1.4.5 2-1.9-1.1-1.9 1.1.5-2Z" />
    </svg>
  );
}

export function SuitcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="7.5" width="18" height="12" rx="1.5" />
      <path d="M9 7.5V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2.5" />
      <path d="M3 12.5h18" />
      <path d="M10.5 12.5v2" />
      <path d="M13.5 12.5v2" />
    </svg>
  );
}

export function LifeRingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="m5.8 5.8 3 3M15.2 15.2l3 3M18.2 5.8l-3 3M8.8 15.2l-3 3" />
    </svg>
  );
}

export const serviceIcons = {
  "university-selection": GraduationCapIcon,
  "application-support": DocumentCheckIcon,
  "visa-guidance": PassportIcon,
  "test-preparation": PencilTestIcon,
  "scholarship-assistance": ScholarshipIcon,
  "pre-departure-briefing": SuitcaseIcon,
  "post-visa-support": LifeRingIcon,
} as const;

type IconProps = { className?: string };

const base = {
  fill: "currentColor",
  fillOpacity: 0.14,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="4.5" width="17" height="16" rx="1.5" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v3" />
      <path d="M16 3v3" />
      <path d="M7.5 13h2.5M7.5 16.5h2.5M14 13h2.5M14 16.5h2.5" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="7.5" width="18" height="12" rx="1.5" />
      <path d="M9 7.5V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2.5" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

export function CoinsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <ellipse cx="9" cy="7" rx="5.5" ry="3" />
      <path d="M3.5 7v4c0 1.66 2.46 3 5.5 3s5.5-1.34 5.5-3V7" />
      <path d="M3.5 11v4c0 1.66 2.46 3 5.5 3 .86 0 1.68-.1 2.4-.3" />
      <ellipse cx="15.5" cy="14.5" rx="5" ry="2.7" />
      <path d="M10.5 14.5v3c0 1.5 2.24 2.7 5 2.7s5-1.2 5-2.7v-3" />
    </svg>
  );
}

export function BookOpenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 6.5c-1.5-1.2-3.6-1.7-6-1.7-.6 0-1 .4-1 1v11c0 .6.4 1 1 1 2.4 0 4.5.5 6 1.7 1.5-1.2 3.6-1.7 6-1.7.6 0 1-.4 1-1v-11c0-.6-.4-1-1-1-2.4 0-4.5.5-6 1.7Z" />
      <path d="M12 6.5v12" />
    </svg>
  );
}

export function CompassIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5Z" />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M2.5 12S5.7 5.5 12 5.5 21.5 12 21.5 12 18.3 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 20.2s-7.5-4.5-9.5-9A5 5 0 0 1 12 6.5 5 5 0 0 1 21.5 11.2c-2 4.5-9.5 9-9.5 9Z" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 2.5 4.5 5.5v6c0 5 3.2 8.4 7.5 10 4.3-1.6 7.5-5 7.5-10v-6L12 2.5Z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6l8.5 7 8.5-7" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3c0 1-1 1.5-2 1.5-7 0-13-6-13-13 0-1 .5-2 1.5-2Z" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21s6.5-6.2 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.8 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.5V19a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 20v-5.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V20" />
    </svg>
  );
}

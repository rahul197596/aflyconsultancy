type FlagProps = { className?: string };

const clipId = (name: string) => `flag-clip-${name}`;

export function UKFlag({ className }: FlagProps) {
  const id = clipId("gb");
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <clipPath id={id}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="24" height="16" fill="#1E3A8A" />
        <path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="3.2" />
        <path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" strokeWidth="1.2" />
        <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5.2" />
        <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function USFlag({ className }: FlagProps) {
  const id = clipId("us");
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <clipPath id={id}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="24" height="16" fill="#fff" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} y={i * (16 / 13)} width="24" height={16 / 13} fill="#B22234" />
        ))}
        <rect width="10.5" height="8.6" fill="#1E3A8A" />
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={i}
            cx={1.3 + (i % 4) * 2.6}
            cy={1.3 + Math.floor(i / 4) * 2.8}
            r="0.5"
            fill="#fff"
          />
        ))}
      </g>
    </svg>
  );
}

export function CanadaFlag({ className }: FlagProps) {
  const id = clipId("ca");
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <clipPath id={id}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="24" height="16" fill="#fff" />
        <rect width="6" height="16" fill="#D80621" />
        <rect x="18" width="6" height="16" fill="#D80621" />
        <path
          d="M12 3.2l1 2 2-1-.5 2.2 2 .2-1.6 1.6.9.9-2 .3.2 1.6-1-.8-1 .8.2-1.6-2-.3.9-.9-1.6-1.6 2-.2-.5-2.2 2 1z"
          fill="#D80621"
        />
      </g>
    </svg>
  );
}

export function AustraliaFlag({ className }: FlagProps) {
  const id = clipId("au");
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <clipPath id={id}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="24" height="16" fill="#1E3A8A" />
        <g transform="scale(0.5)" opacity="0.95">
          <rect width="24" height="16" fill="#1E3A8A" />
          <path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="3.2" />
          <path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" strokeWidth="1.2" />
          <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5.2" />
          <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2" />
        </g>
        {[
          [17, 3.5, 0.6],
          [19.5, 5.5, 0.6],
          [19.5, 9, 0.6],
          [16.5, 10.5, 0.6],
          [21.5, 8.2, 0.4],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" />
        ))}
      </g>
    </svg>
  );
}

export function IrelandFlag({ className }: FlagProps) {
  const id = clipId("ie");
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <clipPath id={id}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="8" height="16" fill="#169B62" />
        <rect x="8" width="8" height="16" fill="#fff" />
        <rect x="16" width="8" height="16" fill="#FF883E" />
      </g>
    </svg>
  );
}

export function GermanyFlag({ className }: FlagProps) {
  const id = clipId("de");
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <clipPath id={id}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="24" height="5.33" fill="#0F172A" />
        <rect y="5.33" width="24" height="5.33" fill="#DD0000" />
        <rect y="10.66" width="24" height="5.34" fill="#FFCE00" />
      </g>
    </svg>
  );
}

export const countryFlags = {
  "united-kingdom": UKFlag,
  "united-states": USFlag,
  canada: CanadaFlag,
  australia: AustraliaFlag,
  ireland: IrelandFlag,
  germany: GermanyFlag,
} as const;

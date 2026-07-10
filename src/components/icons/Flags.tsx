type FlagProps = { className?: string };

const clipId = (name: string) => `flag-clip-${name}`;

/** 5-pointed star path centered at (cx, cy) with outer radius r. */
function starPath(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const a = ((-90 + i * 36) * Math.PI) / 180;
    const rad = i % 2 === 0 ? r : r * 0.42;
    pts.push(`${(cx + Math.cos(a) * rad).toFixed(2)} ${(cy + Math.sin(a) * rad).toFixed(2)}`);
  }
  return `M${pts.join(" L")}Z`;
}

function UnionJack({ scale = 1 }: { scale?: number }) {
  return (
    <g transform={`scale(${scale})`}>
      <rect width="24" height="16" fill="#1E3A8A" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="3.2" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5.2" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2" />
    </g>
  );
}

export function UKFlag({ className }: FlagProps) {
  const id = clipId("gb");
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <clipPath id={id}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <UnionJack />
      </g>
    </svg>
  );
}

export function USFlag({ className }: FlagProps) {
  const id = clipId("us");
  const stripe = 16 / 13;
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <clipPath id={id}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="24" height="16" fill="#fff" />
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect key={i} y={i * stripe} width="24" height={stripe} fill="#B22234" />
        ))}
        <rect width="10.5" height={stripe * 7} fill="#1E3A8A" />
        {Array.from({ length: 5 }).map((_, row) => {
          const count = row % 2 === 0 ? 5 : 4;
          const offset = row % 2 === 0 ? 1.15 : 2.2;
          return Array.from({ length: count }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={offset + col * 2.1}
              cy={1.2 + row * 1.6}
              r="0.45"
              fill="#fff"
            />
          ));
        })}
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
          d="M12 3l.9 1.8 1.5-.8-.4 1.9 1.9-.3-.9 1.6 1.7.9-1.5.9.6 1.6-1.9-.4.1 1.6-1.6-.9v2.3h-.8v-2.3l-1.6.9.1-1.6-1.9.4.6-1.6-1.5-.9 1.7-.9-.9-1.6 1.9.3-.4-1.9 1.5.8L12 3z"
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
        <UnionJack scale={0.5} />
        {/* Commonwealth star under the canton */}
        <path d={starPath(6, 12, 1.5)} fill="#fff" />
        {/* Southern Cross */}
        <path d={starPath(17.5, 2.9, 1)} fill="#fff" />
        <path d={starPath(20.3, 5.9, 1)} fill="#fff" />
        <path d={starPath(17.5, 12.6, 1)} fill="#fff" />
        <path d={starPath(14.8, 6.7, 1)} fill="#fff" />
        <path d={starPath(19.2, 8.6, 0.6)} fill="#fff" />
      </g>
    </svg>
  );
}

export function NewZealandFlag({ className }: FlagProps) {
  const id = clipId("nz");
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <clipPath id={id}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="24" height="16" fill="#1E3A8A" />
        <UnionJack scale={0.5} />
        {/* Southern Cross — red stars with white borders */}
        {[
          { x: 17.5, y: 3, r: 1.05 },
          { x: 20.3, y: 6.2, r: 1.05 },
          { x: 17.5, y: 12.4, r: 1.15 },
          { x: 14.9, y: 6.8, r: 0.95 },
        ].map((s, i) => (
          <g key={i}>
            <path d={starPath(s.x, s.y, s.r + 0.4)} fill="#fff" />
            <path d={starPath(s.x, s.y, s.r)} fill="#CC142B" />
          </g>
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

export function EuropeFlag({ className }: FlagProps) {
  const id = clipId("eu");
  return (
    <svg viewBox="0 0 24 16" className={className}>
      <clipPath id={id}>
        <rect width="24" height="16" rx="2" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="24" height="16" fill="#003399" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = ((i * 30 - 90) * Math.PI) / 180;
          return (
            <path
              key={i}
              d={starPath(12 + Math.cos(a) * 5, 8 + Math.sin(a) * 5, 0.85)}
              fill="#FFCC00"
            />
          );
        })}
      </g>
    </svg>
  );
}

export const countryFlags = {
  "united-kingdom": UKFlag,
  "united-states": USFlag,
  canada: CanadaFlag,
  australia: AustraliaFlag,
  "new-zealand": NewZealandFlag,
  ireland: IrelandFlag,
  germany: GermanyFlag,
  europe: EuropeFlag,
} as const;

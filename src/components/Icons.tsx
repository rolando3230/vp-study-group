type IconName = "case" | "group" | "story";

const paths: Record<IconName, React.ReactNode> = {
  case: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
      <path d="M11 8.5v5M8.5 11h5" />
    </>
  ),
  group: (
    <>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M3 19c.8-3 2.8-4.5 5-4.5s4.2 1.5 5 4.5M11 19c.8-3 2.8-4.5 5-4.5s4.2 1.5 5 4.5" />
    </>
  ),
  story: (
    <>
      <path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5v13c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z" />
      <path d="M12 6v13.5" />
    </>
  ),
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

/** Decorative lotus built from rotated petals; three rings of eight. */
export function Lotus({ className = "" }: { className?: string }) {
  const rings = [
    { r: 150, rx: 34, ry: 120, op: 0.18, off: 0 },
    { r: 110, rx: 28, ry: 92, op: 0.28, off: 22.5 },
    { r: 70, rx: 22, ry: 62, op: 0.45, off: 0 },
  ];
  return (
    <svg viewBox="-200 -200 400 400" aria-hidden className={className}>
      {rings.map((ring, ri) =>
        Array.from({ length: 8 }, (_, i) => (
          <ellipse
            key={`${ri}-${i}`}
            cx={0}
            cy={-ring.ry * 0.62}
            rx={ring.rx}
            ry={ring.ry}
            transform={`rotate(${i * 45 + ring.off})`}
            fill="none"
            stroke="currentColor"
            strokeOpacity={ring.op}
            strokeWidth={1.2}
          />
        )),
      )}
      <circle r={14} fill="currentColor" fillOpacity={0.6} />
      <circle r={190} fill="none" stroke="currentColor" strokeOpacity={0.12} />
    </svg>
  );
}

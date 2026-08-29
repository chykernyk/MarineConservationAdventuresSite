export function SailBoat({ className = "h-24 w-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <path
        d="M100 20 L100 120 L150 118 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M97 40 L97 120 L60 116 Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M40 130 L160 130 L145 155 L55 155 Z"
        fill="currentColor"
      />
      <path
        d="M20 150 C 60 168, 140 168, 180 150"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

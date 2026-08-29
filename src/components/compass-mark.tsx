export function CompassMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" />
      <path d="M20 5 L23.2 18 L20 20 L16.8 18 Z" fill="currentColor" />
      <path
        d="M20 35 L17.5 23.5 L20 22 L22.5 23.5 Z"
        fill="currentColor"
        opacity="0.45"
      />
      <path d="M6 20 H12" stroke="currentColor" strokeWidth="1.2" />
      <path d="M28 20 H34" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

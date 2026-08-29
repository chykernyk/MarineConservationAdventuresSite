export function WaveDivider({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="h-16 w-full sm:h-20"
      >
        <path
          d="M0 40 C 220 90 420 0 720 30 C 1020 60 1220 10 1440 45 L1440 90 L0 90 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

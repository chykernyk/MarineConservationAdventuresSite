import { CompassMark } from "@/components/compass-mark";

export function ChartPlaceholder() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-ocean text-mist">
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        aria-hidden
      >
        <defs>
          <pattern id="chart-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chart-grid)" />
      </svg>

      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-kelp-300/40" aria-hidden>
        <path
          d="M -10 120 C 60 90, 90 160, 150 140 C 210 120, 230 190, 300 170 C 350 155, 380 190, 410 175"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M -10 200 C 80 170, 140 230, 210 210 C 280 190, 320 240, 410 220"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="relative flex h-4 w-4 mx-auto">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-60" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-coral" />
        </span>
        <p className="mt-3 font-nav text-xs uppercase tracking-widest text-mist">
          Events Square Pontoon
        </p>
        <p className="font-nav text-[11px] tracking-widest text-kelp-300">
          50&deg;09&prime;N 5&deg;03&prime;W
        </p>
      </div>

      <CompassMark className="absolute bottom-5 right-5 h-10 w-10 text-mist/50" />
    </div>
  );
}

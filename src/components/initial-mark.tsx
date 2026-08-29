const PALETTES = [
  ["#123a2b", "#3a8064"],
  ["#082530", "#145163"],
  ["#0a1f18", "#1f5c46"],
  ["#0d3b47", "#8fbfa4"],
];

function paletteFor(seed: string) {
  const idx = seed.charCodeAt(0) % PALETTES.length;
  return PALETTES[idx];
}

export function InitialMark({
  name,
  className = "h-24 w-24",
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .filter((w) => w.length > 1 || /[A-Za-z]/.test(w))
    .slice(-2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const [from, to] = paletteFor(name);

  return (
    <div
      className={`flex items-center justify-center rounded-full font-display text-2xl font-medium text-mist ${className}`}
      style={{ background: `linear-gradient(155deg, ${from}, ${to})` }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

import type { ReactNode } from "react";
import { WaveDivider } from "@/components/wave-divider";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-abyss text-mist">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 100% at 15% 0%, #145163 0%, #0d3b47 35%, #082530 65%, #051419 100%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 pt-40 pb-20 lg:px-10 lg:pt-48 lg:pb-24">
        <p className="font-nav text-xs uppercase tracking-[0.3em] text-sun">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-mist/80 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
      <WaveDivider className="text-mist" />
    </section>
  );
}

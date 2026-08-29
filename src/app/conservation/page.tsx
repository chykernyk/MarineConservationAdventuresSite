import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Fish, Radar, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CONSERVATION_PROGRAMS, IMPACT_STATS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Conservation",
  description:
    "Coldwater coral monitoring, migratory species tracking, and ecosystem protection work carried out on every Ocean Conservation Adventures voyage.",
};

const ICONS = [Fish, Radar, ShieldCheck];

export default function ConservationPage() {
  return (
    <>
      <PageHero
        eyebrow="Conservation"
        title="This isn't a wildlife cruise. It's a working research vessel."
        description="Every voyage we run carries a survey plan. Guests don't just watch the science happen — they log fin IDs, run transects, and help build datasets that inform real protection for the waters off Cornwall and beyond."
      />

      <section className="bg-mist py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {IMPACT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-kelp-300/30 bg-foam p-6 text-center"
                >
                  <p className="font-display text-3xl text-kelp-700">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-abyss/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="space-y-0">
        {CONSERVATION_PROGRAMS.map((program, i) => {
          const Icon = ICONS[i % ICONS.length];
          const dark = i % 2 === 1;
          return (
            <div
              key={program.slug}
              id={program.slug}
              className={`scroll-mt-24 py-24 sm:py-28 ${
                dark ? "bg-kelp-950 text-mist" : "bg-mist text-abyss"
              }`}
            >
              <div className="mx-auto max-w-6xl px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                  <Reveal>
                    <Icon className={`h-9 w-9 ${dark ? "text-sun" : "text-kelp-700"}`} />
                    <p
                      className={`mt-5 font-nav text-xs uppercase tracking-[0.3em] ${
                        dark ? "text-sun" : "text-kelp-700"
                      }`}
                    >
                      Programme {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-balance font-display text-3xl font-light sm:text-4xl">
                      {program.title}
                    </h2>
                    <p
                      className={`mt-4 leading-relaxed ${
                        dark ? "text-mist/75" : "text-abyss/75"
                      }`}
                    >
                      {program.summary}
                    </p>
                    <p
                      className={`mt-4 leading-relaxed ${
                        dark ? "text-mist/70" : "text-abyss/70"
                      }`}
                    >
                      {program.detail}
                    </p>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                      {program.stats.map((s) => (
                        <div
                          key={s.label}
                          className={`rounded-2xl border p-6 ${
                            dark
                              ? "border-mist/15 bg-kelp-900/40"
                              : "border-kelp-300/30 bg-foam"
                          }`}
                        >
                          <p
                            className={`font-display text-3xl ${
                              dark ? "text-sun" : "text-kelp-700"
                            }`}
                          >
                            {s.value}
                          </p>
                          <p
                            className={`mt-1.5 text-sm leading-snug ${
                              dark ? "text-mist/70" : "text-abyss/65"
                            }`}
                          >
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-ocean py-20 text-mist sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="font-nav text-xs uppercase tracking-[0.3em] text-sun">
              Working With
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-light sm:text-4xl">
              Cornwall Wildlife Trust &middot; Cornwall Seabird Watch
            </h2>
            <p className="mt-5 leading-relaxed text-mist/75">
              Survey data collected aboard our voyages is shared with our
              conservation partners and, where relevant, submitted to
              Marine Protected Area consultations and national species
              monitoring programmes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 text-center sm:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-light text-abyss sm:text-4xl">
              Come and add to the dataset yourself
            </h2>
            <p className="mt-5 leading-relaxed text-abyss/75">
              Every guest leaves with a logged contribution to real
              conservation work &mdash; and a much better answer to
              &ldquo;what did you do on holiday?&rdquo;
            </p>
            <Link
              href="/voyages"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:bg-coral-dark"
            >
              Find your voyage <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

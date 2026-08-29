import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { InitialMark } from "@/components/initial-mark";
import { EXPEDITIONS, SCIENTISTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meet the Scientists",
  description:
    "The marine scientists and skipper leading Ocean Conservation Adventures' voyages from Falmouth, Cornwall.",
};

export default function ScientistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Your Crew"
        title="The scientists who make every voyage count"
        description="Every expedition and most day voyages are led by a working marine scientist. They set the survey plan, teach you the method, and turn what you see on deck into data that matters."
      />

      <section className="bg-mist py-24 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-20 px-6 lg:px-10">
          {SCIENTISTS.map((scientist, i) => {
            const ledExpeditions = EXPEDITIONS.filter(
              (e) => e.scientistSlug === scientist.slug
            );
            return (
              <Reveal key={scientist.slug} delay={i * 0.05}>
                <div
                  id={scientist.slug}
                  className="scroll-mt-28 grid gap-8 border-b border-kelp-300/30 pb-16 last:border-0 lg:grid-cols-[220px_1fr]"
                >
                  <div>
                    <InitialMark name={scientist.name} className="h-32 w-32 text-4xl" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl text-abyss">
                      {scientist.name}
                    </h2>
                    <p className="mt-1.5 font-nav text-xs uppercase tracking-widest text-kelp-700">
                      {scientist.role}
                    </p>
                    <p className="mt-5 max-w-2xl leading-relaxed text-abyss/80">
                      {scientist.bio}
                    </p>

                    <div className="mt-6 flex items-start gap-2.5">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-kelp-700" />
                      <ul className="space-y-1 text-sm text-abyss/70">
                        {scientist.credentials.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    {ledExpeditions.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {ledExpeditions.map((e) => (
                          <Link
                            key={e.slug}
                            href={`/voyages#${e.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-foam px-4 py-2 font-nav text-[11px] uppercase tracking-widest text-kelp-700 transition-colors hover:bg-kelp-700 hover:text-mist"
                          >
                            Leads: {e.name} <ArrowRight className="h-3 w-3" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ocean py-20 text-center text-mist sm:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-light sm:text-4xl">
              Sail with the scientists themselves
            </h2>
            <p className="mt-5 leading-relaxed text-mist/80">
              Every voyage listing tells you which scientist is aboard.
              Find the trip, meet the crew.
            </p>
            <Link
              href="/voyages"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:bg-coral-dark"
            >
              View voyages <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

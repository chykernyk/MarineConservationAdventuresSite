import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { DayVoyageCard } from "@/components/day-voyage-card";
import { ExpeditionCard } from "@/components/expedition-card";
import { DAY_VOYAGES, EXPEDITIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voyages & Expeditions",
  description:
    "Single-day voyages and five-day conservation expeditions aboard a 46ft Oyster ketch, sailing from Falmouth, Cornwall.",
};

export default function VoyagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Voyages & Expeditions"
        title="Choose your depth: an afternoon on deck, or five days offshore."
        description="Every trip we run pairs sailing with real marine science. Pick a single-day voyage from Falmouth harbour, or commit to a five-day expedition into the waters where the data actually gets made."
      >
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#day-voyages"
            className="rounded-full bg-coral px-6 py-3 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:bg-coral-dark"
          >
            Single-Day Voyages
          </a>
          <a
            href="#expeditions"
            className="rounded-full border border-mist/30 px-6 py-3 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:border-sun hover:text-sun"
          >
            Five-Day Expeditions
          </a>
        </div>
      </PageHero>

      <section id="day-voyages" className="scroll-mt-24 bg-mist py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="font-nav text-xs uppercase tracking-[0.3em] text-kelp-700">
              Single-Day Voyages
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-light text-abyss sm:text-5xl">
              Home in time for dinner, changed for good
            </h2>
            <p className="mt-5 leading-relaxed text-abyss/75">
              Depart and return from Falmouth&rsquo;s Events Square Pontoon
              in a single day. No sailing experience required &mdash; you&rsquo;ll
              be briefed, kitted out, and given a real job on deck.
            </p>
          </Reveal>

          <div className="mt-14 space-y-8">
            {DAY_VOYAGES.map((voyage, i) => (
              <Reveal key={voyage.slug} delay={i * 0.05}>
                <DayVoyageCard voyage={voyage} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="expeditions" className="scroll-mt-24 bg-kelp-950 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="max-w-2xl text-mist">
            <p className="font-nav text-xs uppercase tracking-[0.3em] text-sun">
              Five-Day Expeditions
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-light sm:text-5xl">
              Offshore, on watch, and on the record
            </h2>
            <p className="mt-5 leading-relaxed text-mist/75">
              Five days aboard with a maximum of six guests, standing real
              watches alongside a lead scientist. Expect night passages,
              open water, and work that ends up in published research.
            </p>
          </Reveal>

          <div className="mt-14 space-y-8">
            {EXPEDITIONS.map((expedition, i) => (
              <Reveal key={expedition.slug} delay={i * 0.05}>
                <ExpeditionCard expedition={expedition} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-light text-abyss sm:text-4xl">
              Not sure which voyage is right for you?
            </h2>
            <p className="mt-5 leading-relaxed text-abyss/75">
              Tell us about your experience, your dates, and what you&rsquo;re
              hoping to see, and we&rsquo;ll help you find the right berth.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-kelp-700 px-7 py-3.5 font-nav text-xs uppercase tracking-widest text-kelp-700 transition-colors hover:bg-kelp-700 hover:text-mist"
            >
              Ask us a question <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, MapPin, Users2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SailBoat } from "@/components/sail-boat";

export const metadata: Metadata = {
  title: "About & The Vessel",
  description:
    "Meet Rumpus, our 46ft Oyster ketch, and the small-crew ethos behind Ocean Conservation Adventures in Falmouth, Cornwall.",
};

const SPECS = [
  ["Name", "Rumpus"],
  ["Design", "Oyster 46, Bermudan ketch rig"],
  ["Length overall", "46 feet (14.0m)"],
  ["Beam", "13.5 feet (4.1m)"],
  ["Draught", "6.6 feet (2.0m)"],
  ["Berths", "6 guests, 2 crew"],
  ["Built", "Oyster Yachts, 2011"],
  ["Refit", "2022 — low-impact systems"],
  ["Home port", "Falmouth, Cornwall"],
  ["Hull", "Cold-moulded timber composite"],
];

const TIMELINE = [
  {
    year: "2016",
    title: "Two people, one boat",
    detail:
      "Founded by a marine biologist and a lifelong sailor who met over a shared frustration: conservation science rarely reaches the people who could help fund and champion it.",
  },
  {
    year: "2019",
    title: "Rumpus joins the fleet",
    detail:
      "Our 46ft Oyster ketch replaced a smaller sloop, giving us the range and stability for genuine offshore expeditions into the Celtic Deep and beyond.",
  },
  {
    year: "2022",
    title: "Low-impact refit",
    detail:
      "A full systems refit added solar charging, a hybrid electric auxiliary, and holding tanks throughout — cutting Rumpus's footprint without cutting her range.",
  },
  {
    year: "Today",
    title: "A working research platform",
    detail:
      "Every voyage logs data for our conservation partners. We've carried over 900 guests to sea, and not one of them left as a passenger.",
  },
];

export default function VesselPage() {
  return (
    <>
      <PageHero
        eyebrow="About & The Vessel"
        title="Rumpus: a 46ft Oyster ketch, built for small crews and big water"
        description="Everything about this boat is sized for intimacy over capacity. Six guests, two crew, and enough sail area to cross open water — nothing about her is designed to feel like a tour bus with a keel."
      />

      <section className="bg-mist py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-kelp-700">
              <SailBoat className="h-16 w-16" />
            </div>
            <h2 className="mt-4 text-balance font-display text-3xl font-light text-abyss sm:text-4xl">
              Specification
            </h2>
            <dl className="mt-8 divide-y divide-kelp-300/30 border-y border-kelp-300/30">
              {SPECS.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between py-3.5 text-sm">
                  <dt className="text-abyss/60">{label}</dt>
                  <dd className="font-medium text-abyss">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-balance font-display text-3xl font-light text-abyss sm:text-4xl">
              Why a ketch, why this small
            </h2>
            <p className="mt-6 leading-relaxed text-abyss/75">
              A ketch rig splits sail area between a mainmast and a shorter
              mizzen aft, which means smaller, more manageable sails that
              guests of any experience level can actually help handle.
              It&rsquo;s a rig built for shorthanded, long-distance
              sailing &mdash; exactly what conservation work at sea
              demands.
            </p>
            <p className="mt-4 leading-relaxed text-abyss/75">
              We cap every voyage at six guests. That&rsquo;s not a
              marketing decision &mdash; it&rsquo;s the number where
              everyone still gets a proper watch, a real turn at the helm,
              and a seat at the chart table when the scientist aboard
              walks through the day&rsquo;s survey plan. Any more, and you
              stop being crew and start being cargo.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-kelp-300/30 bg-foam p-6">
                <Users2 className="h-6 w-6 text-kelp-700" />
                <p className="mt-3 font-display text-lg text-abyss">
                  Small-crew ethos
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-abyss/70">
                  Maximum six guests, always. You&rsquo;ll know every name
                  aboard by day two.
                </p>
              </div>
              <div className="rounded-2xl border border-kelp-300/30 bg-foam p-6">
                <Leaf className="h-6 w-6 text-kelp-700" />
                <p className="mt-3 font-display text-lg text-abyss">
                  Low-impact systems
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-abyss/70">
                  Solar charging, a hybrid electric auxiliary, and full
                  holding tanks &mdash; a research vessel shouldn&rsquo;t
                  pollute the water it studies.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ocean py-24 text-mist sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <MapPin className="h-8 w-8 text-sun" />
            <p className="mt-5 font-nav text-xs uppercase tracking-[0.3em] text-sun">
              Home Port
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-light sm:text-5xl">
              Falmouth, Cornwall
            </h2>
            <p className="mt-5 leading-relaxed text-mist/80">
              Falmouth sits on one of the world&rsquo;s deepest natural
              harbours, at the meeting point of the Fal estuary and the
              open Channel &mdash; which is exactly why we&rsquo;re based
              here. Within a day&rsquo;s sail we can reach the Manacles
              reef, the Lizard peninsula, and the open swell of the
              Western Approaches; within five, the Celtic Deep, the Isles
              of Scilly, and the Bay of Biscay shelf edge.
            </p>
            <p className="mt-4 leading-relaxed text-mist/80">
              We sail from Events Square Pontoon, a five-minute walk from
              Falmouth&rsquo;s train station and the town&rsquo;s harbourside
              cafes &mdash; so however you arrive, you&rsquo;re never far
              from the water.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal className="text-center">
            <p className="font-nav text-xs uppercase tracking-[0.3em] text-kelp-700">
              Our Story
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-light text-abyss sm:text-5xl">
              From one small boat to a working research platform
            </h2>
          </Reveal>

          <div className="mt-16 space-y-10 border-l border-kelp-300/40 pl-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08} className="relative">
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-coral" />
                <p className="font-nav text-xs uppercase tracking-widest text-kelp-700">
                  {item.year}
                </p>
                <h3 className="mt-1.5 font-display text-2xl text-abyss">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-abyss/75">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-abyss py-20 text-center text-mist sm:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-light sm:text-4xl">
              Come and see Rumpus for yourself
            </h2>
            <p className="mt-5 leading-relaxed text-mist/75">
              Every voyage and expedition sails aboard her, from Falmouth
              harbour outward.
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

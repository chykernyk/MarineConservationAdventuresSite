import Link from "next/link";
import { ArrowRight, Anchor, Compass, Waves } from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { InitialMark } from "@/components/initial-mark";
import {
  DAY_VOYAGES,
  EXPEDITIONS,
  IMPACT_STATS,
  SCIENTISTS,
} from "@/lib/content";

export default function Home() {
  const featuredScientists = SCIENTISTS.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Mission */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="font-nav text-xs uppercase tracking-[0.3em] text-kelp-700">
              Our Mission
            </p>
            <p className="mt-6 text-balance font-display text-3xl font-light leading-snug text-abyss sm:text-4xl">
              We believe the fastest way to protect an ocean is to put
              people in it &mdash; on deck, in the water, and beside the
              scientists doing the work. Every voyage we run gathers real
              data. Every guest leaves as a witness.
            </p>
            <p className="mt-6 text-base leading-relaxed text-abyss/70">
              Ocean Conservation Adventures was founded in Falmouth in 2016
              by a working marine biologist and a lifelong sailor who
              agreed on one thing: conservation science shouldn&rsquo;t
              happen behind closed lab doors. It should happen in front of
              the people whose choices decide the ocean&rsquo;s future.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Voyage teaser */}
      <section className="bg-foam py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="font-nav text-xs uppercase tracking-[0.3em] text-kelp-700">
              Two Ways to Come Aboard
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-light text-abyss sm:text-5xl">
              From a dawn sail to a five-day crossing
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col rounded-3xl bg-abyss p-9 text-mist">
                <Waves className="h-8 w-8 text-sun" />
                <h3 className="mt-5 font-display text-2xl">Single-Day Voyages</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">
                  Dawn sails, snorkel surveys, and sunset cetacean watches
                  from Falmouth harbour. No experience needed, every guest
                  gets a job on deck, and you&rsquo;re home by evening.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-mist/85">
                  {DAY_VOYAGES.map((v) => (
                    <li key={v.slug} className="flex items-center justify-between border-b border-mist/10 pb-2">
                      <span>{v.name}</span>
                      <span className="font-nav text-xs text-kelp-300">{v.price.replace(" per person", "")}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/voyages#day-voyages"
                  className="mt-7 inline-flex items-center gap-2 font-nav text-xs uppercase tracking-widest text-sun"
                >
                  View day voyages <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex h-full flex-col rounded-3xl bg-kelp-900 p-9 text-mist">
                <Compass className="h-8 w-8 text-sun" />
                <h3 className="mt-5 font-display text-2xl">Five-Day Expeditions</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">
                  Real offshore passages in the company of a lead
                  scientist: basking shark tagging, coldwater coral
                  surveys, and Bay of Biscay migratory crossings. Six
                  berths, real watches, real science.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-mist/85">
                  {EXPEDITIONS.map((e) => (
                    <li key={e.slug} className="flex items-center justify-between border-b border-mist/10 pb-2">
                      <span>{e.name}</span>
                      <span className="font-nav text-xs text-kelp-300">{e.duration}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/voyages#expeditions"
                  className="mt-7 inline-flex items-center gap-2 font-nav text-xs uppercase tracking-widest text-sun"
                >
                  View expeditions <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Conservation impact */}
      <section className="bg-kelp-950 py-24 text-mist sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="font-nav text-xs uppercase tracking-[0.3em] text-sun">
                Science, Not Sightseeing
              </p>
              <h2 className="mt-4 text-balance font-display text-4xl font-light sm:text-5xl">
                Every voyage feeds real conservation work
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-mist/75">
                Guests aren&rsquo;t passengers &mdash; they&rsquo;re crew.
                The fin photographs, survey transects, and sightings logged
                aboard our ketch feed directly into the research our
                scientists publish and the protections they fight for.
              </p>
              <Link
                href="/conservation"
                className="mt-8 inline-flex items-center gap-2 font-nav text-xs uppercase tracking-widest text-sun"
              >
                Explore our conservation work <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-6">
                {IMPACT_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-kelp-700/50 bg-kelp-900/40 p-6"
                  >
                    <p className="font-display text-3xl text-sun sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-mist/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scientists teaser */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="font-nav text-xs uppercase tracking-[0.3em] text-kelp-700">
              Your Crew
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-light text-abyss sm:text-5xl">
              Led by scientists who study these waters for a living
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {featuredScientists.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link href={`/scientists#${s.slug}`} className="group block">
                  <InitialMark name={s.name} className="h-20 w-20" />
                  <h3 className="mt-5 font-display text-xl text-abyss group-hover:text-kelp-700">
                    {s.name}
                  </h3>
                  <p className="mt-1 font-nav text-xs uppercase tracking-widest text-kelp-700">
                    {s.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-abyss/70">
                    {s.bio.slice(0, 118)}&hellip;
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Link
              href="/scientists"
              className="mt-12 inline-flex items-center gap-2 font-nav text-xs uppercase tracking-widest text-kelp-700"
            >
              Meet the full crew <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Vessel teaser */}
      <section className="bg-ocean py-24 text-mist sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <Anchor className="h-9 w-9 text-sun" />
            <p className="mt-5 font-nav text-xs uppercase tracking-[0.3em] text-sun">
              The Vessel
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-light sm:text-5xl">
              A 46ft Oyster ketch, built for small crews and big water
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-mist/80">
              <em>Kittiwake</em> carries no more than six guests at a time
              &mdash; small enough that everyone stands a proper watch,
              learns real knots, and gets to know the water instead of
              just looking at it.
            </p>
            <Link
              href="/vessel"
              className="mt-8 inline-flex items-center gap-2 font-nav text-xs uppercase tracking-widest text-sun"
            >
              Step aboard <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                ["Length", "46 feet"],
                ["Rig", "Bermudan ketch"],
                ["Berths", "6 guests + crew"],
                ["Home port", "Falmouth, Cornwall"],
                ["Built", "Oyster Yachts, 2011"],
                ["Refit", "2022, low-impact systems"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-mist/15 p-5">
                  <p className="font-nav text-[10px] uppercase tracking-widest text-kelp-300">
                    {label}
                  </p>
                  <p className="mt-1.5 font-display text-lg">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-abyss py-24 text-center text-mist sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-light sm:text-5xl">
              The tide doesn&rsquo;t wait. Neither should you.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mist/75">
              Berths are limited to keep every voyage intimate &mdash; and
              they fill quickly across the sailing season. Find your
              voyage and claim a place on deck.
            </p>
            <Link
              href="/booking"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-coral px-8 py-4 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:bg-coral-dark"
            >
              Book Your Voyage <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

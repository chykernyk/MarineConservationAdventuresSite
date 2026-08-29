import Link from "next/link";
import { ArrowRight, Clock, PoundSterling, Users } from "lucide-react";
import type { DayVoyage } from "@/lib/content";

export function DayVoyageCard({ voyage }: { voyage: DayVoyage }) {
  return (
    <div
      id={voyage.slug}
      className="scroll-mt-28 rounded-3xl border border-kelp-300/30 bg-mist p-8 shadow-sm shadow-kelp-950/5 sm:p-10"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-3xl text-abyss">{voyage.name}</h3>
          <p className="mt-1.5 text-kelp-700">{voyage.tagline}</p>
        </div>
        <Link
          href={`/booking?trip=${voyage.slug}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-coral px-5 py-2.5 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:bg-coral-dark"
        >
          Book this voyage <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-6 border-y border-kelp-300/30 py-4 text-sm text-abyss/75">
        <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4 text-kelp-700" /> {voyage.duration}
        </span>
        <span className="inline-flex items-center gap-2">
          <Users className="h-4 w-4 text-kelp-700" /> {voyage.groupSize}
        </span>
        <span className="inline-flex items-center gap-2">
          <PoundSterling className="h-4 w-4 text-kelp-700" /> {voyage.price}
        </span>
      </div>

      <p className="mt-6 max-w-3xl leading-relaxed text-abyss/80">
        {voyage.summary}
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h4 className="font-nav text-xs uppercase tracking-widest text-kelp-700">
            Highlights
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-abyss/80">
            {voyage.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-nav text-xs uppercase tracking-widest text-kelp-700">
            Running Order
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-abyss/80">
            {voyage.schedule.map((s) => (
              <li key={s.time} className="flex gap-3">
                <span className="w-14 shrink-0 font-nav text-xs text-kelp-700">
                  {s.time}
                </span>
                {s.activity}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-foam p-6">
        <h4 className="font-nav text-xs uppercase tracking-widest text-kelp-700">
          What&rsquo;s Included
        </h4>
        <ul className="mt-3 grid gap-2 text-sm text-abyss/80 sm:grid-cols-2">
          {voyage.included.map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kelp-500" />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

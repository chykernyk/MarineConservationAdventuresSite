import Link from "next/link";
import { ArrowRight, CalendarDays, PoundSterling, Users } from "lucide-react";
import type { Expedition } from "@/lib/content";
import { SCIENTISTS } from "@/lib/content";

export function ExpeditionCard({ expedition }: { expedition: Expedition }) {
  const lead = SCIENTISTS.find((s) => s.slug === expedition.scientistSlug);

  return (
    <div
      id={expedition.slug}
      className="scroll-mt-28 rounded-3xl bg-abyss p-8 text-mist sm:p-10"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-3xl">{expedition.name}</h3>
          <p className="mt-1.5 text-kelp-300">{expedition.tagline}</p>
        </div>
        <Link
          href={`/booking?trip=${expedition.slug}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-coral px-5 py-2.5 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:bg-coral-dark"
        >
          Reserve a berth <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-6 border-y border-mist/15 py-4 text-sm text-mist/80">
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-sun" /> {expedition.duration} &middot; {expedition.season}
        </span>
        <span className="inline-flex items-center gap-2">
          <Users className="h-4 w-4 text-sun" /> {expedition.groupSize}
        </span>
        <span className="inline-flex items-center gap-2">
          <PoundSterling className="h-4 w-4 text-sun" /> {expedition.price}
        </span>
      </div>

      <p className="mt-6 max-w-3xl leading-relaxed text-mist/85">
        {expedition.summary}
      </p>

      {lead && (
        <p className="mt-4 text-sm text-mist/70">
          Led by{" "}
          <Link href={`/scientists#${lead.slug}`} className="text-sun hover:underline">
            {lead.name}
          </Link>
          , {lead.role.toLowerCase()}.
        </p>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h4 className="font-nav text-xs uppercase tracking-widest text-sun">
            Highlights
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-mist/85">
            {expedition.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-nav text-xs uppercase tracking-widest text-sun">
            What&rsquo;s Included
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-mist/85">
            {expedition.included.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kelp-500" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-nav text-xs uppercase tracking-widest text-sun">
          Day by Day
        </h4>
        <ol className="mt-4 space-y-5 border-l border-mist/15 pl-6">
          {expedition.itinerary.map((day) => (
            <li key={day.day} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-sun" />
              <p className="font-nav text-xs uppercase tracking-widest text-kelp-300">
                {day.day}
              </p>
              <p className="mt-1 font-display text-lg">{day.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-mist/75">
                {day.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

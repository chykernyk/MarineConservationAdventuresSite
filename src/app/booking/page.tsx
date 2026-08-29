import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { BookingForm } from "@/components/booking-form";
import { DAY_VOYAGES, EXPEDITIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book Your Voyage",
  description:
    "Request a berth on a single-day voyage or five-day conservation expedition aboard Rumpus, sailing from Falmouth, Cornwall.",
};

const ALL_TRIPS = [...DAY_VOYAGES, ...EXPEDITIONS].map((t) => t.slug);

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ trip?: string }>;
}) {
  const params = await searchParams;
  const defaultTrip = ALL_TRIPS.includes(params.trip ?? "") ? params.trip! : "";

  return (
    <>
      <PageHero
        eyebrow="Book Your Voyage"
        title="Berths are limited to six. Claim yours."
        description="Tell us which voyage you're after and when you'd like to sail. We'll confirm availability, answer any questions, and arrange a deposit directly — no card details collected here."
      />

      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
              <Image
                src="/images/rumpus-deck.jpg"
                alt="Rumpus's foredeck alongside the pontoon, showing her teak decking and rigging"
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <BookingForm defaultTrip={defaultTrip} />
          </Reveal>

          <Reveal delay={0.15} className="mt-10 text-center text-sm text-abyss/60">
            <p>
              Prefer to talk it through first? Ring us on{" "}
              <a href="tel:+441326000000" className="text-kelp-700 underline">
                +44 1326 000 000
              </a>{" "}
              or visit our{" "}
              <a href="/contact" className="text-kelp-700 underline">
                contact page
              </a>{" "}
              for the full picture.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

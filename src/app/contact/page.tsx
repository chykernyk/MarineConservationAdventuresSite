import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { ChartPlaceholder } from "@/components/chart-placeholder";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ocean Conservation Adventures in Falmouth, Cornwall — questions, availability, press, and research partnerships.",
};

const DETAILS = [
  {
    icon: MapPin,
    label: "Find Us",
    lines: ["Events Square Pontoon", "Falmouth, Cornwall TR11 3QY", "United Kingdom"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["sail@oceanconservationadventures.co.uk"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+44 1326 000 000"],
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Monday – Saturday, 09:00 – 18:00", "Closed Sundays outside season"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come find us on the Falmouth waterfront"
        description="Questions about a voyage, press enquiries, or interested in a research partnership? We read every message ourselves."
      />

      <section className="bg-mist py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <div className="space-y-10">
            <Reveal>
              <ChartPlaceholder />
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="grid gap-6 sm:grid-cols-2">
                {DETAILS.map(({ icon: Icon, label, lines }) => (
                  <div key={label}>
                    <dt className="flex items-center gap-2 font-nav text-xs uppercase tracking-widest text-kelp-700">
                      <Icon className="h-4 w-4" /> {label}
                    </dt>
                    <dd className="mt-2 space-y-0.5 text-sm text-abyss/75">
                      {lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

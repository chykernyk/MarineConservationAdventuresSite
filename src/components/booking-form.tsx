"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { DAY_VOYAGES, EXPEDITIONS } from "@/lib/content";

export function BookingForm({ defaultTrip = "" }: { defaultTrip?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("done"), 900);
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-kelp-300/30 bg-foam p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-kelp-700" />
        <h3 className="mt-5 font-display text-2xl text-abyss">
          Enquiry received
        </h3>
        <p className="mt-3 max-w-md mx-auto leading-relaxed text-abyss/75">
          Thank you &mdash; a member of our crew will be in touch within
          one business day to confirm availability, answer any questions,
          and take a deposit to secure your berth.
        </p>
        <p className="mt-4 text-sm text-abyss/60">
          Need us sooner? Call{" "}
          <a href="tel:+441326000000" className="text-kelp-700 underline">
            +44 1326 000 000
          </a>{" "}
          or email{" "}
          <a
            href="mailto:sail@oceanconservationadventures.co.uk"
            className="text-kelp-700 underline"
          >
            sail@oceanconservationadventures.co.uk
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-kelp-300/30 bg-foam p-8 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            className="form-input"
            placeholder="Jane Trelawny"
          />
        </Field>
        <Field label="Email address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input"
            placeholder="jane@example.com"
          />
        </Field>
        <Field label="Phone number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="Optional"
          />
        </Field>
        <Field label="Party size" htmlFor="party">
          <input
            id="party"
            name="party"
            type="number"
            min={1}
            max={6}
            defaultValue={2}
            required
            className="form-input"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Which voyage?" htmlFor="trip">
            <select
              id="trip"
              name="trip"
              defaultValue={defaultTrip}
              required
              className="form-input"
            >
              <option value="" disabled>
                Select a voyage
              </option>
              <optgroup label="Single-Day Voyages">
                {DAY_VOYAGES.map((v) => (
                  <option key={v.slug} value={v.slug}>
                    {v.name} &mdash; {v.price}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Five-Day Expeditions">
                {EXPEDITIONS.map((e) => (
                  <option key={e.slug} value={e.slug}>
                    {e.name} &mdash; {e.price}
                  </option>
                ))}
              </optgroup>
              <option value="not-sure">Not sure yet &mdash; help me choose</option>
            </select>
          </Field>
        </div>

        <Field label="Preferred dates" htmlFor="dates">
          <input
            id="dates"
            name="dates"
            type="text"
            className="form-input"
            placeholder="e.g. mid-June, or flexible"
          />
        </Field>
        <Field label="Sailing experience" htmlFor="experience">
          <select id="experience" name="experience" className="form-input" defaultValue="none">
            <option value="none">None &mdash; complete beginner</option>
            <option value="some">Some &mdash; a few sails before</option>
            <option value="experienced">Experienced sailor</option>
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Anything else we should know?" htmlFor="message">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="form-input resize-none"
              placeholder="Dietary requirements, mobility considerations, questions about the voyage..."
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-8 py-3.5 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:bg-coral-dark disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending" : "Send Enquiry"}
      </button>
      <p className="mt-4 text-xs text-abyss/55">
        This sends an enquiry, not a payment &mdash; no card details are
        collected here. We&rsquo;ll confirm availability and arrange a
        deposit directly with you.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="font-nav text-[11px] uppercase tracking-widest text-kelp-700">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

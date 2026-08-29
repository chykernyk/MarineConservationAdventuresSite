"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("done"), 900);
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-kelp-300/30 bg-mist p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-kelp-700" />
        <h3 className="mt-5 font-display text-2xl text-abyss">
          Message sent
        </h3>
        <p className="mt-3 max-w-md mx-auto leading-relaxed text-abyss/75">
          Thanks for reaching out &mdash; we read every message ourselves
          and usually reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-kelp-300/30 bg-mist p-8 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label htmlFor="c-name" className="block">
          <span className="font-nav text-[11px] uppercase tracking-widest text-kelp-700">
            Full name
          </span>
          <input id="c-name" name="name" type="text" required className="form-input mt-2" placeholder="Your name" />
        </label>
        <label htmlFor="c-email" className="block">
          <span className="font-nav text-[11px] uppercase tracking-widest text-kelp-700">
            Email address
          </span>
          <input id="c-email" name="email" type="email" required className="form-input mt-2" placeholder="you@example.com" />
        </label>
        <div className="sm:col-span-2">
          <label htmlFor="c-subject" className="block">
            <span className="font-nav text-[11px] uppercase tracking-widest text-kelp-700">
              Subject
            </span>
            <select id="c-subject" name="subject" className="form-input mt-2" defaultValue="general">
              <option value="general">General enquiry</option>
              <option value="voyages">Voyages &amp; availability</option>
              <option value="press">Press &amp; partnerships</option>
              <option value="research">Research collaboration</option>
            </select>
          </label>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className="block">
            <span className="font-nav text-[11px] uppercase tracking-widest text-kelp-700">
              Message
            </span>
            <textarea id="c-message" name="message" rows={5} required className="form-input mt-2 resize-none" placeholder="How can we help?" />
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-8 py-3.5 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:bg-coral-dark disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending" : "Send Message"}
      </button>
    </form>
  );
}

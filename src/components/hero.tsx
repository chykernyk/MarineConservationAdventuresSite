"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SailBoat } from "@/components/sail-boat";
import { WaveDivider } from "@/components/wave-divider";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden bg-abyss text-mist">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, #1f5c46 0%, #0d3b47 32%, #082530 60%, #051419 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-1/2 opacity-60"
        style={{
          background:
            "linear-gradient(to bottom, rgba(240,182,76,0.18), transparent)",
        }}
      />

      <motion.div
        className="absolute right-[8%] top-[22%] text-sun/25 sm:right-[14%] animate-drift"
        aria-hidden
      >
        <SailBoat className="h-40 w-40 sm:h-56 sm:w-56" />
      </motion.div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-nav text-xs uppercase tracking-[0.3em] text-sun"
        >
          Falmouth, Cornwall &middot; 50&deg;09&prime;N 5&deg;03&prime;W
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-3xl text-balance font-display text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Sail toward the blue that&rsquo;s still worth saving.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-mist/85"
        >
          Hoist sail at dawn aboard a 46ft Oyster ketch with the marine
          scientists who study coral reefs, track migratory giants, and
          fight for fragile seas. Single-day voyages and five-day
          expeditions, six guests at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/voyages"
            className="group inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:bg-coral-dark"
          >
            Find Your Voyage
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/scientists"
            className="rounded-full border border-mist/30 px-7 py-3.5 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:border-sun hover:text-sun"
          >
            Meet the Scientists
          </Link>
        </motion.div>
      </div>

      <WaveDivider className="text-mist relative" />
    </section>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CompassMark } from "@/components/compass-mark";
import { NAV_LINKS } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-abyss/90 backdrop-blur transition-shadow duration-300 ${
        scrolled || open
          ? "border-b border-kelp-700/40 shadow-lg shadow-abyss/20"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-mist"
          aria-label="Ocean Conservation Adventures home"
        >
          <CompassMark className="h-8 w-8 text-sun" />
          <span className="font-display text-lg leading-tight tracking-tight">
            Ocean Conservation
            <span className="block text-xs font-nav uppercase text-kelp-300">
              Adventures &middot; Falmouth
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-nav text-xs uppercase tracking-widest transition-colors ${
                pathname === link.href
                  ? "text-sun"
                  : "text-mist/80 hover:text-sun"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-full bg-coral px-5 py-2.5 font-nav text-xs uppercase tracking-widest text-mist transition-colors hover:bg-coral-dark"
          >
            Book Your Voyage
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-mist lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-kelp-700/40 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-3 font-nav text-sm uppercase tracking-widest ${
                    pathname === link.href
                      ? "bg-kelp-900 text-sun"
                      : "text-mist/85"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="mt-2 rounded-full bg-coral px-5 py-3 text-center font-nav text-sm uppercase tracking-widest text-mist"
              >
                Book Your Voyage
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

import Link from "next/link";
import { CompassMark } from "@/components/compass-mark";
import { NAV_LINKS } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-abyss text-mist">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <CompassMark className="h-8 w-8 text-sun" />
              <span className="font-display text-lg">Ocean Conservation Adventures</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist/70">
              Small-crew eco-sailing and marine science expeditions aboard a 42ft
              Opus ketch, sailing out of Falmouth, Cornwall since 2016.
            </p>
          </div>

          <div>
            <h3 className="font-nav text-xs uppercase tracking-widest text-kelp-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-mist/80 hover:text-sun">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/booking" className="text-mist/80 hover:text-sun">
                  Book Your Voyage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-nav text-xs uppercase tracking-widest text-kelp-300">
              Falmouth Harbour
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-mist/80">
              <li>Events Square Pontoon</li>
              <li>Falmouth, Cornwall TR11 3QY</li>
              <li>United Kingdom</li>
              <li className="pt-1">
                <a href="mailto:sail@oceanconservationadventures.co.uk" className="hover:text-sun">
                  sail@oceanconservationadventures.co.uk
                </a>
              </li>
              <li>
                <a href="tel:+441326000000" className="hover:text-sun">
                  +44 1326 000 000
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-nav text-xs uppercase tracking-widest text-kelp-300">
              50&deg; 09&prime; N, 5&deg; 03&prime; W
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-mist/70">
              Every voyage logs sightings and survey data with our marine
              science partners. Follow along, or come aboard and help us
              gather it.
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a href="#" className="text-mist/70 hover:text-sun">Instagram</a>
              <a href="#" className="text-mist/70 hover:text-sun">Facebook</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-kelp-900 pt-6 text-xs text-mist/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Ocean Conservation Adventures. All rights reserved.</p>
          <p>Registered in England &amp; Wales &middot; Falmouth, Cornwall</p>
        </div>
      </div>
    </footer>
  );
}

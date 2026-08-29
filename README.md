# Ocean Conservation Adventures

Marketing site for Ocean Conservation Adventures — small-crew eco-sailing and
marine conservation expeditions aboard a 46ft Oyster ketch, sailing out of
Falmouth, Cornwall.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) for the kelp-forest / deep-water
  design system
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals and the
  animated hero
- [lucide-react](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Structure

- `src/app/` — one route per page (`/`, `/voyages`, `/scientists`,
  `/conservation`, `/vessel`, `/booking`, `/contact`)
- `src/components/` — shared layout (header/footer), page building blocks,
  and content cards
- `src/lib/content.ts` — the site's copy and structured data (voyages,
  expeditions, scientists, conservation programmes, impact stats)

## Content notes

Trip pricing, itineraries, scientist bios, and stats are plausible
placeholder content written for this build — swap in real figures, names,
and photography before launch. The booking and contact forms are
front-end enquiry flows only (no payment processing or email backend wired
up yet).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — run ESLint

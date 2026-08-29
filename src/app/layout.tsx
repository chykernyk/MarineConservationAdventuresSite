import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-nav",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Ocean Conservation Adventures | Eco-Sailing from Falmouth, Cornwall",
    template: "%s | Ocean Conservation Adventures",
  },
  description:
    "Sail a 42ft Opus ketch out of Falmouth, Cornwall with working marine scientists. Single-day voyages and five-day conservation expeditions studying coral reefs, migratory giants, and fragile seas.",
  metadataBase: new URL("https://www.oceanconservationadventures.co.uk"),
  openGraph: {
    title: "Ocean Conservation Adventures",
    description:
      "Small-crew eco-sailing and marine conservation expeditions from Falmouth, Cornwall.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mist text-abyss">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

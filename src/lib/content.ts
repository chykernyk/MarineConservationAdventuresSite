export const NAV_LINKS = [
  { href: "/voyages", label: "Voyages" },
  { href: "/scientists", label: "Meet the Scientists" },
  { href: "/conservation", label: "Conservation" },
  { href: "/vessel", label: "The Vessel" },
  { href: "/contact", label: "Contact" },
] as const;

export type DayVoyage = {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  price: string;
  groupSize: string;
  summary: string;
  highlights: string[];
  schedule: { time: string; activity: string }[];
  included: string[];
};

export type Expedition = {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  price: string;
  groupSize: string;
  season: string;
  summary: string;
  highlights: string[];
  itinerary: { day: string; title: string; detail: string }[];
  included: string[];
  scientistSlug: string;
};

export const DAY_VOYAGES: DayVoyage[] = [
  {
    slug: "dawn-sail-seabird-survey",
    name: "Dawn Sail & Seabird Survey",
    tagline: "Hoist sail before the harbour wakes",
    duration: "1 day · 7 hours",
    price: "£165 per person",
    groupSize: "Up to 8 guests",
    summary:
      "Cast off from Falmouth in the half-light and beat out past St Anthony Head as the sky turns from indigo to gold. You'll help our resident ornithologist log gannets, Manx shearwaters, and fulmars for the Cornwall Seabird Watch, then break for a galley breakfast under sail.",
    highlights: [
      "Hands on the helm through Carrick Roads at first light",
      "Live seabird transect survey with a working ornithologist",
      "Coffee, pastries, and a hot galley breakfast included",
      "No experience required — every guest gets a role on deck",
    ],
    schedule: [
      { time: "05:45", activity: "Meet at Events Square Pontoon, safety briefing" },
      { time: "06:15", activity: "Cast off, motor out through Carrick Roads" },
      { time: "06:45", activity: "Sails up, dawn watch begins off St Anthony Head" },
      { time: "08:00", activity: "Galley breakfast under sail" },
      { time: "09:30", activity: "Seabird transect survey, data logged for citizen science" },
      { time: "12:30", activity: "Return to Falmouth, debrief on the pontoon" },
    ],
    included: [
      "All safety equipment and wet-weather gear",
      "Breakfast and hot drinks aboard",
      "Marine science briefing and survey materials",
      "A logged entry in the ship's conservation journal, sent to you after the voyage",
    ],
  },
  {
    slug: "kelp-forest-watch",
    name: "Kelp Forest Watch",
    tagline: "Snorkel the forests that breathe for Cornwall",
    duration: "1 day · 8 hours",
    price: "£195 per person",
    groupSize: "Up to 6 guests",
    summary:
      "We sail west to the sheltered kelp beds off the Helford and Manacles, drop anchor, and go over the side in wetsuits with a subtidal ecologist to survey canopy health, count juvenile fish, and see first-hand why kelp forests are Cornwall's most important carbon sink.",
    highlights: [
      "Guided snorkel survey through mature kelp canopy",
      "Wetsuits, masks, and snorkels provided in all sizes",
      "Underwater ID sheets for fish, nudibranchs, and holdfast fauna",
      "Contributes directly to our Kelp Recovery Cornwall dataset",
    ],
    schedule: [
      { time: "08:30", activity: "Meet at Events Square Pontoon, kit fitting" },
      { time: "09:00", activity: "Sail to the Manacles kelp beds" },
      { time: "10:30", activity: "Snorkel briefing and buddy pairing" },
      { time: "11:00", activity: "Guided kelp canopy survey, two water sessions" },
      { time: "13:00", activity: "Lunch aboard, species ID and data logging" },
      { time: "16:30", activity: "Return to Falmouth" },
    ],
    included: [
      "Wetsuit, mask, snorkel, and surface marker buoy",
      "Lunch, snacks, and hot drinks",
      "Underwater survey slate and ID guide to keep",
      "Photos from the ship's housing, shared after the trip",
    ],
  },
  {
    slug: "sunset-cetacean-watch",
    name: "Sunset Cetacean Watch",
    tagline: "Sail into dusk looking for dolphins and giants",
    duration: "1 day · 5 hours",
    price: "£145 per person",
    groupSize: "Up to 10 guests",
    summary:
      "An easier-paced evening voyage out past Pendennis Point and along the bay edge, timed to the hour when common dolphins and, in season, minke whales work the tide lines. A hydrophone goes over the side at anchor so you can listen to the bay's residents before we sail home under the first stars.",
    highlights: [
      "Prime dolphin and porpoise sighting window",
      "Hydrophone drop to listen for cetacean calls",
      "Warm drinks and Cornish cake as the sun goes down",
      "Gentle pace — a good first sail for families and nervous sailors",
    ],
    schedule: [
      { time: "17:00", activity: "Meet at Events Square Pontoon" },
      { time: "17:30", activity: "Sail out along Falmouth Bay" },
      { time: "18:30", activity: "Anchor watch, hydrophone deployed" },
      { time: "19:30", activity: "Cake and hot drinks as light fades" },
      { time: "20:30", activity: "Return to harbour under early stars" },
    ],
    included: [
      "All safety equipment and wet-weather gear",
      "Cornish cake, hot drinks, and soft drinks",
      "Species spotting guide and sightings log",
      "Any confirmed sightings reported to the Cornwall Wildlife Trust",
    ],
  },
];

export const EXPEDITIONS: Expedition[] = [
  {
    slug: "celtic-deep-basking-shark",
    name: "Celtic Deep Basking Shark Expedition",
    tagline: "Five days tracking the second-largest fish on Earth",
    duration: "5 days / 4 nights",
    price: "From £1,450 per person",
    groupSize: "6 berths",
    season: "May – August",
    summary:
      "We sail west from Falmouth into the Celtic Deep, one of the world's most important seasonal gathering grounds for basking sharks. Working alongside a shark ecologist, guests help photograph dorsal fins for individual ID, deploy satellite tags under licence, and stand watch for the surface slicks that give the sharks away.",
    highlights: [
      "Photo-ID work contributing to the national basking shark catalogue",
      "Satellite and acoustic tagging demonstrations under scientific licence",
      "Full night passages standing watch with the crew, weather depending",
      "Small enough group that everyone stands a proper watch and learns real seamanship",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Falmouth to the Lizard",
        detail:
          "Provisioning and safety briefing at the pontoon, then an afternoon sail south around the Lizard peninsula to reach the edge of the Celtic Deep grounds by evening.",
      },
      {
        day: "Day 2",
        title: "Fin survey & tagging",
        detail:
          "Full day on effort: dorsal fin photo-ID transects, plankton tows to understand feeding conditions, and a tagging demonstration if a suitable shark is found.",
      },
      {
        day: "Day 3",
        title: "Deep water passage",
        detail:
          "An overnight passage further into the grounds, night watches in pairs with a scientist, hydrophone deployments, and stargazing far from shore light.",
      },
      {
        day: "Day 4",
        title: "Survey & data day",
        detail:
          "Second full survey day, data processing aboard, and a briefing on how basking shark movement data feeds into UK Marine Protected Area proposals.",
      },
      {
        day: "Day 5",
        title: "Return to Falmouth",
        detail:
          "Sail home with the morning tide, a debrief over breakfast, and a certificate logging your contribution to the season's dataset.",
      },
    ],
    included: [
      "All meals, snacks, and hot drinks for the voyage",
      "A bunk in a shared or private cabin (ask about single-cabin upgrades)",
      "Full safety briefing, wet-weather gear, and harnesses",
      "Direct contribution to peer-reviewed basking shark research",
    ],
    scientistSlug: "bill-burnett",
  },
  {
    slug: "isles-of-scilly-coral-gardens",
    name: "Isles of Scilly Coral Gardens Expedition",
    tagline: "Britain's coldwater coral, mapped by hand",
    duration: "5 days / 4 nights",
    price: "From £1,395 per person",
    groupSize: "6 berths",
    season: "June – September",
    summary:
      "Few people know that Cornwall's waters hold pink sea fan gardens and cup coral beds as rich as any reef further south. We sail to the Isles of Scilly's protected ledges with a coral reef ecologist to run video transects, monitor sea fan health against ocean warming, and dive-support survey work over five unhurried days.",
    highlights: [
      "Snorkel and dive-support video transects over sea fan and cup coral beds",
      "Hands-on training in reef health scoring used by Natural England",
      "Time ashore on Scilly's uninhabited islands between survey sessions",
      "Evening lectures on record-warm sea temperatures and coral bleaching risk",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Falmouth to the Scilly approaches",
        detail:
          "Depart Falmouth on the morning tide, a full day's sail west with a stop to check gear and run a practice transect in open water.",
      },
      {
        day: "Day 2",
        title: "Eastern Isles survey",
        detail:
          "Anchor among the Eastern Isles to run video transects over known sea fan colonies, snorkelling in relay pairs with the reef ecologist.",
      },
      {
        day: "Day 3",
        title: "Ashore & reef health scoring",
        detail:
          "A slower day: a landing on an uninhabited island for a beach clean and species walk, then an afternoon aboard learning Natural England's reef condition scoring method.",
      },
      {
        day: "Day 4",
        title: "Western ledges survey",
        detail:
          "Full survey day on the more exposed western ledges, weather depending, comparing coral condition against the previous season's data.",
      },
      {
        day: "Day 5",
        title: "Return passage",
        detail:
          "Sail home to Falmouth, processing survey footage on passage and a closing discussion on what the data means for future protection.",
      },
    ],
    included: [
      "All meals, snacks, and hot drinks for the voyage",
      "A bunk in a shared or private cabin (ask about single-cabin upgrades)",
      "Snorkel kit and underwater video training",
      "A copy of your logged survey data and an expedition certificate",
    ],
    scientistSlug: "juliet-burnett",
  },
  {
    slug: "bay-of-biscay-migratory-giants",
    name: "Bay of Biscay Migratory Giants Crossing",
    tagline: "A blue-water passage in the path of whales and turtles",
    duration: "5 days / 4 nights",
    price: "From £1,650 per person",
    groupSize: "6 berths",
    season: "July – September",
    summary:
      "Our most ambitious single-day-to-day voyage: a genuine offshore passage south across the Bay of Biscay's continental shelf edge, one of the Atlantic's great migratory corridors. Expect fin and sperm whales, leatherback turtles, and true night passages, led by a migratory species specialist who has spent fifteen years tracking these routes.",
    highlights: [
      "Continental shelf-edge whale and turtle survey effort",
      "Full offshore passage experience — real night watches, real weather",
      "Satellite tag data review from tracked leatherback turtles",
      "For guests who want blue-water sailing, not just coastal cruising",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Falmouth departure",
        detail:
          "Final provisioning, weather routing briefing, and departure into open water bound for the shelf edge, settling into watch rotations.",
      },
      {
        day: "Day 2",
        title: "Shelf edge approach",
        detail:
          "First full day of deepwater sailing, beginning visual survey effort as we approach the shelf break where cold and warm currents meet.",
      },
      {
        day: "Day 3",
        title: "On the migratory corridor",
        detail:
          "A full day and night on the shelf edge itself: whale and turtle survey watches, hydrophone monitoring, and a review of tagged turtle tracks with the onboard scientist.",
      },
      {
        day: "Day 4",
        title: "Turn for home",
        detail:
          "Begin the return passage north, continuing survey effort while conditions allow, with an evening lecture on Atlantic migratory corridors and their protection status.",
      },
      {
        day: "Day 5",
        title: "Falmouth landfall",
        detail:
          "Sight land, sail into Falmouth on the afternoon tide, and close the voyage with a full debrief of everything logged along the way.",
      },
    ],
    included: [
      "All meals, snacks, and hot drinks for the voyage",
      "A bunk in a shared or private cabin (ask about single-cabin upgrades)",
      "Offshore safety briefing, harnesses, and lifejackets with AIS beacons",
      "Access to the season's satellite tracking data and sightings log",
    ],
    scientistSlug: "bill-burnett",
  },
];

export type Scientist = {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  credentials: string[];
};

export const SCIENTISTS: Scientist[] = [
  {
    slug: "bill-burnett",
    name: "Bill Burnett",
    role: "Lead Marine Biologist & Skipper",
    specialty: "Basking sharks, migratory species & offshore skippering",
    bio: "Bill has spent fourteen years studying basking sharks and migratory megafauna from the Hebrides to the Azores, and led the satellite tagging programme that first confirmed Celtic Deep sharks cross the Atlantic to Newfoundland. He holds an Ocean Yachtmaster ticket and is usually the first voice you'll hear on the pontoon at dawn.",
    credentials: [
      "PhD in Marine Biology, University of Exeter",
      "Scientific licence holder for basking shark tagging",
      "RYA Yachtmaster Ocean, Commercially Endorsed",
    ],
  },
  {
    slug: "juliet-burnett",
    name: "Juliet Burnett",
    role: "Coral Reef & Coldwater Ecosystem Specialist",
    specialty: "Coldwater coral gardens & reef resilience",
    bio: "Juliet began her career mapping bleaching events on the Great Barrier Reef before turning her attention to Britain's overlooked coldwater coral gardens. She believes the pink sea fan beds of the Isles of Scilly are an early warning system for the whole Atlantic, and has trained over 200 citizen scientists in reef health survey methods.",
    credentials: [
      "PhD in Coral Reef Ecology, James Cook University",
      "Natural England accredited reef survey trainer",
      "Ten years' fieldwork across three ocean basins",
    ],
  },
];

export type ConservationProgram = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  stats: { value: string; label: string }[];
};

export const CONSERVATION_PROGRAMS: ConservationProgram[] = [
  {
    slug: "coral-reef-monitoring",
    title: "Coldwater Coral Monitoring",
    summary:
      "Tracking the health of Cornwall and Scilly's pink sea fan gardens and cup coral beds as sea temperatures climb.",
    detail:
      "Britain's coldwater coral gardens rarely make headlines, but they support the same density of life as their tropical cousins and are far less studied. Since 2018 we've run standardised video and photo transects across 38 sites around the Isles of Scilly and the Lizard peninsula, scoring colony health against Natural England's reef condition framework. The data feeds a growing picture of how quickly warming water and anchor damage are changing these reefs — and where Marine Protected Area boundaries need to expand to actually protect them.",
    stats: [
      { value: "38", label: "Survey sites monitored" },
      { value: "6 years", label: "Continuous dataset" },
      { value: "4", label: "MPA boundary proposals informed" },
    ],
  },
  {
    slug: "migratory-species-tracking",
    title: "Migratory Giants Tracking",
    summary:
      "Satellite and photo-ID tracking of basking sharks, whales, and leatherback turtles through Cornish and Biscay waters.",
    detail:
      "The Celtic Deep and the Bay of Biscay shelf edge are migratory highways for some of the Atlantic's largest animals — and some of its least protected. We contribute dorsal fin photo-IDs to the national basking shark catalogue, support satellite tagging under scientific licence, and log every confirmed cetacean and turtle sighting to regional databases. Guest-collected data has helped confirm basking shark transatlantic crossings and refine seasonal predictions of where whales and turtles concentrate.",
    stats: [
      { value: "1,240+", label: "Basking shark fin IDs logged" },
      { value: "96", label: "Satellite tags reviewed with guests" },
      { value: "3", label: "Species tracked across two ocean basins" },
    ],
  },
  {
    slug: "ecosystem-protection",
    title: "Ecosystem & Habitat Protection",
    summary:
      "Kelp forest recovery, beach cleans, and policy submissions that turn survey data into actual protection.",
    detail:
      "Data alone doesn't protect an ecosystem — advocacy does. We partner with Cornwall Wildlife Trust and the Cornwall Seabird Watch network to submit our survey findings toward Marine Protected Area consultations, run kelp forest recovery transects to track the recovery of species since trawling restrictions came into force in Cornish waters, and clear marine litter from the remote coastlines our voyages pass. It's slow, unglamorous work — and it's the reason our sightings and survey logs matter more than a nice photo.",
    stats: [
      { value: "3.1 tonnes", label: "Marine litter removed since 2019" },
      { value: "12", label: "Kelp recovery transects re-surveyed annually" },
      { value: "2", label: "Conservation partner organisations" },
    ],
  },
];

export const IMPACT_STATS = [
  { value: "1,240+", label: "Basking shark fin IDs logged since 2019" },
  { value: "38", label: "Coldwater coral survey sites monitored" },
  { value: "96", label: "Migratory species satellite tags reviewed with guests" },
  { value: "3.1 tonnes", label: "Marine litter removed on expedition beach cleans" },
];

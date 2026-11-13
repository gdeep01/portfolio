export type WorkStage = "Live product" | "Prototype" | "Pilot" | "Product concept" | "Academic prototype" | "Local demo";

export type FeaturedProject = {
  slug: string;
  title: string;
  stage: WorkStage;
  discipline: string;
  description: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  action?: string;
};

export const featuredWork: FeaturedProject[] = [
  {
    slug: "bindaas-blr",
    title: "Bindaas BLR",
    stage: "Live product",
    discipline: "Civic information",
    description:
      "Live traffic, maps, commute planning, weather and civic information for Bengaluru, with data-based congestion predictions and TomTom traffic data.",
    image: "/projects/bindaas-dashboard.png",
    imageAlt: "Bindaas BLR dashboard screenshot showing city congestion, live corridors, and daily trend lines",
    href: "https://bindaas-blr.vercel.app",
    action: "Open live product",
  },
  {
    slug: "inventai",
    title: "InventAI",
    stage: "Prototype",
    discipline: "Retail forecasting",
    description:
      "Inventory forecasts, mandi prices from OGD India and a Gemini-powered assistant to help retailers make stock decisions.",
    image: "/projects/invent.png",
    imageAlt: "Screenshot of the InventAI landing page describing its inventory forecasting prototype",
    href: "https://invent-ai-gd.vercel.app",
    action: "View prototype",
  },
  {
    slug: "where-is-my-bus",
    title: "Where Is My Bus?",
    stage: "Pilot",
    discipline: "Transit information",
    description:
      "A pilot using a conductor's phone to share a bus's live location, so passengers can check where their bus is.",
    image: "/projects/bus.png",
    imageAlt: "Where Is My Bus live tracker showing a bus route on a map",
    href: "https://where-is-my-bus-beryl.vercel.app",
    action: "Open pilot",
  },
  {
    slug: "group-wallet",
    title: "Group Wallet",
    stage: "Product concept",
    discipline: "UPI · group payments",
    description:
      "A group-trip concept for pooling contributions before the trip and approving shared spending together.",
    href: "#notes",
    action: "Explore the product note",
  },
];

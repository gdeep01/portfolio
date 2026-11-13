import type { WorkStage } from "@/data/featured-work";

export type CaseStudySection = {
  label: string;
  title: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  stage: WorkStage;
  discipline: string;
  summary: string;
  role: string;
  timeframe?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  productUrl?: string;
  stack: string[];
  evidence: { value: string; label: string; note?: string }[];
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "s-shaped-e-peg-board",
    title: "S-Shaped E-Peg Board for Rehabilitation",
    stage: "Academic prototype",
    discipline: "Physical product engineering",
    summary: "A team-built, sensor-integrated upper-limb rehabilitation prototype, recognized as First Runner-Up at Ramaiah Institute of Technology’s college Major Project Exhibition.",
    role: "Team project",
    stack: ["Raspberry Pi 3B+", "Hall-effect sensors", "FastAPI", "WebSockets", "React", "Google Gemini"],
    evidence: [
      { value: "First Runner-Up", label: "team award · college Major Project Exhibition", note: "Ramaiah Institute of Technology" },
      { value: "98.75%", label: "Hall-effect detection accuracy", note: "Prototype test result; not a clinical outcome." },
      { value: "45 ms", label: "maximum end-to-end WebSocket latency", note: "Measured in prototype testing." },
      { value: "100%", label: "difficulty classification accuracy", note: "Across the tested difficulty bands." },
      { value: "~₹4,978", label: "hardware cost", note: "Approximate prototype hardware cost." },
    ],
    sections: [
      { label: "01 · The project", title: "A physical exercise, instrumented for feedback.", body: ["The S-shaped electronic pegboard combines an ergonomic board, magnetic pegs, eight Hall-effect sensors, a Raspberry Pi 3B+, and 3D-printed modular components. The team built it to explore measurable upper-limb rehabilitation exercises.", "A React interface and FastAPI backend connect board events to session tracking, adaptive difficulty, analytics, and post-session coaching using Google Gemini."] },
      { label: "02 · Prototype tests", title: "Measure the system before making health claims.", body: ["The project report records 98.75% Hall-effect detection accuracy, a maximum end-to-end WebSocket latency of 45 ms, and 100% difficulty classification accuracy across the tested difficulty bands. The approximate hardware cost was ₹4,978.", "These are prototype and system test results. Clinical validation with stroke patients has not been completed, so they do not establish a clinical or rehabilitation outcome."] },
      { label: "03 · Team recognition", title: "First Runner-Up at the college Major Project Exhibition.", body: ["The team received First Runner-Up at the Major Project Exhibition at Ramaiah Institute of Technology. This was a team award for a team project."] },
      { label: "04 · What remains", title: "A working prototype is an engineering milestone, not clinical proof.", body: ["The prototype demonstrates sensing, event streaming, session logic, and feedback as one system. The next step toward any clinical use would require appropriate clinical validation and expert oversight; no patient validation is claimed here."] },
    ],
  },
  {
    slug: "t-junction-blind-spot-alert",
    title: "Smart Vision-Based Blind Spot Alert for T-Junctions",
    stage: "Academic prototype",
    discipline: "Physical product engineering",
    summary: "A team mini-project exploring camera-based detection and distance sensing to alert drivers to approaching road users at an obstructed T-junction.",
    role: "Team project",
    stack: ["Raspberry Pi 3B+", "TensorFlow Lite", "OpenCV", "Python", "Ultrasonic sensing", "LCD", "Buzzer"],
    evidence: [],
    sections: [
      { label: "01 · The problem", title: "Make an obstructed approach easier to notice.", body: ["The team explored an infrastructure-based alert for vehicles or pedestrians approaching from directions a driver cannot easily see at a T-junction. The project is a safety prototype, not a deployed road system."] },
      { label: "02 · System", title: "Combine a camera signal with a distance check.", body: ["A Raspberry Pi 3B+ runs camera-based object detection with TensorFlow Lite, OpenCV, and Python. Ultrasonic sensing adds distance input; the prototype surfaces alerts through an LCD and buzzer."] },
      { label: "03 · Demonstration", title: "Test the interaction at educational prototype scale.", body: ["The team tested the prototype with toy-vehicle trials. It has not been deployed at actual intersections, and no real-world safety or accident-reduction result is claimed."] },
    ],
  },
  {
    slug: "instrument-service-console",
    title: "Instrument Service Console",
    stage: "Local demo",
    discipline: "Field service workflow",
    summary: "Service cases were sometimes logged late as engineers moved between customer sites. After speaking with field engineers, I documented the workflow in a PRD and built a Windows demo to show how cases could be logged, assigned, tracked and closed.",
    role: "Discovery, product requirements, workflow design, implementation, and prototype testing",
    stack: ["Windows WPF", "Local demo data", "Workflow design"],
    evidence: [
      { value: "24", label: "field engineers interviewed" },
      { value: "6 of 10", label: "cases logged late in the observed group" },
      { value: "10", label: "engineers tested the prototype" },
      { value: "<5 min*", label: "estimated closure flow", note: "Compared with 15 minutes to a day previously; estimate, not a measured production result." },
    ],
    sections: [
      { label: "01 · The situation", title: "Case notes could lag behind a field visit.", body: ["While supporting HPLC installation and troubleshooting across customer sites, I saw engineers move between visits while service records were still pending."] },
      { label: "02 · What I heard", title: "Some cases were logged after the work had moved on.", body: ["I spoke with 24 field engineers. In an observed group of 10 service cases, six had been logged late. That is what I found in that group, not a company-wide rate."] },
      { label: "03 · The workflow", title: "A case passes between the customer, vendor and engineer.", body: ["The customer raises a breakdown or preventive-maintenance case. The vendor acknowledges it and schedules a visit; the engineer records the visit and submits a service report. The customer reviews the report, then the vendor closes the case with a handoff code."] },
      { label: "04 · The demo", title: "I built the workflow as a Windows walkthrough.", body: ["The WPF demo uses fictional instrument profiles, cases and reports. Customer and vendor entry buttons switch between demo workspaces; they are not sign-in. Demo records stay on that Windows user’s profile, and this app is not connected to the separate API foundation.", "A service report can be attached and reviewed in the app. Readable sections can prefill blank summary fields on the laptop; the fields remain editable, and scanned reports need manual entry. In a preventive-maintenance case, the next PM date advances after the case is closed."] },
      { label: "05 · What remains", title: "The review build stops before live service use.", body: ["The eight-digit code demonstrates a handoff; it is not an electronic signature or proof of identity. The manager walkthrough is meant to decide whether to sponsor a production discovery phase, not approve use with live records or deployment.", "Before a live pilot, identity, customer and vendor onboarding, hosting, data retention, attachment handling, service ownership, and Quality/Regulatory review still need decisions. The connected API is a development foundation, not a deployed service."] },
    ],
  },
  {
    slug: "bindaas-blr", title: "Bindaas BLR", stage: "Live product", discipline: "Civic information",
    summary: "Live traffic, maps, commute planning, weather and civic information for Bengaluru, with traffic and hotspot data from TomTom.",
    role: "Product direction and engineering", timeframe: "2025–26", image: "/projects/bindaas-dashboard.png",
    imageAlt: "Bindaas BLR dashboard screenshot showing city congestion, live corridors, and daily traffic trends", imageCaption: "LIVE DASHBOARD SCREENSHOT", productUrl: "https://bindaas-blr.vercel.app",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Supabase Edge Functions", "Leaflet", "Recharts"],
    evidence: [
      { value: "3,818", label: "users in the first three months" },
      { value: "408+", label: "weekly active users", note: "Resume definition: sessions longer than 10 seconds." },
    ],
    sections: [
      { label: "01 · The idea", title: "The 2025 RCB parade was bigger than expected.", body: ["Seeing so many people gather in one place made me wonder whether people could get an indication of where Bengaluru traffic might build. I started Bindaas around that idea."] },
      { label: "02 · The product", title: "A city view for the trip and the day around it.", body: ["Bindaas brings together live traffic, maps, commute planning, weather and civic information for Bengaluru. Its congestion prediction feature uses data to indicate where traffic may build. TomTom provides the traffic and hotspot data."] },
      { label: "03 · Where I focused", title: "Traffic and maps became the most-used parts.", body: ["As I looked at usage, traffic and maps were the features people used most, which influenced where I spent my time. I decided against adding BESCOM outage alerts because I couldn't rely on the information being fresh enough.", "In its first three months, Bindaas reached 3,818 users, with 408+ weekly active users."] },
    ],
  },
  {
    slug: "inventai", title: "InventAI", stage: "Prototype", discipline: "Retail forecasting",
    summary: "Inventory forecasts, mandi prices from OGD India and a Gemini-powered assistant to help retailers make stock decisions.",
    role: "Product exploration and engineering", image: "/projects/invent.png",
    imageAlt: "Screenshot of the InventAI landing page describing its inventory forecasting prototype", imageCaption: "ACTUAL LANDING PAGE · PROTOTYPE", productUrl: "https://invent-ai-gd.vercel.app",
    stack: ["React 19", "Vite", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL / Supabase", "ARIMA", "Gemini API"], evidence: [],
    sections: [
      { label: "01 · The problem", title: "Inventory decisions often rely on a thin view of demand.", body: ["The project explores dead stock and gut-based forecasting as connected retail problems. The product direction is to give a retailer a more useful view of likely demand while keeping current market prices in reach."] },
      { label: "02 · Product decisions", title: "Put the forecast beside the context.", body: ["The prototype supports CSV upload and column mapping, anomaly checks, demand forecasts by store and SKU, and reorder recommendations using forecasts and stock position. It is designed to pair this workflow with OGD India mandi-price lookups and a Gemini assistant when those integrations are configured.", "Forecasts were backtested on a Kaggle dataset. No live retailer validation or business outcome is claimed here."] },
      { label: "03 · Build and learn", title: "Validate in the setting the product is meant to serve.", body: ["The frontend is React 19 and Vite; the backend uses FastAPI, SQLAlchemy, Alembic, and PostgreSQL on Supabase. Forecast requests run through FastAPI BackgroundTasks, are tracked in the database, and the frontend polls by task ID.", "InventAI is a prototype, not a retailer-validated system. The live landing page presents the product; integrations depend on their API configuration."] },
    ],
  },
  {
    slug: "where-is-my-bus", title: "Where Is My Bus?", stage: "Pilot", discipline: "Transit information",
    summary: "A pilot using a conductor's phone to share a bus's live location, so passengers can check where their bus is.",
    role: "Product exploration and prototype", image: "/projects/bus.png",
    imageAlt: "Where Is My Bus pilot interface screenshot showing a bus route on a map", imageCaption: "ACTUAL PILOT INTERFACE", productUrl: "https://where-is-my-bus-beryl.vercel.app",
    stack: ["React 18", "Firebase Realtime Database", "Leaflet", "OpenStreetMap", "Vite", "Vercel"], evidence: [],
    sections: [
      { label: "01 · The idea", title: "Could a conductor’s phone do the job?", body: ["My research described dedicated GPS units as costing around ₹15,000–25,000 per bus. I wondered whether a conductor’s existing phone could share the bus location instead."] },
      { label: "02 · The pilot", title: "A phone sends the location to a rider’s map.", body: ["I spoke with conductors in Shivamogga and tried the idea with friends. I built the prototype with JavaScript, Firebase and Leaflet: a conductor shares a location from the phone, and riders can see the bus on a map."] },
      { label: "03 · What I found", title: "Replacing the GPS unit wasn’t the only challenge.", body: ["Tracking becomes useful when enough buses keep sharing their locations consistently. A rider can only see the buses that are sending updates."] },
    ],
  },
  {
    slug: "group-wallet", title: "Group Wallet", stage: "Product concept", discipline: "Group payments",
    summary: "A group-trip concept for pooling contributions before the trip and approving shared spending together.",
    role: "Product concept and metric framing", stack: ["Product strategy", "Metrics"], evidence: [],
    sections: [
      { label: "01 · The idea", title: "One person pays, then collects from everyone else.", body: ["That familiar group-trip problem was the starting point for Group Wallet. My concept moves contributions before the trip: everyone puts money into a shared pool first."] },
      { label: "02 · Spending together", title: "Everyone approves before the group spends.", body: ["When someone wants to spend from the pool, the group reviews the request and approves it unanimously."] },
      { label: "03 · Working through the concept", title: "A shared pool needs clear rules around it.", body: ["I worked through a north-star metric and six supporting metrics, along with regulatory constraints. I also considered what should happen when someone doesn't approve a request in time. Group Wallet remains a product concept."] },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

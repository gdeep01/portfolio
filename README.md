# Gagan Deep — Portfolio

Personal portfolio and blog built with Next.js 14. Dark HUD aesthetic, three live projects, two case studies.

---

## Stack

Next.js 14 (App Router), Tailwind CSS, Framer Motion, MDX with remark-gfm, deployed on Vercel.

---

## Structure

- `src/app/page.tsx` — Main single-page layout
- `src/app/blog/page.tsx` — Blog listing
- `src/app/blog/[slug]` — Individual post pages
- `src/components/` — Navbar, Hero, About, Projects, Skills, Contact
- `src/data/projects.ts` — Project cards data
- `src/data/skills.ts` — Skills categories data
- `src/content/blog/` — MDX posts

---

## Running Locally

```bash
git clone https://github.com/gdeep01/portfolio
cd portfolio
npm install
npm run dev
```

Open `localhost:3000`

---

## Adding a Blog Post

Create a new `.mdx` file in `/content/blog/` with this frontmatter:

```yaml
---
title: "Your Post Title"
date: "2026-05-03"
tag: "Case Study"
excerpt: "One line summary shown on the blog listing page."
---
```

The slug comes from the filename. `my-new-post.mdx` becomes `/blog/my-new-post`.

---

## Projects Featured

- **Bindaas BLR** — Real-time civic intelligence PWA for Bengaluru
  - **Stack:** React, FastAPI, Supabase, PostgreSQL, TomTom API, Gemini
  - **Live:** [https://bindaas-blr.vercel.app](https://bindaas-blr.vercel.app)

- **Where Is My Bus** — Zero-backend real-time GPS bus tracker
  - **Stack:** Firebase, Leaflet, Geolocation API
  - **Live:** [https://where-is-my-bus-beryl.vercel.app](https://where-is-my-bus-beryl.vercel.app)

- **InventAI** — Demand forecasting for Indian retailers
  - **Stack:** FastAPI, ARIMA, Supabase, Gemini
  - **Live:** [https://invent-ai-gd.vercel.app](https://invent-ai-gd.vercel.app)

---

## Contact

- **Email:** gdeepg19@gmail.com
- **GitHub:** [https://github.com/gdeep01](https://github.com/gdeep01)
- **LinkedIn:** [https://linkedin.com/in/gagan-deep-755130296](https://linkedin.com/in/gagan-deep-755130296)

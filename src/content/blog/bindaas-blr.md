---
title: "Building Bindaas BLR: Scaling Traffic Insights"
date: "2024-03-20"
tag: "Case Study"
excerpt: "How I built a live traffic monitoring platform for Bangalore that scaled to 400+ active users using FastAPI and Supabase."
---

Bindaas BLR was born out of a simple frustration: Bangalore's traffic is unpredictable. While Google Maps gives you a route, it doesn't give you the *vibe* of the city's congestion at a glance.

## The Tech Stack

- **Frontend**: Next.js with Leaflet for map rendering.
- **Backend**: FastAPI (Python) for high-performance data processing.
- **Database**: Supabase (PostgreSQL) for real-time updates and auth.
- **AI**: Gemini API for summarizing traffic incidents into human-readable alerts.

## Challenges

Scaling to 400+ users meant optimizing the TomTom API calls to stay within free tier limits while maintaining real-time accuracy. I implemented a caching layer and a "stale-while-revalidate" pattern for traffic data.

Stay tuned for more deep dives into the architecture.

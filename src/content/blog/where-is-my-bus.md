---
title: "Where Is My Bus: No Backend, No Problem"
date: "2026-04-10"
tag: "Case Study"
excerpt: "How I built a real-time GPS bus tracker for zero cost by using Firebase as the entire backend."
---
## The Problem
GPS hardware for buses costs Rs. 15,000-25,000 per unit. Small operators cannot afford it. I needed a zero-cost alternative.

## The Architecture Decision
Instead of building a backend, I used Firebase Realtime Database as the entire infrastructure. The conductor's browser writes GPS coordinates every 5 seconds via the Geolocation API. Passengers subscribe via onValue listeners. Latency under 5 seconds.

## The Clever Part
The real engineering challenge was stale data. If a conductor closes their browser mid-trip, the last known location stays in the database forever. I solved this with Firebase onDisconnect handlers — registered on every write, they automatically delete the record the moment the connection drops.

## Result
Full real-time bus tracking. Zero backend. Zero cost. Deployed on Firebase free tier.

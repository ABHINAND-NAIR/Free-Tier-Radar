# Free Tier Radar — Project Plan

**Owner:** Abhi · **Builder:** Jarvis · **Started:** 13 Nov 2026

## The pitch (one sentence)
A clean website that tells developers, honestly, which "free tier" offers are
free-forever, which are trial bait, and which demand a credit card — so nobody
gets burned the way we almost did.

## Why this project exists (Abhi's words, kept)
"I want to do stuff with freedom but I have no resources." → This needs ₹0,
teaches real engineering, and becomes the Google-portfolio flagship.

## Rules of the road (anti-quitting rules)
1. Steps are SMALL — each one finishes in one sitting (1–3 hrs max).
2. Never start step N+1 before step N is DONE and marked done.
3. Scope creep goes into IDEAS.md, never into the week's plan.
4. Done means: visible in a browser or pushed to GitHub — not "in my head."

## Phase 1 — Core radar (this week)
- [x] Step 0: Project folder, plan, data schema, first seed data (done tonight)
- [x] Step 1: Curate 12–15 services into `data/services.json` with honest verdicts
      (use free-for.dev list as source; verify each provider's real pricing page)
- [x] Step 2: Build the site — list view, verdict badges (FOREVER / TRIAL / CARD-TRAP),
      search box, category filter. Plain HTML/CSS/JS. No frameworks yet.
- [x] Step 3: Polish — mobile-friendly, clean design, "how we judge" page
- [ ] Step 4: Push to GitHub, deploy on GitHub Pages, get the live link
- [ ] Step 5: Share it in 2–3 places (X, a Discord, a subreddit). Collect reactions.

## Phase 2 — AI layer (next week)
- [ ] Step 6: "Paste a pricing page URL → AI flags the traps" feature
      (uses a free AI provider API; Jarvis wires the key with Abhi)
- [ ] Step 7: Open-source polish: README, LICENSE, CONTRIBUTING, good first issues

## Tech choices
- Static HTML/CSS/JS first (ship fast, learn real fundamentals)
- Data lives in `data/services.json` — the single source of truth
- Hosting: GitHub Pages (free forever)
- Later (Phase 2): one small serverless function for the AI feature

## Definition of DONE (Phase 1)
A stranger can open the live link, search a service, and see an honest verdict
in under 5 seconds — on their phone.

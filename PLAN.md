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
      (superseded: full editorial redesign + color pass + depth pass + about page + FAQ)
- [x] Step 4: Push to GitHub, deploy on GitHub Pages, get the live link (DONE Nov 14 —
      bot-block cleared after ~1 day; pushed main branch; Pages live at
      https://abhinand-nair.github.io/Free-Tier-Radar/ — index.html, about.html,
      data/services.json all verified HTTP 200)
- [ ] Step 5: Share it in 2–3 places (X, a Discord, a subreddit). Collect reactions.

## Phase 2 — AI layer (next week)
- [ ] Step 6: Run OFFICE-HOURS.md interrogation FIRST (what exactly should the AI check?
      which provider's API? free tier limits? what does the user paste?) → write DESIGN.md
- [ ] Step 7: "Paste a pricing page URL → AI flags the traps" feature
      (uses a free AI provider API; Jarvis wires the key with Abhi)
- [ ] Step 8: Open-source polish: README, LICENSE, CONTRIBUTING, good first issues
- [ ] Security gate for the AI feature (Abhi's checklist, applied at the right time):
      API key ONLY in serverless env var (never in git, never client-side) · rate limiting
      on the API route · CORS locked to the site's own origin · security headers
      (CSP, X-Content-Type-Options, Referrer-Policy) · input sanitization on the pasted-URL field ·
      no debug output in production · least-privilege anything-with-a-key.
      (N/A for this project, by design: no DB, no passwords, no admin routes, no user accounts —
      static site = minimal attack surface. XSS shield already live on the front end, Nov 14.)

## Tech choices
- Static HTML/CSS/JS first (ship fast, learn real fundamentals)
- Data lives in `data/services.json` — the single source of truth
- Hosting: GitHub Pages (free forever)
- Later (Phase 2): one small serverless function for the AI feature

## Definition of DONE (Phase 1) — ✅ MET Nov 14
A stranger can open the live link, search a service, and see an honest verdict
in under 5 seconds — on their phone. (Verified by Abhi on mobile, Nov 14.)

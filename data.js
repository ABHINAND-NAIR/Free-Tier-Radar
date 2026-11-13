const SERVICES = [
  {
    "name": "Cloudflare Pages",
    "category": "hosting",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "Unlimited bandwidth, 500 builds/month",
    "catch": "Builds pause at 500/month — fine for hobby projects",
    "link": "https://pages.cloudflare.com/",
    "checked": "2026-11-13"
  },
  {
    "name": "GitHub Pages",
    "category": "hosting",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "1 GB site, 100 GB/month bandwidth, static only",
    "catch": "Static sites only — no server code",
    "link": "https://pages.github.com/",
    "checked": "2026-11-13"
  },
  {
    "name": "Vercel Hobby",
    "category": "hosting",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "100 GB bandwidth/month, serverless functions",
    "catch": "Commercial use technically not allowed on Hobby plan",
    "link": "https://vercel.com/pricing",
    "checked": "2026-11-13"
  },
  {
    "name": "Netlify Free",
    "category": "hosting",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "100 GB bandwidth/month, 300 build minutes/month",
    "catch": "Build minutes run out fast if you redeploy constantly",
    "link": "https://www.netlify.com/pricing/",
    "checked": "2026-11-13"
  },
  {
    "name": "Render",
    "category": "hosting",
    "verdict": "card-trap",
    "card_required": true,
    "limits": "Free web service spins down after 15 min idle",
    "catch": "Card required upfront; cold starts make it feel broken",
    "link": "https://render.com/pricing",
    "checked": "2026-11-13"
  },
  {
    "name": "Oracle Cloud Free Tier",
    "category": "hosting",
    "verdict": "free-forever",
    "card_required": true,
    "limits": "Up to 4 ARM cores + 24 GB RAM — genuinely huge",
    "catch": "Card needed just to sign up (verification); popular regions often out of capacity",
    "link": "https://www.oracle.com/cloud/free/",
    "checked": "2026-11-13"
  },
  {
    "name": "AWS Free Tier",
    "category": "hosting",
    "verdict": "trial",
    "card_required": true,
    "limits": "Most offers last 12 months only; some services always-free",
    "catch": "Card required; after 12 months you get billed unless you shut everything down",
    "link": "https://aws.amazon.com/free/",
    "checked": "2026-11-13"
  },
  {
    "name": "Supabase",
    "category": "database",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "2 projects, 500 MB database, pauses after 1 week inactivity",
    "catch": "Project pauses if unused for 7 days — click to restore",
    "link": "https://supabase.com/pricing",
    "checked": "2026-11-13"
  },
  {
    "name": "MongoDB Atlas",
    "category": "database",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "512 MB cluster, shared",
    "catch": "Shared cluster is slow; fine for learning",
    "link": "https://www.mongodb.com/cloud/atlas",
    "checked": "2026-11-13"
  },
  {
    "name": "Neon",
    "category": "database",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "Serverless Postgres, ~0.5 GB storage, autosuspends",
    "catch": "Cold-start delay after inactivity; compute hours capped monthly",
    "link": "https://neon.com/pricing",
    "checked": "2026-11-13"
  },
  {
    "name": "Upstash",
    "category": "database",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "Serverless Redis, 10k commands/day free",
    "catch": "Per-command pricing means a popular app quietly exceeds the daily cap",
    "link": "https://upstash.com/pricing",
    "checked": "2026-11-13"
  },
  {
    "name": "Google AI Studio (Gemini API)",
    "category": "ai",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "Free tier with per-day request limits on Gemini models",
    "catch": "Free tier data may be used by Google for improvement — don't send sensitive prompts",
    "link": "https://aistudio.google.com/",
    "checked": "2026-11-13"
  },
  {
    "name": "Groq Cloud",
    "category": "ai",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "Free tier with rate limits, very fast LLMs",
    "catch": "Rate limits hit hard on free tier; needs monitoring",
    "link": "https://groq.com/",
    "checked": "2026-11-13"
  },
  {
    "name": "OpenRouter",
    "category": "ai",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "Many models have ':free' variants with daily request caps",
    "catch": "Free models get throttled and can disappear anytime; paid models need credits",
    "link": "https://openrouter.ai/",
    "checked": "2026-11-13"
  },
  {
    "name": "Resend",
    "category": "email",
    "verdict": "free-forever",
    "card_required": false,
    "limits": "100 emails/day, 3,000/month, 1 custom domain",
    "catch": "100/day sounds small but covers most hobby projects",
    "link": "https://resend.com/pricing",
    "checked": "2026-11-13"
  }
];
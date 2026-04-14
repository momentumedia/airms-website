# AIRMS Insurance Website — CLAUDE.md

## Project Overview
Production-ready Next.js website for AIRMS (airms.ca), a Toronto-based commercial insurance brokerage.

**Key Contact:** Kassa Kebede, VP Commercial Insurance — Kassa@airms.ca — 416-457-6557

## Tech Stack
- **Framework:** Next.js 16 App Router with TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Output:** Static export (`output: "export"`) — GitHub Pages / CDN ready

## Project Structure
```
src/
  app/              # App Router pages
    layout.tsx      # Root layout (Navbar, Footer, metadata, JSON-LD)
    page.tsx        # Home page
    about/page.tsx  # About AIRMS
    services/page.tsx
    team/page.tsx
    contact/page.tsx
    report/page.tsx # Website audit report
  components/       # Reusable UI components (all default exports)
    Navbar.tsx      # Fixed nav, mobile-responsive, scroll-aware
    Footer.tsx
    Hero.tsx        # Animated hero section ('use client')
    ServiceCard.tsx ('use client' for Framer Motion)
    TeamCard.tsx    ('use client')
    ContactForm.tsx ('use client' — has form state)
    ReportCard.tsx  ('use client')
    SectionHeader.tsx ('use client')
  data/             # Centralized content (no hardcoding in pages)
    company.ts      # Company info, stats, values
    services.ts     # 8 commercial insurance services
    team.ts         # Kassa Kebede full profile
    report.ts       # Audit report data (sections, issues, meta)
  types/index.ts    # Shared TypeScript interfaces
  lib/utils.ts      # basePath helper, cn() utility
```

## Commands
```bash
npm run dev       # Start development server
npm run build     # Production static export -> /out
npm run start     # Preview production build
npm run lint      # ESLint
```

## Design System
- **Background:** slate-950 / slate-900
- **Accent:** amber-400 / amber-500 (gold)
- **Text:** white / slate-300 / slate-400
- **Font:** Inter (Google Fonts via next/font)

## Key Conventions
- All components use **default exports**
- 'use client' only on components using hooks, state, or browser events
- All page content data lives in `src/data/` — edit there, not in page files
- Images: use `next/image` with `unoptimized: true` (static export requirement)
- basePath helper in `src/lib/utils.ts` for GitHub Pages deployment

## Pages
| Route | Description |
|-------|-------------|
| `/` | Home: Hero, stats, services grid, why-choose-us, CTA |
| `/about` | Company mission, values, timeline, Kassa intro |
| `/services` | All 8 services with features, industries, anchor links |
| `/team` | Kassa Kebede full profile with expertise tags |
| `/contact` | Form, contact details, map placeholder, FAQ |
| `/report` | Professional audit report of airms.ca with severity ratings |

## Deployment (GitHub Pages)
Set env var `NEXT_PUBLIC_BASE_PATH=/repo-name` if deploying to a subpath.
The `basePath` helper in `lib/utils.ts` prepends this to asset paths.

Build output is in `/out` after `npm run build`.

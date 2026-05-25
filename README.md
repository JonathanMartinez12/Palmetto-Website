# Palmetto Fire Services

Website for **Palmetto Fire Services** — life safety, fire alarm, and security integration for Myrtle Beach and the Grand Strand, part of the Atlantis Fire Protection family.

---

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with the custom Palmetto palette (Maroon / Cloud / Flame / Stone / Burnt / Light + Cream)
- **Google Fonts** (Playfair Display + Nunito Sans) via `<link>` preconnect
- **EmailJS** for contact form delivery (`@emailjs/browser`)
- Pure-CSS keyframe animations (no Framer Motion)
- Static `generateStaticParams` for all service + application routes

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in EmailJS IDs
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See `.env.example`. The contact form degrades gracefully to a "sent" state if EmailJS env vars are missing — useful for local previews before keys are provisioned.

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service connecting to the inbox |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Template used to render the email |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Public (domain-scoped) key |

## Brand Palette

Defined in `tailwind.config.ts`:

| Token | Hex | Use |
|---|---|---|
| `maroon` | `#324173` | Primary — headings, nav, dark chrome |
| `cloud` | `#C73629` | Accent / CTA red |
| `flame` | `#E4AD3C` | Warm gold accent (utility hover, labels) |
| `burnt` | `#C75B24` | Secondary warm accent |
| `stone` | `#687078` | Neutral gray |
| `light` | `#8FBC9A` | Soft sage (logo accent) |
| `cream` | `#FAF8F5` | Off-white panel background |

Each color is exposed with a full 50–900 scale.

## Project Structure

```
app/
  page.tsx                     Home (hero carousel, services, applications, why, CTA)
  about/
    page.tsx                   About — Our Story (with partner teaser)
    our-partner/page.tsx       Atlantis Fire dedicated subpage
  services/
    page.tsx                   Services index
    [slug]/page.tsx            Dynamic service detail (8 services)
  applications/
    page.tsx                   Applications index
    [slug]/page.tsx            Dynamic application detail (7 applications)
  careers/                     Careers
  contact/                     Contact form + info + embedded map
  sitemap.ts                   Dynamic sitemap
  robots.ts                    robots.txt
  not-found.tsx                404
  layout.tsx                   Root layout, metadata, fonts
  globals.css                  Tailwind + typography classes + keyframes

components/
  layout/                      Container, Header (utility bar + dropdowns), Footer
  sections/                    HeroCarousel, PageHero, ServicesGrid, ApplicationsGrid,
                               WhyPalmetto, ServiceAreaCallout, CTASection,
                               ContactForm, ContactInfo
  ui/                          Button, Card, Input, Textarea, Select

lib/
  data/
    siteConfig.ts              Contact info, navigation, service areas, portal links
    services.ts                8 service definitions
    applications.ts            7 application definitions
  utils.ts                     Small helpers (cn, email, phone format)

public/
  palmetto-logo.svg            Primary logo (light bg) — placeholder, swap with real asset
  palmetto-logo-reverse.svg    Reverse logo (dark bg) — placeholder, swap with real asset
  manifest.json                PWA manifest
  images/                      Hero, service, and application photography — TODO: provide assets
```

## Asset TODOs

The codebase references the following assets. Drop the real files into `public/` (or `public/images/`) before launch — paths are wired up and waiting.

- **Logos:** `public/palmetto-logo.svg` (light bg) and `public/palmetto-logo-reverse.svg` (dark bg)
- **Hero carousel:** `public/images/hero-alarm.jpg`, `hero-mass-notification.jpg`, `hero-team.jpg`
- **Homepage About image:** `public/images/who-we-are.jpg`
- **About page image:** `public/images/about-story.jpg`
- **Atlantis partner image:** `public/images/atlantis-partner.jpg`
- **Service detail images:** `public/images/service-<slug>.jpg` for each service in `lib/data/services.ts`
- **Application detail images:** `public/images/application-<slug>.jpg` for each application in `lib/data/applications.ts`
- **PWA icons:** `public/icons/icon-192x192.png` and `icon-512x512.png`
- **OG image:** `public/images/og-image.png`
- **Favicon + apple-touch-icon:** `public/favicon.ico`, `public/apple-touch-icon.png`

## Content TODOs

Search the codebase for `TODO: real copy from client` for sections waiting on final copy. Also pending:

- **Customer Portal + Payment Portal links** — `lib/data/siteConfig.ts` has placeholder `#` hrefs. Replace once the ServiceTrade and payment portal URLs are confirmed.
- **Atlantis partner story** — `app/about/our-partner/page.tsx` has placeholder narrative.
- **Job listings** — `app/careers/page.tsx` shows an "always hiring" callout. Swap to a live listings component when roles are defined.

# OSTOIA&CO — Website

Premium digital agency website for boutique travel brands. Built with Next.js 14, TypeScript, Tailwind CSS, and GSAP.

## Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS with custom design tokens
- **Animations** — GSAP (dynamic imports, IntersectionObserver-triggered)
- **Smooth Scroll** — Lenis
- **Fonts** — Cormorant Garamond, Inter, JetBrains Mono (via next/font)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/work` | Selected work / case studies list |
| `/work/routes-roads` | Routes&Roads case study |
| `/work/localway-sicily` | LocalWay Sicily case study |
| `/work/led-travel` | LED Travel case study |
| `/services` | Services (Brand Architecture, Conversion Design, Digital Authority, Full Package) |
| `/about` | About page |
| `/journal` | Journal / blog list |
| `/journal/[slug]` | Article page |
| `/contact` | Contact / project inquiry |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
npm run start
```

## Deploy

Optimised for deployment on [Vercel](https://vercel.com). Connect the repo and deploy — zero configuration required.

## Design Tokens

Custom Tailwind tokens defined in `tailwind.config.ts`:

- `navy-950 / navy-900 / navy-800` — dark navy backgrounds
- `gold` — `#C9A84C` brand accent
- `cream` — `#F5F0E8` light text
- `navy-glass` — frosted glass navbar background

## Project Structure

```
app/              Next.js App Router pages
components/       All React components
lib/              Data (journal articles)
public/           Static assets (llms.txt, etc.)
```

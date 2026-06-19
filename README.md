# Tharun Gowda P R — Portfolio

Personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

**Live**: [tharun-gowda-pr.vercel.app](https://tharun-gowda-pr.vercel.app)

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans + Geist Mono
- **Deployment**: Vercel (recommended)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

All content lives in one place — edit `src/lib/data.ts`:

- Personal info (name, email, LinkedIn, GitHub)
- Projects (title, description, stack, links)
- Skills
- Experience & leadership
- Education & certifications

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo — Vercel auto-detects Next.js
4. Click Deploy

### Option 3 — Netlify
```bash
npm run build
# Deploy the `.next` folder via Netlify dashboard
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Main page — assembles all sections
│   └── globals.css     # Design tokens (CSS variables)
├── components/
│   ├── layout/         # Navbar, Footer, MobileNav
│   ├── sections/       # Hero, Projects, Skills, Experience, Contact
│   └── ui/             # Badge (reusable primitives)
├── hooks/              # useScrollProgress, useActiveSection
└── lib/
    ├── data.ts         # ← Edit this to update content
    └── utils.ts        # cn() helper
```

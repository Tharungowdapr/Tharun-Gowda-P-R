# Development Guide

This file contains setup, customization, and deployment instructions for the portfolio repository. The root [README](README.md) is the public-facing portfolio profile.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with CSS variables
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans and Geist Mono
- **Deployment:** Vercel

## Run Locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm run start
```

## Update Portfolio Content

Most portfolio content is centralized in `src/lib/data.ts`. Update the relevant exports there:

- `personal`: name, role, contact links, bio, and tagline
- `projects`: project descriptions, highlights, technology stacks, and links
- `skills`: technical skill categories
- `experience`: leadership and experience entries
- `education`: academic details and scores
- `certifications`: certification entries
- `achievements`: notable achievements

Keep this data accurate and consistent with the public portfolio.

## Deploy

### Vercel

1. Import this GitHub repository into [Vercel](https://vercel.com).
2. Keep the project root at the repository root.
3. Confirm the framework is detected as Next.js.
4. Deploy the project.

### Other platforms

Run `npm run build` and follow the platform's Next.js deployment instructions. Do not upload the `.next` directory as a static website; this project uses Next.js.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Main page and section composition
│   └── globals.css     # Design tokens and global styles
├── components/
│   ├── layout/         # Navbar, footer, mobile navigation
│   ├── sections/       # Hero, projects, skills, experience, contact
│   └── ui/             # Reusable UI primitives
├── hooks/              # Scroll and active-section hooks
└── lib/
    ├── data.ts         # Portfolio content
    └── utils.ts        # Shared utilities
```

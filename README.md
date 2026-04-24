# Tobams Group — Training and Development

A pixel-perfect rebuild of the **Training and Development** page for Tobams Group, implemented from a Figma design specification.

## 🔗 Links

- **Live Site**: [Vercel Deployment](https://tobbams-project-assessment.vercel.app)
- **Figma Design**: [Frontend Intern Assessment](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠 Tech Stack

| Technology       | Version  | Purpose                                    |
| ---------------- | -------- | ------------------------------------------ |
| **Next.js**      | 16.x     | App Router, SSR, Image optimization        |
| **Tailwind CSS** | v4       | CSS-first config (`@import "tailwindcss"`) |
| **TypeScript**   | 5.x      | Type safety                                |
| **next/image**   | built-in | Optimized image loading                    |

## 🎨 Design Decisions

- **Fonts**: Nunito (headings, 600 weight, italic where specified) + Nunito Sans (body/UI, 400/600 weights) loaded via `<link>` tag in layout.tsx
- **Tailwind CSS v4**: Uses CSS-first configuration in `globals.css` with `@theme inline {}` — no `tailwind.config.js`
- **Color System**: Primary brand color `#571244`, secondary red `#EF4353` (Take Assessment only), dark card bg `#2C0922`, benefit pills `#8F6182`
- **Asymmetric border-radius**: Each training image has its own unique border-radius from Figma:
  - Corporate: `56px 24px 23px 12px`
  - Personalised: `33px 8px 8px 8px`
  - Capacity: `40px 8px 8px 8px`
- **Training Consultant grid**: 2×2 CSS grid with shared `#2C0922` background and `border-r`/`border-b` internal dividers using `#571244`
- **Testimonials**: Horizontal scrolling card row with prev/next pagination, showing 3 cards on desktop, avatar circles with initials (not images)
- **No UI libraries**: Zero dependency on Bootstrap, MUI, or any component library — pure Tailwind utilities
- **Accessibility**: Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`), `aria-labelledby` on all sections, `aria-label` on icon buttons, `focus-visible` ring styles

## 📁 Component Structure

```
src/
├── app/
│   ├── layout.tsx        — Google Fonts <link>, metadata
│   ├── page.tsx          — Page composition
│   └── globals.css       — Tailwind v4 config + theme tokens
└── components/
    ├── Navbar.tsx         — Sticky two-row navbar with mobile menu
    ├── Hero.tsx           — Full-width hero with black overlay
    ├── LearningManagement.tsx — LMS section with circular image
    ├── CorporateTrainings.tsx — Text left, image right (56/24/23/12 radius)
    ├── PersonalisedTraining.tsx — Image left, text right (33/8/8/8 radius)
    ├── CapacityDevelopment.tsx — Text left, image right (40/8/8/8 radius)
    ├── ManagementDevelopment.tsx — Dark card with benefit pills
    ├── TransformationHub.tsx — Card with blue CEO label + skills grid
    ├── TrainingConsultant.tsx — 2×2 feature grid with dividers
    ├── CTABanner.tsx      — Centered dark banner
    ├── Testimonials.tsx   — Horizontal scroll with pagination
    ├── GetInTouch.tsx     — Dark strip CTA
    ├── Footer.tsx         — 4-column footer with offices
    └── LightningList.tsx  — Reusable lightning bolt list
```

## 🤖 AI Disclosure

Built with AI assistance (Claude/Antigravity) as a development tool. All code was reviewed and validated for correctness.

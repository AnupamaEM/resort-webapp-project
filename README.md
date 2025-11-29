# Resort Web App

Luxury resort landing experience built with Vite, React, TypeScript, and Tailwind CSS. The site highlights hero imagery, curated services, a gallery lightbox, and a floating booking CTA.

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn-inspired component patterns

## Getting Started
```bash
git clone <repo-url>
cd resort-webapp-project
npm install
npm run dev
```

## Available Scripts
- `npm run dev` – start the Vite dev server
- `npm run build` – create a production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Project Structure
```
src/
  components/    // Navbar, hero, services, gallery, footer, etc.
  pages/         // Route-level components
  assets/        // Image assets
```

## Deployment
Any static host that supports Vite builds (Netlify, Vercel, Cloudflare Pages, etc.) can deploy the generated `dist/` folder. Build using `npm run build` and upload the output directory to your hosting provider of choice.

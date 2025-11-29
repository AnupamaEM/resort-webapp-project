# Resort Web App

Luxury resort landing experience built with Vite, React, TypeScript, and Tailwind CSS. The site highlights hero imagery, curated services, a gallery lightbox, and a floating booking CTA that opens a concierge-style booking flow plus a `/admin` dashboard for reservation oversight.

## Features
- Cinematic hero, services grid, and floating “Book Now” button that opens a Radix-powered modal.
- Booking form uses React Hook Form + Zod validation, toast feedback, and React Query cache invalidation.
- Animated mosaic gallery with lightbox experience driven by IntersectionObserver.
- `/admin` route surfaces bookings with status pills, date formatting, and graceful loading/error states.
- Shared Tailwind design system inspired by shadcn/ui plus utility hooks for toasts, tooltips, and modal state.

## Tech Stack
- React 18 + TypeScript + React Router
- Vite
- Tailwind CSS + custom shadcn-inspired UI primitives
- React Query, React Hook Form, Zod, Radix UI

## Requirements
- Node.js 18+
- npm 9+

## Getting Started
```bash
git clone <repo-url>
cd resort-webapp-project
npm install
cp .env.example .env.local   # or create the file manually (see below)
npm run dev
```

## Environment & API
The frontend talks to a REST API defined in `src/services/api.ts`. Configure the base URL through Vite environment variables:

```bash
# .env.local
VITE_API_BASE_URL=http://localhost:5001
```

- If `VITE_API_BASE_URL` is omitted, the app falls back to `http://localhost:5001`.
- The backend should expose:
  - `POST /api/bookings` accepting the payload defined in `src/types/booking.ts`
  - `GET /api/bookings` returning an array of bookings with `_id`, `status`, `createdAt`, `updatedAt`
- Successful submissions invalidate the React Query `["bookings"]` cache so the admin table refreshes automatically.

## Available Scripts
- `npm run dev` – start the Vite dev server
- `npm run build` – create a production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Project Structure
```
src/
  assets/         # Hero + gallery imagery
  components/     # Layout + feature sections, dialogs, forms, UI primitives
  hooks/          # Booking modal + shared hooks
  pages/          # Route-level components (Index, Admin, NotFound)
  services/       # API clients
  types/          # Shared TypeScript contracts
  index.css
```

## Deployment
The project builds a static bundle in `dist/`, so any static host (Vercel, Netlify, Cloudflare Pages, etc.) can serve it.

1. `npm run build`
2. Upload `dist/` or point your host to run the build command automatically.
3. Configure `VITE_API_BASE_URL` in your hosting dashboard so the frontend can reach your live backend (Render, Fly.io, Railway, AWS, etc.).

> Tip: When deploying preview branches, point the env var to a staging API to keep test bookings separate from production data.

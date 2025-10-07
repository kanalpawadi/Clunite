## Clunite — Campus Event & Club Management (Next.js + Supabase)

Clunite helps students discover events and clubs, and helps organizers host and manage them. This repository is a single Next.js 14 app with Supabase, Tailwind, and shadcn/ui.

### Highlights
- Student and Organizer dashboards under `app/dashboard/*`
- Browse and join clubs, view events, register, and manage hosting
- Supabase for data (users, clubs, events, memberships, registrations)
- Vercel Blob for image uploads via `POST /api/upload`

## Tech Stack
- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- Supabase (database + client)
- Vercel (hosting) + Vercel Analytics

## Project Structure
```
.
├─ app/
│  ├─ api/
│  │  └─ upload/route.ts           # Image upload to Vercel Blob
│  ├─ dashboard/
│  │  ├─ layout.tsx
│  │  ├─ organizer/
│  │  │  ├─ host/ (create/verify)
│  │  │  └─ analytics/
│  │  └─ student/
│  │     ├─ browse/
│  │     ├─ events/[id]/
│  │     └─ my-clubs/
│  ├─ globals.css
│  ├─ layout.tsx                    # Root layout
│  └─ page.tsx                      # Landing page
├─ components/
│  ├─ app-sidebar.tsx
│  ├─ dashboard-header.tsx
│  └─ ui/*                          # shadcn/ui components
├─ hooks/
│  ├─ useClubs.ts                   # clubs + memberships helpers
│  └─ useEvents.ts                  # events querying helpers
├─ lib/
│  ├─ supabase.ts                   # supabase client + typed models
│  └─ utils.ts                      # `cn` tailwind class merge
├─ public/                          # static assets
├─ tailwind.config.ts
├─ next.config.mjs
├─ tsconfig.json
└─ package.json
```

## Features (summary)
- Student: discover events, see details, join clubs, track registrations
- Organizer: verify as host, create events, view analytics pages
- Shared: responsive UI, theming, prebuilt components (shadcn/ui)

## Requirements
- Node.js 18+
- Supabase project (URL + anon key)
- Vercel Blob token (for image uploads)

## Setup
1) Install dependencies
```bash
npm install
# or
pnpm install
```

2) Configure environment variables (e.g. `.env.local`)
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
```

3) Run the dev server
```bash
npm run dev
# or
pnpm dev
```
Open http://localhost:3000

## Scripts
- `dev`: start Next dev server
- `build`: production build
- `start`: start production server
- `lint`: run ESLint

## API
- `POST /api/upload`: multipart/form-data with `file` (image), returns `{ url }`

## Data Model (from `lib/supabase.ts`)
- `users`: id, email, full_name, role, college, avatar_url, bio
- `clubs`: id, name, category, college, media, counts, verification, metadata
- `events`: id, title, description, club_id, dates, status, tags, image_url, etc.
- `club_memberships`: user_id, club_id, role
- `event_registrations`: user_id, event_id, status, team_name

## Deployment
- Deploy on Vercel. Set env vars there:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `BLOB_READ_WRITE_TOKEN`
- Images are uploaded to Vercel Blob via the API route.

## Notes
- `next.config.mjs` ignores TypeScript/ESLint build errors and uses unoptimized images for easier local/dev workflows.
- Tailwind is configured for `app`, `components`, and `pages` directories; shadcn/ui tokens in `components.json`.

## License
MIT

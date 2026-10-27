# Unsplash Landing Page Clone

A responsive recreation of the Unsplash landing page, built with Next.js (App Router), TypeScript, and Tailwind CSS, with a working email signup backed by Supabase.

**Live demo:** https://unsplash-keisei.vercel.app/

> **Screenshot:** _add a screenshot here (e.g. `docs/screenshot.png`)._ The repo doesn't have one yet.

## Features

- **Single-page layout** that mirrors Unsplash: sticky navbar with search and topic tabs, hero, sidebar, topics, explore grid, community, subscribe, and footer sections.
- **Typed, props-driven components.** Each section is its own component in `components/`, and `app/page.tsx` passes it content through TypeScript interfaces.
- **Responsive design** using Tailwind breakpoints, plus a collapsible mobile menu.
- **Smooth scrolling** from in-page anchor links (`scroll-smooth` on `<html>`).
- **Optimized images** with `next/image` (`PhotoTile`) and local assets in `public/images/`.
- **Email subscription** in two steps:
  1. The client checks the email format, then submits to **Web3Forms**, which sends the email notification.
  2. The client then POSTs to `/api/subscribe`. That route checks the email again, normalizes it, and upserts it into a Supabase `subscribers` table. Duplicates are ignored.
- **Clear form states** (idle / loading / success / error) in an `aria-live` region. The API returns specific errors for a missing config, an unreachable database, or a missing table.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Supabase (`@supabase/supabase-js`, server-side service-role client)
- Web3Forms
- lucide-react icons
- Deployed on Vercel

## How it works

```
app/
  page.tsx                 # page content passed as props to each section
  layout.tsx               # metadata, smooth scroll
  api/subscribe/route.ts   # POST: validate + upsert email into Supabase
components/                # Navbar, Hero, Sidebar, TopicsSection, ExploreSection,
                           # PhotoTile, CommunitySection, SubscribeSection, Footer
lib/supabase.ts            # lazily created Supabase admin client (server only)
public/images/             # local image assets
```

The Supabase service-role key is read only on the server (`lib/supabase.ts`). The Web3Forms key is public on purpose, because Web3Forms requires submits from the client.

## Getting started

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Access key from [Web3Forms](https://web3forms.com/) |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service-role key (server only) |

Create the table in the Supabase SQL Editor:

```sql
create table public.subscribers (
  id bigint generated always as identity primary key,
  email text unique not null,
  created_at timestamptz default now() not null
);
```

Row Level Security can stay on, because the app writes through the service-role key.

```bash
npm run dev     # http://localhost:3000
npm run build && npm start
npm run lint
```

## Background

Built as a course project (WD-301, Advanced Web Development) at Cornerstone International Community College (CICCC). This is a learning exercise and is not affiliated with Unsplash.

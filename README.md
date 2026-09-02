# Our Story — Six Months of Us

A private, Netflix-inspired streaming platform that streams a real relationship's memories instead of movies and shows. Built as a 6-month anniversary gift.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Adding Photos

Drop photos into the appropriate folder:

```
public/media/
  hero/
    poster.jpg          ← Hero background fallback image
  2-months/
    cover.jpg           ← Card cover image
    photo-01.jpg        ← Timeline photos
    photo-02.jpg
  4-months/
    cover.jpg
    photo-01.jpg
    photo-02.jpg
  6-months/
    cover.jpg
    photo-01.jpg
    photo-02.jpg
    photo-03.jpg
```

After adding photos, update `src/data/memories.ts` to reference them.

**Recommended:** Use `.jpg` or `.webp` format, max 1920px wide, compressed to under 500KB each.

## Adding Videos

Drop video files into the appropriate folder:

```
public/media/
  hero/
    background-01.mp4   ← Hero background videos (autoplay, muted)
    background-02.mp4
    background-03.mp4
  2-months/
    video-01.mp4        ← Timeline videos
  4-months/
    video-01.mp4
  6-months/
    video-01.mp4
    video-02.mp4
```

After adding videos, update `src/data/memories.ts` to reference them.

**Recommended:** Use `.mp4` format (H.264), 1920x1080 or smaller, under 50MB each.

### Hero Background Videos

The hero section supports a video slideshow with crossfade transitions. Add 1-3 videos:

- `background-01.mp4` — First video (plays immediately)
- `background-02.mp4` — Crossfades in after first
- `background-03.mp4` — Crossfades in after second, then loops back to first

If you only have one video, it simply loops. The system handles crossfading automatically.

## Changing Names & Personalization

All personalization lives in `src/config/site.ts`:

```ts
export const siteConfig = {
  title: "Our Story",              // Platform name
  subtitle: "Six Months of Us",    // Tagline
  partnerName: "Your Partner",     // Partner's name
  anniversaryDate: "February 14, 2026",
  // ... more fields
};
```

## Changing Messages

Edit `src/config/site.ts` to change:

- **Hero copy:** `heroCta.primary`, `heroCta.secondary`, `tagline`
- **Intro lines:** `introLines.line1`, `introLines.title`, `introLines.emotional`
- **Final ending message:** `finalMessage`, `seasonTag`

## Adding a New Memory / Milestone

1. **Add media files** to `public/media/<milestone-id>/`

2. **Edit `src/data/memories.ts`** and add a new `Memory` object:

```ts
{
  id: "8-months",           // URL-friendly ID
  milestone: "8 MONTHS",    // Display label
  title: "Still Going",     // Card title
  subtitle: "Episode 04",   // Episode label
  cover: "/media/8-months/cover.jpg",
  description: "The story continues.",
  episodeNumber: 4,
  items: [
    {
      type: "text",
      date: "October 14, 2026",
      title: "A New Chapter",
      description: "Write your memory here.",
    },
    {
      type: "image",
      src: "/media/8-months/photo-01.jpg",
      alt: "Description of the photo",
      date: "October 14, 2026",
    },
    {
      type: "video",
      src: "/media/8-months/video-01.mp4",
      poster: "/media/8-months/poster-01.jpg",
      alt: "Video description",
      date: "October 14, 2026",
    },
  ],
},
```

3. **Add a route** by creating `src/app/memories/8-months/page.tsx` — but the dynamic route `[id]` already handles this automatically. Just update `siteConfig.memories` in `src/config/site.ts`:

```ts
"8-months": {
  milestone: "8 MONTHS",
  title: "Still Going",
  subtitle: "Episode 04",
  description: "The story continues.",
  episodeNumber: 4,
},
```

## Changing the Hero Background Video(s)

Replace or add videos in `public/media/hero/`:

- `background-01.mp4` through `background-03.mp4`
- `poster.jpg` — Fallback image shown while videos load

The crossfade happens automatically. Edit `heroVideos` array in `src/components/HeroSection.tsx` to change the order or add more clips.

## Project Structure

```
src/
  app/
    layout.tsx              ← Root layout
    page.tsx                ← Homepage (intro + hero + cards)
    not-found.tsx           ← 404 page
    memories/
      [id]/
        page.tsx            ← Memory experience page (dynamic route)
  components/
    IntroSequence.tsx       ← 6-stage cinematic intro
    HeroSection.tsx         ← Hero with video slideshow
    Navbar.tsx              ← Streaming-style navigation
    MemoryGrid.tsx          ← 3-card grid layout
    MemoryCard.tsx          ← Individual card with hover effects
    PhotoSlideshow.tsx      ← Autoplaying photo carousel
    VideoPlayer.tsx         ← Custom HTML5 video player
    MediaItem.tsx           ← Renders text/image/video items
    MemoryTimeline.tsx      ← Scroll-driven timeline
    FinaleSequence.tsx      ← 6-month emotional ending
    MusicToggle.tsx         ← Audio toggle (muted by default)
  lib/
    animations.ts           ← Shared Framer Motion variants
  config/
    site.ts                 ← All personalization lives here
  types/
    memory.ts               ← TypeScript types
  data/
    memories.ts             ← All memory content (data-driven)
public/
  media/                    ← All photos and videos
    hero/
    2-months/
    4-months/
    6-months/
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Framework: Next.js (auto-detected)
4. Deploy

### Other Platforms

```bash
npm run build    # Creates .next/ output
npm run start    # Starts production server on port 3000
```

The app is a standard Next.js app — deploy anywhere that supports Node.js.

## Design System

Built with:
- **Palette:** Dark cinematic (#050505 base, #B0203A crimson accent)
- **Typography:** Playfair Display (headings) + Inter (body)
- **Motion:** Framer Motion with spring easing, cinematic transitions
- **UI/UX Pro Max:** Design guidance applied via the skill's reasoning engine

# RELATIONSHIP_NETFLIX_BUILD.md
### Master Build Specification for a Cinematic Relationship Streaming Experience

> **Audience:** This document is written for an autonomous LLM coding agent (e.g. Claude Code, Cursor, OpenCode).
> **Goal:** Build a private, Netflix-inspired streaming platform that streams a real relationship's memories instead of movies and shows — created as a 6‑month anniversary gift.
> **Tone of the final product:** cinematic, romantic, premium, emotional, modern, intimate, nostalgic, polished, interactive. **Not** a generic Valentine's template.

---

## 0. How to Use This Document

Work through this file top to bottom. Section 35 ("Development Process") gives you the exact build order — follow it. Do not skip steps, and do not stop at a basic prototype (see Section 37). Treat every checkbox in Section 41 as a hard requirement before declaring the project done.

If the agent encounters ambiguity, it should make the most cinematically appropriate decision and document that decision in the README rather than blocking on it.

---

## 1. Project Concept

**Elevator pitch:** *"Netflix, but instead of movies and TV shows, the platform streams our relationship and memories."*

Structural conceit:
- The "platform" is a private streaming service built for two people.
- "Shows" are relationship milestones (2 months, 4 months, 6 months).
- Each milestone is an "Episode" of "Season 1" of "our story."
- The 6-month mark is the emotional finale — treat it with the most polish.

Full experience flow the agent must implement:

```
OPEN WEBSITE
     ↓
CINEMATIC INTRO (6 stages, ~5–8s)
     ↓
MAIN STREAMING PLATFORM (hero + nav)
     ↓
CINEMATIC BACKGROUND VIDEO SLIDESHOW
     ↓
3 MEMORY CARDS (2 / 4 / 6 MONTHS)
     ↓
SELECT A MEMORY
     ↓
CINEMATIC MEMORY EXPERIENCE
     ↓
VIDEO + PHOTO SLIDESHOW + TEXT/DATES/MEMORIES
     ↓
RETURN TO HOME
```

This must feel like one continuous story, not a set of disconnected pages.

---

## 2. Required Preliminary Skill Installation

Before writing any UI code, install and consult this repository:

```
https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
```

Steps:

1. Fetch the repository and read its **current** README/installation instructions — do not assume a fixed install process, since it may have changed.
2. Install it exactly as its own documentation specifies.
3. After installation, locate and open whatever guidance files it provides (design tokens, UX heuristics, component patterns, typography rules, spacing scales, motion guidance, accessibility checklists, etc.).
4. Actually apply this guidance to real decisions in this build: color system, spacing scale, typographic scale, component patterns, animation timing/easing, and accessibility patterns. Cross-reference each major design decision in this spec (palette, type, spacing, motion) against the skill's recommendations and adjust where they conflict.
5. Do **not** simply state "the skill was installed" without using it — every major visual/UX decision downstream in this build should be traceable to either this spec or the skill's guidance.

If installation genuinely fails (network/access issue), document the failure clearly in the README, fall back to the design guidance already embedded in this spec (Sections 31–32), and continue the build — do not block indefinitely on this step.

---

## 3. Recommended Technology Stack

If starting a project from scratch, use:

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Motion** (Framer Motion) for animation and shared-layout transitions

If an existing project is present in the working directory, **inspect it first**. Do not blow away an existing stack or dependency set unnecessarily — adapt this spec to the existing architecture where reasonable, and only introduce new dependencies where the existing stack can't support a required feature (e.g. shared layout transitions).

---

## 4. Branding — Original Identity Only

This is a **hard constraint**:

- Do **not** use the Netflix logo, wordmark, color-exact UI, or any Netflix copyrighted graphic asset.
- Do **not** build an exact clone of the Netflix interface.
- Do build an **original fictional streaming brand** inspired by the general "premium streaming platform" genre (dark UI, hero carousel, poster cards, episodic structure).

Choose one platform name (or make it configurable via `siteConfig`, see Section 21). Candidates:

```
OURFLIX
LOVEFLIX
US ORIGINALS
OUR STORY
STORY OF US
```

Default recommendation: **"OUR STORY"** as the platform name, with "Six Months of Us" as the tagline — but expose this in config so it's trivially changeable.

---

## 5. Visual Design System

### 5.1 Palette

Dark cinematic base, used consistently everywhere except sparing accent use:

```
Background layers:
  #050505  (deepest)
  #080808
  #0D0D0D  (elevated surfaces / cards)

Text:
  #FFFFFF  (primary)
  #B3B3B3  (secondary / muted)

Accent (primary):
  deep crimson / romantic red (e.g. #B0203A – exact hex may be tuned via the UI/UX skill)

Optional secondary accents (use sparingly, not everywhere):
  soft pink
  warm gold (for the 6-month "finale" treatment specifically)
```

Explicit rule: **the site should not read as "everything pink."** Red/crimson is the primary romantic accent; pink and gold are reserved for specific emotional beats (e.g. the finale ending, the heart icon).

### 5.2 Typography

- **UI/body/interface text:** a modern grotesk sans — Inter, Geist, or equivalent.
- **Emotional/title text** (intro lines, episode titles, the finale message): an elegant serif/display face — Playfair Display, Cormorant Garamond, or an equivalent editorial serif.
- Establish a clear modular type scale (e.g. via the UI/UX skill's recommended scale) and use it consistently — no ad hoc font-sizes scattered through components.
- Use generous letter-spacing on intro/title text to reinforce the "cinematic opening credits" feel.

### 5.3 Design Principles

- Premium, dark, romantic, cinematic, mature — not cutesy, not cluttered.
- Do not overuse hearts or romantic clichés. One heart icon in the nav / finale is enough.
- Do not make every element move. Reserve motion for moments that matter (see Section 25).
- Whitespace and darkness are part of the aesthetic — do not overcrowd screens.

---

## 6. Cinematic Intro Sequence

The site must **never** open directly on the homepage. It opens on an intro sequence of **~6 distinct animation stages**, lasting **approximately 5–8 seconds total** (excluding user-triggered skip). It should feel like the opening credits of a romantic film.

### Stage 1 — Black Screen / Ignition
- Near-black screen (`#050505` or darker).
- A single small point of light or glow fades in, subtly pulses or grows.
- This establishes stillness before the story begins.

### Stage 2 — First Message
- Fade in a short line, e.g.:
  ```
  A story worth remembering...
  ```
- Elegant serif typography, wide letter-spacing, slight upward drift as it fades in, then fades out.

### Stage 3 — Story Title
- Reveal the platform/story title as a "movie title" moment, e.g.:
  ```
  OUR STORY
  ```
  or
  ```
  THE STORY OF US
  ```
- Bold, large, centered, brief hold, then transitions out (not an abrupt cut — cross-dissolve or scale-out).

### Stage 4 — Relationship Timeline Teaser
- Briefly animate the three milestones appearing in sequence:
  ```
  2 MONTHS
        ↓
  4 MONTHS
        ↓
  6 MONTHS
  ```
- Each line reveals with a short stagger (e.g. 150–250ms between each), reinforcing that this is a journey with chapters.

### Stage 5 — Emotional Statement
- Reveal a short emotional line, configurable, defaulting to something like:
  ```
  Six months.
  Countless memories.
  One story.
  ```
- Each line can reveal independently for rhythm.

### Stage 6 — Enter the Platform
- Cinematic hand-off into the homepage:
  ```
  intro text fades
        ↓
  background expands / brightens
        ↓
  hero video fades in
        ↓
  navigation fades/slides in
        ↓
  memory cards fade/stagger in
  ```
- This should not feel like a hard page navigation — it's a continuous transition from intro to homepage, ideally using shared opacity/scale transitions rather than a route change with no transition.

### Skip Intro

- Provide a subtle **"Skip Intro"** control, positioned in a corner in a manner reminiscent of (but not copied from) familiar streaming-platform skip interactions.
- It should be unobtrusive — low opacity until hovered/focused, always keyboard-accessible.
- Clicking it immediately (but smoothly — not an instant hard cut) transitions from wherever the intro currently is straight to the homepage, reusing the Stage 6 transition logic where possible.
- The intro should only play once per session by default (store a session flag) — returning to `/` mid-session should not force the visitor through the intro again unless they explicitly navigate to a "replay intro" affordance if you choose to add one.

---

## 7. Homepage / Main Platform

### 7.1 Hero Background — Video Slideshow

The homepage's hero must support a **cinematic background video slideshow**, not just a single static video:

```
video 1 → crossfade → video 2 → crossfade → video 3 → (loop back to video 1)
```

Requirements:
- Each background video autoplays, is muted by default, and loops or hands off naturally to the next.
- Crossfade transitions between clips (opacity cross-dissolve), not hard cuts.
- Intelligent preloading: only the active clip and the *next* clip should be aggressively loaded; do not force-load every hero video simultaneously.
- A poster/fallback image must be shown while video loads or if video fails.
- The system must work correctly with just **one** hero video (no crossfade partner needed — it simply loops).
- Layer dark cinematic gradient overlays over the video:
  ```
  TOP    → dark gradient (protects nav legibility)
  CENTER → video, minimally obscured
  BOTTOM → dark fade (protects hero text / blends into page background)
  ```

### 7.2 Hero Content

Overlay cinematic hero copy on the video, e.g.:

```
OUR STORY

Six Months of Us

A collection of moments, memories,
adventures, and everything in between.
```

- Keep copy short — the video is the visual focus, not a wall of text.
- Include two primary CTAs, e.g.:
  ```
  ▶ Play Our Story
  ♡ Favorite Moments
  ```
- All hero copy must be sourced from `siteConfig` (Section 9), not hardcoded.

### 7.3 Navigation

Minimal streaming-style navbar, e.g.:

```
OUR STORY        Home   Memories   6 Months   ♡
```

Behavior:
- Transparent over the hero at the top of the page.
- Gains a darker background (and optionally backdrop-blur) once the user scrolls.
- Fully responsive — collapses to a simplified/mobile-friendly layout on small screens.
- Fully keyboard accessible with visible focus states.
- Subtle enter animation on load; no continuous motion once settled.

Exact spacing/sizing/breakpoints should follow the UI/UX skill's guidance where available.

### 7.4 Three Memory Cards

The homepage must present **exactly three primary memory cards**, representing the 2-month, 4-month, and 6-month milestones. These are the platform's main interactive elements — treat them like premium streaming posters.

Each card includes:
- Cover image
- Milestone label (e.g. "2 MONTHS")
- Title (e.g. "The Beginning")
- Short description
- Play icon
- Gradient overlay for text legibility over the cover image

```
┌───────────────────────────┐
│                            │
│        COVER PHOTO         │
│                            │
│              ▶              │
│                            │
├───────────────────────────┤
│  2 MONTHS                  │
│  The Beginning              │
└───────────────────────────┘
```

**Card hover (desktop):**
- Slight scale-up
- Slight upward translation
- Increased shadow depth
- Reveal of secondary info (short description) and a visible play affordance
- Slight brightening of the cover image
- Subtle de-emphasis (e.g. reduced opacity/scale) of sibling cards to draw focus — keep this subtle, not distracting

**Card click:**
This must **not** feel like a normal page navigation. Implement a cinematic transition, conceptually:

```
CARD CLICK
    ↓
CARD EXPANDS
    ↓
BACKGROUND DARKENS
    ↓
COVER IMAGE EXPANDS TO FILL VIEW
    ↓
MEMORY EXPERIENCE OPENS
```

Use Motion's shared-layout-transition capabilities (`layoutId` or equivalent) so the clicked card's cover image visually morphs into the memory experience's hero image, rather than being replaced by an unrelated new element.

---

## 8. Memory Experiences (Milestone Pages)

Each milestone gets its own route and its own full cinematic "episode" experience.

### 8.1 Episode 01 — 2 Months — "The Beginning"

- Suggested title treatment: `EPISODE 01 — THE BEGINNING`
- Tone: nostalgic, tender, the origin of the story.
- Contains: photos, videos, captions, dates, text, special moments.

### 8.2 Episode 02 — 4 Months — "Getting Closer"

- Suggested title treatment: `EPISODE 02 — GETTING CLOSER`
- Tone: warmer, more energetic than Episode 01 — the relationship deepening.
- Contains: photos, videos, dates, memories, inside jokes, special moments, short messages.

### 8.3 Episode 03 — 6 Months — "The Finale"

- Suggested title treatment: `EPISODE 03 — SIX MONTHS` or `THE FINALE`
- This is the emotional centerpiece of the entire site. Give it **noticeably more cinematic polish** than the other two episodes — richer motion, more media, a stronger ending sequence.
- Contains the best photos, videos, memories, messages, dates, and special moments available.

### 8.4 Mixed-Media Storytelling (all episodes)

Do **not** implement a plain image gallery. Each milestone must interleave media and text into a narrative sequence, e.g.:

```
June 12
Our first little adventure.
[PHOTO]
"I still remember this day."
[VIDEO]
July 3
That evening we couldn't stop laughing.
[PHOTO]
```

Pattern to support, in any order/combination per milestone:

```
PHOTO → TEXT → PHOTO → VIDEO → TEXT → PHOTO → VIDEO → ...
```

### 8.5 Memory Timeline

Each milestone page presents its items as a scroll-driven timeline:

```
DATE → TEXT → PHOTO → VIDEO → TEXT → PHOTO → ...
```

- Items animate into view as the user scrolls (fade/slide reveal), not all at once.
- The timeline should read clearly as a chronological story, not a randomized grid.

### 8.6 Photo Slideshow

Every milestone needs an embedded photo slideshow component supporting:
- Autoplay with pause-on-interaction
- Manual next/previous controls
- Smooth crossfade transitions (not hard cuts, not jarring slides unless that's an intentional stylistic choice)
- A progress indicator (e.g. dots or a thin progress bar)
- Responsive images that adapt to viewport
- Lazy loading for off-screen/upcoming images
- Preloading of the *next* image only (not the entire set at once)
- Support for mixed aspect ratios without layout shift (reserve space via aspect-ratio boxes)
- Optional subtle Ken Burns (slow pan/zoom) — used tastefully, not on every image, and disabled under reduced motion

### 8.7 Video Player

Milestone videos use HTML5 `<video>` (or an equivalent modern video component) supporting:
- Play / pause
- Mute / unmute
- Seek
- Progress display
- Fullscreen
- Replay
- Poster image before playback
- **Never autoplay with sound.** Muted autoplay for ambient/hero clips is fine; in-story milestone videos should require explicit user play unless muted.
- Mobile-optimized controls sized for touch.

### 8.8 Final 6-Month Ending

After the last item in the 6-month experience, implement a dedicated emotional closing sequence:

1. Fade the screen toward near-black.
2. Reveal:
   ```
   6 MONTHS
   ```
3. Then a configurable emotional line, defaulting to:
   ```
   Thank you for being
   my favorite part of this story.
   ```
4. Then:
   ```
   And this is only Season 1.
   ```
5. Finally, a single small heart mark:
   ```
   ♡
   ```
6. Provide a calm return affordance:
   ```
   ← Back to Our Story
   ```

Pacing here should be slow and calm relative to the rest of the site — this is the emotional payoff, not another burst of motion.

---

## 9. Data & Configuration Architecture

### 9.1 Memory Data Model

Do **not** hardcode memory content inside UI components. Define a typed data structure, e.g.:

```ts
// types/memory.ts
export type MemoryItem = {
  type: "image" | "video" | "text";
  src?: string;
  poster?: string;
  title?: string;
  description?: string;
  date?: string;
};

export type Memory = {
  id: string;            // "2-months" | "4-months" | "6-months"
  milestone: string;     // "2 MONTHS"
  title: string;         // "The Beginning"
  subtitle: string;      // "Episode 01"
  cover: string;         // path to cover image
  description: string;
  items: MemoryItem[];
};
```

Create three `Memory` objects — `2-months`, `4-months`, `6-months` — in a single data file (e.g. `data/memories.ts`) that components import from. Adding/editing memories should mean editing this data file (and dropping media into `public/media/...`), never touching component code.

### 9.2 Site Configuration

Create a single central config file, e.g. `config/site.ts`:

```ts
export const siteConfig = {
  title: "Our Story",
  subtitle: "Six Months of Us",
  partnerName: "NAME",
  anniversaryDate: "DATE",
  finalMessage: "Thank you for being my favorite part of this story.",
  seasonTag: "And this is only Season 1.",
  heroCta: {
    primary: "Play Our Story",
    secondary: "Favorite Moments",
  },
  introLines: {
    line1: "A story worth remembering...",
    title: "OUR STORY",
    emotional: ["Six months.", "Countless memories.", "One story."],
  },
};
```

All user-facing personalization (names, dates, titles, messages, milestone descriptions, final message, hero copy, intro copy) must flow through `siteConfig` and `data/memories.ts` — never hardcoded directly in JSX.

### 9.3 Media Directory Structure

```
public/
  media/
    hero/
      background-01.mp4
      background-02.mp4
      background-03.mp4
      poster.jpg

    2-months/
      cover.jpg
      photo-01.jpg
      photo-02.jpg
      video-01.mp4

    4-months/
      cover.jpg
      photo-01.jpg
      photo-02.jpg
      video-01.mp4

    6-months/
      cover.jpg
      photo-01.jpg
      photo-02.jpg
      photo-03.jpg
      video-01.mp4
      video-02.mp4
```

The agent may refine this structure if it finds a cleaner convention, but it must remain simple enough that a non-technical user can drop files into the right folder and update `data/memories.ts` accordingly.

### 9.4 Placeholder Media

If real photos/videos aren't available at build time:
- Create a clear, obvious placeholder system (e.g. a styled "Add your photo here" placeholder component) rather than broken image icons.
- Do **not** embed base64 media blobs in source.
- Do **not** depend on random external hotlinked image URLs.
- Document precisely where real media should be placed (see README requirements, Section 13).

---

## 10. Routing

Use distinct, directly-linkable routes per milestone:

```
/
/memories/2-months
/memories/4-months
/memories/6-months
```

- Direct navigation to any of these routes (e.g. a bookmark or shared link) must work correctly, not just in-app card clicks.
- In-app navigation between routes should still feel like part of the continuous cinematic experience (use page transition animations rather than a hard reload feel), even though the underlying mechanism is standard routing.

---

## 11. Component Architecture

Favor small, focused, reusable components over a few giant ones. Suggested component set:

```
IntroSequence
HeroSection
BackgroundVideoSlideshow
Navbar
MemoryGrid
MemoryCard
MemoryExperience
PhotoSlideshow
VideoPlayer
MemoryTimeline
MediaItem
MusicToggle
ProgressIndicator
PageTransition
```

Each component should have a single clear responsibility. Shared animation logic should live in a common animation module (Section 12), not be duplicated per component.

---

## 12. Animation System

Define a centralized set of reusable animation variants (e.g. `lib/animations.ts` for Motion variants), including at least:

```
fadeIn
fadeUp
scaleIn
slideLeft
slideRight
cinematicReveal
cardHover
pageEnter
pageExit
modalEnter
imageTransition
textReveal
```

Rules:
- Prefer spring or smooth custom easing curves over default linear/ease transitions, consistent with a cinematic feel.
- Do not scatter one-off animation values (durations, easings, offsets) throughout individual components — centralize and reuse.
- Motion should be intentional: apply it to moments that carry emotional or navigational weight (intro, card hover/click, page transitions, timeline reveals, the finale), not to every single element on screen.

### Reduced Motion

The site **must** respect `prefers-reduced-motion`:
- Reduce or remove large translations, scaling, and parallax effects.
- Shorten or remove non-essential transitions.
- Preserve full functionality — nothing should require motion to be usable.

---

## 13. Responsive Design

Design intentionally for desktop, laptop, tablet, and mobile — mobile is a first-class target, not a shrunk-down desktop layout.

Mobile-specific requirements:
- Memory cards can become a horizontally scrollable row.
- Typography scales appropriately at each breakpoint.
- All interactive targets remain touch-friendly (adequate hit areas).
- Hero video remains visually strong on small viewports (consider a shorter/vertical-friendly crop or clip if needed).
- Navigation simplifies (e.g. condensed/hamburger pattern) without losing accessibility.
- Slideshow and video controls are easy to tap.
- Videos fit the viewport without overflow.
- Non-essential animation/parallax can be reduced on mobile for performance and comfort.

---

## 14. Performance

Given the media-heavy nature of this site:

- Lazy-load images and defer offscreen media.
- Serve appropriately optimized/compressed image formats; document recommended compression for user-supplied media in the README.
- Always provide poster images for videos.
- Preload intelligently: only the active hero clip + next hero clip, and only the next slideshow image — never the entire media library at once.
- Pause offscreen/inactive videos (e.g. via IntersectionObserver) rather than letting them play unseen.
- Avoid unnecessary re-renders (memoize where appropriate, keep animation state localized).
- The initial homepage (intro + hero) should load and become interactive quickly even before all milestone media is fetched.

---

## 15. Audio

- Background music is optional but supported.
- **Never autoplay audio with sound.** Browsers often block this anyway, and unexpected sound is bad UX for a surprise gift.
- Provide a visible, clearly-labeled music toggle (`MusicToggle` component).
- Default state: **muted**.
- The user must explicitly opt in to enable music.

---

## 16. Accessibility

Implement throughout:
- Semantic HTML structure (landmarks, headings in logical order, buttons vs. links used correctly).
- Full keyboard navigability, including the intro/skip control, nav, cards, slideshow controls, and video player.
- Visible focus states on all interactive elements.
- Meaningful `alt` text on all images (configurable per media item where relevant).
- Accessible modal/dialog patterns for any overlay experiences (focus trapping, `Escape` to close, ARIA roles).
- Accessible custom video controls (labeled buttons, keyboard operability).
- Adequate color contrast against the dark palette.
- Full `prefers-reduced-motion` support (Section 12).

Accessibility must be achieved without diluting the cinematic aesthetic — this is a design constraint to solve within the visual language, not an excuse to strip it down.

---

## 17. Error Handling

The app must degrade gracefully:
- A missing or broken image/video must not crash the page — show a clear, on-brand fallback state instead of a broken-image icon or blank crash.
- Invalid or unreachable media should be caught (e.g. `onError` handlers) and replaced with a fallback UI.
- Navigation to a non-existent route should show a sensible not-found state, not an unstyled default error page.

---

## 18. Optional Streaming-Platform Flourishes

Where appropriate, and used **sparingly**, the agent may add subtle streaming-UI details adapted to the relationship concept, e.g.:

```
Continue Our Story
Season 1
Episode 3
Favorite Moments
```

These should feel like clever nods to the genre, not clutter.

---

## 19. Development Process (Strict Sequence)

Follow this order, completing each step properly before moving to the next:

```
STEP 1   Inspect existing project (if any)
STEP 2   Install UI/UX Pro Max skill
STEP 3   Inspect skill documentation and extract applicable guidance
STEP 4   Plan design system (palette, type scale, spacing, motion language)
STEP 5   Set up project architecture (routes, data model, config, components)
STEP 6   Build the cinematic intro sequence
STEP 7   Build the hero section
STEP 8   Build the background video slideshow
STEP 9   Build navigation
STEP 10  Build the three memory cards + hover/click transitions
STEP 11  Build the memory routes (/memories/2-months, 4-months, 6-months)
STEP 12  Build the photo slideshow component
STEP 13  Build the video player/experience
STEP 14  Build the mixed-media timeline for each milestone
STEP 15  Build the final 6-month ending sequence
STEP 16  Optimize performance (loading, preloading, pausing offscreen media)
STEP 17  Test responsive layouts (desktop, tablet, mobile)
STEP 18  Test accessibility (keyboard, screen reader basics, contrast, reduced motion)
STEP 19  Run a full visual QA pass (Section 20)
STEP 20  Fix all issues found in QA
STEP 21  Write the README (Section 13/final section below)
```

---

## 20. Visual QA Checklist

Before declaring the project complete, explicitly check each of the following, on desktop **and** mobile **and** tablet where relevant, and fix (not just report) any issues found:

- Intro sequence timing and legibility
- Hero section composition and text legibility over video
- Card grid layout, spacing, and alignment
- Card hover behavior
- Card click transition into memory experience
- Each of the three memory pages individually
- Photo slideshow behavior (autoplay, controls, crossfade, no layout shift)
- Video playback (play/pause/mute/seek/fullscreen/replay, poster fallback)
- Final 6-month ending sequence
- Navigation behavior (transparent → scrolled state, mobile menu)
- Page transitions between routes
- Typography scaling across breakpoints
- Overflow/clipping issues
- Contrast and legibility of text over media
- Animation smoothness (no jank, no excessive motion)
- Load performance of the homepage
- Behavior with missing/placeholder media
- Behavior with `prefers-reduced-motion` enabled

---

## 21. Guiding Priorities

When trade-offs are necessary, prioritize in this order:

```
1. Emotional impact
2. Cinematic animation quality
3. Visual quality
4. Smooth interaction
5. Responsive behavior
6. Performance
7. Maintainability
```

**Do not stop at a basic prototype** (hero + three cards + a plain gallery is not acceptable as a finished deliverable). The bar is: someone opening this website should think *"this was made specifically for us,"* not *"someone used an anniversary template."*

Keep emotional moments simple and uncluttered even as the surrounding UI is polished — don't let motion or chrome compete with the message itself, especially in the finale.

---

## 22. Final Acceptance Checklist

The agent must verify **all** of the following before considering the build complete:

```
[ ] UI/UX Pro Max repository installed
[ ] Relevant UI/UX Pro Max guidance actually applied (not just installed)
[ ] Existing project inspected before modification
[ ] Cinematic intro exists
[ ] Intro contains ~6 animation stages
[ ] Intro lasts ~5–8 seconds
[ ] Skip Intro control works and is keyboard-accessible
[ ] Homepage has a cinematic background video
[ ] Background supports video slideshow/crossfade (and works with just 1 video)
[ ] Hero content is present and configurable via siteConfig
[ ] Navigation works (transparent→scrolled, mobile-friendly, accessible)
[ ] Exactly three primary memory cards exist (2/4/6 months)
[ ] Card hover animation works
[ ] Card click cinematic transition works
[ ] 2-month experience complete
[ ] 4-month experience complete
[ ] 6-month experience complete, with extra polish
[ ] Photo slideshow works (autoplay, controls, crossfade, progress indicator)
[ ] Video playback works with full controls and no unexpected sound
[ ] Mixed-media timeline implemented (not a plain gallery)
[ ] Dates/messages/captions render correctly
[ ] Final emotional ending sequence exists and matches Section 8.8
[ ] All memory content is data-driven (data/memories.ts), not hardcoded in components
[ ] Media is easily replaceable via public/media structure
[ ] Mobile layout verified
[ ] Desktop layout verified
[ ] Tablet layout verified
[ ] prefers-reduced-motion supported throughout
[ ] Accessibility implemented (keyboard, focus, alt text, contrast, ARIA on dialogs/controls)
[ ] Video/image loading is optimized (lazy load, preload-next-only, pause offscreen)
[ ] Audio never autoplays with sound; music toggle defaults to muted
[ ] Missing/broken media handled gracefully, no crashes
[ ] Direct route access works for all /memories/* routes
[ ] Page transitions feel continuous, not like hard navigations
[ ] No Netflix copyrighted branding/assets anywhere
[ ] Full visual QA pass completed and issues fixed
[ ] README written per Section 23
```

---

## 23. README Requirements

At the end of the build, create or update a `README.md` covering:

1. **Running the project** — exact commands to install dependencies, start the dev server, build for production, and run the production build.
2. **Adding photos** — exactly which folder(s) to drop new photos into, and any naming convention expected.
3. **Adding videos** — same, for video files, including the hero background clips vs. milestone videos.
4. **Changing names** — where `partnerName` and similar fields live in `config/site.ts`.
5. **Changing messages** — where hero copy, intro copy, and the final ending message live in `siteConfig`.
6. **Adding a new memory / milestone item** — how to add a new `MemoryItem` (or even a new `Memory`) to `data/memories.ts`, and what media it expects.
7. **Changing the hero background video(s)** — how to add/replace/reorder clips in the slideshow.
8. **Deployment** — concrete deployment instructions appropriate to the chosen framework (e.g. Vercel for Next.js), including any environment-specific notes.

---

## 24. Final Instruction to the Coding Agent

You are not building a generic website. You are building a **digital anniversary experience** — a fusion of:

```
premium streaming UI
+ cinematic motion design
+ interactive photo album
+ relationship timeline
+ short film
```

The first 10 seconds matter. The moment a memory card is clicked matters. The final 6-month message matters most of all. Use the UI/UX Pro Max skill's guidance to make deliberate, informed design decisions rather than defaults. Use animation with intention, not decoration. Keep the interface elegant; keep the emotional moments simple and uncluttered. Do not overuse hearts or romantic clichés. Do not animate everything — animate what matters.

When implementation is complete, provide:

1. A concise summary of what was built.
2. The final project structure.
3. Instructions for adding photos/videos.
4. Instructions for personalization (`siteConfig`, `data/memories.ts`).
5. Instructions for running the project.
6. Any remaining configuration the user still needs to complete (e.g. "drop real media into `public/media/...` and update captions/dates").

Do not declare the project complete if any item in the Section 22 checklist is unmet.

**Build the complete cinematic relationship streaming experience.**

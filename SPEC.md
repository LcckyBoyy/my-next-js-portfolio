# Portfolio Spec — Bene

> Personal portfolio for a junior-ish web developer transitioning from .NET ecosystem to modern web stack.

---

## 🎯 Project Overview

**Type:** Personal portfolio website
**Owner:** Bene — junior-ish web developer
**Background:** Professional in .NET ecosystem (ASP.NET MVC, SQL Server, IIS, Cloudflare Tunnel). Self-learning modern web stack to expand skill set.
**Goal:** Showcase identity, skills, and projects. Establish online presence outside .NET-only bubble.
**Audience:** Potential employers, fellow developers, curious visitors.

---

## 🛠 Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Package Manager | pnpm |
| Hosting | Vercel |
| Version Control | Git + GitHub |

---

## 📐 Site Structure

```
/                  → Home (single-page scroll)
   ├ Hero
   ├ About (with portrait photo)
   ├ Skills / Tech Stack
   ├ Featured Projects (2–3 highlights)
   └ Contact

/projects          → All projects, more detail (separate page)

/blog              → DEFERRED. Add only when ready to write consistently.
```

---

## 🎨 Design Direction

**Vibe:** Technical-minimalist with personality. Dark, calm, focused — like a code editor at 2 AM.

### Color Palette

- **Background:** Near-black — `#0a0a0a`
- **Text primary:** Off-white — `#fafafa`
- **Text secondary:** Muted gray — `#a1a1aa` (zinc-400)
- **Accent:** Primary brand color (currently set in token system)
- **Borders:** Subtle dark gray — `#27272a` (zinc-800), rendered as **solid lines**

### Color Token System

All colors are defined as CSS custom properties in `src/app/globals.css` via Tailwind v4's `@theme inline` directive. **To retheme the site, edit one variable.**

| Token | Default | Tailwind class |
|---|---|---|
| `--color-accent` | brand color | `text-accent`, `bg-accent`, `border-accent` |
| `--color-bg` | `#0a0a0a` | `bg-bg` |
| `--color-fg` | `#fafafa` | `text-fg` |
| `--color-fg-muted` | `#a1a1aa` | `text-fg-muted` |
| `--color-border` | `#27272a` | `border-border` |

Opacity modifiers work as expected: `bg-accent/10`, `border-accent/30`, `border-border/50`, etc.

### Typography

- **One font family** throughout: **Geist Sans** (loaded via `next/font/google`)
- **Headings:** BIG, bold, statement-making. Hero text should feel impactful.
- **Body:** Comfortable reading size (~16–18px), good line-height.
- **Mono:** Geist Mono is NOT loaded. Small `font-mono` usage (section numbers) falls back to system monospace.

### Editorial Grid System

The layout uses a visible structural grid — solid lines that act as a canvas, not decorative dividers.

**Side rails (`src/app/page.tsx`)**
- Two fixed-position 1px vertical lines at the left and right edges of the `max-w-4xl` content container
- `bg-border/30` — very low contrast, felt as structure not decoration
- `position: fixed` so they persist throughout scrolling — like graph paper underneath the page
- `aria-hidden`, `pointer-events-none`, `-z-10`

**Section markers (`src/components/SectionDivider.tsx`)**
- A single `border-t` solid line spanning `max-w-4xl`, placed between every section
- A tab label (`01 / ABOUT`) sits centered on the line using `bg-bg` to mask the line behind the text
- Label: mono number + `/` + uppercase section name in `text-accent`
- Numbers: `01` About, `02` Skills & Tech, `03` Featured Projects, `04` Contact

**Corner brackets**
- Small L-shaped corners (`border-t border-l` etc.) used on 2 elements:
  1. About portrait photo — replaces a full border, `border-border/60`
  2. Project cards — `border-border/60`, transitions to `border-accent/50` on hover via Tailwind `group`
- Replaces `rounded-xl border` on these elements — brackets are incompatible with heavy rounding

**Rules for lines:**
- ALL lines are SOLID (no dashed)
- Line color always references `--color-border` via token class
- Lines feel like structure, not decoration

**What was tried and rejected:**
- Radial gradient blur orbs: felt unnatural against the flat dark background — removed
- Dashed lines: replaced by solid editorial grid

### Signature Elements

- **Generous whitespace** — breathing room is important
- **Accent arrow** — `→` in "View all projects" is always `text-accent`, nudges right on hover
- **Restrained motion** — Tailwind transitions only (duration-200/300). No animation libraries.
- **One personal photo** — Candid portrait, dark mood, in About section. Currently a gradient placeholder with initials "B".

---

## 🧭 Section-by-Section Plan

### 🏠 Hero
- Big bold name or tagline
- 1–2 line description (who Bene is)
- Small pill tags (`.NET Specialist`, `Exploring Next.js`)
- No section number — it's the landing, not a numbered stop

### 👤 About — `01`
- Candid portrait photo (left on desktop) with corner bracket decoration
- Short paragraph: who Bene is, what Bene builds, current learning journey
- Tone: friendly, honest, not corporate

### 🧰 Skills / Tech Stack — `02`
- Visual tag pills grouped: "Daily" (.NET stack) vs "Exploring" (Next.js, etc.)
- Keep it visual — tags, NOT long bullet lists

### 💼 Featured Projects — `03`
- 2–3 project cards with corner bracket decoration
- Each card: title, short description, tech tags
- "View all projects →" link to /projects page

### 📬 Contact — `04`
- Email + social links (GitHub, LinkedIn, etc.)
- Simple, no contact form (keeps it lean for v1)

### 📁 /projects (separate page)
- Grid of all projects
- More detail per project (longer description, screenshots, links)

---

## 📋 Build Phases (MVP-First)

### Phase 1: Skeleton ✅
- Basic file structure, static placeholders, confirm renders

### Phase 2: Style the Layout ✅
- Color token system (`@theme inline` in globals.css)
- Editorial grid: fixed side rails + solid section markers + corner brackets
- Typography: Geist Sans, big hero text, token-referenced colors throughout
- Accent used intentionally: name highlight, section labels, arrow CTA, hover states

### Phase 3: Polish
- Subtle animations (fade-in on scroll, etc.)
- Responsive check (mobile, tablet, desktop)
- SEO basics (page title, description, og:image)

### Phase 4: Deploy
- Push to GitHub
- Connect to Vercel
- Custom domain (optional)

### Phase 5: Iterate
- Add real content (projects, photo)
- Fix what feels off

**Rule:** Don't move to next phase until current phase is "good enough." Perfect is the enemy of shipped.

---

## ⚠️ Out of Scope (For Now)

- ❌ Blog
- ❌ Animations heavier than fade-in / smooth scroll
- ❌ Dark/light mode toggle — dark, committed
- ❌ i18n
- ❌ CMS / dynamic content
- ❌ Backend / database
- ❌ Authentication
- ❌ Contact form

---

## 🤖 Notes for AI Agent / Future Claude

1. **Always reference this SPEC** before suggesting changes.
2. **Build component by component**, not "the whole site at once."
3. **Use Tailwind utility classes**, no custom CSS unless absolutely needed.
4. **Use token classes** (`text-accent`, `text-fg`, `text-fg-muted`, `border-border`, `bg-bg`) — not hardcoded hex values. Only exception: `box-shadow` values which can't reference CSS vars natively.
5. **ALL lines are SOLID** — never use `border-dashed`. The editorial grid uses solid lines only.
6. **No radial gradient blur orbs** — was tried, rejected. Keep the background flat.
7. **Corner brackets replace full borders** on portrait and project cards. Don't re-add `rounded-xl border` to these elements.
8. **Mobile-responsive by default** — use Tailwind's responsive prefixes.
9. **Don't over-engineer** — this is a static portfolio, not an app.
10. **Component naming:** PascalCase (e.g., `SectionDivider.tsx`).
11. **File location:** Components in `src/components/`. Pages in `src/app/`.

---

## 📌 Status Log

- ✅ Project initialized (Next.js + TS + Tailwind v4 + pnpm + src/ + App Router)
- ✅ Phase 1: Skeleton complete
- ✅ Phase 2: Layout styled — color tokens, editorial grid, corner brackets, accent system
- ⏳ Next: Phase 3 (Polish)

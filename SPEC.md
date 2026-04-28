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
| Styling | Tailwind CSS |
| Package Manager | pnpm |
| Hosting | Vercel |
| Version Control | Git + GitHub |

**Why this stack:**
- Industry standard with proven longevity
- Concepts transferable from ASP.NET MVC (server-side rendering, file-based routing, layouts)
- Massive community = easy to find tutorials and AI agent help

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

- **Background:** Near-black (NOT pure `#000`). Something like `#0a0a0a` or zinc-950.
- **Text primary:** Off-white (NOT pure `#fff`). Something like `#fafafa` or zinc-50.
- **Text secondary:** Muted gray (zinc-400 / zinc-500).
- **Accent:** Sage green / mint. Roughly `#9caf88`, `#a3c9a8`, or Tailwind's `emerald-300` / `lime-300` toned down.
- **Borders / dividers:** Subtle gray (zinc-800 / zinc-700) — used for **dashed lines**.

### Typography

- **One font family** throughout (clean sans-serif). Candidates: Geist, Inter, Satoshi.
- **Headings:** BIG, bold, statement-making. Hero text should feel impactful.
- **Body:** Comfortable reading size (~16–18px), good line-height.
- **No monospace** — keep it visually consistent.

### Signature Elements

- **Dashed grid lines / dividers** between sections — this is the visual signature
- **Generous spacing** — breathing room is important
- **Restrained motion** — smooth transitions, NO heavy animations
- **One personal photo** — candid portrait, dark mood, in About section

---

## 🧭 Section-by-Section Plan

### 🏠 Hero
- Big bold name or tagline
- 1–2 line description (who Bene is)
- Optional: small labels/tags (e.g., ".NET specialist", "exploring Next.js")
- Subtle dashed divider at bottom

### 👤 About
- Candid portrait photo (left or right)
- Short paragraph: who Bene is, what Bene builds, current learning journey
- Tone: friendly, honest, not corporate

### 🧰 Skills / Tech Stack
- Visual list of technologies
- Group: "Daily" (.NET stack) vs "Exploring" (Next.js, etc.)
- Keep it visual — icons/tags, NOT long bullet lists

### 💼 Featured Projects
- 2–3 project cards
- Each card: title, short description, tech tags, link/screenshot
- "View all projects →" link to /projects page

### 📬 Contact
- Email + social links (GitHub, LinkedIn, etc.)
- Simple, no contact form (keeps it lean for v1)

### 📁 /projects (separate page)
- Grid of all projects
- More detail per project (longer description, screenshots, links)

---

## 📋 Build Phases (MVP-First)

To prevent scope creep and protect ADHD focus, build in phases:

### Phase 1: Skeleton (no styling yet)
- Set up basic file structure
- Static content placeholders for all sections
- Confirm everything renders

### Phase 2: Style the Layout
- Apply Tailwind (colors, typography, spacing)
- Add dashed dividers
- Make it look like the design direction

### Phase 3: Polish
- Subtle animations (fade-in on scroll, etc.)
- Responsive check (mobile, tablet, desktop)
- SEO basics (page title, description, og:image)

### Phase 4: Deploy
- Push to GitHub
- Connect to Vercel
- Custom domain (optional, can use vercel.app subdomain initially)

### Phase 5: Iterate
- Add real content (projects, photo)
- Fix what feels off

**Rule:** Don't move to next phase until current phase is "good enough." Perfect is the enemy of shipped.

---

## ⚠️ Out of Scope (For Now)

To keep focus tight:

- ❌ Blog — add only when committed to writing
- ❌ Animations heavier than fade-in / smooth scroll
- ❌ Dark/light mode toggle — pick dark, commit
- ❌ Internationalization (i18n)
- ❌ CMS / dynamic content
- ❌ Backend / database
- ❌ Authentication
- ❌ Contact form (uses email link instead)

---

## 🤖 Notes for AI Agent / Future Claude

When using AI assistance to build this project:

1. **Always reference this SPEC** before suggesting changes.
2. **Build component by component**, not "the whole site at once."
3. **Use Tailwind utility classes**, no custom CSS unless absolutely needed.
4. **Match the design DNA**: dark, sage accent, dashed dividers, big typography.
5. **Mobile-responsive by default** — use Tailwind's responsive prefixes.
6. **Don't over-engineer** — this is a static portfolio, not an app.
7. **Component naming:** PascalCase for components (e.g., `HeroSection.tsx`).
8. **File location:** All components in `src/components/`. All pages in `src/app/`.

---

## 📌 Status Log

- ✅ Project initialized (Next.js + TS + Tailwind + pnpm + src/ + App Router)
- ⏳ Currently: Awaiting Phase 1 (Skeleton)

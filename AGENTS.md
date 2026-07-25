# gh-profile — AGENTS.md

## Stack
- **Nuxt 4** (app/ directory) + **Vue 3** + **TypeScript**
- **Bun** package manager — use `bun` not `npm`/`yarn`/`pnpm`
- **Nuxt UI v4** (`@nuxt/ui`) — `UApp`, `UMain`, `UContainer`, `NuxtPwaAssets` in root layout
- **Nuxt Content v3** (`@nuxt/content`) — content from `content/**/*.md`, consumed via `queryCollection('content')`
- **Tailwind CSS v4** with `@tailwindcss` import syntax (no config file)
- **Catppuccin Macchiato** via `@catppuccin/tailwindcss` — theme vars in `app/assets/css/main.css`
- **PWA** via `@vite-pwa/nuxt` — devOptions disabled by default
- **Motion-v** for animations
- **Iconify** (lucide, mdi) via Nuxt UI

## Commands
| Command | Action |
|---|---|
| `bun dev` | Dev server with HMR |
| `bun run build` | Production build |
| `bun run generate` | Static site generation |
| `bun run preview` | Preview production build |
| `bun run postinstall` | (auto) Runs `nuxt prepare` |

No lint / typecheck / test commands exist in `package.json`.

## Architecture
- **`app/app.vue`** — root, sets `<html class="macchiato">` (dark theme only), wraps `UApp > UMain > NuxtLayout > NuxtPage`
- **`app/layouts/default.vue`** — Navbar + UContainer + Footer
- **`app/layouts/content.vue`** — minimal container for markdown pages
- **`app/pages/index.vue`** — sections: Home, Interests, Experience, Skills
- **`app/pages/[...slug].vue`** — catch-all; serves Markdown from `content/` via layout `content`
- **`content/`** — Markdown files (currently: `moniz-privacy-policy.md`)
- **`app.config.ts`** — Nuxt UI overrides (e.g. centered page title)

## Key quirks
- `.npmrc` has `shamefully-hoist=true` — important for Bun dependency resolution
- Dark theme only — Catppuccin Macchiato is set in `app.vue` via `useHead`; `app/assets/css/main.css` defines CSS custom properties under `.dark`
- Custom fonts: Inter (sans), Victor Mono (mono), Pinyon Script (cursive) — defined via `@theme` in CSS, loaded from CDN (no local font files)
- No env files tracked; `.env*` is gitignored
- Deployed on Vercel (per README)
- Build artifact dirs gitignored: `.nuxt`, `.output`, `.data`, `.nitro`, `.cache`, `dist`

[issues]: https://github.com/doinel1a/next-ts-shadcn-hero-ui/issues
[pulls]: https://github.com/doinel1a/next-ts-shadcn-hero-ui/pulls
[license]: https://github.com/doinel1a/next-ts-shadcn-hero-ui/blob/main/LICENSE
[demo]: https://next-ts-shadcn-hero-ui.d1a.app/
[node]: https://nodejs.org/en
[bun]: https://bun.com/docs/installation
[pnpm]: https://pnpm.io/installation
[yarn]: https://yarnpkg.com/getting-started/install
[corepack]: https://nodejs.org/api/corepack.html
[typescript]: https://www.typescriptlang.org/
[nextjs]: https://nextjs.org/
[react]: https://react.dev/
[tailwindcss]: https://tailwindcss.com/
[shadcn]: https://ui.shadcn.com/
[hero-ui]: https://www.heroui.com/
[radix-ui]: https://www.radix-ui.com/
[zod]: https://zod.dev/
[tanstack-query]: https://tanstack.com/query
[next-themes]: https://github.com/pacocoursey/next-themes
[framer-motion]: https://www.framer.com/motion/
[tabler-icons]: https://tabler.io/icons
[sass]: https://sass-lang.com/
[playwright]: https://playwright.dev/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[husky]: https://typicode.github.io/husky/
[commitlint]: https://commitlint.js.org/

# Next.js · TypeScript · shadcn/ui · HeroUI - Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)][license]
[![Next.js](https://img.shields.io/badge/Next.js-16.x-black)][nextjs]
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178c6)][typescript]
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8)][tailwindcss]
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-4.x-000000)][shadcn]
[![HeroUI](https://img.shields.io/badge/HeroUI-2.x-000000)][hero-ui]
[![Playwright](https://img.shields.io/badge/Playwright-1.60.x-45ba4b)][playwright]

Every new front-end project starts the same way: configuring Next.js, wiring up TailwindCSS, installing shadcn/ui and HeroUI, setting up ESLint, Prettier, Husky, and Commitlint - before a single component is written. This template eliminates that overhead.

It combines **[Next.js 16 App Router][nextjs]**, **[React 19][react]**, **[shadcn/ui][shadcn]**, **[HeroUI][hero-ui]**, and **[TailwindCSS 4][tailwindcss]** into a ready-to-use starter with every tool pre-configured and wired together.

- **Type-safe by default** - TypeScript 6 with strict mode and `ts-reset` patches applied
- **Dual UI library** - shadcn/ui + HeroUI components available side by side, both on Radix UI and TailwindCSS 4
- **Dark mode ready** - `next-themes` integrated with a working theme toggle out of the box
- **Animated by default** - Framer Motion wired through HeroUI for smooth, accessible animations
- **Server state management** - TanStack Query 5 with devtools pre-configured
- **React Compiler enabled** - automatic memoization via `babel-plugin-react-compiler`
- **E2E test infrastructure included** - Playwright tests ready to run
- **Code quality enforced** - ESLint 10, Prettier, Husky hooks, Commitlint, and lint-staged wired together

---

[Demo][demo] &nbsp;|&nbsp; [Report a bug][issues] &nbsp;|&nbsp; [Request a feature][issues] &nbsp;|&nbsp; [Open a pull request][pulls]

---

## Table of contents

- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment variables](#environment-variables)
  - [Switching package manager](#switching-package-manager)
- [Project structure](#project-structure)
- [Available scripts](#available-scripts)
- [Tech stack](#tech-stack)

---

## Getting started

### Prerequisites

- **[Node.js][node]** ≥ 24 - or **[Bun][bun]** ≥ 1.x as an alternative runtime
- **[pnpm][pnpm]** ≥ 11 - or npm, yarn, or bun (see [switching package manager](#switching-package-manager))

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/doinel1a/next-ts-shadcn-hero-ui YOUR-PROJECT-NAME
cd YOUR-PROJECT-NAME
```

|             | **npm**       | **bun**       | **pnpm**       | **yarn**       |
| ----------- | ------------- | ------------- | -------------- | -------------- |
| **install** | `npm install` | `bun install` | `pnpm install` | `yarn install` |

### Start the development server

|         | **npm**       | **bun**   | **pnpm**   | **yarn**   |
| ------- | ------------- | --------- | ---------- | ---------- |
| **dev** | `npm run dev` | `bun dev` | `pnpm dev` | `yarn dev` |

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment variables

The template ships with a minimal environment configuration. Only `NODE_ENV` is validated by default - add your own variables to `src/env.ts` following the [T3 Env](https://env.t3.gg/) pattern.

| Variable   | Description         | Side   | Required                    |
| ---------- | ------------------- | ------ | --------------------------- |
| `NODE_ENV` | Runtime environment | Server | No (default: `development`) |

> [!NOTE]
> Set `SKIP_ENV_VALIDATION=true` to bypass env validation (useful for Docker builds).

### Switching package manager

<details>
<summary>Steps to switch from pnpm to npm, yarn, or bun</summary>

**1.** Delete the pnpm lock file:

```bash
rm pnpm-lock.yaml
```

**2.** (Optional) Declare the new package manager in `package.json` so tooling and CI pick it up automatically:

```json
"packageManager": "npm@10.x.x"
```

Replace `npm@10.x.x` with `yarn@4.x.x` or `bun@1.x.x` as appropriate. See [Corepack docs][corepack] for details.

**3.** Install dependencies with the new package manager:

```bash
# npm
npm install

# yarn
yarn install

# bun
bun install
```

</details>

> [!NOTE]
> All scripts in `package.json` use package-manager-agnostic syntax and work without changes after switching.

---

## Project structure

```
.
├── __tests__/               # Playwright E2E tests
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with providers and Google Fonts
│   │   └── page.tsx         # Home page
│   ├── assets/
│   │   └── fonts/           # Self-hosted font files
│   ├── components/
│   │   ├── providers/
│   │   │   ├── client/
│   │   │   │   ├── hero-ui.tsx      # HeroUI provider
│   │   │   │   ├── tanstack-query.tsx
│   │   │   │   └── theme.tsx
│   │   │   └── root.tsx             # Composes all providers
│   │   ├── ui/              # shadcn/ui components
│   │   ├── github-corner.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── theme-toggle.tsx
│   │   └── counter.tsx      # Example interactive component
│   ├── lib/
│   │   ├── constants/
│   │   ├── types/
│   │   └── utils.ts         # cn() utility (clsx + tailwind-merge)
│   ├── styles/
│   │   ├── globals.css      # TailwindCSS 4 entry point
│   │   └── globals.scss     # Global SCSS overrides
│   └── env.ts               # Env validation (Zod + T3 env-nextjs)
└── public/                  # Static assets
```

---

## Available scripts

| Script      | Description                                    |
| ----------- | ---------------------------------------------- |
| `dev`       | Start the Next.js dev server                   |
| `build`     | Build for production                           |
| `preview`   | Start the production server (`next start`)     |
| `typecheck` | Run TypeScript compiler without emitting files |
| `lint`      | Run ESLint                                     |
| `lint:fix`  | Run ESLint and auto-fix issues                 |
| `format`    | Format all source files with Prettier          |
| `test`      | Run Playwright E2E tests                       |
| `test:ui`   | Run Playwright with interactive UI mode        |

---

## Tech stack

| Tool                                               | Purpose                                        |
| -------------------------------------------------- | ---------------------------------------------- |
| **[Next.js 16][nextjs]**                           | Full-stack React framework with App Router     |
| **[React 19][react]**                              | UI library with React Compiler enabled         |
| **[TypeScript 6][typescript]**                     | Static typing with strict mode                 |
| **[shadcn/ui][shadcn]** + **[Radix UI][radix-ui]** | Accessible, composable UI component library    |
| **[HeroUI 2][hero-ui]**                            | Beautiful, animated component library          |
| **[TailwindCSS 4][tailwindcss]**                   | Utility-first CSS framework                    |
| **[Framer Motion][framer-motion]**                 | Production-ready animation library             |
| **[TanStack Query 5][tanstack-query]**             | Server state management and data fetching      |
| **[next-themes][next-themes]**                     | Dark/light mode with SSR support               |
| **[Zod 4][zod]**                                   | Schema validation for env vars and forms       |
| **[SASS/SCSS][sass]**                              | Extended CSS with nesting and variables        |
| **[Tabler Icons][tabler-icons]**                   | Consistent SVG icon set for React              |
| **[Playwright][playwright]**                       | End-to-end browser testing                     |
| **[ESLint 10][eslint]** + **[Prettier][prettier]** | Linting and formatting                         |
| **[Husky][husky]** + **[Commitlint][commitlint]**  | Git hooks and conventional commit enforcement  |

# hooli-design-system

A full conversion of the QDS design system into ShadCN — rebuilding components, logic, and structure for modern React and Tailwind workflows.

## Convert QDS to ShadCN

This repository contains the ongoing rebuild of the Quantum Design System (QDS) using the ShadCN stack.  
The goal is to modernize the QDS component library, streamline its architecture, and improve long-term maintainability.

All components are being redeveloped using modern TypeScript, TailwindCSS, and ShadCN conventions.  
This effort is focused on code clarity, consistent theming, and full parity with the original QDS atomic structure.

---

## Overview

QDS was originally built as a monorepo organized around the atomic design methodology (atoms, molecules, organisms, templates, pages).  
This project continues to follow that hierarchy while re-implementing all components in the ShadCN architecture for better composition, variant control, and consistency.

The rebuilt library maintains functional alignment with the existing QDS components, but replaces legacy logic and styling with a cleaner, more scalable foundation.

---

## Goals

- Rebuild all QDS components using ShadCN and TailwindCSS
- Preserve atomic design structure for organization and discoverability
- Use Class Variance Authority (CVA) for variant and style management
- Implement consistent theming, including dark mode support
- Simplify and standardize props, variants, and accessibility patterns
- Refactor utilities and helpers into modular, reusable libraries
- Provide example views and documentation for visual verification

---

## Tech Stack

- **React (Vite)**
- **TypeScript**
- **TailwindCSS**
- **ShadCN/UI**
- **Framer Motion**
- **Class Variance Authority (CVA)**

---

## Project Structure

- `src/` – React 18 + Vite application entry point for rebuilding atoms/molecules.
- `src/components/ui/` – ShadCN-style primitives (e.g. `button.tsx`).
- `src/lib/` – Shared helpers like `utils.ts` and `slot.tsx` that back the UI primitives.
- `public/` – Static assets served by Vite.
- `legacy-monorepo/` – Archived QDS Lerna workspace kept for reference during the migration.

---

## Getting Started

1. Ensure you are using Node.js `v22.14.0` (matches `.nvmrc`) to satisfy Vite 7 + ESLint engine requirements.
2. Install dependencies with `npm install`.
3. Launch the dev server using `npm run dev`.

The initial screen confirms the new scaffold is running. From here you can integrate TailwindCSS, ShadCN components, and begin porting QDS atoms into the `src` tree.

---

## TailwindCSS Setup

- Tailwind 3.4 is already installed with PostCSS + Autoprefixer and configured via `tailwind.config.js`.
- Global directives live in `src/index.css`; remove/evolve utility classes there to establish tokens and base styles.
- Components can now lean on Tailwind utility classes. Example wiring lives in `src/App.tsx`.
- When migrating legacy QDS pieces, create primitives in `src/components` and use Tailwind utilities (or future ShadCN wrappers) for rapid styling.

Next up: initialize ShadCN (`npx shadcn-ui@latest init`) once the component directory layout is ready, then start migrating high-impact atoms (Button, Input, etc.).

---

## ShadCN Components

- `Button` component (`src/components/ui/button.tsx`) implements the standard ShadCN API with QDS-aligned variants (`primary`, `secondary`, `accent`, `success`, `warning`, `danger`, `smoke`, `shadow`, etc.) and the Vite scaffold sizes (`default`, `sm`, `lg`, `xl`, `icon`).
- Additional primitives currently ported:
  - `Card` (`src/components/ui/card.tsx`)
  - `Tabs` (`src/components/ui/tabs.tsx`)
  - `ScrollArea` (`src/components/ui/scroll-area.tsx`)
- Documentation playground utilities live in `src/components/docs/` (e.g., `ComponentExample`, `CodeBlock`) and compose local UI primitives (`Tabs`, `Card`) to render preview/code panels.
- Theme toggle (`ThemeToggle`) persists preference to `localStorage` and syncs with OS defaults, applying `dark` class on the root element.
- Local `Slot` helper (`src/lib/slot.tsx`) mimics `@radix-ui/react-slot` so `asChild` support works without an extra dependency.
- Use the CLI to add more pieces: `npx shadcn@latest add <component>` (Button is already tracked in `components.json`).
- Import primitives with the new alias (`@/components/ui/...`) coordinated between `tsconfig` and `vite.config.ts`.

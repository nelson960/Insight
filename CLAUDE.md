# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 static site for "Insight" - a landing page for an AI-powered knowledge engine product. The site is configured for static export and uses the new Next.js App Router with TypeScript.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build and export static site (creates `out/` directory)
- `npm run start` - Start production server (after build)

## Architecture

- **Framework**: Next.js 15 with App Router (`src/app/` structure)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Export**: Configured for static site generation (`output: 'export'` in next.config.ts)
- **Icon**: Custom SVG icon at `src/app/icon.svg`

## Key Files

- `src/app/layout.tsx` - Root layout with font configuration and metadata
- `src/app/page.tsx` - Main landing page with hero, features, and CTA sections
- `next.config.ts` - Configured for static export
- `tailwind.config.mjs` - Tailwind configuration targeting App Router structure

## Styling Approach

The site uses a clean, professional design with:
- Blue color scheme (blue-600/700 for CTAs, blue-50 for gradients)
- Gray text variations (gray-600, gray-700, gray-900)
- White and gray-50 section backgrounds
- Responsive grid layouts (md:grid-cols-2)
- Gradient backgrounds (bg-gradient-to-b)
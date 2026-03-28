

# Plan: Quip-Style Mobile Product Showcase

## What We're Doing

Redesigning the mobile homepage product section to match the Quip-style layout from the reference screenshots: a 2-column product grid with large product cards, "Best seller" badges, star ratings, review counts, and a section header with a "Shop bestsellers" link — replacing the current small static card + marquee carousel.

## Changes

### File: `src/pages/Index.tsx` (lines 135-175)

**Replace the current mobile hero product section** (static kit card + auto-scrolling marquee) with:

1. **Section header row**: Left-aligned "Reinvent Your Routine" heading + right-aligned "Shop bestsellers" link (matches Quip's "Refresh your routine / Shop bestsellers" layout)

2. **2-column product grid**: All products displayed in a `grid grid-cols-2 gap-3` layout with:
   - Tall product cards (`aspect-[3/4]` image area) with rounded corners and light background
   - "Best seller" badge on the kit product (small green/sand pill)
   - Product name below the image
   - "Starting at $XX.00" pricing format
   - Star rating row (e.g., ★★★★★ 4.8 (75k+))
   - Each card links to its product page

3. **Horizontal scroll option**: If more than 4 products, the grid scrolls or wraps naturally. For now with 4 products, a clean 2×2 grid.

This section remains `md:hidden` — desktop layout is unchanged.

### Summary
- Desktop: no changes
- Mobile hero: replaces marquee + static card with a polished 2-column product grid inspired by Quip's layout


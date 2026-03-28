

# Plan: Add Desktop Product Showcase

## Problem

The Quip-style product showcase grid is currently mobile-only (`md:hidden`). On desktop, only the toothbrush circle graphic appears in the hero — there's no product grid for desktop visitors.

## Solution

Add a desktop-visible product showcase section below the hero (or below "As Seen On"), styled as a horizontal row of 4 product cards — similar to the mobile grid but laid out for wider screens.

### File: `src/pages/Index.tsx`

1. **Add a new section after "As Seen On"** (around line 261) — a full-width `hidden md:block` product showcase with:
   - Header row: "Reinvent Your Routine" + "Shop bestsellers" link (matching mobile)
   - Horizontal 4-column grid (`grid-cols-4`) of product cards with tall aspect ratio, product image, name, price, star ratings, and "Best seller" badge on the kit
   - Each card links to its product page

2. **Keep the mobile grid as-is** — no changes to the `md:hidden` section

### Summary
- Mobile: unchanged (2-column grid in hero)
- Desktop: new 4-column product showcase section appears below "As Seen On"


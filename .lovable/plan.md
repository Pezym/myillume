

# Plan: Mobile Hero Rearrangement & Product Carousel

## What We're Doing

On mobile only, replace the toothbrush circle graphic in the hero with an auto-scrolling product carousel, and move the toothbrush graphic to appear below the "As Seen On" section.

## Changes

### File: `src/pages/Index.tsx`

1. **Import products data** from `@/data/products.ts` and `Link` from `react-router-dom`

2. **Hero right column (lines 78-135)**: Wrap the existing toothbrush circle in a `hidden md:flex` container so it only shows on desktop

3. **Add mobile product carousel** above/replacing the toothbrush on mobile: a `md:hidden` auto-scrolling horizontal strip showing product cards (image + name + price) that link to their product pages. Uses CSS animation (`@keyframes scroll`) for continuous auto-scroll, duplicating items for seamless looping.

4. **After the "As Seen On" section (after line 161)**: Add a new `md:hidden` section that renders the toothbrush circle graphic (same markup as the current hero circle, but smaller — ~320px). This moves the toothbrush visual below "As Seen On" on mobile only.

### File: `src/index.css`
- Add a `@keyframes marquee` animation for the auto-scrolling product strip

### Summary
- Desktop: no change — toothbrush stays in hero
- Mobile: hero shows auto-scrolling product cards → "As Seen On" → toothbrush circle graphic


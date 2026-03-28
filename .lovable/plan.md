

# Plan: Pin 3-in-1 Kit Above Product Carousel

## What We're Doing

Restore the original two-part layout: a static, always-visible 3-in-1 kit card pinned at the top, with the remaining products in an auto-scrolling carousel below it. This ensures the kit never gets lost in the carousel rotation.

## Changes

### File: `src/pages/Index.tsx` (lines 208-230)

Replace the single all-products carousel with:

1. **Pinned 3-in-1 Kit Card** — A static, prominent product card (not inside any carousel) linking to the kit PDP. Full-width on mobile, half-width on desktop. Shows image, name, price, rating, badge.

2. **Carousel of remaining products** — Filter out the kit (`products.filter(p => p.id !== '3-in-1-oral-kit')`), display the rest in the existing auto-scrolling Embla carousel with `basis-1/2 md:basis-1/4` sizing.

This is the same pattern from the earlier approved plan, now permanently locked in.


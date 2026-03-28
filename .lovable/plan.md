

# Plan: Unified Product Showcase Above "As Seen On"

## What We're Doing

Create a single, responsive product showcase section that appears on both mobile and desktop, positioned right above the "As Seen On" section. It features the 3-in-1 kit as a large hero product card, with the remaining products in an auto-scrolling carousel below it.

## Changes

### File: `src/pages/Index.tsx`

1. **Remove the existing mobile product grid** (lines 199-235) — the `md:hidden` Quip-style 2-column grid inside the hero section

2. **Remove the existing desktop product showcase** (lines 263-295) — the `hidden md:block` 4-column grid below "As Seen On"

3. **Add a new unified product showcase section** between the hero and the "As Seen On" section (before line 239):
   - **Header row**: "Reinvent Your Routine" + "Shop bestsellers" link
   - **3-in-1 Kit hero card**: Full-width featured card with large image, "Best seller" badge, product name, price, rating, and a "Shop Now" CTA link. On mobile it's stacked; on desktop it's a horizontal layout (image left, details right)
   - **Rolling carousel below**: Auto-scrolling horizontal carousel of the remaining 4 products using Embla with Autoplay plugin. Each card shows product image, name, price, and star rating. On mobile: 2 cards visible; on desktop: 4 cards visible

### Technical Details
- Import `Carousel, CarouselContent, CarouselItem` from `@/components/ui/carousel`
- Import `Autoplay` from `embla-carousel-autoplay` (already in the project)
- Filter products: `kitProduct = products.find(p => p.id === '3-in-1-oral-kit')`, `otherProducts = products.filter(p => p.id !== '3-in-1-oral-kit')`
- Carousel uses `opts={{ align: 'start', loop: true }}` with `Autoplay({ delay: 3000, stopOnInteraction: false })`
- Responsive card sizing via `basis-1/2 md:basis-1/4` on carousel items




# Plan: Multiple UI Updates

## Changes

### 1. Mobile hero carousel: 3-in-1 kit static above, rest in carousel
**File: `src/pages/Index.tsx` (lines 135-152)**
- Find the 3-in-1 oral kit product and render it as a static, prominent card above the carousel (linked to its product page)
- Filter it out of the auto-scrolling carousel so only the other products scroll

### 2. Replace hero background image
- Copy `user-uploads://hero_2.webp` → `src/assets/hero-ambassador.jpg` (overwrite)
- Update opacity from `opacity-[0.12]` to `opacity-[0.18]` for more visibility
- Adjust the gradient overlay to be slightly less aggressive (`via-background/70` instead of `/80`)

### 3. Remove mobile toothbrush circle entirely
**File: `src/pages/Index.tsx` (lines 180-218)**
- Delete the entire `md:hidden` section that renders the toothbrush circle with floating badges below "As Seen On"

### 4. Remove toothpaste image from "Facts Backed by Science"
**File: `src/pages/Index.tsx` (lines 267-269)**
- Remove the right-column image (`toothpasteBottle`) from the Facts section
- Make the left column full-width (`md:grid-cols-1` or remove grid, center content)

### 5. Shop header: "Our Products" → "Reinvent Your Routine"
**File: `src/pages/Shop.tsx` (line 30)**
- Change text

### 6. ReviewShowcase: Remove "The Last Toothbrush" heading, make reviews auto-carousel
**File: `src/components/ReviewShowcase.tsx`**
- Remove the "The Last Toothbrush You'll Ever Need" heading and rating line (lines 27-37)
- Add Embla autoplay plugin for auto-scrolling: `import Autoplay from 'embla-carousel-autoplay'` and pass `[Autoplay({ delay: 3000, stopOnInteraction: false })]` to `useEmblaCarousel`
- This affects both homepage and product page usage since they share the component

### Files Modified
- `src/pages/Index.tsx` — hero carousel split, remove mobile toothbrush circle, remove facts image
- `src/pages/Shop.tsx` — heading text
- `src/components/ReviewShowcase.tsx` — remove heading, add autoplay
- `src/assets/hero-ambassador.jpg` — replaced with new image


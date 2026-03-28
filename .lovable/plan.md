

# Plan: Replace Hero Banner with New Image & Gradient Fade

## What We're Doing

Replace the current hero background image with the new uploaded lifestyle photo (model with Illumé toothbrush and toothpaste). Apply a gradient fade so the image blends into the text area — horizontally on desktop (left-to-right fade) and vertically on mobile (bottom fade over image).

## Changes

### 1. Copy the uploaded image to assets
- Copy `user-uploads://FE106372-BDF0-409A-AA33-5AB33295A48E-2.jpg` to `src/assets/hero-ambassador.jpg` (overwriting the existing one)

### 2. Update `src/pages/Index.tsx`

**Mobile hero (lines 27-84):**
- Change from stacked layout (image then text) to an overlay layout: the image fills the full section as a background, with a gradient overlay fading from transparent at top to solid `background` color at the bottom
- Text content sits at the bottom over the faded area, ensuring readability
- Gradient: `bg-gradient-to-t from-background via-background/90 to-transparent`

**Desktop hero (lines 87-93):**
- Keep the half-and-half structure but the gradient already exists (`bg-gradient-to-r from-background via-background/70 to-transparent`) — no structural changes needed since the new image replaces the old one automatically via the same import path

### Summary
- New lifestyle photo replaces old ambassador image
- Mobile: full-bleed image with vertical bottom-to-top gradient fade, text overlaid at bottom
- Desktop: existing horizontal gradient fade preserved, new image shown on right half


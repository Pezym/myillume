

# Plan: Separate Mobile Hero Image from Text

## What We're Doing

Remove the gradient overlay on mobile and split the hero into two distinct sections: the hero banner image displayed as a standalone block on top, followed by the "Reinvent the Way" text section below it on a solid background.

## Changes

### File: `src/pages/Index.tsx` (lines 27-87)

Replace the current mobile hero (overlay layout with gradient) with a stacked layout:

1. **Image section**: A standalone `<img>` block with `aspect-[4/3]` or similar, `object-cover`, `object-[center_25%]` — no gradient, no overlay, just the full image
2. **Text section**: Below the image, on a solid `bg-background`, containing the badge, heading, subtitle, CTAs, and stats bar — exactly as they are now but without needing `relative z-10` or `min-h-[85vh]`

Remove:
- The `min-h-[85vh]` constraint on the wrapper
- The gradient `<div>` overlay (line 31)
- The `absolute inset-0` positioning on the image (line 29)
- The `justify-end` / `min-h-[85vh]` on the text container (line 34)

Desktop hero remains unchanged.


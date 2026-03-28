

# Plan: Full-Visibility Hero Background Image

## What We're Doing

Remove the gradient overlay on the hero background image so it's fully visible, and stack the layout vertically on mobile (image on top, text below) so both are clear. On desktop, use a semi-transparent text backdrop instead of a full gradient.

## Changes

### File: `src/pages/Index.tsx`

1. **Remove the gradient overlay div** (line 24) — delete the `bg-gradient-to-r from-background via-background/70 to-transparent` div entirely

2. **Increase image opacity** (line 23) — change `opacity-[0.18]` to `opacity-100` so the image is fully visible

3. **Add a text-area backdrop on desktop** — wrap the left-column `<div>` (line 27) with a semi-transparent background (`bg-background/80 backdrop-blur-sm rounded-2xl p-8`) so text remains readable over the full image

4. **Mobile layout**: On mobile, switch to a stacked layout:
   - Show the hero image as a prominent block at the top (not as a background) with `aspect-[4/3]` and `object-cover`
   - Text content sits below the image on a solid background
   - Use `md:hidden` / `hidden md:block` to toggle between stacked (mobile) and overlay (desktop) layouts

### Summary
- Image becomes fully visible with no gradient
- Desktop: text floats over image with a frosted-glass card backdrop
- Mobile: image shown prominently above text for clean readability


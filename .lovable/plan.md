

# Plan: Add Ambassador Background Image to Hero

## What We're Doing

Add the uploaded lifestyle photo as a subtle, semi-transparent background image behind the hero section, giving it an ambassador/banner feel while keeping all text and UI elements fully readable.

## Changes

### 1. Copy the uploaded image to assets
- Copy `user-uploads://FE106372-BDF0-409A-AA33-5AB33295A48E.jpg` → `src/assets/hero-ambassador.jpg`

### 2. Update Hero Section in `src/pages/Index.tsx`
- Import the new image
- Add an absolutely-positioned `<img>` element inside the hero `<section>` that covers the full section
- Apply low opacity (`opacity-[0.12]` or similar) so the model is subtly visible but doesn't compete with text
- Use `object-cover object-top` to frame her face/upper body nicely
- The existing `z-10` on the content grid already ensures text stays above the background layer
- Add a subtle gradient overlay on top of the image to further ensure readability on the left (text) side


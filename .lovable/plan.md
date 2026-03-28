

# Plan: Rounded Hero Image with Margins (Carpe Style)

## What We're Doing

Style the mobile hero image to match the Carpe reference: add horizontal margins/padding and rounded corners so the image appears as a contained card rather than edge-to-edge, similar to how Carpe displays their product pile photo.

## Changes

### File: `src/pages/Index.tsx` (line 27-29)

1. Add horizontal padding (`px-4`) to the image's parent container
2. Apply rounded corners (`rounded-2xl`) to the image
3. Add slight top padding (`pt-4`) so the image doesn't touch the navbar directly

Change:
```
<section className="md:hidden bg-background overflow-hidden">
  <img src={heroAmbassador} alt="Illumé ambassador" className="w-full aspect-[4/3] object-cover object-[center_25%]" />
```
To:
```
<section className="md:hidden bg-background overflow-hidden px-4 pt-3">
  <img src={heroAmbassador} alt="Illumé ambassador" className="w-full aspect-[4/3] object-cover object-[center_25%] rounded-2xl" />
```

Single CSS-only change, no structural modifications. Desktop unchanged.


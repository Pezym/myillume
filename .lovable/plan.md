

# Plan: Reposition Mobile Hero Image to Show Face & Toothbrush

## Problem

The mobile hero image is positioned with `object-top`, which frames the top of the model's head/hair. The face, smile, and toothbrush are cut off or pushed too low.

## Change

### File: `src/pages/Index.tsx` (line 29)

Change the image's `object-position` from `object-top` to `object-[center_30%]` (or similar value like `object-center`) so the camera frames the model's face and the toothbrush instead of the hair. This shifts the visible crop area downward to capture the smile and product.

- Change: `object-top` → `object-[center_30%]` on the hero `<img>` element
- May need to fine-tune the percentage (e.g., 25%-40%) to get the ideal framing showing both the smile and the toothbrush

No structural or layout changes needed — just a CSS object-position tweak.


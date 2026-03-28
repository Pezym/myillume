

# Plan: Fix Navigation, Image Quality & Add Toothpaste Gallery Images

## What We're Doing

1. **Remove "Science" and "The Routine" from the navbar** — these sections were deleted from pages but the nav links remain.

2. **Fix zoomed-in / blurry product images** — the main gallery uses `object-cover` on an `aspect-square` container, which crops and zooms into images that aren't square. Switch to `object-contain` so the full image is visible without cropping, especially for the whitening strips (screenshot 1) and whitening wand images.

3. **Add two new toothpaste images to the gallery** — save `DSC00430.JPG` (model holding toothpaste) and `Screenshot_2026-03-27_at_8.26.04_PM.png` (3-bottle lifestyle shot) as assets, then add them to the `purple-toothpaste` gallery array so customers can browse multiple views.

## Technical Details

### File: `src/components/Navbar.tsx`
- Remove the `Science` and `The Routine` entries from the `links` array (lines 13-14).

### File: `src/pages/ProductDetail.tsx`
- Change main gallery image from `object-cover` to `object-contain` with a sand-light background so non-square images display fully without cropping (line 98).
- Keep thumbnails as `object-cover` for consistent grid appearance.
- Import two new toothpaste assets and update the `purple-toothpaste` gallery array from `[toothpasteImg]` to `[toothpasteImg, toothpasteModel, toothpaste3Bottles]`.

### New Assets
- Copy `DSC00430.JPG` → `src/assets/toothpaste-model.jpg`
- Copy `Screenshot_2026-03-27_at_8.26.04_PM.png` → `src/assets/toothpaste-trio.png`


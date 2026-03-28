

# Plan: Multiple Homepage & Product Page Enhancements

## Changes

### 1. Add CBS Video to "As Seen On" Section
**File: `src/pages/Index.tsx` (lines 132-142)**
- Copy the uploaded `.mov` file to `src/assets/cbs-feature.mov`
- Replace the text-only "As Seen On" section with a layout that includes a playable video alongside the brand logos
- Video auto-plays muted in a rounded container, with click-to-unmute

### 2. Change Hero Headline
**File: `src/pages/Index.tsx` (line 27)**
- Change "A smarter smile starts with illumé." to "Reinvent the Way you Brush with Illumé"

### 3. Add Competitor Comparison Chart
**File: `src/pages/Index.tsx`**
- Add a new section between the Testimonials section (line 275) and the FAQ section (line 278)
- Build a styled comparison table: illumé vs Oral B vs Phillips
- Rows: 3in1 Cleaning, Plaque Removal, Gum Sensitivity, 60 Day Battery Life
- illumé gets all checkmarks; competitors get partial marks matching the uploaded image
- First row has a blue/purple highlight background

### 4. Remove Black Background on Hero Toothbrush, Make It Bigger & Transparent
**File: `src/pages/Index.tsx` (lines 94-101)**
- Remove the dark `bg-foreground` card wrapper around the toothbrush image
- Make the toothbrush image larger (h-[400px] or similar) and display it directly within the circle with a subtle drop shadow, no solid background box

### 5. Make Subscribe & Save the Default for Kit Product; Remove "Brush Only" Option
**File: `src/data/products.ts`**
- Add a `subscribePricing` entry for `3-in-1-oral-kit` (e.g. $72.75/mo subscribe, $97 one-time, 25% save)

**File: `src/pages/ProductDetail.tsx`**
- Remove the "Brush Only" pack selector (lines 189-211) entirely
- For ALL products (including kit and toothpaste), show Subscribe & Save as the primary/prominent option above bundle pricing
- Change condition on line 214 from `hasSubscription && !hasBundles` to always show Subscribe & Save when available, making it the default selected option
- Keep bundle options below as a secondary "Or Bundle & Save" section for kit/toothpaste

### 6. Remove or Redirect "Get Your New Smile" Button
**File: `src/pages/ProductDetail.tsx` (lines 323-325)**
- Remove the "Get Your New Smile :)" button entirely

### 7. Add Review Showcase from Screenshot
**File: `src/pages/Index.tsx`**
- Copy uploaded review screenshot image to `src/assets/review-showcase.png`
- Replace the current 3-card text reviews in the "What Our Customers Say" section (lines 248-269) with a horizontally scrollable carousel of review cards matching the screenshot style:
  - Header: "The Last Toothbrush You'll Ever Need" with 4.9 stars / 2,400+ reviews
  - Category filter pills: Deep Cleaning, Whitening, Gum Health, Design, Sensitivity
  - 8 review cards with "DEEP CLEANING" badge, star rating, bold quote, body text, and reviewer name with green verified dot
  - Dot pagination at the bottom
- Also add this review showcase section on ProductDetail page

### 8. Update Stats Section
**File: `src/pages/Index.tsx` (line 229)**
- Change `106+` Verified Reviews to `75k+` to match previously updated count

### Files Modified
- `src/pages/Index.tsx` — hero text, hero image, CBS video, comparison chart, review showcase, stats
- `src/pages/ProductDetail.tsx` — remove brush-only, promote subscribe & save, remove "Get Your New Smile" button, add review showcase
- `src/data/products.ts` — add kit subscribe pricing

### New Assets
- `src/assets/cbs-feature.mov` — CBS video
- `src/assets/review-showcase.png` — review cards screenshot (reference for building the component, not embedded directly)
- `src/assets/comparison-chart.png` — reference only, building as a styled component


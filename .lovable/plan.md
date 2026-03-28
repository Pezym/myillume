

# Plan: Multiple PDP & Homepage Fixes

## Changes

### 1. Remove Subscribe & Save for the 3-in-1 Kit (`src/pages/ProductDetail.tsx`)
- Remove the subscription option from `src/data/products.ts` by deleting the `'3-in-1-oral-kit'` entry from `subscribePricing`
- On the PDP, the "Choose Your Offer" subscribe/one-time toggle will no longer appear for the kit since `hasSubscription` will be false
- Default `purchaseType` to `'one-time'` when no subscription exists

### 2. Add "Comes with 3 heads" to kit description (`src/data/products.ts`)
- Update the kit's `description` or `productBullets` to mention "Comes with 3 brush heads"

### 3. Remove 2nd image (kit-full) from kit gallery (`src/pages/ProductDetail.tsx`, line 30)
- Change gallery from `[kitAngle1, kitFull, kitAngle2, kitAngle3, modelBrushing, kitBox]` to `[kitAngle1, kitAngle2, kitAngle3, modelBrushing, kitBox]`

### 4. Fix "You May Also Like" product images (`src/pages/ProductDetail.tsx`, lines 413-414)
- Change `className="w-1/3 h-1/3 object-contain opacity-30"` to `className="w-full h-full object-contain p-6"` — removes the opacity filter and makes images fill the card

### 5. Remove 3-in-1 Oral Care system box from homepage (`src/pages/Index.tsx`, lines 219-244)
- Remove the featured kit hero card (the large `kitProduct` block) from the product showcase section, keeping only the rolling carousel of all products (including the kit in the carousel)

### 6. Fix CBS video glitching (`src/pages/Index.tsx`, lines 278-285)
- Add `preload="auto"` and an `onError` handler with retry logic to the video element
- Wrap in a container with a fallback/loading state so the section doesn't flash empty


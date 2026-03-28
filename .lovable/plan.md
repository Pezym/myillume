

# Plan: Per-Product Pricing, Descriptions & Features

## Problem
The Product Detail Page currently hardcodes everything — bundle pricing, features, "What's Included", FAQs, and pack selector — using the 3-in-1 oral kit's data for ALL products.

## Changes

### 1. Update `src/data/products.ts`
- Update product prices/names to match screenshots:
  - **Toothpaste**: name "Illumé Purple Color Correcting Toothpaste", price $24.95, originalPrice $49.95, SAVE 50%
  - **Whitening Strips**: name "Illumé Purple Advanced Whitening Strips", price $39.00, originalPrice (not shown, use current)
  - **Whitening Wand**: name "Illumé Extra Strength Whitening Wand", price $37.12, originalPrice (not shown, use current)
- Add per-product bundle pricing as a new exported map (keyed by product id):
  - **3-in-1 kit**: current bundle pricing (Buy 1 $97, His & Hers $194, 3 Pack $291, Buy 4 $388)
  - **Toothpaste**: Buy 1 $24.95/$49.95, His & Her's $49.90/$99.90, 3 Pack Family $74.85/$149.85, Buy 4 $99.80/$199.80
  - **Strips & Wand**: no bundles (subscribe & save model only)
  - **Brush Heads**: no bundles

### 2. Refactor `src/pages/ProductDetail.tsx`
- **Per-product descriptions**: Add a `productDetails` map with product-specific bullet descriptions:
  - **Kit**: "360 rotation for a Professional Clean", "Deep Flossing action for Healthier gums", "Built-in tongue scraper for Instantly Fresh Breath that lasts."
  - **Toothpaste**: same 3 bullet points (matches screenshot)
  - **Strips**: "Whiter Teeth in Minutes", "Gentle on Enamel, Tough on Stains", "Fits in Your Pocket, Take it On-the-Go"
  - **Wand**: same as strips
  - **Brush Heads**: simple description

- **Conditional Subscribe & Save**: For strips and wand, show a "Choose Your Offer" section with Subscribe & Save (25% off) and One-time purchase options instead of bundle pricing. Subscription prices from screenshots:
  - Strips: $29.25/month subscribe, $39.00 one-time
  - Wand: $27.84/month subscribe, $37.12 one-time
  - Toothpaste: $18.71/month subscribe, $24.95 one-time

- **Conditional Bundle & Save**: Only show for kit and toothpaste (products that have bundle data)

- **Conditional Pack Selector**: Only show "Full Oral Care Kit / Brush Only" toggle for the 3-in-1 kit product

- **Conditional "What's Included"**: Only show for the 3-in-1 kit. Hide for other products.

- **Per-product features section**: Replace the hardcoded 4-feature grid with product-specific features. Hide entirely for products like brush heads that don't need it.

- **Per-product FAQs**: Create product-specific FAQ arrays. Kit keeps current FAQs. Other products get relevant ones.

- **Sale countdown timer**: Add a "70% Sale ending in HH:MM:SS" countdown below the CTA (visible in all screenshots)

- **Payment icons**: Add payment method icons (Visa, Mastercard, Apple Pay, etc.) below the CTA button, matching the screenshots

### 3. Files Modified
- `src/data/products.ts` — updated prices, added per-product bundle maps
- `src/pages/ProductDetail.tsx` — conditional rendering for all product-specific sections


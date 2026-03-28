

# Plan: Remove Water Flosser References Site-Wide

## What We're Doing

Remove all mentions of the water flosser feature from across the site. The product becomes a 2-in-1 (Brush + Scrape) rather than 3-in-1.

## Changes

### 1. `src/pages/Index.tsx`

- **Line 175-179**: Remove the "Floss / Water flosser" floating badge pill from the hero product showcase
- **Line 292-298**: Remove the "Floss." entry from the Brush/Floss/Scrape feature section (keep Brush + Scrape only). Update section comment from "Brush, Floss, Scrape" to "Brush, Scrape"
- **Lines 325-326**: Remove the two floss-related stats ("60% more plaque…floss alongside brushing" and "55% don't floss daily") from the stats grid
- **Line 418**: Rewrite the sensitive gums FAQ answer to remove the water flosser mention

### 2. `src/data/products.ts`

- **Line 48**: Update product description from "Brush, floss, and scrape" to "Brush and scrape"
- **Line 127**: Remove "Deep Flossing action for Healthier gums" bullet
- **Lines 133**: Remove same flossing bullet from purple-toothpaste (copy-paste artifact)
- **Line 156**: Remove the Water Flosser Attachment feature entry from `productFeatures`
- **Line 180**: Rewrite sensitive gums FAQ answer to remove water flosser reference
- **Line 181**: Remove "water flosser attachment" from the "What's included" FAQ answer

### 3. `src/components/Footer.tsx`

- **Line 12**: Update tagline from "Brush, floss, and scrape" to "Brush and scrape"

### 4. `src/components/ComparisonChart.tsx`

- No water flosser row exists here, but "3-in-1 Cleaning" should become "2-in-1 Cleaning" in the comparison rows

### 5. Product naming consideration

The product is called "3-in-1" throughout — with floss removed it's now effectively 2-in-1. The product ID and name references will need updating if desired, but I'll keep the product name/ID as-is unless you want to rebrand to "2-in-1".


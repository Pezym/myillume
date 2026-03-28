

# Plan: Update Review Count & Fix Scroll Position

## Changes

### 1. Change "106 Reviews" to "75k+ Reviews" on the Homepage
**File: `src/pages/Index.tsx` (line 54)**
- Change `106 Reviews` to `75k+ Reviews`

### 2. Scroll to Top When Navigating to a Product Page
**File: `src/pages/ProductDetail.tsx`**
- Add a `useEffect` that calls `window.scrollTo(0, 0)` when the product `id` param changes, so clicking a product from the shop always lands at the top of the page.


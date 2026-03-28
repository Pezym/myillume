

# Plan: Update Footer Company Links

## Changes

**File: `src/components/Footer.tsx`**

Replace the Company section's generic `.map()` loop (lines 44-56) with individual link elements:

1. **"About illumé"** → `<Link to="/">` with an `onClick` handler that calls `window.scrollTo(0, 0)` to ensure they land at the top of the homepage.
2. **"Become an Affiliate"** → `<a href="https://affilitrak.com/register?shop=www.myillume.com" target="_blank" rel="noopener noreferrer">`
3. **"Contact Us"** → `<a href="mailto:info@myillume.com">`

Import `Link` from `react-router-dom` (already imported). No new dependencies needed.




# Plan: Scroll-to-Top on Nav Clicks & Enlarge Hero Toothbrush

## Changes

### 1. Scroll to top when clicking Home or Shop nav links
**File: `src/components/Navbar.tsx`**
- Add `onClick={() => { window.scrollTo(0, 0); }}` to the desktop and mobile `<Link>` elements for Home and Shop
- Also add it to the logo `<Link to="/">`
- For mobile links, keep the existing `setMobileOpen(false)` in the handler

### 2. Make the hero toothbrush ~2x bigger
**File: `src/pages/Index.tsx` (line 102)**
- Change the toothbrush image height from `h-[380px] md:h-[440px]` to `h-[700px] md:h-[800px]`
- Add `max-h-full` and ensure the parent circle container clips overflow with `overflow-hidden` so the enlarged image stays within the circle boundary


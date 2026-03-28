

# Plan: Show Full Toothbrush in Featured Card on Mobile

## Problem
The featured product image container on mobile uses `aspect-[4/3]` (landscape), which crops the tall toothbrush image.

## Change

### File: `src/pages/Shop.tsx` (line 53)
Change the mobile aspect ratio from `aspect-[4/3]` to `aspect-square` so the container is tall enough to display the entire toothbrush.

```
aspect-[4/3] md:aspect-auto  →  aspect-square md:aspect-auto
```

Single CSS change, no structural modifications.


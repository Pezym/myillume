

# Plan: Shift Mobile Hero Image Down to Show Face

## Change

### File: `src/pages/Index.tsx` (line 29)

Change `object-[center_30%]` to `object-[center_55%]` on the mobile hero `<img>`. This shifts the visible crop area significantly downward so the image starts around the model's eyes, showing the face, smile, and toothbrush instead of the hair.

- `30%` = near top (current, too much hair)
- `55%` = roughly halfway down the image, starting around the eyes

Single CSS change, no structural modifications.


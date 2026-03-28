

# Plan: Show Video Testimonials Only on 3-in-1 Kit Page

## Change

### File: `src/pages/ProductDetail.tsx` (line 371-372)

Wrap the `<VideoTestimonials />` in a conditional so it only renders for the kit product:

```tsx
{product.id === '3-in-1-oral-kit' && <VideoTestimonials />}
```

No other files affected — the homepage and shop page testimonials stay as-is.


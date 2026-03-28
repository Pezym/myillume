

# Plan: Video Testimonial Carousel

## What We're Doing

1. **Convert VideoTestimonials from a static grid to a swipeable carousel** using Embla Carousel (already installed via the carousel UI component). Show 4 videos at a time on desktop, 2 on mobile, with left/right navigation arrows.

2. **Add 3 new video testimonials** (the 3 uploaded .mov files) to the testimonials array, bringing the total to 7 videos that cycle through the carousel.

3. **Add the VideoTestimonials component to the homepage** — place it inside the "What Our Customers Say" section (lines 211-241 of Index.tsx), right after the text review cards.

## Technical Details

### New Assets
- Copy 3 uploaded `.mov` files → `public/videos/testimonial-5.mov`, `testimonial-6.mov`, `testimonial-7.mov`

### File: `src/components/VideoTestimonials.tsx`
- Import Embla Carousel hooks (`useEmblaCarousel`) and add left/right arrow buttons
- Replace the `grid` layout with an Embla carousel container
- Update the testimonials array to include 7 videos total
- Show 4 slides on desktop (basis-1/4), 2 on mobile (basis-1/2)
- Add subtle prev/next arrow buttons on either side

### File: `src/pages/Index.tsx`
- Import `VideoTestimonials`
- Add `<VideoTestimonials />` after the text review cards grid inside the "What Our Customers Say" section (after line 239)


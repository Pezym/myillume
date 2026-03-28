

# Plan: Product Quiz Popup with Discount Code

## What We're Doing

Build a fun, short popup quiz (3-4 questions) triggered by the "Take The Quiz" buttons. The quiz guides users through oral care questions, and the result always recommends the 3-in-1 kit with a **15% off discount code (NEWSMILE)**.

## Changes

### 1. Create `src/components/ProductQuiz.tsx`
A new dialog-based quiz component with:
- **3 quick multiple-choice questions** (e.g., "What's your biggest oral care concern?", "How many products do you currently use?", "What matters most to you?") with 2-3 options each
- Step indicator (dots or "1 of 3")
- On completion: a results screen showing the 3-in-1 kit as the perfect match, the discount code **NEWSMILE** in a copyable box, and a "Shop Now" CTA linking to `/product/3-in-1-oral-kit`
- Uses `Dialog` from `@/components/ui/dialog`
- Accepts `open` and `onOpenChange` props

### 2. Update `src/pages/Index.tsx`
- Import `ProductQuiz` and add `useState` for quiz open state
- Change both "Take The Quiz" `<Link>` elements to `<button>` elements that set the quiz open state to `true`
- Render `<ProductQuiz open={quizOpen} onOpenChange={setQuizOpen} />` once in the component

### Summary
- Both mobile and desktop "Take The Quiz" buttons open a dialog quiz
- 3 light questions → result page with NEWSMILE code + Shop Now CTA
- No backend needed — purely client-side


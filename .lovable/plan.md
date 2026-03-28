

# Plan: Add "Facts Backed by Science" & FAQ Sections

## What We're Adding

Two new sections from the screenshots, placed logically on the homepage:

1. **"Facts Backed by Science" section** — placed after the Brush/Floss/Scrape features (line 163) and before Category Cards. Two-column layout: left side has the heading + 4 stat items (96%, 60%, 55%, 53%) with circular percentage indicators, right side has a product lifestyle image (reuse `toothpasteBottle` asset). Top heading: "Modern Toothbrushes Leave your Dental Health Deficient" with subtitle "illumé is the Only Toothbrush That Fills in the Gaps!"

2. **FAQ accordion section** — placed after the Testimonials section (line 245) and before the Newsletter. Uses the existing shadcn Accordion component. Heading: "Wait… I was wondering that too." with subheading "YOUR ILLUMÉ QUESTIONS, ANSWERED." Contains 7 questions with their answers from the screenshot.

## Technical Details

### File: `src/pages/Index.tsx`
- Import `Accordion, AccordionItem, AccordionTrigger, AccordionContent` from `@/components/ui/accordion`
- **After line 163** (after features section closing `</section>`): Add "Facts Backed by Science" section with a 2-column grid. Left column has 4 stat rows, each with a blue circular ring indicator (styled via CSS border + rounded-full) showing the percentage, plus descriptive text with bold keywords. Right column shows the toothpaste lifestyle image.
- **After line 245** (after testimonials section closing `</section>`): Add FAQ section with accordion containing these 7 Q&As:
  - Will it help with bad breath?
  - Is it good for sensitive gums?
  - Is this really better than a regular electric toothbrush?
  - I hate flossing… will I actually use this?
  - How often should I use the flosser and tongue scraper?
  - How long does the battery last?
  - Is it bulky or hard to travel with?

Each question prefixed with a small tooth emoji (🦷) to match the screenshot style. All answers taken directly from the screenshot text.


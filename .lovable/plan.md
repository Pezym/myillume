

# illumé — Top-Tier Toothbrush Brand Site

## Overview
Convert the three HTML page designs into a fully interactive React application with routing, animations, and a slide-out cart drawer. The design system (sand/ink palette, Playfair Display + Instrument Sans + Barlow Condensed fonts) will be faithfully reproduced using Tailwind CSS custom config.

## Pages & Components

### 1. Shared Layout Components
- **AnnouncementBar** — Scrolling ticker with promo messages
- **Navbar** — Sticky nav with brand logo (italic Playfair "illumé" + sand dot), centered nav links (Home, Shop, Science, The Routine, Affiliate), right-side search icon, cart icon with item count badge, and "Get Started" CTA pill button
- **Footer** — Dark ink background with 4-column layout (brand + tagline, Shop links, Support links, Company links), payment method badges, copyright
- **CartDrawer** — Slide-out cart panel from the right with line items (image, name, quantity +/- controls, price), subtotal, promo code input, and "Checkout" CTA button

### 2. Homepage (`/`)
- **Hero section** — Full-bleed lifestyle image background with overlaid headline (Playfair serif), subtext, and CTA button
- **"As Seen On" logo strip** — Media logos (CBS, Forbes, etc.) in a horizontal row
- **Dual-panel feature section** — Side-by-side image + copy blocks highlighting product benefits
- **Category cards row** — 3 cards with hover lift effect linking to product categories
- **Social proof / stats strip** — Key metrics (reviews count, rating, etc.)
- **Testimonials section** — Review cards in a grid with star ratings, quotes, avatar gradients
- **Newsletter signup** — Email input with sand-colored CTA

### 3. Shop Page (`/shop`)
- **Shop hero** — 40/60 grid split: left copy panel with headline + CTA, right lifestyle photo
- **Filter bar** — Pill-shaped filter chips (All, Kits, Oral Care, Accessories) with active state, product count on right
- **Product grid** — 3-column grid with featured product spanning 2 columns; product cards with image, category tag, save badge, star ratings, price (current + crossed-out original), and "Add to Cart" button with hover state
- **Bundle pricing strip** — Dark ink background with 4 bundle option cards (1-pack to 6-pack) showing tiered pricing, "Most Popular" badge, save percentage pills
- **Routine section** — 4-column step cards (Step 01–04) linking products to a daily routine

### 4. Product Detail Page (`/product/:id`)
- **Breadcrumb** — Home > Shop > Product Name
- **PDP layout** — 58/42 grid: left image gallery (main image + thumbnail strip), right product info
- **Product info panel** — Breadline label, Playfair title, star rating + review count, price block (current + original + save badge), pack selector pills, bundle quantity radio options (1x, 2x, 3x, 4x) with pricing tiers
- **CTA stack** — "Add to Cart" (dark) + "Buy Now" (sand) full-width pill buttons
- **Trust badges row** — Free shipping, 30-day guarantee, secure checkout icons
- **Features list** — Icon + title + description rows for product features
- **Delivery info card** — Shipping estimate and return policy
- **Below-the-fold gallery strip** — 4-column lifestyle image grid with hover zoom + overlay labels
- **"What's in the Box"** — 50/50 split: product photo + itemized contents list
- **Reviews section** — Overall score display + 3-column review cards grid
- **FAQ accordion** — Expandable Q&A items with rotating + icon
- **Related products** — 3-column product card grid
- **Sticky ATC bar** — Fixed bottom bar that appears on scroll with product thumbnail, name, price, and "Add to Cart" button

### 5. Cart Functionality (Context-based)
- Cart state managed via React Context
- Add to cart from product cards, PDP, and sticky bar
- Cart drawer shows/hides on cart icon click
- Line items with quantity adjustment and remove
- Cart count badge on nav icon
- Subtotal calculation

## Design System (Tailwind Config)
- Custom colors: canvas (#F0EDE6), ink (#1A1714), sand (#C8B89A), gold (#C4963A), and all variants
- Fonts: Playfair Display (headings), Instrument Sans (body), Barlow Condensed (prices)
- Animations: ticker scroll, scroll-reveal fade-up, card hover lift, accordion expand

## Mobile Responsiveness
- All pages fully responsive with mobile breakpoints
- Hamburger menu for mobile nav
- Single-column layouts on small screens
- Touch-friendly cart drawer


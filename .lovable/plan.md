

# Plan: Add Refund Policy & Shipping Policy Pages

## What We're Adding

Two new standalone pages with the exact content from the screenshots, linked from the footer.

## Changes

### 1. Create `src/pages/RefundPolicy.tsx`
- Title: "Refund policy"
- Sections: Eligibility for Returns (bullet list), Damages and Issues, Non-Returnable Items (bullet list), Exchanges, Refunds — all text taken directly from the screenshot
- `useEffect` to scroll to top on mount
- Bold `info@myillume.com` as mailto links

### 2. Create `src/pages/ShippingPolicy.tsx`
- Title: "Shipping policy"
- Sections: Lost/Missing Packages, Disclaimer (International), Shipping Time table (US: 4-10 business days, International: 7-14 business days)
- `useEffect` to scroll to top on mount

### 3. Update `src/App.tsx`
- Add routes: `/refund-policy` and `/shipping-policy`

### 4. Update `src/components/Footer.tsx`
- Replace the Policies `.map()` loop with individual links:
  - "Refund Policy" → `<Link to="/refund-policy">`
  - "Shipping Policy" → `<Link to="/shipping-policy">`
  - "Privacy Policy" and "Terms of Service" remain as `#` links for now


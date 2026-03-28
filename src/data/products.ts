import toothbrushImg from '@/assets/toothbrush.png';
import toothpasteImg from '@/assets/toothpaste-boxed.jpg';
import kitFullImg from '@/assets/kit-full.jpg';
import brushHeads3PackImg from '@/assets/brush-heads-3pack.jpg';
import wandProductImg from '@/assets/wand-boxed.png';
import stripsBoxImg from '@/assets/strips-box.png';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  featured?: boolean;
  badge?: string;
}

export interface BundleOption {
  qty: number;
  label: string;
  price: number;
  originalPrice: number;
  perUnit: number;
  save: string;
  popular: boolean;
}

export interface SubscribeOption {
  subscribePrice: number;
  oneTimePrice: number;
  savePercent: number;
}

export const products: Product[] = [
  {
    id: '3-in-1-oral-kit',
    name: '3-in-1 Illumé Toothbrush Oral Kit',
    category: 'Kits',
    price: 97,
    originalPrice: 265.95,
    rating: 5,
    reviewCount: 106,
    image: toothbrushImg,
    description: 'The complete oral care system. Brush, floss, and scrape in one device. Includes 3 head attachments, wireless charger, and carrying case.',
    featured: true,
    badge: 'SAVE 63%',
  },
  {
    id: 'purple-toothpaste',
    name: 'Illumé Purple Color Correcting Toothpaste',
    category: 'Oral Care',
    price: 24.95,
    originalPrice: 49.95,
    rating: 4.8,
    reviewCount: 54,
    image: toothpasteImg,
    description: 'Color-correcting formula for an instantly brighter smile.',
    badge: 'SAVE 50%',
  },
  {
    id: 'whitening-strips',
    name: 'Illumé Purple Advanced Whitening Strips',
    category: 'Oral Care',
    price: 39.00,
    originalPrice: 49.99,
    rating: 4.7,
    reviewCount: 38,
    image: stripsBoxImg,
    description: 'Dentist-grade whitening strips for professional results at home.',
    badge: 'SAVE 22%',
  },
  {
    id: 'whitening-wand',
    name: 'Illumé Extra Strength Whitening Wand',
    category: 'Oral Care',
    price: 37.12,
    originalPrice: 69.99,
    rating: 4.9,
    reviewCount: 72,
    image: wandProductImg,
    description: 'Dual whitening formula with hydrogen peroxide, carbomer, and glycerin for a gentle yet effective whitening experience.',
    badge: 'SAVE 47%',
  },
  {
    id: 'brush-heads-3pack',
    name: 'Replacement Brush Heads (3-Pack)',
    category: 'Accessories',
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviewCount: 23,
    image: brushHeads3PackImg,
    description: 'DuPont bristle replacement heads for your illumé toothbrush.',
    badge: 'SAVE 33%',
  },
];

export const bundlePricing: Record<string, BundleOption[]> = {
  '3-in-1-oral-kit': [
    { qty: 1, label: 'Buy 1', price: 97, originalPrice: 265.95, perUnit: 97, save: '$168.95', popular: false },
    { qty: 2, label: 'His & Hers Bundle', price: 194, originalPrice: 531.90, perUnit: 97, save: '$337.90', popular: true },
    { qty: 3, label: '3 Pack Family Bundle', price: 291, originalPrice: 797.85, perUnit: 97, save: '$506.85', popular: false },
    { qty: 4, label: 'Buy 4', price: 388, originalPrice: 1063.80, perUnit: 97, save: '$675.80', popular: false },
  ],
  'purple-toothpaste': [
    { qty: 1, label: 'Buy 1', price: 24.95, originalPrice: 49.95, perUnit: 24.95, save: '$25.00', popular: false },
    { qty: 2, label: "His & Her's Bundle", price: 49.90, originalPrice: 99.90, perUnit: 24.95, save: '$50.00', popular: true },
    { qty: 3, label: '3 Pack Family Bundle', price: 74.85, originalPrice: 149.85, perUnit: 24.95, save: '$75.00', popular: false },
    { qty: 4, label: 'Buy 4', price: 99.80, originalPrice: 199.80, perUnit: 24.95, save: '$100.00', popular: false },
  ],
};

export const subscribePricing: Record<string, SubscribeOption> = {
  
  'whitening-strips': { subscribePrice: 29.25, oneTimePrice: 39.00, savePercent: 25 },
  'whitening-wand': { subscribePrice: 27.84, oneTimePrice: 37.12, savePercent: 25 },
  'purple-toothpaste': { subscribePrice: 18.71, oneTimePrice: 24.95, savePercent: 25 },
};

export const productBullets: Record<string, string[]> = {
  '3-in-1-oral-kit': [
    '360° rotation for a Professional Clean',
    'Deep Flossing action for Healthier gums',
    'Built-in tongue scraper for Instantly Fresh Breath that lasts.',
    'Comes with 3 DuPont bristle brush heads',
  ],
  'purple-toothpaste': [
    '360° rotation for a Professional Clean',
    'Deep Flossing action for Healthier gums',
    'Built-in tongue scraper for Instantly Fresh Breath that lasts.',
  ],
  'whitening-strips': [
    'Whiter Teeth in Minutes',
    'Gentle on Enamel, Tough on Stains',
    'Fits in Your Pocket, Take it On-the-Go',
  ],
  'whitening-wand': [
    'Whiter Teeth in Minutes',
    'Gentle on Enamel, Tough on Stains',
    'Fits in Your Pocket, Take it On-the-Go',
  ],
  'brush-heads-3pack': [
    'DuPont bristle technology for thorough cleaning',
    'Easy snap-on replacement',
    'Recommended to replace every 3 months',
  ],
};

export const productFeatures: Record<string, { icon: string; title: string; desc: string }[]> = {
  '3-in-1-oral-kit': [
    { icon: '🦷', title: '360° Bidirectional Brush Head', desc: 'Sonic oscillation at 40,000 strokes/min. Cleans surfaces standard brushes miss.' },
    { icon: '💧', title: 'Water Flosser Attachment', desc: 'Removes 60% more plaque between teeth. Gentle, adjustable pressure for sensitive gums.' },
    { icon: '👅', title: 'Tongue Scraper Attachment', desc: 'Eliminates bad breath at the source. Swaps in seconds with the patented head system.' },
    { icon: '⚡', title: '60-Day Wireless Charging Base', desc: 'Industry-leading battery life. USB cable and wireless charging base included.' },
  ],
  'purple-toothpaste': [
    { icon: '💜', title: 'Color-Correcting Formula', desc: 'Purple pigments neutralize yellow tones for an instantly brighter, whiter smile.' },
    { icon: '🛡️', title: 'Enamel Safe', desc: 'Gentle formula that whitens without damaging enamel or causing sensitivity.' },
    { icon: '🌿', title: 'Fresh Breath', desc: 'Mint-infused formula leaves your mouth feeling clean and refreshed all day.' },
  ],
  'whitening-strips': [
    { icon: '⚡', title: 'Fast Results', desc: 'Visibly whiter teeth in as little as 7 days with consistent use.' },
    { icon: '🛡️', title: 'Gentle on Enamel', desc: 'Formulated to whiten effectively without causing enamel damage or sensitivity.' },
    { icon: '✨', title: 'Professional Grade', desc: 'Dentist-recommended formula for professional whitening results at home.' },
  ],
  'whitening-wand': [
    { icon: '🎯', title: 'Precision Application', desc: 'Targeted wand tip applies whitening gel exactly where you need it.' },
    { icon: '💪', title: 'Extra Strength Formula', desc: 'Dual whitening formula with hydrogen peroxide for maximum results.' },
    { icon: '🧳', title: 'Travel-Friendly', desc: 'Compact design fits in your pocket or purse for on-the-go whitening.' },
  ],
};

export const productFaqs: Record<string, { q: string; a: string }[]> = {
  '3-in-1-oral-kit': [
    { q: 'How long does the battery last?', a: 'The illumé toothbrush lasts up to 60 days on a single charge with the wireless charging base included.' },
    { q: 'Is it safe for sensitive gums?', a: 'Yes! The water flosser has adjustable pressure settings specifically designed for sensitive gums.' },
    { q: "What's included in the Full Oral Care Kit?", a: 'The kit includes the 3-in-1 handle, brush head, water flosser attachment, tongue scraper, wireless charging base, USB cable, and premium carrying case.' },
    { q: 'How often should I replace the brush heads?', a: 'We recommend replacing brush heads every 3 months for optimal cleaning performance.' },
    { q: 'Do you offer a warranty?', a: 'Yes — every illumé product comes with a 60-day smile guarantee and a 1-year manufacturer warranty.' },
  ],
  'purple-toothpaste': [
    { q: 'How does the purple color work?', a: 'Purple pigments use color theory to neutralize yellow tones on your teeth, creating an instantly brighter appearance.' },
    { q: 'Is it safe for daily use?', a: 'Absolutely! Our formula is designed for daily use and is gentle on enamel while effectively whitening.' },
    { q: 'Will it stain my teeth purple?', a: 'No — the purple pigments rinse away cleanly, leaving only a brighter, whiter smile behind.' },
    { q: 'Do you offer a warranty?', a: 'Yes — every illumé product comes with a 60-day smile guarantee.' },
  ],
  'whitening-strips': [
    { q: 'How long until I see results?', a: 'Most users see visible whitening results within 7 days of consistent use.' },
    { q: 'Are they safe for sensitive teeth?', a: 'Yes, our strips are formulated to minimize sensitivity while delivering professional-grade results.' },
    { q: 'How long do I wear each strip?', a: 'Apply strips for 30 minutes per session for best results.' },
    { q: 'Do you offer a warranty?', a: 'Yes — every illumé product comes with a 60-day smile guarantee.' },
  ],
  'whitening-wand': [
    { q: 'How do I use the whitening wand?', a: 'Simply twist the bottom to dispense gel, apply to teeth, and let it work for 10-15 minutes. No rinsing needed.' },
    { q: 'Is it safe for enamel?', a: 'Yes, our formula uses a gentle yet effective concentration of hydrogen peroxide that is enamel-safe.' },
    { q: 'How many applications per wand?', a: 'Each wand provides approximately 20+ applications depending on usage.' },
    { q: 'Do you offer a warranty?', a: 'Yes — every illumé product comes with a 60-day smile guarantee.' },
  ],
  'brush-heads-3pack': [
    { q: 'Are these compatible with my illumé brush?', a: 'Yes, these replacement heads are designed to work perfectly with all illumé 3-in-1 toothbrush models.' },
    { q: 'How often should I replace them?', a: 'We recommend replacing your brush head every 3 months for optimal cleaning performance.' },
    { q: 'Do you offer a warranty?', a: 'Yes — every illumé product comes with a 60-day smile guarantee.' },
  ],
};

import toothbrushImg from '@/assets/toothbrush.png';
import toothpasteImg from '@/assets/lifestyle-toothpaste.jpg';
import kitFullImg from '@/assets/kit-full.jpg';
import brushHeads3PackImg from '@/assets/brush-heads-3pack.jpg';

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

export const products: Product[] = [
  {
    id: '3-in-1-oral-kit',
    name: '3-in-1 Illumé Toothbrush Oral Kit',
    category: 'Kits',
    price: 97,
    originalPrice: 265.95,
    rating: 5,
    reviewCount: 106,
    image: kitFullImg,
    description: 'The complete oral care system. Brush, floss, and scrape in one device. Includes 3 head attachments, wireless charger, and carrying case.',
    featured: true,
    badge: 'SAVE 63%',
  },
  {
    id: 'purple-toothpaste',
    name: 'Purple Whitening Toothpaste',
    category: 'Oral Care',
    price: 14.99,
    originalPrice: 24.99,
    rating: 4.8,
    reviewCount: 54,
    image: toothpasteImg,
    description: 'Color-correcting formula for an instantly brighter smile.',
    badge: 'SAVE 40%',
  },
  {
    id: 'whitening-strips',
    name: 'Professional Whitening Strips',
    category: 'Oral Care',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.7,
    reviewCount: 38,
    image: '/placeholder.svg',
    description: 'Dentist-grade whitening strips for professional results at home.',
    badge: 'SAVE 40%',
  },
  {
    id: 'whitening-wand',
    name: 'LED Whitening Wand',
    category: 'Accessories',
    price: 39.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviewCount: 72,
    image: '/placeholder.svg',
    description: 'Professional LED whitening technology in a portable wand.',
    badge: 'SAVE 43%',
  },
  {
    id: 'brush-heads-3pack',
    name: 'Replacement Brush Heads (3-Pack)',
    category: 'Accessories',
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviewCount: 23,
    image: '/placeholder.svg',
    description: 'DuPont bristle replacement heads for your illumé toothbrush.',
    badge: 'SAVE 33%',
  },
  {
    id: 'travel-case',
    name: 'Premium Travel Case',
    category: 'Accessories',
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.6,
    reviewCount: 15,
    image: '/placeholder.svg',
    description: 'Hard-shell travel case with magnetic closure. Fits the full kit.',
    badge: 'SAVE 38%',
  },
];

export const bundlePricing = [
  { qty: 1, label: 'Buy 1', price: 97, originalPrice: 265.95, perUnit: 97, save: '$168.95', popular: false },
  { qty: 2, label: 'His & Hers Bundle', price: 194, originalPrice: 531.90, perUnit: 97, save: '$337.90', popular: true },
  { qty: 3, label: '3 Pack Family Bundle', price: 291, originalPrice: 797.85, perUnit: 97, save: '$506.85', popular: false },
  { qty: 4, label: 'Buy 4', price: 388, originalPrice: 1063.80, perUnit: 97, save: '$675.80', popular: false },
];

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const categories = ['Deep Cleaning', 'Whitening', 'Gum Health', 'Design', 'Sensitivity'];

const reviews = [
  { badge: 'DEEP CLEANING', stars: 5, quote: '"Finally, a toothbrush that actually cleans"', body: 'I\'ve tried every electric toothbrush on the market. The 3-in-1 system is the first one where I can genuinely feel the difference. My teeth feel dentist-clean every single time.', name: 'Sarah M.', verified: true },
  { badge: 'DEEP CLEANING', stars: 5, quote: '"My dentist noticed immediately"', body: 'At my last cleaning, my hygienist asked what I changed. When I told her about illumé, she said she could tell — significantly less plaque buildup than my previous visits.', name: 'James K.', verified: true },
  { badge: 'WHITENING', stars: 5, quote: '"Whiter teeth without the sensitivity"', body: 'I was skeptical about the whitening claims, but after 2 weeks my teeth are noticeably whiter. And zero sensitivity — which I always got with whitening strips.', name: 'Emily R.', verified: true },
  { badge: 'GUM HEALTH', stars: 5, quote: '"No more bleeding gums"', body: 'The water flosser changed everything for me. My gums used to bleed every time I flossed with string. Now they\'re healthier than ever and flossing takes 30 seconds.', name: 'Michael T.', verified: true },
  { badge: 'DESIGN', stars: 5, quote: '"Sleek and travel-friendly"', body: 'I travel for work constantly. Having one device instead of three is a game changer. The 60-day battery means I don\'t even pack a charger for short trips.', name: 'Lisa P.', verified: true },
  { badge: 'SENSITIVITY', stars: 5, quote: '"Perfect for sensitive teeth"', body: 'I have very sensitive teeth and was worried about the sonic vibrations. The gentle mode is perfect — thorough cleaning without any discomfort whatsoever.', name: 'David W.', verified: true },
  { badge: 'DEEP CLEANING', stars: 5, quote: '"Replaced 3 devices with 1"', body: 'I used to have a toothbrush, water flosser, and tongue scraper cluttering my bathroom counter. Now it\'s just illumé. Cleaner teeth AND a cleaner counter.', name: 'Rachel S.', verified: true },
  { badge: 'WHITENING', stars: 5, quote: '"Coffee stains are gone"', body: 'As a 3-cups-a-day coffee drinker, I\'d given up on white teeth. The purple toothpaste combined with the sonic brush has genuinely removed years of staining.', name: 'Chris A.', verified: true },
];

const ReviewShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('Deep Cleaning');
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', slidesToScroll: 1, containScroll: 'trimSnaps', loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  const filteredReviews = reviews.filter(r => r.badge === activeCategory.toUpperCase());
  const displayReviews = filteredReviews.length > 0 ? filteredReviews : reviews;

  return (
    <div>
      <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-body text-xs tracking-wider px-4 py-2 rounded-full border transition-colors ${
              activeCategory === cat ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {displayReviews.map((review, i) => (
              <div key={i} className="flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="bg-background border border-border rounded-2xl p-6 h-full flex flex-col">
                  <span className="inline-block self-start font-body text-[9px] tracking-widest uppercase bg-sand/20 text-sand px-2 py-1 rounded mb-3">{review.badge}</span>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: review.stars }).map((_, j) => (
                      <Star key={j} size={12} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-display text-sm mb-2">{review.quote}</p>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{review.body}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sand to-gold" />
                    <span className="font-body text-xs font-medium">{review.name}</span>
                    {review.verified && <span className="w-3 h-3 rounded-full bg-green-500" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => emblaApi?.scrollPrev()} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 bg-background border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-sand-light transition-colors hidden md:flex">
          <ChevronLeft size={16} />
        </button>
        <button onClick={() => emblaApi?.scrollNext()} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 bg-background border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-sand-light transition-colors hidden md:flex">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ReviewShowcase;

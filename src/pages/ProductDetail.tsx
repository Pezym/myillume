import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Truck, RotateCcw, Shield, ChevronRight, Plus, Minus } from 'lucide-react';
import modelBrushing from '@/assets/model-brushing.jpg';
import kitFull from '@/assets/kit-full.jpg';
import kitBox from '@/assets/kit-box.jpg';
import toothbrushImg from '@/assets/toothbrush.png';
import stripsBox from '@/assets/strips-box.png';
import stripsModel from '@/assets/strips-model.png';
import stripsSide from '@/assets/strips-side.png';
import stripsProduct from '@/assets/strips-product.png';
import wandBoxed from '@/assets/wand-boxed.png';
import wandProduct from '@/assets/wand-product.png';
import wandClosed from '@/assets/wand-closed.png';
import wandBack from '@/assets/wand-back.png';
import toothpasteImg from '@/assets/toothpaste-boxed.jpg';
import toothpasteModel from '@/assets/toothpaste-model.jpg';
import toothpasteTrio from '@/assets/toothpaste-trio.png';
import brushHeads3Pack from '@/assets/brush-heads-3pack.jpg';
import { products, bundlePricing } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import VideoTestimonials from '@/components/VideoTestimonials';

const productGalleries: Record<string, string[]> = {
  '3-in-1-oral-kit': [kitFull, modelBrushing, toothbrushImg, kitBox],
  'purple-toothpaste': [toothpasteImg, toothpasteModel, toothpasteTrio],
  'whitening-strips': [stripsBox, stripsModel, stripsSide, stripsProduct],
  'whitening-wand': [wandBoxed, wandProduct, wandClosed, wandBack],
  'brush-heads-3pack': [brushHeads3Pack],
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id) || products[0];

  const [selectedPack, setSelectedPack] = useState('full-kit');
  const [selectedBundle, setSelectedBundle] = useState(1);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = productGalleries[product.id] || [product.image];

  useEffect(() => { setSelectedImage(0); }, [product.id]);

  const currentBundle = bundlePricing.find(b => b.qty === selectedBundle) || bundlePricing[0];

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-bundle-${selectedBundle}`,
      name: product.name,
      price: currentBundle.price,
      originalPrice: currentBundle.originalPrice,
      image: product.image,
      variant: `${selectedBundle}x ${selectedPack === 'full-kit' ? 'Full Oral Care Kit' : 'Brush Only'}`,
    });
  };

  const features = [
    { icon: '🦷', title: '360° Bidirectional Brush Head', desc: 'Sonic oscillation at 40,000 strokes/min. Cleans surfaces standard brushes miss.' },
    { icon: '💧', title: 'Water Flosser Attachment', desc: 'Removes 60% more plaque between teeth. Gentle, adjustable pressure for sensitive gums.' },
    { icon: '👅', title: 'Tongue Scraper Attachment', desc: 'Eliminates bad breath at the source. Swaps in seconds with the patented head system.' },
    { icon: '⚡', title: '60-Day Wireless Charging Base', desc: 'Industry-leading battery life. USB cable and wireless charging base included.' },
  ];

  const faqs = [
    { q: 'How long does the battery last?', a: 'The illumé toothbrush lasts up to 60 days on a single charge with the wireless charging base included.' },
    { q: 'Is it safe for sensitive gums?', a: 'Yes! The water flosser has adjustable pressure settings specifically designed for sensitive gums.' },
    { q: 'What\'s included in the Full Oral Care Kit?', a: 'The kit includes the 3-in-1 handle, brush head, water flosser attachment, tongue scraper, wireless charging base, USB cable, and premium carrying case.' },
    { q: 'How often should I replace the brush heads?', a: 'We recommend replacing brush heads every 3 months for optimal cleaning performance.' },
    { q: 'Do you offer a warranty?', a: 'Yes — every illumé product comes with a 60-day smile guarantee and a 1-year manufacturer warranty.' },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 font-body text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* PDP Main */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Gallery */}
          <div className="lg:col-span-7">
            <div className="aspect-square bg-sand-light rounded-2xl overflow-hidden mb-4">
              <img src={galleryImages[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square rounded-lg cursor-pointer overflow-hidden transition-all ${selectedImage === i ? 'ring-2 ring-sand' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-5">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-sand mb-2">ILLUMÉ — ORAL CARE SYSTEM</p>
            <h1 className="font-display text-3xl md:text-4xl mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="font-body text-sm text-muted-foreground">{product.reviewCount} verified reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-price text-3xl font-bold">${currentBundle.price.toFixed(2)}</span>
              <span className="font-price text-lg text-muted-foreground line-through">${currentBundle.originalPrice.toFixed(2)}</span>
              {product.badge && (
                <span className="bg-sand text-primary font-body text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">{product.badge}</span>
              )}
            </div>
            <p className="font-body text-xs text-muted-foreground mb-6">Free shipping · Estimated delivery Apr 1–5</p>

            {/* Pack Selector */}
            <div className="mb-6">
              <p className="font-body text-xs tracking-[0.2em] uppercase mb-3">Pack</p>
              <div className="flex gap-3">
                {[
                  { id: 'full-kit', label: 'Full Oral Care Kit' },
                  { id: 'brush-only', label: 'Brush Only' },
                ].map(pack => (
                  <button
                    key={pack.id}
                    onClick={() => setSelectedPack(pack.id)}
                    className={`font-body text-xs tracking-wider px-5 py-2.5 rounded-full border transition-colors ${
                      selectedPack === pack.id
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-muted-foreground hover:border-foreground'
                    }`}
                  >
                    {pack.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bundle Options */}
            <div className="mb-6">
              <p className="font-body text-xs tracking-[0.2em] uppercase mb-3">Share the Health & Spread the Wealth</p>
              <div className="space-y-2">
                {bundlePricing.map(bundle => (
                  <button
                    key={bundle.qty}
                    onClick={() => setSelectedBundle(bundle.qty)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                      selectedBundle === bundle.qty
                        ? 'border-sand bg-sand/5'
                        : 'border-border hover:border-sand/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedBundle === bundle.qty ? 'border-sand' : 'border-border'
                      }`}>
                        {selectedBundle === bundle.qty && <div className="w-2 h-2 rounded-full bg-sand" />}
                      </div>
                      <div className="text-left">
                        <span className="font-body text-sm font-medium">{bundle.label}</span>
                        {bundle.popular && (
                          <span className="ml-2 bg-sand text-primary font-body text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-price text-sm font-bold">${bundle.price}</span>
                      <span className="font-price text-xs text-muted-foreground line-through ml-2">${bundle.originalPrice.toFixed(2)}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase py-4 rounded-full hover:bg-sand hover:text-primary transition-colors"
              >
                <ShoppingBag size={16} /> Add to Cart — ${currentBundle.price}
              </button>
              <button className="w-full bg-sand text-primary font-body text-sm tracking-widest uppercase py-4 rounded-full hover:bg-gold transition-colors">
                Get Your New Smile :) →
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: <Shield size={18} />, label: 'Secure' },
                { icon: <Truck size={18} />, label: 'Free Shipping' },
                { icon: <RotateCcw size={18} />, label: '60-Day Returns' },
              ].map(badge => (
                <div key={badge.label} className="flex flex-col items-center gap-1 text-center py-3 border border-border rounded-xl">
                  <span className="text-sand">{badge.icon}</span>
                  <span className="font-body text-[10px] tracking-wider uppercase text-muted-foreground">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="border-t border-border pt-6">
              <p className="font-body text-xs tracking-[0.2em] uppercase mb-4">What's Included</p>
              <ul className="space-y-2">
                {['3-in-1 Handle', 'Brush Head Attachment', 'Water Flosser Attachment', 'Tongue Scraper Attachment', 'Wireless Charging Base', 'USB Charging Cable', 'Premium Carrying Case'].map(item => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-sand rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-sand-light/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-background border border-border rounded-2xl p-6 flex gap-4">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="font-display text-base mb-1">{f.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-sand-light/50 border border-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Truck size={24} className="text-sand" />
            <div>
              <p className="font-body text-sm font-medium">Estimated Delivery: Apr 1 – Apr 5</p>
              <p className="font-body text-xs text-muted-foreground">Free Shipping & Returns on all orders</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RotateCcw size={24} className="text-sand" />
            <div>
              <p className="font-body text-sm font-medium">60-Day Smile Guarantee</p>
              <p className="font-body text-xs text-muted-foreground">Full refund if unsatisfied</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} size={20} className="fill-gold text-gold" />
            ))}
          </div>
          <p className="font-display text-4xl mb-1">4.9</p>
          <p className="font-body text-sm text-muted-foreground">{product.reviewCount} verified reviews</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Sarah M.', quote: 'I\'ve never had my teeth feel this clean after brushing at home. The water flosser attachment is genius.', rating: 5 },
            { name: 'James K.', quote: 'Replaced three separate devices with one. The build quality is outstanding. Worth every penny.', rating: 5 },
            { name: 'Emily R.', quote: 'My dentist noticed the difference at my last cleaning. The tongue scraper alone is worth it.', rating: 5 },
          ].map((review, i) => (
            <div key={i} className="bg-sand-light/50 border border-border rounded-2xl p-6">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={12} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">"{review.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sand to-gold" />
                <div>
                  <p className="font-body text-sm font-medium">{review.name}</p>
                  <p className="font-body text-[10px] text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-sand-light/50 border border-border rounded-xl px-6">
              <AccordionTrigger className="font-body text-sm font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl text-center mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.filter(p => p.id !== product.id).slice(0, 3).map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square bg-sand-light flex items-center justify-center">
                <img src={p.image} alt={p.name} className="w-1/3 h-1/3 object-contain opacity-30" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base mb-1 group-hover:text-sand transition-colors">{p.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-price text-lg font-semibold">${p.price}</span>
                  <span className="font-price text-sm text-muted-foreground line-through">${p.originalPrice}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sticky ATC Bar */}
      <div className={`fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-40 transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sand-light rounded-lg flex-shrink-0" />
            <div>
              <p className="font-body text-sm font-medium truncate">{product.name}</p>
              <p className="font-price text-sm">From ${currentBundle.price}</p>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-sand hover:text-primary transition-colors flex-shrink-0"
          >
            <ShoppingBag size={14} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

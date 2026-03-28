import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Truck, RotateCcw, Shield, ChevronRight } from 'lucide-react';
import modelBrushing from '@/assets/model-brushing.jpg';
import kitFull from '@/assets/kit-full.jpg';
import kitBox from '@/assets/kit-box.jpg';
import kitAngle1 from '@/assets/kit-angle-1.jpg';
import kitAngle2 from '@/assets/kit-angle-2.jpg';
import kitAngle3 from '@/assets/kit-angle-3.jpg';
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
import { products, bundlePricing, subscribePricing, productBullets, productFeatures, productFaqs } from '@/data/products';
import { useCartStore } from '@/stores/cartStore';
import { buildCartProduct, buildBundleCartProduct, productShopifyMap } from '@/lib/cartHelpers';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import VideoTestimonials from '@/components/VideoTestimonials';
import ReviewShowcase from '@/components/ReviewShowcase';

const productGalleries: Record<string, string[]> = {
  '3-in-1-oral-kit': [kitAngle1, kitAngle2, kitAngle3, modelBrushing, kitBox],
  'purple-toothpaste': [toothpasteImg, toothpasteModel, toothpasteTrio],
  'whitening-strips': [stripsBox, stripsModel, stripsSide, stripsProduct],
  'whitening-wand': [wandBoxed, wandProduct, wandClosed, wandBack],
  'brush-heads-3pack': [brushHeads3Pack],
};

const useSaleCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return timeLeft;
};

const ProductDetail = () => {
  const { id } = useParams();
  const addItem = useCartStore(s => s.addItem);
  const isCartLoading = useCartStore(s => s.isLoading);
  const product = products.find(p => p.id === id) || products[0];
  const countdown = useSaleCountdown();

  const [selectedPack, setSelectedPack] = useState('full-kit');
  const [selectedBundle, setSelectedBundle] = useState(1);
  const [purchaseType, setPurchaseType] = useState<'subscribe' | 'one-time'>(subscribePricing[product?.id] ? 'subscribe' : 'one-time');
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = productGalleries[product.id] || [product.image];
  const hasBundles = !!bundlePricing[product.id];
  const hasSubscription = !!subscribePricing[product.id];
  const isKit = product.id === '3-in-1-oral-kit';
  const bundles = bundlePricing[product.id] || [];
  const subscription = subscribePricing[product.id];
  const bullets = productBullets[product.id] || [];
  const features = productFeatures[product.id] || [];
  const faqs = productFaqs[product.id] || [];

  useEffect(() => { setSelectedImage(0); setSelectedBundle(1); setPurchaseType(subscribePricing[product.id] ? 'subscribe' : 'one-time'); window.scrollTo(0, 0); }, [product.id]);

  const currentBundle = bundles.find(b => b.qty === selectedBundle) || bundles[0];

  const displayPrice = purchaseType === 'subscribe' && hasSubscription && subscription
    ? subscription.subscribePrice
    : hasBundles && currentBundle
      ? currentBundle.price
      : product.price;

  const displayOriginalPrice = hasBundles && currentBundle && purchaseType === 'one-time'
    ? currentBundle.originalPrice
    : product.originalPrice;

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAddToCart = async () => {
    if (hasBundles && purchaseType === 'one-time' && currentBundle) {
      // Adding a bundle — each bundle is a separate Shopify product
      const { product: shopifyProduct, variantId } = buildBundleCartProduct(
        currentBundle.qty,
        currentBundle.label,
        currentBundle.price,
        product.image
      );
      await addItem({
        product: shopifyProduct,
        variantId,
        variantTitle: currentBundle.label,
        price: { amount: currentBundle.price.toFixed(2), currencyCode: 'USD' },
        quantity: 1,
        selectedOptions: [],
      });
    } else {
      // Single product or subscribe
      const mapping = productShopifyMap[product.id];
      if (!mapping) return;
      const shopifyProduct = buildCartProduct(product);
      await addItem({
        product: shopifyProduct,
        variantId: mapping.shopifyVariantGid,
        variantTitle: purchaseType === 'subscribe' ? 'Subscribe & Save' : 'Default Title',
        price: { amount: displayPrice.toFixed(2), currencyCode: 'USD' },
        quantity: 1,
        selectedOptions: [],
      });
    }
  };

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
            <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-4">
              <img src={galleryImages[selectedImage]} alt={product.name} className="w-full h-full object-contain" />
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
            <div className="flex items-center gap-3 mb-2">
              <span className="font-price text-3xl font-bold">${displayPrice.toFixed(2)}</span>
              <span className="font-price text-lg text-muted-foreground line-through">${displayOriginalPrice.toFixed(2)}</span>
              {product.badge && (
                <span className="bg-sand text-primary font-body text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">{product.badge}</span>
              )}
            </div>

            {/* Sale Countdown */}
            <div className="flex items-center gap-2 mb-4">
              <span className="font-body text-xs text-red-500 font-semibold">🔥 Sale ending in</span>
              <span className="font-price text-xs font-bold text-red-500">
                {String(countdown.hours).padStart(2, '0')}:{String(countdown.minutes).padStart(2, '0')}:{String(countdown.seconds).padStart(2, '0')}
              </span>
            </div>

            <p className="font-body text-xs text-muted-foreground mb-4">Free shipping · Estimated delivery Apr 1–5</p>

            {/* Product Bullets */}
            {bullets.length > 0 && (
              <ul className="space-y-2 mb-6">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                    <span className="text-sand mt-0.5">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {/* Subscribe & Save (shown for ALL products with subscription, as primary option) */}
            {hasSubscription && (
              <div className="mb-6">
                <p className="font-body text-xs tracking-[0.2em] uppercase mb-3">Choose Your Offer</p>
                <div className="space-y-2">
                  <button
                    onClick={() => setPurchaseType('subscribe')}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                      purchaseType === 'subscribe' ? 'border-sand bg-sand/5' : 'border-border hover:border-sand/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        purchaseType === 'subscribe' ? 'border-sand' : 'border-border'
                      }`}>
                        {purchaseType === 'subscribe' && <div className="w-2 h-2 rounded-full bg-sand" />}
                      </div>
                      <div className="text-left">
                        <span className="font-body text-sm font-medium">Subscribe & Save</span>
                        <span className="ml-2 bg-sand text-primary font-body text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full">
                          SAVE {subscription!.savePercent}%
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-price text-sm font-bold">${subscription!.subscribePrice.toFixed(2)}</span>
                      <span className="font-body text-[10px] text-muted-foreground ml-1">/mo</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setPurchaseType('one-time')}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                      purchaseType === 'one-time' ? 'border-sand bg-sand/5' : 'border-border hover:border-sand/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        purchaseType === 'one-time' ? 'border-sand' : 'border-border'
                      }`}>
                        {purchaseType === 'one-time' && <div className="w-2 h-2 rounded-full bg-sand" />}
                      </div>
                      <span className="font-body text-sm font-medium">One-time purchase</span>
                    </div>
                    <span className="font-price text-sm font-bold">${subscription!.oneTimePrice.toFixed(2)}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Bundle Options (kit & toothpaste) — secondary */}
            {hasBundles && (
              <div className="mb-6">
                <p className="font-body text-xs tracking-[0.2em] uppercase mb-3">Or Bundle & Save</p>
                <div className="space-y-2">
                  {bundles.map(bundle => (
                    <button
                      key={bundle.qty}
                      onClick={() => { setSelectedBundle(bundle.qty); setPurchaseType('one-time'); }}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                        selectedBundle === bundle.qty && purchaseType === 'one-time'
                          ? 'border-sand bg-sand/5'
                          : 'border-border hover:border-sand/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selectedBundle === bundle.qty && purchaseType === 'one-time' ? 'border-sand' : 'border-border'
                        }`}>
                          {selectedBundle === bundle.qty && purchaseType === 'one-time' && <div className="w-2 h-2 rounded-full bg-sand" />}
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
                        <span className="font-price text-sm font-bold">${bundle.price.toFixed(2)}</span>
                        <span className="font-price text-xs text-muted-foreground line-through ml-2">${bundle.originalPrice.toFixed(2)}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-3 mb-4">
              <button
                onClick={handleAddToCart}
                disabled={isCartLoading}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase py-4 rounded-full hover:bg-sand hover:text-primary transition-colors disabled:opacity-50"
              >
                <ShoppingBag size={16} /> Add to Cart — ${displayPrice.toFixed(2)}
              </button>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center justify-center gap-3 mb-6">
              {['Visa', 'MC', 'Amex', 'Apple Pay', 'GPay'].map(method => (
                <span key={method} className="font-body text-[9px] tracking-wider text-muted-foreground border border-border rounded px-2 py-1">
                  {method}
                </span>
              ))}
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

            {/* What's Included (Kit only) */}
            {isKit && (
              <div className="border-t border-border pt-6">
                <p className="font-body text-xs tracking-[0.2em] uppercase mb-4">What's Included</p>
                <ul className="space-y-2">
                  {['Handle', 'Brush Head Attachment', 'Tongue Scraper Attachment', 'Wireless Charging Base', 'USB Charging Cable', 'Premium Carrying Case'].map(item => (
                    <li key={item} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-sand rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      {features.length > 0 && (
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
      )}

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

      {/* Video Testimonials - only on kit page */}
      {product.id === '3-in-1-oral-kit' && <VideoTestimonials />}

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
        <ReviewShowcase />
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
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
      )}

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl text-center mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.filter(p => p.id !== product.id).slice(0, 3).map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-square bg-sand-light flex items-center justify-center">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain p-6" />
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
              <p className="font-price text-sm">From ${displayPrice.toFixed(2)}</p>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isCartLoading}
            className="flex items-center gap-2 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-sand hover:text-primary transition-colors flex-shrink-0 disabled:opacity-50"
          >
            <ShoppingBag size={14} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

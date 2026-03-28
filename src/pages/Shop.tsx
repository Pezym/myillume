import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, ArrowRight } from 'lucide-react';
import { products, bundlePricing } from '@/data/products';
import { useCart } from '@/context/CartContext';
import toothbrushImg from '@/assets/toothbrush.png';
import kitFullImg from '@/assets/kit-full.jpg';
import drMillerImg from '@/assets/dr-miller.png';
import ReviewShowcase from '@/components/ReviewShowcase';
import VideoTestimonials from '@/components/VideoTestimonials';

const categories = ['All', 'Kits', 'Oral Care', 'Accessories'];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { addItem } = useCart();

  const filtered = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter);

  // Split into featured (first) and rest
  const featured = filtered.find(p => p.featured);
  const rest = filtered.filter(p => p !== featured);

  return (
    <div>

      {/* Filter Bar */}
      <section id="products" className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="font-display text-2xl">Reinvent Your Routine</h2>
          <div className="flex items-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-body text-[11px] tracking-widest uppercase px-5 py-2 rounded-full transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-sand-light/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product — Full-width card */}
      {featured && (
        <section className="max-w-7xl mx-auto px-6 pb-10">
          <div className="group relative grid grid-cols-1 md:grid-cols-2 bg-sand-light/30 rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300">
            <Link to={`/product/${featured.id}`} className="aspect-square md:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
              />
            </Link>
            <div className="flex flex-col justify-center p-8 md:p-12">
              {featured.badge && (
                <span className="self-start bg-primary text-primary-foreground font-body text-[9px] tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                  {featured.badge}
                </span>
              )}
              <Link to={`/product/${featured.id}`}>
                <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-sand transition-colors">{featured.name}</h3>
              </Link>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 max-w-md">{featured.description}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} className={j < Math.floor(featured.rating) ? 'fill-gold text-gold' : 'text-border'} />
                ))}
                <span className="font-body text-xs text-muted-foreground ml-1">({featured.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-price text-2xl font-bold">${featured.price}</span>
                <span className="font-price text-base text-muted-foreground line-through">${featured.originalPrice}</span>
              </div>
              <button
                onClick={() => addItem({ id: featured.id, name: featured.name, price: featured.price, originalPrice: featured.originalPrice, image: featured.image })}
                className="self-start flex items-center gap-2 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase px-8 py-3.5 rounded-full hover:bg-sand hover:text-primary transition-colors"
              >
                <ShoppingBag size={14} /> Add to Cart
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Product Grid — remaining products */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {rest.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-sand-light/20 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-body text-[9px] tracking-widest uppercase px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  {/* Quick-add overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image });
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-primary/95 backdrop-blur text-primary-foreground font-body text-[10px] tracking-widest uppercase py-3 rounded-full hover:bg-sand hover:text-primary transition-colors"
                    >
                      <ShoppingBag size={12} /> Quick Add
                    </button>
                  </div>
                </div>
              </Link>
              <div className="space-y-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-display text-sm group-hover:text-sand transition-colors">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={10} className={j < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'} />
                  ))}
                  <span className="font-body text-[10px] text-muted-foreground ml-1">({product.reviewCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-price text-base font-semibold">${product.price}</span>
                  <span className="font-price text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dr. Recommended */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4">
          <img src={drMillerImg} alt="Dr. P Miller" className="w-12 h-12 rounded-full object-cover object-top border-2 border-sand" />
          <p className="font-body text-xs text-muted-foreground tracking-wide">
            <span className="font-semibold text-foreground">Dr. P Miller Recommended</span> — Trusted by dental professionals
          </p>
        </div>
      </section>

      {/* Bundle Pricing */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-3">Share the Health & Spread the Wealth</h2>
          <p className="font-body text-sm text-primary-foreground/60 text-center mb-10">Save more when you bundle. Free shipping on every order.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bundlePricing['3-in-1-oral-kit'].map(bundle => (
              <div
                key={bundle.qty}
                className={`relative border rounded-2xl p-6 transition-all hover:-translate-y-1 ${
                  bundle.popular
                    ? 'border-sand bg-sand/10'
                    : 'border-primary-foreground/10 hover:border-sand/50'
                }`}
              >
                {bundle.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sand text-primary font-body text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-lg mb-1">{bundle.label}</h3>
                <p className="font-price text-3xl font-bold mb-1">${bundle.price}</p>
                <p className="font-body text-xs text-primary-foreground/40 line-through mb-2">${bundle.originalPrice.toFixed(2)}</p>
                <p className="font-body text-xs text-sand mb-4">You save {bundle.save} + FREE Shipping</p>
                <button
                  onClick={() => addItem({
                    id: `bundle-${bundle.qty}`,
                    name: bundle.label,
                    price: bundle.price,
                    originalPrice: bundle.originalPrice,
                    image: toothbrushImg,
                    variant: `${bundle.qty}x 3-in-1 Kit`,
                  })}
                  className="w-full bg-sand text-primary font-body text-xs tracking-widest uppercase py-3 rounded-full hover:bg-gold transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Reviews */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Reviews</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4">What Our Customers Say</h2>
          <p className="font-body text-sm text-muted-foreground text-center mb-14">Real reviews from real smiles.</p>
          <ReviewShowcase />
          <div className="mt-16">
            <VideoTestimonials />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

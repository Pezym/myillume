import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, ArrowRight } from 'lucide-react';
import { products, bundlePricing } from '@/data/products';
import { useCart } from '@/context/CartContext';
import toothbrushImg from '@/assets/toothbrush.png';
import kitFullImg from '@/assets/kit-full.jpg';

const categories = ['All', 'Kits', 'Oral Care', 'Accessories'];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { addItem } = useCart();

  const filtered = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Shop Hero */}
      <section className="bg-sand-light/50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-sand mb-3">The Illumé Collection</p>
            <h1 className="font-display text-4xl md:text-5xl mb-4">Shop the Illumé Routine</h1>
            <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
              Bundle up and save up to 70%. Use code <strong>NewSmile</strong> at checkout.
            </p>
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-sand hover:text-primary transition-colors"
            >
              Shop All Products <ArrowRight size={14} />
            </a>
          </div>
          <div className="md:col-span-3 aspect-[3/2] rounded-2xl overflow-hidden">
            <img src={kitFullImg} alt="illumé 3-in-1 Oral Kit" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section id="products" className="max-w-7xl mx-auto px-6 pt-14 pb-6">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
          <h2 className="font-display text-2xl">Our Products</h2>
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-body text-[11px] tracking-widest uppercase px-5 py-2 rounded-full transition-colors ${
                    activeFilter === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="font-body text-xs text-muted-foreground hidden sm:block">{filtered.length} products</p>
          </div>
        </div>
        <div className="w-full h-px bg-border" />
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {filtered.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-sand-light/30 mb-4">
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
                </div>
              </Link>
              <div className="space-y-1.5">
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
                <button
                  onClick={() => addItem({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image })}
                  className="mt-2 w-full flex items-center justify-center gap-2 border border-foreground text-foreground font-body text-[10px] tracking-widest uppercase py-2.5 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <ShoppingBag size={12} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bundle Pricing */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-3">Share the Health & Spread the Wealth</h2>
          <p className="font-body text-sm text-primary-foreground/60 text-center mb-10">Save more when you bundle. Free shipping on every order.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bundlePricing.map(bundle => (
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
    </div>
  );
};

export default Shop;

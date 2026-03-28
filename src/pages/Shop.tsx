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
      <section id="products" className="max-w-7xl mx-auto px-6 pt-12 pb-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-body text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-colors ${
                  activeFilter === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="font-body text-xs text-muted-foreground">{filtered.length} products</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className={`group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                product.featured && i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <Link to={`/product/${product.id}`}>
              <div className={`relative bg-sand-light ${product.featured && i === 0 ? 'aspect-[4/3]' : 'aspect-[4/5]'} flex items-center justify-center overflow-hidden`}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-sand text-primary font-body text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-4 left-4 font-body text-[10px] tracking-widest uppercase text-muted-foreground bg-background/80 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-display text-base mb-1 group-hover:text-sand transition-colors">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={11} className={j < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'} />
                  ))}
                  <span className="font-body text-[10px] text-muted-foreground ml-1">({product.reviewCount})</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-price text-lg font-semibold">${product.price}</span>
                  <span className="font-price text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
                <button
                  onClick={() => addItem({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image })}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase py-3 rounded-full hover:bg-sand hover:text-primary transition-colors"
                >
                  <ShoppingBag size={14} /> Add to Cart
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

      {/* Routine Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-3">The illumé Routine</h2>
          <p className="font-body text-sm text-muted-foreground text-center mb-12">4 simple steps to your healthiest smile.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', name: 'Brush', desc: '360° sonic cleaning with the 3-in-1 brush head.' },
              { step: '02', name: 'Floss', desc: 'Water floss between every tooth effortlessly.' },
              { step: '03', name: 'Scrape', desc: 'Remove tongue bacteria for fresh breath.' },
              { step: '04', name: 'Whiten', desc: 'Apply whitening strips for a luminous smile.' },
            ].map(s => (
              <div key={s.step} className="bg-sand-light/50 border border-border rounded-2xl p-6">
                <span className="font-price text-xs tracking-widest text-sand">STEP {s.step}</span>
                <h3 className="font-display text-xl mt-2 mb-2">{s.name}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

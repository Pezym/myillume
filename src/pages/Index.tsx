import { Link } from 'react-router-dom';
import { Star, ArrowRight, ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-sand-light via-background to-sand/30">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, hsl(var(--sand)) 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-sand mb-4">The Future of Oral Care</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
              Start a fresh<br />routine with<br /><em className="text-sand">illumé.</em>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              The world's first toothbrush that brushes, flosses, and scrapes — on a single charge. Cleaner teeth, fresher breath, healthier gums.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-sand hover:text-primary transition-all"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                to="/product/3-in-1-oral-kit"
                className="inline-flex items-center gap-2 border border-foreground text-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-foreground hover:text-background transition-all"
              >
                See How It Works <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-sand/20 rounded-full flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-sand-light rounded-3xl flex items-center justify-center">
                <span className="font-display italic text-6xl text-sand/50">illumé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen On */}
      <section className="py-10 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-6">As Seen On</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {['CBS News', 'Forbes', 'TechCrunch', 'Vogue', 'GQ'].map(name => (
              <span key={name} className="font-body text-sm tracking-widest uppercase text-muted-foreground/50">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features: Brush, Floss, Scrape */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {[
            { title: 'Brush.', desc: '360° sonic oscillation at 40,000 strokes/min. Every surface, every angle.', align: 'left' },
            { title: 'Floss.', desc: 'Built-in water flosser removes 60% more plaque between teeth than brushing alone.', align: 'right' },
            { title: 'Scrape.', desc: 'Eliminate the #1 source of bad breath. Swap to the tongue scraper in seconds.', align: 'left' },
          ].map((feature, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${feature.align === 'right' ? 'md:direction-rtl' : ''}`}>
              <div className={`${feature.align === 'right' ? 'md:order-2' : ''}`}>
                <h2 className="font-display text-5xl md:text-7xl mb-4">{feature.title}</h2>
                <p className="font-body text-base text-muted-foreground max-w-md leading-relaxed">{feature.desc}</p>
              </div>
              <div className={`aspect-[4/3] bg-sand-light rounded-2xl ${feature.align === 'right' ? 'md:order-1' : ''}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-sand-light/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Kits', desc: 'Complete oral care systems' },
              { name: 'Oral Care', desc: 'Toothpaste & whitening' },
              { name: 'Accessories', desc: 'Brush heads & cases' },
            ].map(cat => (
              <Link
                key={cat.name}
                to="/shop"
                className="group bg-background p-8 rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-square bg-sand-light rounded-xl mb-6" />
                <h3 className="font-display text-xl mb-1">{cat.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{cat.desc}</p>
                <span className="inline-flex items-center gap-1 font-body text-xs tracking-widest uppercase text-sand mt-4 group-hover:gap-2 transition-all">
                  Shop Now <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '106+', label: 'Verified Reviews' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '3-in-1', label: 'Patented Design' },
            { value: '60 Day', label: 'Smile Guarantee' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl mb-1">{stat.value}</p>
              <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4">What Our Customers Say</h2>
          <p className="font-body text-sm text-muted-foreground text-center mb-12">Real reviews from real smiles.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', quote: 'I\'ve never had my teeth feel this clean after brushing at home. The water flosser is a game changer!', rating: 5 },
              { name: 'James K.', quote: 'Replaced my toothbrush, water flosser, AND tongue scraper. One device. Incredible.', rating: 5 },
              { name: 'Emily R.', quote: 'My dentist noticed the difference at my last cleaning. That says everything.', rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-sand-light/50 border border-border p-8 rounded-2xl">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed mb-6 text-muted-foreground">"{review.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sand to-gold" />
                  <div>
                    <p className="font-body text-sm font-medium">{review.name}</p>
                    <p className="font-body text-xs text-muted-foreground">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-sand-light/50">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl mb-3">Join the illumé Community</h2>
          <p className="font-body text-sm text-muted-foreground mb-8">Get exclusive offers, oral care tips, and early access to new products.</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 font-body text-sm bg-background border border-border px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sand"
            />
            <button className="bg-sand text-primary font-body text-sm tracking-widest uppercase px-6 py-3 rounded-full hover:bg-gold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

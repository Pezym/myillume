import { Link } from 'react-router-dom';
import { Star, ArrowRight, ChevronRight, Droplets, Zap } from 'lucide-react';
import toothbrushImg from '@/assets/toothbrush.png';
import lifestyleSmile from '@/assets/lifestyle-brushing-smile.jpg';
import lifestyleClose from '@/assets/lifestyle-brushing-close.jpg';
import lifestyleToothpaste from '@/assets/lifestyle-toothpaste.jpg';

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 py-16">
          {/* Left — Copy */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-foreground/20 rounded-full px-4 py-1.5 mb-8">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase font-semibold border border-foreground/30 rounded px-1.5 py-0.5">3-IN-1</span>
              <span className="font-body text-xs tracking-wide text-muted-foreground">Oral Care System</span>
            </div>

            <h1 className="font-display text-[3.5rem] md:text-[4.5rem] lg:text-[5.2rem] leading-[1.02] tracking-tight mb-6">
              A smarter smile<br />starts with<br />
              <em className="text-sand">illumé.</em>
            </h1>

            <p className="font-body text-base md:text-lg text-muted-foreground max-w-sm mb-10 leading-relaxed">
              The world's first toothbrush that brushes, flosses, and scrapes — on a single charge. Cleaner teeth, fresher breath, healthier gums.
            </p>

            <div className="flex items-center gap-5 mb-14">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-foreground text-background font-body text-sm tracking-wider px-7 py-3.5 rounded-full hover:bg-ink-light transition-colors"
              >
                Shop illumé <ArrowRight size={15} />
              </Link>
              <Link
                to="/product/3-in-1-oral-kit"
                className="inline-flex items-center gap-1 font-body text-sm tracking-wider hover:gap-2 transition-all"
              >
                Take The Quiz <ArrowRight size={15} />
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-8 border-t border-border pt-6">
              <div>
                <p className="font-display text-2xl md:text-3xl flex items-baseline gap-1">
                  4.8<Star size={18} className="fill-gold text-gold inline -mt-1" />
                </p>
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-0.5">106 Reviews</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-display text-2xl md:text-3xl">60d</p>
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-0.5">Battery Life</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-display text-2xl md:text-3xl">3-in-1</p>
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-0.5">Complete System</p>
              </div>
            </div>
          </div>

          {/* Right — Product showcase */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Large subtle circle */}
            <div className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px]">
              <div className="absolute inset-0 rounded-full border border-sand/30" />
              <div className="absolute inset-4 rounded-full border border-sand/15" />
              {/* Dot pattern */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * 360;
                const rad = (angle * Math.PI) / 180;
                const r = 48;
                return (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-sand/40"
                    style={{
                      left: `calc(50% + ${Math.cos(rad) * r}% - 2px)`,
                      top: `calc(50% + ${Math.sin(rad) * r}% - 2px)`,
                    }}
                  />
                );
              })}

              {/* Dark product card */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[240px] bg-foreground rounded-3xl p-6 flex items-center justify-center shadow-2xl" style={{ height: '320px' }}>
                <img
                  src={toothbrushImg}
                  alt="illumé 3-in-1 Toothbrush"
                  className="w-auto h-[280px] object-contain drop-shadow-[0_0_30px_rgba(200,184,154,0.3)]"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 right-0 md:-right-4 bg-background border border-border rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <span className="text-base">🪥</span>
                <span className="font-body text-sm font-medium">Brush</span>
                <span className="font-body text-xs text-muted-foreground">360° sonic</span>
              </div>

              <div className="absolute top-1/2 -left-8 md:-left-16 -translate-y-1/2 bg-background border border-border rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <Droplets size={16} className="text-blue-400" />
                <span className="font-body text-sm font-medium">Floss</span>
                <span className="font-body text-xs text-muted-foreground">Water flosser</span>
              </div>

              <div className="absolute bottom-[28%] -right-8 md:-right-12 bg-background border border-border rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <span className="text-base">👅</span>
                <span className="font-body text-sm font-medium">Scrape</span>
                <span className="font-body text-xs text-muted-foreground">Tongue scraper</span>
              </div>

              <div className="absolute -bottom-4 right-4 md:right-0 bg-background border border-border rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <Zap size={16} className="text-gold" />
                <span className="font-body text-sm font-medium">60-Day Battery</span>
                <span className="font-body text-xs text-muted-foreground">Wireless charging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen On */}
      <section className="py-10 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-6">As Seen On</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {['CBS News', 'Forbes', 'TechCrunch', 'Vogue', 'GQ'].map(name => (
              <span key={name} className="font-display text-lg italic text-muted-foreground/40 tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features: Brush, Floss, Scrape */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {[
            { title: 'Brush.', desc: '360° sonic oscillation at 40,000 strokes/min. Every surface, every angle — the deepest clean without the dentist chair.', align: 'left' },
            { title: 'Floss.', desc: 'Built-in water flosser removes 60% more plaque between teeth than brushing alone. No more excuses.', align: 'right' },
            { title: 'Scrape.', desc: 'Eliminate the #1 source of bad breath. The integrated tongue scraper swaps on in seconds for a truly complete routine.', align: 'left' },
          ].map((feature, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}>
              <div className={`${feature.align === 'right' ? 'md:order-2' : ''}`}>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-sand mb-3">0{i + 1} — Feature</p>
                <h2 className="font-display text-5xl md:text-7xl mb-5">{feature.title}</h2>
                <p className="font-body text-base text-muted-foreground max-w-md leading-relaxed">{feature.desc}</p>
              </div>
              <div className={`aspect-[4/3] bg-gradient-to-br from-sand-light to-sand/20 rounded-3xl ${feature.align === 'right' ? 'md:order-1' : ''}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 bg-sand-light/40">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Collections</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-14">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Kits', desc: 'Complete oral care systems' },
              { name: 'Oral Care', desc: 'Toothpaste & whitening' },
              { name: 'Accessories', desc: 'Brush heads & cases' },
            ].map(cat => (
              <Link
                key={cat.name}
                to="/shop"
                className="group bg-background p-8 rounded-3xl border border-border hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-sand-light to-sand/20 rounded-2xl mb-6" />
                <h3 className="font-display text-xl mb-1">{cat.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{cat.desc}</p>
                <span className="inline-flex items-center gap-1 font-body text-[10px] tracking-[0.2em] uppercase text-sand mt-4 group-hover:gap-2 transition-all">
                  Shop Now <ChevronRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '106+', label: 'Verified Reviews' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '3-in-1', label: 'Patented Design' },
            { value: '60 Day', label: 'Smile Guarantee' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-5xl mb-2">{stat.value}</p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-background/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Reviews</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4">What Our Customers Say</h2>
          <p className="font-body text-sm text-muted-foreground text-center mb-14">Real reviews from real smiles.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', quote: 'I\'ve never had my teeth feel this clean after brushing at home. The water flosser is a game changer!', rating: 5 },
              { name: 'James K.', quote: 'Replaced my toothbrush, water flosser, AND tongue scraper. One device. Incredible.', rating: 5 },
              { name: 'Emily R.', quote: 'My dentist noticed the difference at my last cleaning. That says everything.', rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-background border border-border p-8 rounded-3xl">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed mb-8 text-muted-foreground">"{review.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sand to-gold" />
                  <div>
                    <p className="font-body text-sm font-medium">{review.name}</p>
                    <p className="font-body text-[11px] text-muted-foreground">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-sand-light/40">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Stay Connected</p>
          <h2 className="font-display text-3xl mb-3">Join the illumé Community</h2>
          <p className="font-body text-sm text-muted-foreground mb-10">Get exclusive offers, oral care tips, and early access to new products.</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 font-body text-sm bg-background border border-border px-5 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-sand"
            />
            <button className="bg-foreground text-background font-body text-sm tracking-wider px-7 py-3.5 rounded-full hover:bg-ink-light transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

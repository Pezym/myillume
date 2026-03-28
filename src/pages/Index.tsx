import { Link } from 'react-router-dom';
import VideoTestimonials from '@/components/VideoTestimonials';
import ReviewShowcase from '@/components/ReviewShowcase';
import ComparisonChart from '@/components/ComparisonChart';
import { Star, ArrowRight, ChevronRight, Droplets, Zap } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import toothbrushImg from '@/assets/toothbrush.png';
import lifestyleSmile from '@/assets/lifestyle-brushing-smile.jpg';
import lifestyleClose from '@/assets/lifestyle-brushing-close.jpg';
import kitFullImg from '@/assets/kit-full.jpg';
import toothpasteBottle from '@/assets/toothpaste-bottle.jpg';
import brushHeadsImg from '@/assets/brush-heads-close.jpg';
import cbsVideo from '@/assets/cbs-feature.mov';

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
              Reinvent the Way<br />you Brush with<br />
              <em className="text-sand">Illumé.</em>
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
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-0.5">75k+ Reviews</p>
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

              {/* Product image — no background */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <img
                  src={toothbrushImg}
                  alt="illumé 3-in-1 Toothbrush"
                  className="w-auto h-[380px] md:h-[440px] object-contain drop-shadow-[0_0_40px_rgba(200,184,154,0.35)]"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden">
              <video
                src={cbsVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="flex items-center justify-center gap-12 flex-wrap">
              {['CBS News', 'Forbes', 'TechCrunch', 'Vogue', 'GQ'].map(name => (
                <span key={name} className="font-display text-lg italic text-muted-foreground/40 tracking-wide">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features: Brush, Floss, Scrape */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {[
            { title: 'Brush.', desc: '360° sonic oscillation at 40,000 strokes/min. Every surface, every angle — the deepest clean without the dentist chair.', align: 'left', image: lifestyleSmile },
            { title: 'Floss.', desc: 'Built-in water flosser removes 60% more plaque between teeth than brushing alone. No more excuses.', align: 'right', image: lifestyleClose },
            { title: 'Scrape.', desc: 'Eliminate the #1 source of bad breath. The integrated tongue scraper swaps on in seconds for a truly complete routine.', align: 'left', image: brushHeadsImg },
          ].map((feature, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}>
              <div className={`${feature.align === 'right' ? 'md:order-2' : ''}`}>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-sand mb-3">0{i + 1} — Feature</p>
                <h2 className="font-display text-5xl md:text-7xl mb-5">{feature.title}</h2>
                <p className="font-body text-base text-muted-foreground max-w-md leading-relaxed">{feature.desc}</p>
              </div>
              <div className={`aspect-[4/3] rounded-3xl overflow-hidden ${feature.align === 'right' ? 'md:order-1' : ''} ${!feature.image ? 'bg-gradient-to-br from-sand-light to-sand/20' : ''}`}>
                {feature.image && <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facts Backed by Science */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-sand mb-4">Facts Backed by Science</p>
            <h2 className="font-display text-3xl md:text-4xl mb-3 leading-tight">Modern Toothbrushes Leave your Dental Health Deficient</h2>
            <p className="font-body text-base text-background/60 mb-10">illumé is the Only Toothbrush That Fills in the Gaps!</p>
            <div className="space-y-8">
              {[
                { pct: '96%', text: 'of Americans will develop a cavity at some point in their life due to improper', bold: 'brushing habits.' },
                { pct: '60%', text: 'more plaque is removed when you', bold: 'floss alongside brushing.' },
                { pct: '55%', text: 'of Americans admit they', bold: 'don\'t floss daily.' },
                { pct: '53%', text: 'of bad breath cases originate from bacteria on the', bold: 'tongue.' },
              ].map((stat, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-[3px] border-sand flex items-center justify-center">
                    <span className="font-display text-lg text-sand">{stat.pct}</span>
                  </div>
                  <p className="font-body text-sm text-background/70 leading-relaxed pt-2">
                    {stat.text} <span className="font-semibold text-background">{stat.bold}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[3/4] rounded-3xl overflow-hidden">
            <img src={toothpasteBottle} alt="illumé oral care" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-sand-light/40">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Collections</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-14">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Kits', desc: 'Complete oral care systems', image: kitFullImg },
              { name: 'Oral Care', desc: 'Toothpaste & whitening', image: toothpasteBottle },
              { name: 'Accessories', desc: 'Brush heads & cases', image: brushHeadsImg },
            ].map(cat => (
              <Link
                key={cat.name}
                to="/shop"
                className="group bg-background p-8 rounded-3xl border border-border hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="aspect-square rounded-2xl mb-6 overflow-hidden bg-sand-light/30">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
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
            { value: '75k+', label: 'Verified Reviews' },
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
          <ReviewShowcase />
          <div className="mt-16">
            <VideoTestimonials />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">YOUR ILLUMÉ QUESTIONS, ANSWERED.</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-14">Wait… I was wondering that too.</h2>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="q1" className="border border-border rounded-2xl px-6">
              <AccordionTrigger className="font-body text-sm">🦷 Will it help with bad breath?</AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                Absolutely. Bad breath is most commonly caused by bacteria buildup on the tongue. illumé's built-in tongue scraper removes that bacteria in seconds, leaving your mouth feeling (and smelling) fresh all day.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="border border-border rounded-2xl px-6">
              <AccordionTrigger className="font-body text-sm">🦷 Is it good for sensitive gums?</AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                Yes! illumé features multiple brushing modes, including a gentle mode designed specifically for sensitive teeth and gums. The water flosser is also adjustable so you can control the pressure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="border border-border rounded-2xl px-6">
              <AccordionTrigger className="font-body text-sm">🦷 Is this really better than a regular electric toothbrush?</AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                A regular electric toothbrush only brushes. illumé brushes, flosses, AND scrapes your tongue — all in one device. It's a complete oral care system that replaces three separate tools.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4" className="border border-border rounded-2xl px-6">
              <AccordionTrigger className="font-body text-sm">🦷 I hate flossing… will I actually use this?</AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                That's exactly why we built it. The water flosser makes flossing effortless — just point and press. No string, no hassle. Most of our customers say they actually look forward to it now.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5" className="border border-border rounded-2xl px-6">
              <AccordionTrigger className="font-body text-sm">🦷 How often should I use the flosser and tongue scraper?</AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                We recommend using the water flosser at least once a day (ideally at night) and the tongue scraper every time you brush. It takes less than 30 seconds and makes a noticeable difference.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6" className="border border-border rounded-2xl px-6">
              <AccordionTrigger className="font-body text-sm">🦷 How long does the battery last?</AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                Up to 60 days on a single charge. illumé uses a wireless charging base, so just set it down and it's always ready to go.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7" className="border border-border rounded-2xl px-6">
              <AccordionTrigger className="font-body text-sm">🦷 Is it bulky or hard to travel with?</AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                Not at all. illumé is sleek and compact — designed to fit easily in a toiletry bag. With its 60-day battery life, you won't even need to bring a charger on most trips.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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

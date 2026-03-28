import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { itemCount, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    { label: 'Affiliate', to: 'https://affilitrak.com/register?shop=www.myillume.com', external: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="font-display italic text-2xl tracking-tight text-foreground">
          illumé<span className="text-sand ml-0.5">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link =>
            link.external ? (
              <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} onClick={() => window.scrollTo(0, 0)} className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-foreground hover:text-sand transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button
            onClick={toggleCart}
            className="relative text-foreground hover:text-sand transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-sand text-primary text-[10px] font-body font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          <Link
            to="/shop"
            className="hidden md:inline-flex bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase px-5 py-2 rounded-full hover:bg-sand hover:text-primary transition-colors"
          >
            Get Started
          </Link>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {links.map(link =>
            link.external ? (
              <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="block font-body text-sm tracking-wide text-foreground py-2">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }} className="block font-body text-sm tracking-wide text-foreground py-2">
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/shop"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase px-5 py-3 rounded-full"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

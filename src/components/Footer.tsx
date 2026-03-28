import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display italic text-2xl mb-3">illumé<span className="text-sand">.</span></h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              The world's first 3-in-1 electric toothbrush. Brush, floss, and scrape your way to a brighter, healthier smile.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4">Products</h4>
            <ul className="space-y-2">
              {['3-in-1 Oral Kit', 'Purple Toothpaste', 'Whitening Strips', 'Whitening Wand'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-body text-sm text-primary-foreground/60 hover:text-sand transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4">Policies</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Refund Policy', 'Shipping Policy', 'Terms of Service'].map(item => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-primary-foreground/60 hover:text-sand transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              {['About illumé', 'Become an Affiliate', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-primary-foreground/60 hover:text-sand transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 illumé. All rights reserved.
          </p>
          <div className="flex items-center gap-3 font-body text-xs text-primary-foreground/40">
            {['VISA', 'MC', 'AMEX', 'PayPal', 'Apple Pay'].map(method => (
              <span key={method} className="border border-primary-foreground/20 px-2 py-1 rounded text-[10px]">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

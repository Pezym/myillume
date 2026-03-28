import { useEffect } from 'react';

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-3xl md:text-4xl mb-8">Shipping policy</h1>

        <div className="font-body text-sm text-foreground/80 space-y-6 leading-relaxed">
          <h2 className="font-display text-xl">Lost/Missing Packages</h2>
          <p>If your package is lost or missing, please contact us at <a href="mailto:info@myillume.com" className="text-primary font-semibold hover:underline">info@myillume.com</a> and we will work with the carrier to resolve the issue. We are not responsible for packages that are marked as delivered but are missing. Please check with neighbors, building management, or your local post office before contacting us.</p>

          <h2 className="font-display text-xl pt-4">Disclaimer (International)</h2>
          <p>International orders may be subject to import duties, taxes, and customs fees. These charges are the responsibility of the recipient and are not included in the product price or shipping cost. Please check with your local customs office for more information.</p>

          <h2 className="font-display text-xl pt-4">Shipping Times</h2>
          <div className="border border-border rounded-lg overflow-hidden mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left px-4 py-3 font-semibold">Region</th>
                  <th className="text-left px-4 py-3 font-semibold">Estimated Delivery</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-3">United States</td>
                  <td className="px-4 py-3">4–10 business days</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3">International</td>
                  <td className="px-4 py-3">7–14 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-foreground/60 text-xs">*Shipping times are estimates and may vary depending on location and carrier delays.</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;

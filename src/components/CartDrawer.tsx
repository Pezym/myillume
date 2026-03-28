import { X, Plus, Minus, ShoppingBag, Loader2, ExternalLink } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { useEffect } from 'react';

const CartDrawer = () => {
  const isOpen = useCartStore(s => s.isOpen);
  const closeCart = useCartStore(s => s.closeCart);
  const items = useCartStore(s => s.items);
  const updateQuantity = useCartStore(s => s.updateQuantity);
  const removeItem = useCartStore(s => s.removeItem);
  const isLoading = useCartStore(s => s.isLoading);
  const isSyncing = useCartStore(s => s.isSyncing);
  const getCheckoutUrl = useCartStore(s => s.getCheckoutUrl);
  const syncCart = useCartStore(s => s.syncCart);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + parseFloat(i.price.amount) * i.quantity, 0);
  const currencyCode = items[0]?.price.currencyCode || 'USD';

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      closeCart();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-foreground/40 z-50" onClick={closeCart} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-[slide-in-right_0.3s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <h2 className="font-display text-lg">Your Cart ({itemCount})</h2>
          </div>
          <button onClick={closeCart} className="text-foreground hover:text-sand transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingBag size={48} className="mb-4 opacity-30" />
              <p className="font-body text-sm">Your cart is empty</p>
            </div>
          ) : (
            items.map(item => {
              const imageUrl = item.product.node.images?.edges?.[0]?.node?.url;
              return (
                <div key={item.variantId} className="flex gap-4 py-4 border-b border-border">
                  <div className="w-20 h-20 bg-sand-light rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {imageUrl && <img src={imageUrl} alt={item.product.node.title} className="w-16 h-16 object-contain" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body text-sm font-medium truncate">{item.product.node.title}</h3>
                    {item.variantTitle !== 'Default Title' && (
                      <p className="font-body text-xs text-muted-foreground">{item.variantTitle}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border rounded-full">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="p-1.5 hover:bg-sand-light transition-colors rounded-l-full"
                          disabled={isLoading}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-body text-sm px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="p-1.5 hover:bg-sand-light transition-colors rounded-r-full"
                          disabled={isLoading}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-price text-sm font-semibold">${(parseFloat(item.price.amount) * item.quantity).toFixed(2)}</span>
                        <button onClick={() => removeItem(item.variantId)} className="text-muted-foreground hover:text-destructive" disabled={isLoading}>
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-body text-sm text-muted-foreground">Subtotal</span>
              <span className="font-price text-lg font-semibold">${subtotal.toFixed(2)} {currencyCode}</span>
            </div>
            <p className="font-body text-xs text-muted-foreground">Shipping & taxes calculated at checkout</p>
            <button
              onClick={handleCheckout}
              disabled={isLoading || isSyncing}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase py-4 rounded-full hover:bg-sand hover:text-primary transition-colors disabled:opacity-50"
            >
              {isLoading || isSyncing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <ExternalLink size={14} />
                  Checkout →
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

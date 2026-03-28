import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, itemCount } = useCart();

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
            items.map(item => (
              <div key={item.id} className="flex gap-4 py-4 border-b border-border">
                <div className="w-20 h-20 bg-sand-light rounded flex-shrink-0 flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-body text-sm font-medium truncate">{item.name}</h3>
                  {item.variant && <p className="font-body text-xs text-muted-foreground">{item.variant}</p>}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-border rounded-full">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-sand-light transition-colors rounded-l-full"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-body text-sm px-3">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-sand-light transition-colors rounded-r-full"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-price text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive">
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-body text-sm text-muted-foreground">Subtotal</span>
              <span className="font-price text-lg font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-body text-xs text-muted-foreground">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase py-4 rounded-full hover:bg-sand hover:text-primary transition-colors">
              Checkout →
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

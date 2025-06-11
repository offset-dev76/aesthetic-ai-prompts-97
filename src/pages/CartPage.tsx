
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing order:', { items, billingInfo, total: getTotalPrice() });
    // Handle checkout logic here
    alert('Order placed successfully!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="fade-up">
            <h1 className="text-4xl serif font-bold text-charcoal mb-4">Your Cart</h1>
            <p className="text-lg text-ash mb-8">Your cart is currently empty</p>
            <Link to="/products">
              <Button className="bg-charcoal hover:bg-ash text-linen">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="fade-up">
          <h1 className="text-4xl serif font-bold text-charcoal mb-8">Your Cart</h1>
        </div>

        {!showCheckout ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="fade-up flex items-center space-x-4 bg-white p-4 rounded-lg border border-clay/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} className="hover:text-ash transition-colors">
                      <h3 className="serif font-bold text-charcoal cursor-pointer">{item.name}</h3>
                    </Link>
                    <p className="text-ash">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-clay/30 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-clay/30 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-red-100 text-red-600 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-blush/30 p-6 rounded-lg sticky top-32">
                <h3 className="text-xl serif font-bold text-charcoal mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-clay/30 pt-4 mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{getTotalPrice().toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-charcoal hover:bg-ash text-linen"
                  >
                    Proceed to Checkout
                  </Button>
                  <Link to="/products" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-clay text-ash hover:bg-clay/20"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div className="max-w-2xl mx-auto">
            <div className="fade-up">
              <form onSubmit={handleCheckout} className="space-y-6">
                <h2 className="text-2xl serif font-bold text-charcoal mb-6">Billing Information</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Full Name"
                    value={billingInfo.name}
                    onChange={handleInputChange}
                    className="placeholder:text-ash/60 text-charcoal"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={billingInfo.email}
                    onChange={handleInputChange}
                    className="placeholder:text-ash/60 text-charcoal"
                    required
                  />
                </div>

                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={billingInfo.phone}
                  onChange={handleInputChange}
                  className="placeholder:text-ash/60 text-charcoal"
                  required
                />

                <Input
                  name="address"
                  placeholder="Address"
                  value={billingInfo.address}
                  onChange={handleInputChange}
                  className="placeholder:text-ash/60 text-charcoal"
                  required
                />

                <div className="grid md:grid-cols-3 gap-4">
                  <Input
                    name="city"
                    placeholder="City"
                    value={billingInfo.city}
                    onChange={handleInputChange}
                    className="placeholder:text-ash/60 text-charcoal"
                    required
                  />
                  <Input
                    name="state"
                    placeholder="State"
                    value={billingInfo.state}
                    onChange={handleInputChange}
                    className="placeholder:text-ash/60 text-charcoal"
                    required
                  />
                  <Input
                    name="pincode"
                    placeholder="Pincode"
                    value={billingInfo.pincode}
                    onChange={handleInputChange}
                    className="placeholder:text-ash/60 text-charcoal"
                    required
                  />
                </div>

                <div className="bg-blush/30 p-4 rounded-lg">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Amount</span>
                    <span>₹{getTotalPrice().toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowCheckout(false)}
                    className="flex-1"
                  >
                    Back to Cart
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-charcoal hover:bg-ash text-linen"
                  >
                    Place Order
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

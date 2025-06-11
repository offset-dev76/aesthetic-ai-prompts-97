
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-linen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="fade-up">
            <h3 className="text-2xl serif font-bold mb-4">Lumina</h3>
            <p className="text-ash leading-relaxed">
              Accessories designed for the spaces between words, 
              the pauses in conversation, the quiet confidence of knowing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="fade-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-ash hover:text-linen transition-colors">Collection</Link></li>
              <li><Link to="/about" className="text-ash hover:text-linen transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-ash hover:text-linen transition-colors">Contact</Link></li>
              <li><Link to="/cart" className="text-ash hover:text-linen transition-colors">Cart</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-ash hover:text-linen transition-colors">Terms of Service</Link></li>
              <li><Link to="/shipping" className="text-ash hover:text-linen transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-ash hover:text-linen transition-colors">Return Policy</Link></li>
              <li><Link to="/privacy" className="text-ash hover:text-linen transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-ash">
              <p>hello@lumina-accessories.com</p>
              <p>+91 98765 43210</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-linen transition-colors">Instagram</a>
                <a href="#" className="hover:text-linen transition-colors">Pinterest</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ash/30 mt-8 pt-8 text-center">
          <p className="text-ash text-sm">
            © 2024 Lumina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

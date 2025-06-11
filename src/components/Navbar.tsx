
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Collection" },
    { href: "/about", label: "Story" },
    { href: "/contact", label: "Connect" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-linen/95 backdrop-blur-sm border-b border-clay/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl serif font-bold text-charcoal">
            Lumina
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-light tracking-wide transition-colors hover:text-ash ${
                  location.pathname === link.href ? "text-charcoal" : "text-ash"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 hover:bg-clay/20 rounded-lg transition-colors">
              <ShoppingBag className="w-5 h-5 text-charcoal" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-charcoal text-linen text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <Menu className="w-5 h-5 text-charcoal" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-linen border-t border-clay/20">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-light tracking-wide text-ash hover:text-charcoal"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-sm font-light tracking-wide text-ash hover:text-charcoal"
              >
                Cart ({getTotalItems()})
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

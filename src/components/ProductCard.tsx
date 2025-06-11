
import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  mood: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      className="group block hover-lift relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Add to Cart Button */}
          {isHovered && (
            <button
              onClick={handleAddToCart}
              className="absolute top-4 right-4 bg-charcoal text-linen p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-ash"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg serif font-bold text-charcoal group-hover:text-ash transition-colors">
              {product.name}
            </h3>
            <span className="text-charcoal font-medium">₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          
          <p className="text-sm font-light text-ash italic">
            {product.description}
          </p>
          
          <span className="mood-tag text-xs">
            {product.mood}
          </span>
        </div>
      </Link>
    </div>
  );
};

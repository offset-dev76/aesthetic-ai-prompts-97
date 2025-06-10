
import { Link } from "react-router-dom";

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
  return (
    <Link to={`/product/${product.id}`} className="group block hover-lift">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg serif font-light text-charcoal group-hover:text-ash transition-colors">
            {product.name}
          </h3>
          <span className="text-charcoal font-medium">${product.price}</span>
        </div>
        
        <p className="text-sm font-light text-ash italic">
          {product.description}
        </p>
        
        <span className="mood-tag text-xs">
          {product.mood}
        </span>
      </div>
    </Link>
  );
};

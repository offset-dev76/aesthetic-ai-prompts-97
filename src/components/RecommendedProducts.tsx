
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

const recommendedProducts = [
  {
    id: 2,
    name: "Thread Earrings",
    price: 6500,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    mood: "Effortless Layering",
    description: "delicate lines that follow your movement"
  },
  {
    id: 4,
    name: "Calm Bracelet",
    price: 7500,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80",
    mood: "City Calm",
    description: "grounding weight for busy days"
  },
  {
    id: 6,
    name: "Memory Hoops",
    price: 9500,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80",
    mood: "Effortless Layering",
    description: "circles that hold stories"
  }
];

interface RecommendedProductsProps {
  currentProductId: number;
}

export const RecommendedProducts = ({ currentProductId }: RecommendedProductsProps) => {
  const filteredProducts = recommendedProducts.filter(product => product.id !== currentProductId);

  return (
    <section className="py-16 border-t border-clay/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="fade-up">
          <h2 className="text-3xl serif font-bold text-charcoal text-center mb-12">
            You Might Also Like
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.slice(0, 3).map((product, index) => (
            <div
              key={product.id}
              className="fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

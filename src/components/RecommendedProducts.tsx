
import { ProductCard } from "./ProductCard";
import { getAllProducts } from "@/utils/productUtils";

interface RecommendedProductsProps {
  currentProductId: string;
}

export const RecommendedProducts = ({ currentProductId }: RecommendedProductsProps) => {
  const allProducts = getAllProducts();
  const filteredProducts = allProducts.filter(product => product.id !== currentProductId);

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

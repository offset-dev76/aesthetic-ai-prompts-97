import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { getAllMoods, getProductsByTag } from "@/utils/productUtils";

const ProductsPage = () => {
  const [selectedMood, setSelectedMood] = useState("All Moods");
  const moodTags = getAllMoods();
  const filteredProducts = getProductsByTag(selectedMood);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="fade-up">
            <h1 className="text-4xl md:text-5xl serif font-bold text-charcoal mb-4">
              Our Collection
            </h1>
            <p className="text-lg font-light text-ash">
              Each piece designed for the moments that matter
            </p>
          </div>
        </div>

        {/* Mood Filters */}
        <div className="flex flex-wrap justify-center gap-[5px] mb-12 px-0 py-0">
          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            {moodTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedMood(tag)}
                className={`mood-tag ${selectedMood === tag ? 'bg-clay text-charcoal' : ''}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
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
    </div>
  );
};

export default ProductsPage;

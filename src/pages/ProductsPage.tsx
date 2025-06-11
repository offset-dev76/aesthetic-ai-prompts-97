
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";

const moodTags = [
  "All Moods",
  "Subtle Spark",
  "Effortless Layering", 
  "Late-Night Gold",
  "City Calm",
  "Weekend Skin"
];

const products = [
  {
    id: 1,
    name: "Whisper Ring",
    price: 8500,
    image: "https://images.unsplash.com/photo-1603561596112-db1d4e93306d?auto=format&fit=crop&w=600&q=80",
    mood: "Subtle Spark",
    description: "a whisper cast in metal"
  },
  {
    id: 2,
    name: "Thread Earrings",
    price: 6500,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    mood: "Effortless Layering",
    description: "delicate lines that follow your movement"
  },
  {
    id: 3,
    name: "Echo Necklace",
    price: 12000,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    mood: "Late-Night Gold",
    description: "catches light like distant laughter"
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
    id: 5,
    name: "Sunday Chain",
    price: 11000,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    mood: "Weekend Skin",
    description: "made for lazy morning coffee"
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

const ProductsPage = () => {
  const [selectedMood, setSelectedMood] = useState("All Moods");

  const filteredProducts = selectedMood === "All Moods" 
    ? products 
    : products.filter(product => product.mood === selectedMood);

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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            {moodTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedMood(tag)}
                className={`mood-tag ${
                  selectedMood === tag ? 'bg-clay text-charcoal' : ''
                }`}
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

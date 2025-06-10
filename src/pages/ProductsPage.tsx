
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
    price: 128,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
    mood: "Subtle Spark",
    description: "a whisper cast in metal"
  },
  {
    id: 2,
    name: "Thread Earrings",
    price: 98,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    mood: "Effortless Layering",
    description: "delicate lines that follow your movement"
  },
  {
    id: 3,
    name: "Echo Necklace",
    price: 156,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    mood: "Late-Night Gold",
    description: "catches light like distant laughter"
  },
  {
    id: 4,
    name: "Calm Bracelet",
    price: 89,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    mood: "City Calm",
    description: "grounding weight for busy days"
  },
  {
    id: 5,
    name: "Sunday Chain",
    price: 145,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
    mood: "Weekend Skin",
    description: "made for lazy morning coffee"
  },
  {
    id: 6,
    name: "Memory Hoops",
    price: 112,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
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
          <h1 className="text-4xl md:text-5xl serif font-light text-charcoal mb-4">
            Our Collection
          </h1>
          <p className="text-lg font-light text-ash">
            Each piece designed for the moments that matter
          </p>
        </div>

        {/* Mood Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
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

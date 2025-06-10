
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Mock product data
const productData = {
  1: {
    id: 1,
    name: "Whisper Ring",
    price: 128,
    images: [
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    ],
    mood: "Subtle Spark",
    description: "a whisper cast in metal",
    details: "Hand-forged from recycled gold, this ring carries the weight of intention without the burden of excess. The surface catches light in unexpected ways, like conversations that linger.",
    styling: "pairs well with linen shirts, low buns, rainy moods",
    story: "Born from a sketch made during a quiet Tuesday morning. The goldsmith traced the same curve seventeen times before finding the one that felt like breath.",
    materials: "14k recycled gold, ethically sourced",
    size: "Available in sizes 5-9"
  }
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const product = productData[id as keyof typeof productData];

  if (!product) {
    return <div className="pt-24 text-center">Product not found</div>;
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-charcoal' : 'border-clay'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <span className="mood-tag mb-4 inline-block">{product.mood}</span>
              <h1 className="text-4xl serif font-light text-charcoal mb-2">
                {product.name}
              </h1>
              <p className="text-2xl text-charcoal">${product.price}</p>
            </div>

            <div>
              <p className="text-lg serif italic text-ash mb-4">
                {product.description}
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                {product.details}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg serif text-charcoal">Styling Notes</h3>
              <p className="text-ash italic">{product.styling}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg serif text-charcoal">Story</h3>
              <p className="text-ash leading-relaxed">{product.story}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-6 border-t border-clay/30">
              <div>
                <h4 className="text-sm font-medium text-charcoal mb-1">Materials</h4>
                <p className="text-sm text-ash">{product.materials}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-charcoal mb-1">Size</h4>
                <p className="text-sm text-ash">{product.size}</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-charcoal hover:bg-ash text-linen py-3 text-lg tracking-wide">
                Add to Collection
              </Button>
              <p className="text-xs text-ash text-center">
                Gift packaging available at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

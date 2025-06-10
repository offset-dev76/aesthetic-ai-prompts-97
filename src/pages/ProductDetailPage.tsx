
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
  },
  2: {
    id: 2,
    name: "Thread Earrings",
    price: 98,
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
    ],
    mood: "Effortless Layering",
    description: "delicate lines that follow your movement",
    details: "Each thread is carefully drawn and shaped by hand, creating a unique flow that catches light as you move. The minimal weight ensures they become part of you, not a statement about you.",
    styling: "perfect with loose hair or sleek updos, day or evening light",
    story: "Designed during a period of transition, these earrings embody the delicate balance between presence and absence.",
    materials: "Sterling silver with 18k gold plating",
    size: "One size"
  },
  3: {
    id: 3,
    name: "Echo Necklace",
    price: 156,
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
    ],
    mood: "Late-Night Gold",
    description: "catches light like distant laughter",
    details: "A study in contrasts, this piece combines solid form with negative space. The pendant hangs just so, creating a focal point that draws the eye without demanding attention.",
    styling: "layered with other pieces or worn alone against bare skin",
    story: "Inspired by the reflection of city lights on water, capturing that moment when everything feels possible.",
    materials: "14k gold with ethically sourced pearl accent",
    size: "Adjustable 16-18 inches"
  },
  4: {
    id: 4,
    name: "Calm Bracelet",
    price: 89,
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
    ],
    mood: "City Calm",
    description: "grounding weight for busy days",
    details: "The gentle weight of this piece creates a subtle awareness throughout the day. Each link is joined by hand, creating a fluid movement that follows your gestures.",
    styling: "worn alone for focus or stacked for presence",
    story: "Conceived during morning commutes, this bracelet transforms the chaos of urban life into a centering object.",
    materials: "Recycled sterling silver",
    size: "Small (6.5\"), Medium (7\"), Large (7.5\")"
  },
  5: {
    id: 5,
    name: "Sunday Chain",
    price: 145,
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
    ],
    mood: "Weekend Skin",
    description: "made for lazy morning coffee",
    details: "Every link is individually cast and connected, creating a rhythm of light and shadow across the collarbone. The weight is substantial enough to be felt, light enough to be forgotten.",
    styling: "perfect with oversized shirts or against bare shoulders",
    story: "Named after the feeling of Sunday mornings, when time stretches out and nothing needs to happen quickly.",
    materials: "Solid brass with matte gold finish",
    size: "18 inches with 2 inch extender"
  },
  6: {
    id: 6,
    name: "Memory Hoops",
    price: 112,
    images: [
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    ],
    mood: "Effortless Layering",
    description: "circles that hold stories",
    details: "These perfectly imperfect hoops embrace asymmetry. Each circle is slightly unique, a deliberate choice to celebrate the beauty in small variations.",
    styling: "equally at home with morning coffee or evening wines",
    story: "Inspired by the rings left behind on wooden tables, marking moments shared between friends.",
    materials: "Recycled brass with hand-rubbed finish",
    size: "30mm diameter"
  }
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Fix: Convert id from string to number for type safety
  const numericId = id ? parseInt(id) : 1;
  const product = productData[numericId as keyof typeof productData];

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

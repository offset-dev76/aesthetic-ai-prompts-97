import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { RecommendedProducts } from "@/components/RecommendedProducts";
import { getProductById } from "@/utils/productUtils";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="pt-24 text-center">
        <div className="fade-up">
          <h1 className="text-2xl font-bold text-charcoal">Product not found</h1>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: parseInt(product.id.replace('P', '')),
      name: product.name,
      price: product.offPrice || product.price,
      image: product.images[0]
    });
  };

  const currentPrice = product.offPrice || product.price;
  const hasDiscount = product.offPrice !== null && product.offPrice !== undefined;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 px-[100px] py-[40px]">
          {/* Images - Left Side */}
          <div className="space-y-10">
            <div className="fade-up">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
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
          </div>

          {/* Product Info - Right Side */}
          <div className="space-y-8">
            <div className="fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="mood-tag mb-4 inline-block">{product.mood}</span>
              <h1 className="text-4xl serif font-bold text-charcoal mb-2">
                {product.name}
              </h1>
              
              <div className="mb-6">
                {hasDiscount ? (
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-charcoal font-bold">
                      ₹{currentPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-lg text-ash line-through">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                      Save ₹{(product.price - currentPrice).toLocaleString('en-IN')}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl text-charcoal">₹{currentPrice.toLocaleString('en-IN')}</span>
                )}
              </div>
              
              {/* Add to Cart and Gift packaging */}
              <div className="space-y-4 mb-6">
                <Button 
                  onClick={handleAddToCart} 
                  className="w-full bg-charcoal hover:bg-ash text-linen py-3 text-lg tracking-wide"
                >
                  Add to Collection
                </Button>
                <p className="text-xs text-ash text-center">
                  Gift packaging available at checkout
                </p>
              </div>
            </div>

            <div className="fade-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg serif italic text-ash mb-4">
                {product.description.split(' - ')[0]}
              </p>
              {product.description.includes(' - ') && (
                <p className="text-charcoal leading-relaxed mb-6">
                  {product.description.split(' - ')[1]}
                </p>
              )}
            </div>

            <div className="fade-up space-y-4" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg serif font-bold text-charcoal">Product Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span key={index} className="mood-tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <RecommendedProducts currentProductId={product.id} />
      </div>
    </div>
  );
};

export default ProductDetailPage;

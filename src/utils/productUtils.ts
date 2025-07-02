import productCatalog from '../product_catalog.json';

export interface Product {
  id: string;
  name: string;
  price: number;
  offPrice?: number;
  image: string;
  images: string[];
  mood: string;
  description: string;
  tags: string[];
}

// Map product tags to mood categories
const tagToMoodMap: Record<string, string> = {
  'subtle-spark': 'Subtle Spark',
  'effortless-layering': 'Effortless Layering', 
  'late-night-gold': 'Late-Night Gold',
  'city-calm': 'City Calm',
  'weekend-skin': 'Weekend Skin'
};

// Get mood from tags
const getMoodFromTags = (tags: string[]): string => {
  for (const tag of tags) {
    if (tagToMoodMap[tag]) {
      return tagToMoodMap[tag];
    }
  }
  return 'All Moods';
};

// Transform catalog product to app product format
export const transformProduct = (catalogProduct: any): Product => {
  const images = catalogProduct.imageIds.map((imageId: string) => 
    `https://images.unsplash.com/photo-${imageId.replace('.jpg', '')}?auto=format&fit=crop&w=600&q=80`
  );
  
  // Fallback to existing unsplash images for demo
  const fallbackImages = [
    "https://images.unsplash.com/photo-1603561596112-db1d4e93306d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
  ];

  return {
    id: catalogProduct.productId,
    name: catalogProduct.productName,
    price: catalogProduct.productPrice,
    offPrice: catalogProduct.offPrice,
    image: images[0] || fallbackImages[0],
    images: images.length > 0 ? images : fallbackImages,
    mood: getMoodFromTags(catalogProduct.productTags),
    description: catalogProduct.productDescription,
    tags: catalogProduct.productTags
  };
};

// Get all products
export const getAllProducts = (): Product[] => {
  return productCatalog.products.map(transformProduct);
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  const catalogProduct = productCatalog.products.find(p => p.productId === id);
  return catalogProduct ? transformProduct(catalogProduct) : undefined;
};

// Get unique moods for filtering
export const getAllMoods = (): string[] => {
  const moods = new Set(['All Moods']);
  productCatalog.products.forEach(product => {
    const mood = getMoodFromTags(product.productTags);
    if (mood !== 'All Moods') {
      moods.add(mood);
    }
  });
  return Array.from(moods);
};

// Get products by category/tag
export const getProductsByTag = (tag: string): Product[] => {
  if (tag === 'All Moods') return getAllProducts();
  
  return productCatalog.products
    .filter(product => {
      const mood = getMoodFromTags(product.productTags);
      return mood === tag;
    })
    .map(transformProduct);
};

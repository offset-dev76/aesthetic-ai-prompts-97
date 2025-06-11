
import { Link } from "react-router-dom";

const collections = [
  {
    name: "City Calm",
    description: "Pieces that ground you in the rush",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80",
    tag: "everyday-essentials"
  },
  {
    name: "Understated Drama",
    description: "For moments that ask for more",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80",
    tag: "statement-pieces"
  },
  {
    name: "Weekend Skin",
    description: "When comfort meets intention",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    tag: "casual-elegance"
  }
];

export const CollectionsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="fade-up">
            <h2 className="text-4xl md:text-5xl serif font-bold text-charcoal mb-4">
              Curated by Mood
            </h2>
            <p className="text-lg font-light text-ash">
              Because how you feel matters more than what's trending
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.name}
              to={`/products?collection=${collection.tag}`}
              className={`group hover-lift fade-up ${index === 1 ? 'md:mt-12' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl serif font-bold mb-2">{collection.name}</h3>
                  <p className="text-sm font-light opacity-90">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

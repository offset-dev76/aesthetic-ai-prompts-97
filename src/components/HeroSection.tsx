import { Link } from "react-router-dom";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-linen via-blush/30 to-clay/20" />
      
      <div className="relative max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 items-center px-[16px] py-[16px]">
        {/* Content */}
        <div className="fade-up">
          <h1 className="text-5xl md:text-7xl serif font-bold text-charcoal mb-6 leading-tight">
            Worn like
            <br />
            <em className="text-ash">a thought</em>
          </h1>
          <p className="text-lg font-light text-ash mb-8 leading-relaxed max-w-md">
            Accessories designed for the spaces between words, 
            the pauses in conversation, the quiet confidence of knowing.
          </p>
          <Link to="/products" className="inline-block px-8 py-3 bg-charcoal text-linen font-light tracking-wide hover:bg-ash transition-colors">
            Explore Collection
          </Link>
        </div>

        {/* Hero Image */}
        <div className="fade-up" style={{
        animationDelay: '0.2s'
      }}>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80" alt="Elegant jewelry accessories" className="w-full h-[600px] object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>;
};
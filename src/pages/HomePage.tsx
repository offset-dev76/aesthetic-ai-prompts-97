
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <CollectionsSection />
      <TestimonialsSection />
      
      {/* Brand Intro */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl serif font-light text-charcoal mb-6 leading-relaxed">
            Details that whisper, <br />
            not shout
          </h2>
          <p className="text-lg font-light text-ash leading-relaxed">
            Each piece begins as a thought, evolves through careful hands, 
            and finds its way to moments that matter.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

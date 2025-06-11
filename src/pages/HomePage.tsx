import { Link } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
const HomePage = () => {
  return <div className="pt-16">
      <HeroSection />
      <CollectionsSection />
      <TestimonialsSection />
      
      {/* Brand Intro */}
      <section className="px-4 py-[40px]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="fade-up">
            <h2 className="text-3xl md:text-4xl serif font-bold text-charcoal mb-6 leading-relaxed">
              Details that whisper, <br />
              not shout
            </h2>
            <p className="text-lg font-light text-ash leading-relaxed">
              Each piece begins as a thought, evolves through careful hands, 
              and finds its way to moments that matter.
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;
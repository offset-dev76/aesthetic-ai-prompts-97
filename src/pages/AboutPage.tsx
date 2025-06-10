
const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl serif font-light text-charcoal mb-6">
            From Sketches to Silence
          </h1>
          <p className="text-lg font-light text-ash leading-relaxed max-w-2xl mx-auto">
            What began as absent-minded doodles in coffee shop margins 
            has become a practice in intentional making.
          </p>
        </div>

        {/* Story */}
        <div className="prose prose-lg max-w-none">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl serif font-light text-charcoal mb-4">
                The Beginning
              </h2>
              <p className="text-ash leading-relaxed mb-4">
                It started with a sketchbook and too much time spent people-watching. 
                I noticed how certain jewelry seemed to carry stories—not because 
                of its price or provenance, but because of how it sat with the wearer.
              </p>
              <p className="text-ash leading-relaxed">
                Those early sketches weren't about creating accessories. 
                They were about capturing the feeling of wearing something 
                that felt like an extension of thought rather than decoration.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80"
                alt="Design process"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="md:order-2">
              <h2 className="text-2xl serif font-light text-charcoal mb-4">
                The Process
              </h2>
              <p className="text-ash leading-relaxed mb-4">
                Each piece begins the same way: with a question rather than an answer. 
                What would confidence look like if it had weight? How would memory 
                catch light?
              </p>
              <p className="text-ash leading-relaxed">
                We work in small batches, often just dozens of a design. 
                Not because of artificial scarcity, but because attention 
                to detail requires attention itself.
              </p>
            </div>
            <div className="md:order-1">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
                alt="Craftsmanship"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-blush/30 rounded-lg p-12 mb-16">
          <h2 className="text-3xl serif font-light text-charcoal mb-8 text-center">
            What We Hold Close
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg serif text-charcoal mb-3">Slow Making</h3>
              <p className="text-ash text-sm leading-relaxed">
                Time spent in creation shows up in the wearing. 
                We believe in the patience of craft.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg serif text-charcoal mb-3">Quiet Luxury</h3>
              <p className="text-ash text-sm leading-relaxed">
                True luxury whispers. It's felt in the hand, 
                seen in the light, known in the heart.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg serif text-charcoal mb-3">Honest Materials</h3>
              <p className="text-ash text-sm leading-relaxed">
                Recycled metals, ethically sourced stones. 
                Beauty that doesn't cost the earth.
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center">
          <p className="text-xl serif italic text-charcoal leading-relaxed">
            "We don't make jewelry. We make quiet companions 
            for the conversations that matter most—the ones you have with yourself."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

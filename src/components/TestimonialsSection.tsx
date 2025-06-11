const testimonials = [{
  quote: "These pieces don't just accessorize—they complete thoughts I didn't know I was having.",
  author: "Maya Chen",
  role: "Architect"
}, {
  quote: "Finally, jewelry that feels like an extension of who I am, not who I'm trying to be.",
  author: "Sofia Rodriguez",
  role: "Writer"
}, {
  quote: "The quality speaks in whispers. You have to lean in to truly appreciate the craft.",
  author: "Emma Thompson",
  role: "Designer"
}];
export const TestimonialsSection = () => {
  return <section className="bg-blush/30 py-[40px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="fade-up">
            <h2 className="serif text-charcoal mb-4 font-extrabold text-4xl">
              In Their Words
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mx-0 my-0">
          {testimonials.map((testimonial, index) => <div key={index} style={{
          animationDelay: `${index * 0.2}s`
        }} className="text-center fade-up border border-slate-200 rounded-xl px-[10px] py-[10px]">
              <blockquote className="text-lg serif italic text-charcoal mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-bold text-charcoal">{testimonial.author}</p>
                <p className="text-sm text-ash">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
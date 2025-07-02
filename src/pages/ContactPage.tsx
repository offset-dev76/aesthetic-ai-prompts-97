import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl serif font-light text-charcoal mb-4">
            Say Hi
          </h1>
          <p className="text-lg font-light text-ash">
            We respond with care, not bots.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="floating-label">
                <Input type="text" name="name" placeholder=" " value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-transparent border-clay focus:border-charcoal transition-colors" required />
                <label className="absolute left-4 top-3 text-ash transition-all duration-200 pointer-events-none">
                  Your Name
                </label>
              </div>

              <div className="floating-label">
                <Input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-transparent border-clay focus:border-charcoal transition-colors" required />
                <label className="absolute left-4 top-3 text-ash transition-all duration-200 pointer-events-none">
                  Email Address
                </label>
              </div>

              <div className="floating-label">
                <Textarea name="message" placeholder=" " value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 bg-transparent border-clay focus:border-charcoal transition-colors resize-none" required />
                <label className="absolute left-4 top-3 text-ash transition-all duration-200 pointer-events-none">
                  Your Message
                </label>
              </div>

              <Button type="submit" className="w-full bg-charcoal hover:bg-ash text-linen py-3 text-lg tracking-wide">
                Send Thoughts
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl serif text-charcoal mb-4">Get in Touch</h3>
              <div className="space-y-3 text-ash">
                <p className="text-base font-normal">hello@lumina-accessories.com</p>
                <p>+1 (555) 123-4567</p>
                <p>Available weekdays, 9am-5pm PST</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl serif text-charcoal mb-4">Visit Our Studio</h3>
              <div className="space-y-2 text-ash">
                <p>By appointment only</p>
                <p>1234 Artisan Street</p>
                <p>Portland, OR 97201</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl serif text-charcoal mb-4">Follow the Process</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-ash hover:text-charcoal transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-ash hover:text-charcoal transition-colors">
                  Pinterest
                </a>
                <a href="#" className="text-ash hover:text-charcoal transition-colors">
                  Newsletter
                </a>
              </div>
            </div>

            <div className="bg-blush/30 p-6 rounded-lg">
              <p className="text-sm text-ash leading-relaxed italic">
                "Questions about sizing, care, or custom pieces? 
                We love talking about the details that matter to you."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ContactPage;

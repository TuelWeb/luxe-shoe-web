
import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/ui/TestimonialCard";

interface TestimonialsSectionProps {
  fullPage?: boolean;
}

const TestimonialsSection = ({ fullPage = false }: TestimonialsSectionProps) => {
  // For a basic carousel functionality
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className={`section-padding ${fullPage ? 'pt-32' : 'bg-gradient-to-b from-gray-950 to-luxury-black'}`}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center gold-gradient-text">Avis Clients</h2>
        <p className="subtitle text-center">Découvrez ce que nos clients pensent de leurs chaussures Luxury</p>
        
        {fullPage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="relative mt-12">
            {/* Mobile version (carousel) */}
            <div className="md:hidden">
              <TestimonialCard testimonial={testimonials[activeTestimonial]} />
              
              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10 transition-colors"
                >
                  &#8592;
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10 transition-colors"
                >
                  &#8594;
                </button>
              </div>
              
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === activeTestimonial ? "bg-luxury-gold" : "bg-luxury-gold/30"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Desktop version */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;


import { motion } from "framer-motion";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-gray-950 border border-luxury-gold/10 rounded-lg p-6 hover:border-luxury-gold/30 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-luxury-gold">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-luxury-white/70 text-sm">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < testimonial.rating ? "text-luxury-gold" : "text-gray-500"}>
            ★
          </span>
        ))}
      </div>
      
      <blockquote className="text-luxury-white/80 italic relative">
        <span className="text-luxury-gold text-4xl absolute top-0 left-0 opacity-20">"</span>
        <p className="pl-6">{testimonial.comment}</p>
      </blockquote>
      
      <p className="text-luxury-white/60 text-sm mt-4">
        {testimonial.date}
      </p>
    </motion.div>
  );
};

export default TestimonialCard;

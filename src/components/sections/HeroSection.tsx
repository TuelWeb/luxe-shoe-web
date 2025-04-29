
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop')] 
          bg-cover bg-center bg-no-repeat"
          style={{ 
            filter: "brightness(0.4)",
          }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/70"></div>
      </div>

      <div 
        className={`container mx-auto px-4 z-10 text-center transform transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair">
          <span className="block">Marchez avec </span>
          <span className="gold-gradient-text">élégance.</span>
          <span className="block mt-2">Adoptez le luxe.</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto">
          Chaussures de prestige sélectionnées pour les amateurs de style raffiné.
        </p>
        
        <Button asChild className="gold-button text-lg py-6 px-10">
          <Link to="/products">
            Voir la collection
          </Link>
        </Button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

interface ProductsSectionProps {
  showAll?: boolean;
  fullPage?: boolean;
}

const ProductsSection = ({ showAll = false, fullPage = false }: ProductsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Display all products if showAll is true, otherwise display only 6
  const displayedProducts = showAll ? products : products.slice(0, 6);
  
  const filters = [
    { id: "all", name: "Tous" },
    { id: "oxford", name: "Oxford" },
    { id: "derby", name: "Derby" },
    { id: "sneakers", name: "Sneakers" },
    { id: "boots", name: "Boots" },
  ];

  return (
    <section id="products" className={`section-padding ${fullPage ? 'pt-32' : 'bg-luxury-black'}`}>
      <div className="container mx-auto px-4">
        {!fullPage && (
          <h2 className="section-title text-center gold-gradient-text">Nos Modèles</h2>
        )}
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-md border transition-all ${
                activeFilter === filter.id
                  ? "bg-luxury-gold text-luxury-black border-luxury-gold font-medium"
                  : "border-luxury-white/30 text-luxury-white hover:border-luxury-gold"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View More Button */}
        {!showAll && (
          <div className="flex justify-center mt-12">
            <Button asChild className="gold-button">
              <a href="/products">Voir tous les modèles</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;

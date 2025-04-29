
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="group bg-gray-950 rounded-lg overflow-hidden border border-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {product.new && (
          <div className="absolute top-4 left-4 bg-luxury-gold text-luxury-black px-2 py-1 text-xs font-bold uppercase tracking-wider">
            Nouveau
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-playfair text-xl font-semibold">{product.name}</h3>
          <span className="text-luxury-gold font-bold">{product.price}€</span>
        </div>
        
        <p className="text-luxury-white/70 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {product.colors.map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          
          <Button asChild className="gold-button">
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Commander
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

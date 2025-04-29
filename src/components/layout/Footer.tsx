
import { Link } from "react-router-dom";
import { Instagram, TikTok } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/30 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/886b06a2-43e6-4f0a-8448-64ffe287cf29.png" 
                alt="Luxury Shoes Logo" 
                className="h-12 mx-auto md:mx-0" 
              />
            </Link>
            <p className="mt-4 text-sm text-luxury-white/70">
              La référence des chaussures de luxe pour hommes et femmes. Élégance, confort et distinction garantis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-luxury-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-luxury-white/70 hover:text-luxury-gold transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-luxury-white/70 hover:text-luxury-gold transition-colors">
                  Nos modèles
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-luxury-white/70 hover:text-luxury-gold transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-luxury-white/70 hover:text-luxury-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social and Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4 text-luxury-white">Nous contacter</h3>
            <p className="text-luxury-white/70 mb-4">
              contact@luxuryshoes.com<br />
              +33 1 23 45 67 89
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-white hover:text-luxury-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-white hover:text-luxury-gold transition-colors"
                aria-label="TikTok"
              >
                <TikTok className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-luxury-gold/20 text-center text-luxury-white/60 text-sm flex flex-col md:flex-row justify-between">
          <p>© {currentYear} Luxury Shoes - Tous droits réservés</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <Link to="/legal" className="hover:text-luxury-gold transition-colors">
              Mentions légales
            </Link>
            <Link to="/terms" className="hover:text-luxury-gold transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

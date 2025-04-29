
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Nos modèles", path: "/products" },
    { name: "À propos", path: "/about" },
    { name: "Avis", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-luxury-black shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/886b06a2-43e6-4f0a-8448-64ffe287cf29.png" 
              alt="Luxury Shoes Logo" 
              className="h-12 md:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-lato text-sm uppercase tracking-wider transition-all hover:text-luxury-gold ${
                  isActive(item.path) ? "text-luxury-gold" : "text-luxury-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button asChild className="gold-button">
              <Link to="/products">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Découvrir la collection
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-luxury-white hover:text-luxury-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden py-6 bg-luxury-black border-t border-luxury-gold/30 mt-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-2 text-center font-lato uppercase tracking-wider transition-all hover:text-luxury-gold ${
                      isActive(item.path) ? "text-luxury-gold" : "text-luxury-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="gold-button w-full">
                  <Link to="/products">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Découvrir la collection
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

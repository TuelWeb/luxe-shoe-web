
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-black">
      <div className="text-center p-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 gold-gradient-text">404</h1>
        <p className="text-xl text-luxury-white mb-8">La page que vous recherchez n'existe pas</p>
        <Button asChild className="gold-button">
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

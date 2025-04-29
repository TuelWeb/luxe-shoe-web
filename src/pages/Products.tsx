
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductsSection from "@/components/sections/ProductsSection";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center mt-8 gold-gradient-text">Nos Modèles</h1>
          <p className="subtitle text-center mb-12">Découvrez notre collection exclusive de chaussures de luxe</p>
          <ProductsSection showAll={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;


import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Reviews = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <TestimonialsSection fullPage={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;

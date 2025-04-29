
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <ContactSection fullPage={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

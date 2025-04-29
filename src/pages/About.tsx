
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <AboutSection fullPage={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

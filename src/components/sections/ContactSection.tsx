
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Phone, MapPin, Music } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ContactSectionProps {
  fullPage?: boolean;
}

const ContactSection = ({ fullPage = false }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les meilleurs délais.",
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <section id="contact" className={`section-padding ${fullPage ? 'pt-32' : 'bg-luxury-black'}`}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center gold-gradient-text">Contactez-nous</h2>
        <p className="subtitle text-center">
          Vous avez une question ou besoin de conseils ? Notre équipe est à votre disposition
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-luxury-gold mb-2">
                  Votre nom
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-luxury-gold/30 focus:border-luxury-gold focus-visible:ring-1 focus-visible:ring-luxury-gold text-luxury-white focus:outline-none"
                  placeholder="Jean Dupont"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-luxury-gold mb-2">
                  Votre email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-luxury-gold/30 focus:border-luxury-gold focus-visible:ring-1 focus-visible:ring-luxury-gold text-luxury-white focus:outline-none"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-luxury-gold mb-2">
                  Votre message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-transparent border border-luxury-gold/30 focus:border-luxury-gold focus-visible:ring-1 focus-visible:ring-luxury-gold text-luxury-white focus:outline-none min-h-[150px]"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>
              
              <Button 
                type="submit" 
                className="gold-button w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-playfair mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-luxury-gold" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-luxury-white/70">contact@luxuryshoes.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-luxury-gold" />
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-luxury-white/70">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="text-luxury-gold" />
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <p className="text-luxury-white/70">
                      123 Avenue du Luxe<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-playfair mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-luxury-black border border-luxury-gold/50 text-luxury-gold w-12 h-12 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-black transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-luxury-black border border-luxury-gold/50 text-luxury-gold w-12 h-12 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-black transition-colors"
                >
                  <Music />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

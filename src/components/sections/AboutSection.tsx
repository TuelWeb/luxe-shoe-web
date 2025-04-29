
interface AboutSectionProps {
  fullPage?: boolean;
}

const AboutSection = ({ fullPage = false }: AboutSectionProps) => {
  return (
    <section id="about" className={`section-padding ${fullPage ? 'pt-32' : 'bg-gray-950'}`}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center gold-gradient-text">À propos</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1449505078894-297fdb3edbc1?q=80&w=1470&auto=format&fit=crop" 
              alt="Luxury Shoes Atelier" 
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-playfair mb-6">Notre Histoire</h3>
            
            <p className="text-luxury-white/80 mb-6">
              <span className="text-luxury-gold font-semibold">Luxury Shoes</span> est née d'une passion pour le design et la qualité. Chaque paire sélectionnée répond à des critères exigeants de style, de confort et de distinction.
            </p>
            
            <p className="text-luxury-white/80 mb-6">
              Fondée en 2015, notre boutique s'est rapidement imposée comme une référence pour les amateurs de chaussures d'exception. Notre expertise dans la sélection des matériaux, notre attention aux détails et notre service client personnalisé sont les piliers qui font notre réputation.
            </p>
            
            <h3 className="text-xl font-playfair mb-4 mt-8">Nos Valeurs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center p-4 border border-luxury-gold/20 rounded-lg hover:border-luxury-gold/50 transition-all">
                <div className="mb-2 text-luxury-gold text-2xl">✦</div>
                <h4 className="font-medium mb-2">Élégance intemporelle</h4>
                <p className="text-sm text-luxury-white/70">Des designs qui traversent les tendances et les saisons.</p>
              </div>
              
              <div className="text-center p-4 border border-luxury-gold/20 rounded-lg hover:border-luxury-gold/50 transition-all">
                <div className="mb-2 text-luxury-gold text-2xl">✦</div>
                <h4 className="font-medium mb-2">Qualité irréprochable</h4>
                <p className="text-sm text-luxury-white/70">Les meilleurs matériaux et une fabrication minutieuse.</p>
              </div>
              
              <div className="text-center p-4 border border-luxury-gold/20 rounded-lg hover:border-luxury-gold/50 transition-all">
                <div className="mb-2 text-luxury-gold text-2xl">✦</div>
                <h4 className="font-medium mb-2">Service sur mesure</h4>
                <p className="text-sm text-luxury-white/70">Un accompagnement personnalisé pour chaque client.</p>
              </div>
            </div>
          </div>
        </div>
        
        {fullPage && (
          <div className="mt-24">
            <h3 className="text-2xl md:text-3xl font-playfair mb-8 text-center">Notre Engagement</h3>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <p className="text-luxury-white/80 mb-6">
                  Chez Luxury Shoes, nous nous engageons à vous offrir des chaussures qui allient style sophistiqué et confort optimal. Notre sélection rigoureuse garantit des produits d'exception qui sauront vous accompagner dans toutes les occasions.
                </p>
                <p className="text-luxury-white/80">
                  Nos partenariats exclusifs avec des artisans et des marques de renom nous permettent de vous proposer des modèles uniques, fabriqués selon les plus hauts standards de qualité. Chaque détail compte, du choix des matières premières aux finitions parfaites.
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1573100925118-870b8efc799d?q=80&w=1374&auto=format&fit=crop" 
                  alt="Artisan travaillant le cuir" 
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;

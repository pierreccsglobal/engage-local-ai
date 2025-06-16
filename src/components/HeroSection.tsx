import React from 'react';
import { ArrowRight, Bot, Zap, Target } from 'lucide-react';
import Logo from './Logo';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-section="contact"]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
      {/* Fond avec effets lumineux */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gold-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo principal */}
        <div className="mb-8 flex justify-center">
          <Logo className="scale-150" />
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transformez Vos{' '}
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 bg-clip-text text-transparent">
            Visiteurs
          </span>
          <br />
          en{' '}
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
            Clients
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          L'agence web spécialisée en IA conversationnelle. Nous créons votre site web puis 
          déployons des agents IA 24/7 pour maximiser vos conversions.
        </p>

        {/* Statistiques rapides */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-gold-500/30 rounded-lg px-6 py-4">
            <div className="flex items-center">
              <Bot className="w-6 h-6 text-gold-400 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gold-400">+100%</div>
                <div className="text-sm text-gray-300">Conversions</div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-gold-500/30 rounded-lg px-6 py-4">
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-gold-400 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gold-400">24/7</div>
                <div className="text-sm text-gray-300">Disponible</div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-gold-500/30 rounded-lg px-6 py-4">
            <div className="flex items-center">
              <Target className="w-6 h-6 text-gold-400 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gold-400">ROI x5</div>
                <div className="text-sm text-gray-300">Garanti</div>
              </div>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-400/40 transform hover:scale-105 transition-all duration-300 flex items-center"
          >
            Démarrer Maintenant
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
            Voir une Démo
          </button>
        </div>

        {/* Call to action secondaire */}
        <p className="text-gray-300 mt-8">
          🎯 Audit gratuit de votre site • 📞 Consultation stratégique offerte • ⚡ Résultats sous 30 jours
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

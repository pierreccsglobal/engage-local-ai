
import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Zap, Target } from 'lucide-react';
import Logo from './Logo';

const HeroSection = () => {
  const [counters, setCounters] = useState({
    conversion: 0,
    roi: 0
  });

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = "Transformez Vos Visiteurs en Clients";

  useEffect(() => {
    // Animation machine à écrire optimisée
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Vitesse encore plus rapide
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    // Animation des compteurs simplifiée
    const duration = 1500; // Durée réduite
    const steps = 30; // Moins d'étapes
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        conversion: Math.floor(progress * 100),
        roi: Math.floor(progress * 5)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ conversion: 100, roi: 5 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-section="contact"]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openChatbot = () => {
    const chatbotButton = document.querySelector('[data-chatbot-trigger]');
    if (chatbotButton) {
      (chatbotButton as HTMLElement).click();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-zinc-900 to-black">
      {/* Fond simplifié - effets réduits */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo principal */}
        <div className="mb-8 flex justify-center">
          <Logo className="scale-150" />
        </div>

        {/* Titre principal optimisé */}
        <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight min-h-[200px] flex flex-col justify-center">
          <span className="relative">
            {displayedText.split(' ').map((word, index) => {
              if (word === 'Visiteurs' || word === 'Clients') {
                return (
                  <span key={index} className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 bg-clip-text text-transparent">
                    {word}{' '}
                  </span>
                );
              }
              return <span key={index}>{word} </span>;
            })}
            {!isTypingComplete && (
              <span className="inline-block w-1 h-20 bg-gold-400 ml-1"></span>
            )}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          L'agence web spécialisée en IA conversationnelle. Nous créons votre site web puis 
          déployons des agents IA 24/7 pour maximiser vos conversions.
        </p>

        {/* Statistiques simplifiées */}
        <div className="flex flex-wrap justify-center gap-8 mb-12" role="group" aria-label="Statistiques principales">
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-gold-500/30 rounded-lg px-6 py-4">
            <div className="flex items-center">
              <Bot className="w-6 h-6 text-gold-400 mr-3" aria-hidden="true" />
              <div>
                <div className="text-2xl font-bold text-gold-400" aria-live="polite">+{counters.conversion}%</div>
                <div className="text-sm text-gray-300">Conversions</div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-gold-500/30 rounded-lg px-6 py-4">
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-gold-400 mr-3" aria-hidden="true" />
              <div>
                <div className="text-2xl font-bold text-gold-400">24/7</div>
                <div className="text-sm text-gray-300">Disponible</div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-gold-500/30 rounded-lg px-6 py-4">
            <div className="flex items-center">
              <Target className="w-6 h-6 text-gold-400 mr-3" aria-hidden="true" />
              <div>
                <div className="text-2xl font-bold text-gold-400" aria-live="polite">ROI x{counters.roi}</div>
                <div className="text-sm text-gray-300">Garanti</div>
              </div>
            </div>
          </div>
        </div>

        {/* Boutons d'action avec effet pulse */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-gold-600 animate-pulse"
            aria-describedby="cta-description"
          >
            Démarrer Maintenant
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </button>
          <button 
            onClick={openChatbot}
            className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-gold-400/25 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gold-600 animate-pulse"
          >
            Voir une Démo
          </button>
        </div>

        {/* Call to action secondaire */}
        <p id="cta-description" className="text-gray-300 mt-8">
          🎯 Audit gratuit de votre site • 📞 Consultation stratégique offerte • ⚡ Résultats sous 30 jours
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

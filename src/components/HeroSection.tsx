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
  
  const fullText = "Création d'un système IA sur-mesure pour augmenter votre chiffre d'affaires";

  useEffect(() => {
    // Animation machine à écrire avec performance optimisée
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 40); // Accéléré pour affichage plus rapide
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    // Animation des compteurs optimisée avec requestAnimationFrame
    let animationId: number;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCounters({
        conversion: Math.floor(progress * 100),
        roi: Math.floor(progress * 5)
      });

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCounters({ conversion: 100, roi: 5 });
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
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
    <section className="hero-container px-4 bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
      {/* Fond optimisé avec moins d'éléments pour améliorer les performances */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Logo avec dimensions fixes pour éviter CLS */}
        <div className="logo-container animate-fade-in">
          <Logo className="scale-150 hover:scale-[1.6] transition-transform duration-300" />
        </div>

        {/* Titre avec hauteur réservée pour éviter CLS et meilleure gestion du texte long */}
        <h1 id="hero-heading" className="hero-title text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight animate-fade-in animation-delay-200 px-4">
          <span className="relative block">
            {displayedText.split(' ').map((word, index) => {
              if (word === 'IA' || word === 'augmenter' || word === 'chiffre' || word === "d'affaires") {
                return (
                  <span key={index} className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 bg-clip-text text-transparent">
                    {word}{' '}
                  </span>
                );
              }
              return <span key={index}>{word} </span>;
            })}
            {!isTypingComplete && (
              <span className="inline-block w-1 h-16 md:h-20 bg-gold-400 ml-1 animate-pulse"></span>
            )}
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-5xl mx-auto leading-relaxed animate-fade-in animation-delay-400 font-normal px-4">
          Sans augmenter votre budget publicitaire grâce à un trafic 100% organique
        </p>

        {/* Boutons CTA déplacés ici, juste après le sous-titre */}
        <div className="hero-buttons animate-fade-in animation-delay-600 mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <button 
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-400/40 transform hover:scale-105 transition-all duration-300 flex items-center hover:from-gold-400 hover:via-gold-300 hover:to-gold-200 animate-bounce-gentle focus:outline-none focus:ring-2 focus:ring-gold-600 w-full sm:w-auto justify-center"
            aria-describedby="cta-description"
          >
            Démarrer Maintenant
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
          </button>
          <button 
            onClick={openChatbot}
            className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-400 hover:text-black transition-all duration-300 backdrop-blur-sm hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-600 w-full sm:w-auto"
          >
            Voir une Démo
          </button>
        </div>

        {/* Statistiques avec dimensions fixes pour éviter CLS */}
        <div className="hero-stats grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4" role="group" aria-label="Statistiques principales">
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-gold-500/30 rounded-lg px-6 py-4 animate-fade-in animation-delay-800 hover:scale-105 hover:border-gold-400/60 transition-all duration-300">
            <div className="flex items-center justify-center">
              <Bot className="w-6 h-6 text-gold-400 mr-3" aria-hidden="true" />
              <div className="text-center">
                <div className="text-2xl font-semibold text-gold-400" aria-live="polite">+{counters.conversion}%</div>
                <div className="text-sm text-gray-300">Conversions</div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-gold-500/30 rounded-lg px-6 py-4 animate-fade-in animation-delay-900 hover:scale-105 hover:border-gold-400/60 transition-all duration-300">
            <div className="flex items-center justify-center">
              <Zap className="w-6 h-6 text-gold-400 mr-3" aria-hidden="true" />
              <div className="text-center">
                <div className="text-2xl font-semibold text-gold-400">24/7</div>
                <div className="text-sm text-gray-300">Disponible</div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-gold-500/30 rounded-lg px-6 py-4 animate-fade-in animation-delay-1000 hover:scale-105 hover:border-gold-400/60 transition-all duration-300">
            <div className="flex items-center justify-center">
              <Target className="w-6 h-6 text-gold-400 mr-3" aria-hidden="true" />
              <div className="text-center">
                <div className="text-2xl font-semibold text-gold-400" aria-live="polite">ROI x{counters.roi}</div>
                <div className="text-sm text-gray-300">Garanti</div>
              </div>
            </div>
          </div>
        </div>

        <p id="cta-description" className="text-gray-300 mt-8 animate-fade-in animation-delay-1200 hover:text-gray-100 transition-colors duration-300 font-normal px-4 text-center">
          🎯 Audit gratuit de votre site • 📞 Consultation stratégique offerte • ⚡ Résultats sous 30 jours
        </p>
      </div>
    </section>
  );
};

export default HeroSection;


import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    conversion: 0,
    roi: 0,
    satisfaction: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    let animationId: number;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCounters({
        conversion: Math.floor(progress * 100),
        roi: Math.floor(progress * 5),
        satisfaction: Math.floor(progress * 95)
      });

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCounters({ conversion: 100, roi: 5, satisfaction: 95 });
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  };

  const stats = [
    {
      icon: TrendingUp,
      value: `+${counters.conversion}%`,
      label: "Augmentation moyenne des conversions",
      description: "Grâce à notre infrastructure IA complète"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Disponibilité de vos agents IA",
      description: "Ne manquez plus jamais un prospect"
    },
    {
      icon: DollarSign,
      value: `ROI x${counters.roi}`,
      label: "Retour sur investissement moyen",
      description: "Mesuré sur 12 mois d'accompagnement"
    },
    {
      icon: Users,
      value: `${counters.satisfaction}%`,
      label: "Taux de satisfaction client",
      description: "Entreprises qui nous recommandent"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-r from-zinc-900/60 via-black/80 to-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="stats-heading" className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 animate-fade-in px-4">
            Des Résultats Qui{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              Parlent
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in animation-delay-200 font-normal px-4">
            Nos clients obtiennent des résultats mesurables grâce à notre approche 
            data-driven et notre infrastructure IA de pointe
          </p>
        </div>

        {/* Grid responsive avec hauteurs flexibles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-zinc-900/90 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gold-500/30 hover:border-gold-400/50 transition-all duration-500 transform hover:scale-105 shadow-lg shadow-gold-500/20 animate-fade-in group flex flex-col"
              style={{ 
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Icône avec dimensions fixes */}
              <div className="flex justify-center mb-4 lg:mb-6">
                <div className="p-3 lg:p-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 rounded-full shadow-lg shadow-gold-500/40 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
                </div>
              </div>
              
              {/* Contenu avec espacement flexible */}
              <div className="flex-1 flex flex-col justify-center space-y-3">
                <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gold-400 group-hover:text-gold-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white group-hover:text-gray-100 transition-colors duration-300 leading-tight px-2">
                  {stat.label}
                </h3>
                <div className="text-sm md:text-base text-gray-200 group-hover:text-gray-100 transition-colors duration-300 font-normal leading-relaxed px-2">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

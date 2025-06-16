
import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "+340%",
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
      value: "ROI x5",
      label: "Retour sur investissement moyen",
      description: "Mesuré sur 12 mois d'accompagnement"
    },
    {
      icon: Users,
      value: "95%",
      label: "Taux de satisfaction client",
      description: "Entreprises qui nous recommandent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-amber-950/40 via-black/70 to-yellow-950/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Des Résultats Qui{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Parlent
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Nos clients obtiennent des résultats mesurables grâce à notre approche 
            data-driven et notre infrastructure IA de pointe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/10"
            >
              <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 rounded-full w-fit shadow-lg shadow-amber-500/25">
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white mb-3">
                {stat.label}
              </div>
              <div className="text-gray-200 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

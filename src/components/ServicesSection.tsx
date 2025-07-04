
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageSquare, Bot, Users, Calendar, Mail, BarChart3, Target, Globe } from 'lucide-react';

const ServicesSection = () => {
  // Services réduits et optimisés pour améliorer les performances
  const services = [
    {
      icon: Globe,
      title: "Site Web & Landing Pages",
      description: "Création de sites web optimisés pour la conversion avec design moderne et responsive",
      features: ["Design sur mesure", "Optimisation mobile", "SEO intégré", "Performance optimisée"]
    },
    {
      icon: Target,
      title: "Génération de Trafic",
      description: "SEO local optimisé et campagnes publicitaires ciblées pour attirer vos prospects idéaux",
      features: ["Référencement local", "Google Ads", "Facebook Ads", "Analyse concurrentielle"]
    },
    {
      icon: Phone,
      title: "Agent IA Vocal",
      description: "Réception automatique des appels hors horaires avec prise de rendez-vous intelligente",
      features: ["Réponse 24/7", "Prise de RDV", "Qualification prospects", "Transfert intelligent"]
    },
    {
      icon: MessageSquare,
      title: "Agent IA SMS",
      description: "Réponse automatique aux appels manqués via SMS pour ne perdre aucun prospect",
      features: ["SMS automatique", "Suivi personnalisé", "Relance intelligente", "Intégration CRM"]
    },
    {
      icon: Bot,
      title: "Chatbot IA",
      description: "Génération de leads 24/7 sur votre site web et réseaux sociaux",
      features: ["Chat en temps réel", "Qualification automatique", "Multi-plateforme", "Réponses contextuelles"]
    },
    {
      icon: Users,
      title: "CRM Intelligent",
      description: "Suivi automatisé de tous vos prospects et clients avec scoring IA",
      features: ["Scoring automatique", "Pipeline visuel", "Historique complet", "Prédictions IA"]
    },
    {
      icon: Calendar,
      title: "Prise de RDV Automatisée",
      description: "Système de réservation intelligent synchronisé avec votre agenda",
      features: ["Calendrier unifié", "Confirmations auto", "Rappels SMS", "Optimisation créneaux"]
    },
    {
      icon: Mail,
      title: "Nurturing Email/SMS",
      description: "Campagnes automatisées personnalisées selon le comportement de vos prospects",
      features: ["Séquences automatiques", "Personnalisation IA", "A/B testing", "Analytics avancés"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Tableaux de bord en temps réel pour optimiser vos conversions",
      features: ["ROI en temps réel", "Rapports automatiques", "Insights IA", "Optimisation continue"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black/80 to-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Notre Infrastructure IA{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              Complète
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            De la création de votre site web à la conversion finale, nous automatisons 
            chaque étape de votre parcours client avec l'intelligence artificielle
          </p>
        </div>

        {/* Grid optimisée avec hauteurs fixes pour éviter CLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-zinc-900/90 backdrop-blur-sm border border-gold-500/30 hover:border-gold-400/60 transition-all duration-500 transform hover:scale-105 group shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-400/30 animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                height: '380px', // Hauteur fixe pour éviter CLS
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardHeader className="text-center flex-shrink-0">
                {/* Icône avec dimensions fixes */}
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-gold-500/40" style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-gold-300 transition-colors duration-300">
                  <h3>{service.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-100 mb-4 text-center font-medium group-hover:text-gray-50 transition-colors duration-300 flex-shrink-0">
                  {service.description}
                </p>
                {/* Liste des fonctionnalités avec hauteur fixe */}
                <ul className="space-y-2 flex-1" style={{ minHeight: '120px' }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-200 flex items-center group-hover:text-gray-100 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

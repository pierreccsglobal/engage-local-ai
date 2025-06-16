
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageSquare, Bot, Users, Calendar, Mail, BarChart3, Target, Globe, Code } from 'lucide-react';

const ServicesSection = () => {
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
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Notre Infrastructure IA Complète
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            De la création de votre site web à la conversion finale, nous automatisons 
            chaque étape de votre parcours client avec l'intelligence artificielle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
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

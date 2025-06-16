
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Salon de Coiffure Elegance",
      content: "Depuis l'installation de leur système IA, nous n'avons plus d'appels manqués et nos réservations ont augmenté de 280%. L'agent vocal est si naturel que nos clients pensent parler à une vraie personne !",
      rating: 5,
      avatar: "MD"
    },
    {
      name: "Pierre Martin",
      company: "Garage Martin & Fils",
      content: "Le chatbot sur notre site génère 15 nouveaux devis par semaine automatiquement. Le CRM nous permet de suivre chaque prospect et le nurturing email a doublé notre taux de conversion.",
      rating: 5,
      avatar: "PM"
    },
    {
      name: "Sophie Laurent",
      company: "Cabinet Dentaire Laurent",
      content: "Leur solution complète nous a permis de nous concentrer sur nos patients pendant que l'IA gère les rendez-vous, les rappels et le suivi. Notre chiffre d'affaires a augmenté de 45% en 6 mois.",
      rating: 5,
      avatar: "SL"
    },
    {
      name: "Thomas Durand",
      company: "Restaurant Le Gourmet",
      content: "L'agent SMS répond instantanément aux clients qui n'arrivent pas à nous joindre. Plus de frustration, plus de clients perdus. La prise de réservation automatique fonctionne parfaitement !",
      rating: 5,
      avatar: "TD"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black/70 to-amber-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ce Que Disent Nos{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Des entreprises locales qui ont transformé leur activité grâce à notre infrastructure IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gray-800/90 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/10"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-amber-400 mr-4" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 rounded-full flex items-center justify-center text-black font-bold text-lg mr-4 shadow-lg shadow-amber-500/25">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-amber-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

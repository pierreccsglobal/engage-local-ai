
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, MessageSquare, Phone, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-black/70 to-zinc-800/50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-600/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-gold-400/10 to-gold-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 text-gold-400">
            <Bot className="w-8 h-8 animate-bounce" />
            <MessageSquare className="w-8 h-8 animate-bounce delay-100" />
            <Phone className="w-8 h-8 animate-bounce delay-200" />
            <Users className="w-8 h-8 animate-bounce delay-300" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Créons votre{' '}
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 bg-clip-text text-transparent">
            site web
          </span>{' '}
          et transformons vos{' '}
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
            visiteurs en clients
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
          Nous créons votre site web professionnel puis amenons du trafic qualifié via le SEO et la publicité. 
          Ensuite, nous convertissons ce trafic grâce à notre infrastructure IA complète : 
          agents vocaux, chatbots, CRM automatisé et nurturing intelligent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-700 hover:via-gold-600 hover:to-gold-500 text-black px-8 py-4 text-lg font-bold group transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold-500/30"
          >
            Découvrir nos solutions IA
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black px-8 py-4 text-lg font-bold transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            Voir nos réalisations
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-6 border border-gold-500/30 shadow-lg shadow-gold-500/20">
            <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
            <div className="text-gray-200">Disponibilité IA</div>
          </div>
          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-6 border border-gold-500/30 shadow-lg shadow-gold-500/20">
            <div className="text-3xl font-bold text-gold-300 mb-2">+300%</div>
            <div className="text-gray-200">Conversion moyenne</div>
          </div>
          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-6 border border-gold-500/30 shadow-lg shadow-gold-500/20">
            <div className="text-3xl font-bold text-gold-400 mb-2">0</div>
            <div className="text-gray-200">Appel manqué</div>
          </div>
          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-6 border border-gold-500/30 shadow-lg shadow-gold-500/20">
            <div className="text-3xl font-bold text-gold-300 mb-2">50+</div>
            <div className="text-gray-200">Sites créés</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

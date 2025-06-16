
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, MessageSquare, Phone, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 text-blue-400">
            <Bot className="w-8 h-8 animate-bounce" />
            <MessageSquare className="w-8 h-8 animate-bounce delay-100" />
            <Phone className="w-8 h-8 animate-bounce delay-200" />
            <Users className="w-8 h-8 animate-bounce delay-300" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Créons votre{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            site web
          </span>{' '}
          et transformons vos{' '}
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            visiteurs en clients
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Nous créons votre site web professionnel puis amenons du trafic qualifié via le SEO et la publicité. 
          Ensuite, nous convertissons ce trafic grâce à notre infrastructure IA complète : 
          agents vocaux, chatbots, CRM automatisé et nurturing intelligent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold group transition-all duration-300 transform hover:scale-105"
          >
            Découvrir nos solutions IA
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Voir nos réalisations
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-300">Disponibilité IA</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">+300%</div>
            <div className="text-gray-300">Conversion moyenne</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
            <div className="text-gray-300">Appel manqué</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-300">Sites créés</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

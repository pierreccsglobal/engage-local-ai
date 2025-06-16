
import React from 'react';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black/90 via-amber-950/20 to-black/95 backdrop-blur-sm border-t border-amber-500/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center mb-4">
              <Bot className="w-8 h-8 text-amber-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">IA Local Pro</h3>
            </div>
            <p className="text-gray-200 mb-4">
              L'agence web spécialisée en IA conversationnelle pour les entreprises locales. 
              Nous créons votre site web puis transformons vos visiteurs en clients grâce à l'intelligence artificielle.
            </p>
            <div className="text-sm text-gray-300">
              © 2024 IA Local Pro. Tous droits réservés.
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-200">
              <li>• Création de Sites Web</li>
              <li>• Landing Pages Optimisées</li>
              <li>• Agent IA Vocal 24/7</li>
              <li>• Chatbot Générateur de Leads</li>
              <li>• CRM Intelligent</li>
              <li>• SEO Local & Publicité</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-200">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                +33 1 23 45 67 89
              </div>
              <div className="flex items-center text-gray-200">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                contact@agence-ia-local.fr
              </div>
              <div className="flex items-center text-gray-200">
                <MapPin className="w-5 h-5 text-amber-400 mr-3" />
                Paris, France
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-500/30 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            Créons votre site web et transformons vos visiteurs en clients avec l'IA • Résultats garantis sous 30 jours
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

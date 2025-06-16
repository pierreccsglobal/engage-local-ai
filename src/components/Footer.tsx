
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black/95 via-zinc-900/40 to-black/98 backdrop-blur-sm border-t border-gold-500/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-200 mb-4">
              L'agence web spécialisée en IA conversationnelle pour les entreprises locales. 
              Nous créons votre site web puis transformons vos visiteurs en clients grâce à l'intelligence artificielle.
            </p>
            <div className="text-sm text-gray-300">
              © 2024 Lead Prospect. Tous droits réservés.
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
                <Phone className="w-5 h-5 text-gold-400 mr-3" />
                <a href="tel:0627675714" className="hover:text-gold-400 transition-colors">
                  06 27 67 57 14
                </a>
              </div>
              <div className="flex items-center text-gray-200">
                <Mail className="w-5 h-5 text-gold-400 mr-3" />
                <a href="mailto:contact@leadprospect.fr" className="hover:text-gold-400 transition-colors">
                  contact@leadprospect.fr
                </a>
              </div>
              <div className="flex items-center text-gray-200">
                <MapPin className="w-5 h-5 text-gold-400 mr-3" />
                Paris, France
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-500/30 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            Créons votre site web et transformons vos visiteurs en clients avec l'IA • Résultats garantis sous 30 jours
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

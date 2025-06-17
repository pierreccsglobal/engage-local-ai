
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black/95 via-zinc-900/40 to-black/98 backdrop-blur-sm border-t border-gold-500/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-200 mb-4 text-sm leading-relaxed">
              L'agence web spécialisée en IA conversationnelle pour les entreprises locales. 
              Nous créons votre site web puis transformons vos visiteurs en clients grâce à l'intelligence artificielle.
            </p>
            <div className="text-xs text-gray-300">
              © 2024 Lead Prospect. Tous droits réservés.
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
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
              <div className="flex items-center text-gray-200 text-sm">
                <Phone className="w-4 h-4 text-gold-400 mr-3 flex-shrink-0" />
                <a href="tel:0627675714" className="hover:text-gold-400 transition-colors">
                  06 27 67 57 14
                </a>
              </div>
              <div className="flex items-center text-gray-200 text-sm">
                <Mail className="w-4 h-4 text-gold-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@leadprospect.fr" className="hover:text-gold-400 transition-colors break-all">
                  contact@leadprospect.fr
                </a>
              </div>
              <div className="flex items-center text-gray-200 text-sm">
                <MapPin className="w-4 h-4 text-gold-400 mr-3 flex-shrink-0" />
                La Garnache, France
              </div>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/leadprospect" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-800 p-3 rounded-full hover:bg-gold-400 hover:text-black transition-all duration-300 text-gray-200"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/leadprospect" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-800 p-3 rounded-full hover:bg-gold-400 hover:text-black transition-all duration-300 text-gray-200"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/leadprospect" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-800 p-3 rounded-full hover:bg-gold-400 hover:text-black transition-all duration-300 text-gray-200"
                aria-label="Suivez-nous sur LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
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

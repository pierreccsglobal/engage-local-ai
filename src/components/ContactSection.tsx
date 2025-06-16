import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  useEffect(() => {
    // Vérifier si Calendly est disponible et initialiser le widget
    const initCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/creatoreconomy/nouvelle-reunion?primary_color=ecc14e',
          parentElement: document.querySelector('.calendly-inline-widget'),
          prefill: {},
          utm: {}
        });
      }
    };

    // Si Calendly est déjà chargé, initialiser immédiatement
    if (window.Calendly) {
      initCalendly();
    } else {
      // Sinon, attendre que le script soit chargé
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initCalendly();
        }
      }, 100);

      // Nettoyer l'intervalle après 10 secondes si Calendly ne charge pas
      setTimeout(() => clearInterval(checkCalendly), 10000);
    }
  }, []);

  return (
    <section data-section="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Obtenez une analyse gratuite de votre potentiel de conversion 
            et découvrez comment l'IA peut révolutionner votre activité
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Widget Calendly */}
          <Card className="bg-zinc-900/90 backdrop-blur-sm border border-gold-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-gold-400" />
                Demandez Votre Audit Gratuit
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Widget Calendly */}
              <div 
                className="calendly-inline-widget" 
                style={{minWidth: '320px', height: '700px'}}
              ></div>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="bg-zinc-900/90 backdrop-blur-sm border border-gold-500/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Phone className="w-8 h-8 text-gold-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Appelez-nous</h3>
                    <a href="tel:0627675714" className="text-gray-300 hover:text-gold-400 transition-colors">
                      06 27 67 57 14
                    </a>
                    <p className="text-sm text-gray-400">Lun-Ven 9h-18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/90 backdrop-blur-sm border border-gold-500/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-8 h-8 text-gold-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Écrivez-nous</h3>
                    <a href="mailto:contact@leadprospect.fr" className="text-gray-300 hover:text-gold-400 transition-colors">
                      contact@leadprospect.fr
                    </a>
                    <p className="text-sm text-gray-400">Réponse sous 2h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-gold-600/20 to-gold-500/20 backdrop-blur-sm rounded-xl p-8 border border-gold-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎁 Offre Spéciale Lancement
              </h3>
              <p className="text-gray-300 mb-4">
                Les 10 premières entreprises bénéficient de :
              </p>
              <ul className="space-y-2 text-gold-400">
                <li>✅ Audit complet gratuit (valeur 500€)</li>
                <li>✅ Setup IA offert (valeur 1500€)</li>
                <li>✅ 3 mois de suivi gratuit</li>
                <li>✅ Formation équipe incluse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

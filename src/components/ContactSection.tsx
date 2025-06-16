import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactSection = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Charger le script Calendly s'il n'est pas déjà présent
    const loadCalendlyScript = () => {
      return new Promise<void>((resolve, reject) => {
        // Vérifier si le script est déjà chargé
        if (window.Calendly) {
          setIsScriptLoaded(true);
          resolve();
          return;
        }

        // Vérifier si le script existe déjà dans le DOM
        const existingScript = document.querySelector('script[src*="calendly.com"]');
        if (existingScript) {
          existingScript.addEventListener('load', () => {
            setIsScriptLoaded(true);
            resolve();
          });
          return;
        }

        // Créer et injecter le script Calendly
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        
        script.onload = () => {
          console.log('Calendly script loaded successfully');
          setIsScriptLoaded(true);
          resolve();
        };
        
        script.onerror = () => {
          console.error('Failed to load Calendly script');
          reject(new Error('Failed to load Calendly script'));
        };

        document.head.appendChild(script);
      });
    };

    const initCalendly = () => {
      if (!calendlyRef.current || !window.Calendly || isCalendlyLoaded) return;

      try {
        console.log('Initializing Calendly widget...');
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/creatoreconomy/nouvelle-reunion?primary_color=ecc14e',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
        setIsCalendlyLoaded(true);
        console.log('Calendly widget initialized successfully');
      } catch (error) {
        console.error('Error initializing Calendly widget:', error);
      }
    };

    // Séquence de chargement
    const initializeCalendly = async () => {
      try {
        await loadCalendlyScript();
        // Attendre un court délai pour s'assurer que le DOM est prêt
        setTimeout(() => {
          if (calendlyRef.current) {
            initCalendly();
          }
        }, 100);
      } catch (error) {
        console.error('Failed to initialize Calendly:', error);
      }
    };

    initializeCalendly();

    // Cleanup function
    return () => {
      setIsCalendlyLoaded(false);
    };
  }, [isCalendlyLoaded]);

  return (
    <section data-section="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Obtenez une analyse gratuite de votre potentiel de conversion 
            et découvrez comment l'IA peut révolutionner votre activité
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Widget Calendly */}
          <Card className="bg-zinc-900/90 backdrop-blur-sm border border-gold-500/30 hover:border-gold-400/50 transition-all duration-500 animate-fade-in animation-delay-400">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-gold-400 animate-pulse" />
                Demandez Votre Audit Gratuit
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {/* Widget Calendly */}
              <div 
                ref={calendlyRef}
                className="calendly-inline-widget w-full overflow-hidden rounded-lg" 
                style={{
                  minWidth: isMobile ? '100%' : '280px',
                  width: '100%',
                  height: isMobile ? '500px' : '600px',
                  minHeight: '400px'
                }}
              >
                {/* Fallback content pendant le chargement */}
                {!isCalendlyLoaded && (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg border border-gold-500/20">
                    <div className="text-center p-8">
                      {isScriptLoaded ? (
                        <>
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-400 mx-auto mb-4"></div>
                          <p className="text-gray-300 font-medium">Initialisation du calendrier...</p>
                        </>
                      ) : (
                        <>
                          <div className="animate-pulse h-8 w-8 bg-gold-400 rounded-full mx-auto mb-4"></div>
                          <p className="text-gray-300 font-medium">Chargement du script...</p>
                        </>
                      )}
                      <p className="text-gray-500 text-sm mt-2">Préparation de votre espace de réservation</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="bg-zinc-900/90 backdrop-blur-sm border border-gold-500/30 hover:border-gold-400/50 hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-600 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Phone className="w-8 h-8 text-gold-400 mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-gray-100 transition-colors duration-300">Appelez-nous</h3>
                    <a href="tel:0627675714" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">
                      06 27 67 57 14
                    </a>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Lun-Ven 9h-18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/90 backdrop-blur-sm border border-gold-500/30 hover:border-gold-400/50 hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-700 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-8 h-8 text-gold-400 mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-gray-100 transition-colors duration-300">Écrivez-nous</h3>
                    <a href="mailto:contact@leadprospect.fr" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">
                      contact@leadprospect.fr
                    </a>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Réponse sous 2h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-gold-600/20 to-gold-500/20 backdrop-blur-sm rounded-xl p-8 border border-gold-500/30 hover:border-gold-400/50 hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-800 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                🎁 Offre Spéciale Lancement
              </h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Les 10 premières entreprises bénéficient de :
              </p>
              <ul className="space-y-2 text-gold-400">
                <li className="group-hover:text-gold-300 transition-colors duration-300">✅ Audit complet gratuit (valeur 500€)</li>
                <li className="group-hover:text-gold-300 transition-colors duration-300">✅ Garantie satisfait ou remboursé ROI x5</li>
                <li className="group-hover:text-gold-300 transition-colors duration-300">✅ 3 mois de suivi gratuit</li>
                <li className="group-hover:text-gold-300 transition-colors duration-300">✅ Formation équipe incluse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

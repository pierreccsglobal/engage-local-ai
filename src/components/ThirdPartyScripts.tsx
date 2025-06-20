
import React, { useEffect } from 'react';

const ThirdPartyScripts: React.FC = () => {
  useEffect(() => {
    // Chargement différé et conditionnel de Google Analytics
    const loadGoogleAnalytics = () => {
      setTimeout(() => {
        if (window.navigator.onLine) {
          const script = document.createElement('script');
          script.async = true;
          script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XQPZGBB86E';
          document.head.appendChild(script);
          
          script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) {
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-XQPZGBB86E');
          };
        }
      }, 5000);
    };

    // Chargement différé de Calendly uniquement si nécessaire
    const loadCalendly = () => {
      setTimeout(() => {
        if (window.navigator.onLine && document.querySelector('[data-calendly]')) {
          const script = document.createElement('script');
          script.async = true;
          script.src = 'https://assets.calendly.com/assets/external/widget.js';
          document.head.appendChild(script);
        }
      }, 7000);
    };

    // Déclaration des types pour window
    declare global {
      interface Window {
        dataLayer: any[];
      }
    }

    window.addEventListener('load', loadGoogleAnalytics);
    window.addEventListener('load', loadCalendly);

    return () => {
      window.removeEventListener('load', loadGoogleAnalytics);
      window.removeEventListener('load', loadCalendly);
    };
  }, []);

  return null;
};

export default ThirdPartyScripts;

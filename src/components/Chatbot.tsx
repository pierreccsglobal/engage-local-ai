
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Nettoyer tout script existant
    const existingScript = document.querySelector('script[data-widget-id="685a73574327f9b16beb8de2"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Créer et injecter le nouveau script LeadConnector
    const script = document.createElement('script');
    script.src = 'https://beta.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '685a73574327f9b16beb8de2');
    script.async = true;

    // Ajouter le script au head du document
    document.head.appendChild(script);

    // Cleanup function pour supprimer le script si le composant est démonté
    return () => {
      const scriptToRemove = document.querySelector('script[data-widget-id="685a73574327f9b16beb8de2"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  // Le composant ne rend rien car le chatbot est géré par le script externe
  return null;
};

export default Chatbot;

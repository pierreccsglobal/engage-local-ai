
import React, { useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotModal = ({ isOpen, onClose }: ChatbotModalProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && chatContainerRef.current) {
      // Nettoyer tout script existant
      const existingScript = document.querySelector('script[data-widget-id="685a73574327f9b16beb8de2"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Créer et injecter le script LeadConnector
      const script = document.createElement('script');
      script.src = 'https://beta.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', '685a73574327f9b16beb8de2');
      script.async = true;

      // Ajouter le script au document
      document.head.appendChild(script);

      // Forcer l'affichage du widget dans notre conteneur
      script.onload = () => {
        setTimeout(() => {
          const chatWidget = document.querySelector('[data-widget-id="685a73574327f9b16beb8de2"]');
          if (chatWidget && chatContainerRef.current) {
            chatWidget.style.display = 'block';
            chatWidget.style.position = 'relative';
            chatWidget.style.width = '100%';
            chatWidget.style.height = '100%';
          }
        }, 1000);
      };
    }

    return () => {
      // Cleanup lors de la fermeture
      if (!isOpen) {
        const scriptToRemove = document.querySelector('script[data-widget-id="685a73574327f9b16beb8de2"]');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      }
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full h-[600px] p-0 bg-white">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="text-lg font-semibold text-black">
            Chat avec notre assistant IA
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4 text-black" />
            <span className="sr-only">Fermer</span>
          </button>
        </DialogHeader>
        <div className="flex-1 relative p-4">
          <div 
            ref={chatContainerRef}
            id="chatbot-container"
            className="w-full h-full min-h-[500px] bg-gray-50 rounded-lg flex items-center justify-center"
          >
            <div className="text-gray-500">Chargement du chat...</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotModal;

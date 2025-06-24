
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotModal = ({ isOpen, onClose }: ChatbotModalProps) => {
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
        <div className="flex-1 relative">
          <iframe
            src="https://beta.leadconnectorhq.com/chat-widget/loader.js?id=685a73574327f9b16beb8de2"
            width="100%"
            height="520"
            frameBorder="0"
            className="rounded-b-lg"
            title="Chatbot Assistant"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotModal;


import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MessageCircle, Send, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis Pierre, votre assistant IA. Comment puis-je vous aider aujourd\'hui ?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substring(2)}`);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [conversationSent, setConversationSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus le textarea après chaque réponse du chatbot
  useEffect(() => {
    if (!isLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

  const sendConversationSummary = async () => {
    if (messages.length <= 1 || conversationSent) return; // Ne pas envoyer si pas de vraie conversation ou déjà envoyé

    try {
      // Créer un résumé de la conversation
      const conversationText = messages
        .filter(msg => msg.id !== '1') // Exclure le message d'accueil
        .map(msg => `${msg.isUser ? 'Utilisateur' : 'Assistant'}: ${msg.text}`)
        .join('\n\n');

      if (!conversationText.trim()) return;

      console.log('Sending conversation summary...');
      const { data, error } = await supabase.functions.invoke('send-notification', {
        body: {
          sessionId,
          conversationSummary: conversationText,
          messageCount: messages.length - 1, // Exclure le message d'accueil
          timestamp: new Date().toISOString()
        }
      });

      if (!error) {
        setConversationSent(true);
        console.log('Conversation summary sent successfully');
      } else {
        console.error('Error sending conversation summary:', error);
      }
    } catch (error) {
      console.error('Error sending conversation summary:', error);
    }
  };

  // Fonction pour envoyer le résumé de manière synchrone (pour beforeunload)
  const sendConversationSummarySync = () => {
    if (messages.length <= 1 || conversationSent) return;

    const conversationText = messages
      .filter(msg => msg.id !== '1')
      .map(msg => `${msg.isUser ? 'Utilisateur' : 'Assistant'}: ${msg.text}`)
      .join('\n\n');

    if (!conversationText.trim()) return;

    // Utiliser sendBeacon pour un envoi synchrone fiable
    const payload = JSON.stringify({
      sessionId,
      conversationSummary: conversationText,
      messageCount: messages.length - 1,
      timestamp: new Date().toISOString()
    });

    // Essayer d'abord avec l'API Supabase via fetch synchrone
    try {
      fetch(`${supabase.supabaseUrl}/functions/v1/send-notification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabase.supabaseKey}`,
        },
        body: payload,
        keepalive: true // Important pour les requêtes lors de beforeunload
      });
      setConversationSent(true);
    } catch (error) {
      console.error('Error sending conversation summary sync:', error);
    }
  };

  // Effet pour détecter la fermeture du dialogue et envoyer le résumé
  useEffect(() => {
    if (!isOpen && messages.length > 1 && !conversationSent) {
      sendConversationSummary();
    }
  }, [isOpen, messages.length, conversationSent]);

  // Effet pour détecter quand l'utilisateur quitte la page
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (messages.length > 1 && !conversationSent) {
        sendConversationSummarySync();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && messages.length > 1 && !conversationSent) {
        sendConversationSummary();
      }
    };

    const handlePageHide = () => {
      if (messages.length > 1 && !conversationSent) {
        sendConversationSummarySync();
      }
    };

    // Événements pour détecter la fermeture/changement de page
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);

    // Cleanup function
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [messages, sessionId, conversationSent]);

  const saveConversation = async (userMessage: string, botResponse: string) => {
    try {
      const { error } = await supabase
        .from('chat_conversations')
        .insert({
          session_id: sessionId,
          user_message: userMessage,
          bot_response: botResponse
        });

      if (error) {
        console.error('Erreur lors de la sauvegarde de la conversation:', error);
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentUserMessage = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    // Marquer que ce n'est plus le premier message
    if (isFirstMessage) {
      setIsFirstMessage(false);
    }

    try {
      const conversationHistory = messages.map(msg => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.text
      }));

      const { data, error } = await supabase.functions.invoke('chat-gpt', {
        body: {
          message: currentUserMessage,
          conversationHistory
        }
      });

      if (error) throw error;

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      
      // Sauvegarder la conversation dans la base de données
      await saveConversation(currentUserMessage, data.reply);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div 
          onClick={() => setIsOpen(true)}
          className="bg-gold-400 text-black px-4 py-2 rounded-lg shadow-lg animate-bounce-gentle cursor-pointer hover:bg-gold-500 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/40"
        >
          <span className="text-sm font-medium">Vous avez des questions ?</span>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              data-chatbot-trigger
              className="w-14 h-14 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 text-black shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-400/40 hover:scale-110 transition-all duration-300 animate-bounce-gentle"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm w-full max-w-[90vw] h-[450px] flex flex-col p-0 [&>button]:hidden">
            <DialogHeader className="p-3 border-b bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300">
              <DialogTitle className="text-black flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/lovable-uploads/0d117185-7e85-4d74-af89-b989b96f4b5d.png" alt="Pierre" />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  <span>Pierre</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:bg-black/10 h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-2 ${
                      message.isUser
                        ? 'bg-gold-400 text-black'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-xs">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-2">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <textarea
                  ref={textareaRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 resize-none border rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-gold-400"
                  rows={1}
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-gold-400 hover:bg-gold-500 text-black h-8 w-8 p-0"
                >
                  <Send className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Chatbot;

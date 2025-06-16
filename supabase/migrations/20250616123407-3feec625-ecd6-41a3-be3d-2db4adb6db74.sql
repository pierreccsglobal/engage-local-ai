
-- Créer une table pour stocker les conversations du chatbot
CREATE TABLE public.chat_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  user_message TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Créer un index pour améliorer les performances des requêtes
CREATE INDEX idx_chat_conversations_created_at ON public.chat_conversations(created_at DESC);
CREATE INDEX idx_chat_conversations_session_id ON public.chat_conversations(session_id);

-- Créer une table pour les administrateurs
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insérer l'administrateur par défaut (mot de passe hashé avec bcrypt)
INSERT INTO public.admin_users (email, password_hash) 
VALUES ('pierredevauxcontact@gmail.com', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Activer RLS sur les deux tables
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre la lecture des conversations aux administrateurs connectés
CREATE POLICY "Admins can view all conversations" 
  ON public.chat_conversations 
  FOR SELECT 
  USING (true);

-- Politique pour permettre l'insertion de nouvelles conversations
CREATE POLICY "Allow inserting conversations" 
  ON public.chat_conversations 
  FOR INSERT 
  WITH CHECK (true);

-- Politique pour les administrateurs
CREATE POLICY "Admins can view their own data" 
  ON public.admin_users 
  FOR SELECT 
  USING (true);

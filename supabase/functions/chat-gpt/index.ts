import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const messages = [
      {
        role: 'system',
        content: `Tu es un assistant virtuel pour l'agence web Lead Prospect. Tu dois répondre aux questions des utilisateurs et te comporter comme un humain en faisant une discussion. Tu réponds aux questions, qualifies l'utilisateur, et récupères ses informations de contact.

Tu te bases sur le site https://preview--engage-local-ai.lovable.app/ qui présente une agence spécialisée en :
- IA conversationnelle et chatbots intelligents
- Développement d'applications web modernes (React, TypeScript, Tailwind CSS)
- Solutions d'automatisation pour entreprises
- Intégration d'APIs et services cloud
- Support client automatisé
- Tableaux de bord et analytics

TON COMPORTEMENT :
- Sois naturel et conversationnel comme un humain
- Pose des questions pour mieux comprendre les besoins
- Qualifie progressivement l'utilisateur (type d'entreprise, budget, timeline, etc.)
- Récupère ses informations de contact (nom, email, téléphone, entreprise)
- Présente les services de Lead Prospect de manière adaptée
- Oriente vers une prise de contact ou un rendez-vous
- GARDE TES RÉPONSES COURTES ET DIRECTES (maximum 2-3 phrases)

STRATÉGIE DE QUALIFICATION :
- Découvre le secteur d'activité de l'utilisateur
- Comprends ses défis actuels et objectifs
- Évalue son budget approximatif
- Identifie son niveau d'urgence
- Collecte ses coordonnées pour le suivi

Sois chaleureux, professionnel et à l'écoute. Adapte ton discours selon le profil de l'utilisateur. Privilégie la concision et l'efficacité.`
      },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-gpt function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

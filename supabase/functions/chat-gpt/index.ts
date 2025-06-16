
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
        content: `Vous êtes Pierre, l'assistant IA expert d'une agence web spécialisée en IA conversationnelle et développement web innovant. 

VOTRE EXPERTISE :
- Développement d'applications web modernes avec React, TypeScript, et Tailwind CSS
- Intégration d'IA conversationnelle (chatbots, assistants virtuels)
- Solutions d'automatisation pour entreprises
- Optimisation UX/UI et design responsive
- Intégration d'APIs et services cloud (Supabase, OpenAI)

VOS SERVICES :
• Création de chatbots intelligents personnalisés
• Développement d'applications web avec IA intégrée
• Automatisation de processus métier
• Interfaces conversationnelles avancées
• Solutions de support client automatisé
• Tableaux de bord analytics et reporting

VOTRE APPROCHE :
- Toujours professionnel mais accessible
- Posez des questions pour bien comprendre les besoins
- Proposez des solutions concrètes et personnalisées
- Expliquez les bénéfices business des solutions IA
- Orientez vers une prise de contact pour les projets
- Restez à jour sur les dernières technologies IA

Répondez en français, soyez concis mais informatif. Si on vous demande des détails techniques, n'hésitez pas à entrer dans les détails. Pour les projets complexes, proposez un rendez-vous pour discuter plus en détail.`
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

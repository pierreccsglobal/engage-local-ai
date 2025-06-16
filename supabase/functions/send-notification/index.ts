
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  sessionId: string;
  userMessage: string;
  timestamp: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { sessionId, userMessage, timestamp }: NotificationRequest = await req.json();

    console.log("Sending notification for session:", sessionId);

    const emailResponse = await resend.emails.send({
      from: "Chatbot <onboarding@resend.dev>",
      to: ["pierredevauxcontact@gmail.com"],
      subject: "🤖 Nouvelle conversation avec le chatbot",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #d4af37; text-align: center;">Nouvelle conversation détectée</h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">Détails de la conversation</h2>
            <p><strong>Session ID:</strong> ${sessionId}</p>
            <p><strong>Date et heure:</strong> ${new Date(timestamp).toLocaleString('fr-FR')}</p>
            <p><strong>Premier message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #d4af37; margin: 10px 0;">
              "${userMessage}"
            </div>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://preview--engage-local-ai.lovable.app/admin" 
               style="background-color: #d4af37; color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Voir toutes les conversations
            </a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 14px; text-align: center;">
            Cette notification est envoyée automatiquement par votre chatbot Lead Prospect.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

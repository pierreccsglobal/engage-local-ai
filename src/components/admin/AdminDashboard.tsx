
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { LogOut, MessageCircle, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Conversation {
  id: string;
  session_id: string;
  user_message: string;
  bot_response: string;
  created_at: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalConversations: 0,
    uniqueSessions: 0,
    todayConversations: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    try {
      const { data, error } = await supabase
        .from('chat_conversations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erreur lors de la récupération des conversations:', error);
        toast({
          title: "Erreur",
          description: "Impossible de récupérer les conversations",
          variant: "destructive",
        });
        return;
      }

      setConversations(data || []);
      
      // Calculer les statistiques
      const uniqueSessions = new Set(data?.map(conv => conv.session_id)).size;
      const today = new Date().toDateString();
      const todayConversations = data?.filter(conv => 
        new Date(conv.created_at).toDateString() === today
      ).length || 0;

      setStats({
        totalConversations: data?.length || 0,
        uniqueSessions,
        todayConversations
      });
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Erreur lors de la récupération des données",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('fr-FR');
  };

  const truncateText = (text: string, maxLength: number = 100) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Interface d'Administration</h1>
            <p className="text-zinc-400">Gestion des conversations du chatbot</p>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-zinc-600 text-white hover:bg-zinc-800"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-zinc-900 border-zinc-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Conversations</CardTitle>
              <MessageCircle className="h-4 w-4 text-gold-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalConversations}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-900 border-zinc-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Sessions Uniques</CardTitle>
              <MessageCircle className="h-4 w-4 text-gold-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.uniqueSessions}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-zinc-900 border-zinc-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Aujourd'hui</CardTitle>
              <Calendar className="h-4 w-4 text-gold-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.todayConversations}</div>
            </CardContent>
          </Card>
        </div>

        {/* Conversations Table */}
        <Card className="bg-zinc-900 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Conversations du Chatbot</CardTitle>
            <CardDescription className="text-zinc-400">
              Liste de toutes les conversations enregistrées
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8 text-white">Chargement des conversations...</div>
            ) : conversations.length === 0 ? (
              <div className="text-center py-8 text-zinc-400">Aucune conversation trouvée</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-zinc-700">
                      <TableHead className="text-zinc-300">Date</TableHead>
                      <TableHead className="text-zinc-300">Session ID</TableHead>
                      <TableHead className="text-zinc-300">Message Utilisateur</TableHead>
                      <TableHead className="text-zinc-300">Réponse Bot</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {conversations.map((conversation) => (
                      <TableRow key={conversation.id} className="border-zinc-700">
                        <TableCell className="text-zinc-300 font-mono text-sm">
                          {formatDate(conversation.created_at)}
                        </TableCell>
                        <TableCell className="text-zinc-400 font-mono text-xs">
                          {conversation.session_id.substring(0, 8)}...
                        </TableCell>
                        <TableCell className="text-white max-w-xs">
                          {truncateText(conversation.user_message)}
                        </TableCell>
                        <TableCell className="text-zinc-300 max-w-xs">
                          {truncateText(conversation.bot_response)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

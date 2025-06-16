
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminDashboard from '@/components/admin/AdminDashboard';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Vérifier si l'admin est déjà connecté
    const adminToken = localStorage.getItem('admin_token');
    if (adminToken) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      // Récupérer l'utilisateur admin depuis la base de données
      const { data: adminUser, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .single();

      if (error || !adminUser) {
        toast({
          title: "Erreur",
          description: "Identifiants incorrects",
          variant: "destructive",
        });
        return false;
      }

      // Pour simplifier, on vérifie juste l'email et le mot de passe en dur
      if (email === 'pierredevauxcontact@gmail.com' && password === 'admin85710') {
        localStorage.setItem('admin_token', 'authenticated');
        setIsAuthenticated(true);
        toast({
          title: "Connexion réussie",
          description: "Bienvenue dans l'interface d'administration",
        });
        return true;
      } else {
        toast({
          title: "Erreur",
          description: "Identifiants incorrects",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      toast({
        title: "Erreur",
        description: "Erreur lors de la connexion",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      {isAuthenticated ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Admin;

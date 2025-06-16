
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi du formulaire
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les 24h pour analyser vos besoins.",
    });
    
    // Reset du formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Obtenez une analyse gratuite de votre potentiel de conversion 
            et découvrez comment l'IA peut révolutionner votre activité
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-blue-400" />
                Demandez Votre Audit Gratuit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Input
                    name="company"
                    placeholder="Votre entreprise"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email professionnel"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Numéro de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <Textarea
                  name="message"
                  placeholder="Décrivez vos besoins et objectifs..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold group transition-all duration-300"
                >
                  Obtenir Mon Audit Gratuit
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Phone className="w-8 h-8 text-green-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Appelez-nous</h3>
                    <p className="text-gray-300">+33 1 23 45 67 89</p>
                    <p className="text-sm text-gray-400">Lun-Ven 9h-18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-8 h-8 text-blue-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Écrivez-nous</h3>
                    <p className="text-gray-300">contact@agence-ia-local.fr</p>
                    <p className="text-sm text-gray-400">Réponse sous 2h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎁 Offre Spéciale Lancement
              </h3>
              <p className="text-gray-300 mb-4">
                Les 10 premières entreprises bénéficient de :
              </p>
              <ul className="space-y-2 text-green-400">
                <li>✅ Audit complet gratuit (valeur 500€)</li>
                <li>✅ Setup IA offert (valeur 1500€)</li>
                <li>✅ 3 mois de suivi gratuit</li>
                <li>✅ Formation équipe incluse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

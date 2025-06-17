
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log l'erreur 404
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Définir le titre de la page
    document.title = "404 - Page non trouvée | Lead Prospect";

    // Tenter de définir le code de statut pour les crawlers
    if (typeof window !== 'undefined' && window.history) {
      window.history.replaceState(
        { ...window.history.state, statusCode: 404 },
        '',
        location.pathname
      );
    }
  }, [location.pathname]);

  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4">
      {/* Effets de fond */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Code 404 stylisé */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Oops ! Page introuvable
        </h2>

        {/* Message descriptif */}
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          La page que vous recherchez n'existe pas ou a été déplacée.
          <br />
          <span className="text-gray-400 text-sm mt-2 block">
            URL demandée : <code className="bg-zinc-800 px-2 py-1 rounded text-gold-400">{location.pathname}</code>
          </span>
        </p>

        {/* Suggestions d'actions */}
        <div className="space-y-4 mb-8">
          <p className="text-gray-400">Que souhaitez-vous faire ?</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={goHome}
              className="group bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 text-black px-6 py-3 rounded-full font-semibold flex items-center hover:from-gold-400 hover:via-gold-300 hover:to-gold-200 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-gold-500/30"
            >
              <Home className="w-5 h-5 mr-2" aria-hidden="true" />
              Retour à l'accueil
            </button>
            
            <button 
              onClick={goBack}
              className="border-2 border-gold-400 text-gold-400 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-gold-400 hover:text-black transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
              Page précédente
            </button>
          </div>
        </div>

        {/* Liens utiles */}
        <div className="border-t border-zinc-700 pt-8">
          <p className="text-gray-400 mb-4">Liens utiles :</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/#services" className="text-gold-400 hover:text-gold-300 transition-colors flex items-center">
              <Search className="w-4 h-4 mr-1" aria-hidden="true" />
              Nos services
            </a>
            <a href="/#contact" className="text-gold-400 hover:text-gold-300 transition-colors">
              Contact
            </a>
            <a href="/#temoignages" className="text-gold-400 hover:text-gold-300 transition-colors">
              Témoignages
            </a>
          </div>
        </div>

        {/* Message d'aide */}
        <div className="mt-8 p-4 bg-zinc-900/50 border border-zinc-700 rounded-lg">
          <p className="text-gray-400 text-sm">
            💡 <strong>Besoin d'aide ?</strong> Contactez-nous si vous pensez qu'il s'agit d'une erreur ou si vous ne trouvez pas ce que vous cherchez.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

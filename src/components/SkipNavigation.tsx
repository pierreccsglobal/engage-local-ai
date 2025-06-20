
import React from 'react';

const SkipNavigation: React.FC = () => {
  return (
    <nav id="skip-navigation" role="navigation" aria-label="Liens de navigation rapide" className="sr-only">
      <a href="#main-content" className="skip-link" accessKey="c">
        Aller au contenu principal (Alt+C)
      </a>
      <a href="#services" className="skip-link" accessKey="s">
        Aller aux services (Alt+S)
      </a>
      <a href="#statistiques" className="skip-link" accessKey="t">
        Aller aux statistiques (Alt+T)
      </a>
      <a href="#temoignages" className="skip-link" accessKey="e">
        Aller aux témoignages (Alt+E)
      </a>
      <a href="#contact" className="skip-link" accessKey="o">
        Aller au contact (Alt+O)
      </a>
    </nav>
  );
};

export default SkipNavigation;

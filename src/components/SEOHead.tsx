
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterDescription?: string;
  imageUrl?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Lead Prospect – Agence Web & IA pour Entreprises Locales",
  description = "Agence web et digitale spécialisée en création de site, SEO, Google Ads, prospection et leads via IA. Boostez votre chiffre d'affaires BtoC & BtoB !",
  ogTitle = "Lead Prospect – Agence Web & IA pour Entreprises Locales",
  ogDescription = "Création d'un système IA sur-mesure pour doubler votre chiffre d'affaires sans augmenter votre budget publicitaire. Trafic 100% organique, ROI x5 garanti.",
  twitterDescription = "Création d'un système IA sur-mesure pour doubler votre chiffre d'affaires. Trafic 100% organique, sans budget publicitaire.",
  imageUrl = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&crop=center&auto=format&fm=webp&q=80",
  canonicalUrl = "https://leadprospect.fr/"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Lovable" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content="Lead Prospect - Système IA sur-mesure pour doubler le chiffre d'affaires" />
      <meta property="og:site_name" content="Lead Prospect" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEOHead;

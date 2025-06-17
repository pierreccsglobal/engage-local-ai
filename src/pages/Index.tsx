
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      <header role="banner">
        <nav role="navigation" aria-label="Navigation principale">
          <a href="#services" className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 bg-gold-400 text-black px-4 py-2 rounded z-40">
            Services
          </a>
          <a href="#statistiques" className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-24 bg-gold-400 text-black px-4 py-2 rounded z-40">
            Statistiques
          </a>
          <a href="#temoignages" className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-44 bg-gold-400 text-black px-4 py-2 rounded z-40">
            Témoignages
          </a>
          <a href="#contact" className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-64 bg-gold-400 text-black px-4 py-2 rounded z-40">
            Contact
          </a>
        </nav>
      </header>
      
      <main id="main-content" role="main">
        <HeroSection />
        <section id="services" aria-labelledby="services-heading">
          <ServicesSection />
        </section>
        <section id="statistiques" aria-labelledby="stats-heading">
          <StatsSection />
        </section>
        <section id="temoignages" aria-labelledby="testimonials-heading">
          <TestimonialsSection />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;

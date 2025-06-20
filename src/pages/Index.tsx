
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import SkipNavigation from '@/components/SkipNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      <SkipNavigation />
      
      <header role="banner">
        <nav role="navigation" aria-label="Navigation principale" id="main-navigation">
          <ul className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:top-4 focus-within:left-4 focus-within:bg-zinc-900 focus-within:border focus-within:border-gold-400 focus-within:rounded focus-within:p-4 focus-within:space-y-2 focus-within:z-50">
            <li>
              <a href="#services" 
                 className="block bg-gold-400 text-black px-4 py-2 rounded hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-600">
                Services
              </a>
            </li>
            <li>
              <a href="#statistiques" 
                 className="block bg-gold-400 text-black px-4 py-2 rounded hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-600">
                Statistiques
              </a>
            </li>
            <li>
              <a href="#temoignages" 
                 className="block bg-gold-400 text-black px-4 py-2 rounded hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-600">
                Témoignages
              </a>
            </li>
            <li>
              <a href="#contact" 
                 className="block bg-gold-400 text-black px-4 py-2 rounded hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
      <main id="main-content" role="main" tabIndex={-1}>
        <section id="hero" aria-labelledby="hero-heading" style={{ minHeight: '100vh' }}>
          <HeroSection />
        </section>
        <section id="services" aria-labelledby="services-heading" tabIndex={-1} style={{ minHeight: '800px' }}>
          <ServicesSection />
        </section>
        <section id="statistiques" aria-labelledby="stats-heading" tabIndex={-1} style={{ minHeight: '600px' }}>
          <StatsSection />
        </section>
        <section id="temoignages" aria-labelledby="testimonials-heading" tabIndex={-1} style={{ minHeight: '600px' }}>
          <TestimonialsSection />
        </section>
        <section id="contact" aria-labelledby="contact-heading" tabIndex={-1} style={{ minHeight: '500px' }}>
          <ContactSection />
        </section>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;

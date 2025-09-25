import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClientsSection from '../components/ClientsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="about-section" className="section-reveal">
        <AboutSection />
      </div>
      <div className="section-reveal">
        <ServicesSection />
      </div>
      <div className="section-reveal">
        <ProjectsSection />
      </div>
      <div className="section-reveal">
        <TestimonialsSection />
      </div>
      <div className="section-reveal">
        <ClientsSection />
      </div>
      <div id="contact-section" className="section-reveal">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
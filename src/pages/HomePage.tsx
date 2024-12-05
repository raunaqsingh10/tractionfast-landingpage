import React from 'react';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { Testimonials } from '../components/Testimonials';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Hero onBookCall={scrollToContact} />
      <ProblemSection />
      <SolutionSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
};
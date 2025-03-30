import React from 'react';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { MethodSection } from '../components/MethodSection';
import { SolutionSection } from '../components/SolutionSection';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';

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
      <MethodSection />
      <SolutionSection />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};
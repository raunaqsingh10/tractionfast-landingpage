import React from 'react';
import { Target, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { SectionBackground } from './ui/section-background';
import { MagicCard } from './ui/magic-card';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: Target,
      title: 'Unclear Product-Market Fit',
      description: "You're unsure if people genuinely need or want your product."
    },
    {
      icon: Users,
      title: 'Weak or Undefined Positioning',
      description: "You're struggling to clearly define who your ideal customers are and how to reach them effectively."
    },
    {
      icon: Clock,
      title: 'Wasted Time and Resources',
      description: "You're spending precious time and money on untested ideas and ineffective marketing."
    }
  ];

  const handleBookCall = () => {
    window.open('https://cal.com/tractionfast-bookcall/45min', '_blank', 'noopener,noreferrer');
  };

  return (
    <SectionBackground pattern={{ squares: 25, opacity: 0.08, duration: 4 }}>
      <section className="py-16 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="mb-6">
              <span className="block text-5xl font-light text-gray-900 mb-2">Stop Guessing</span>
              <span className="block text-5xl font-extrabold text-gray-900">Start Growing</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Many startups fail—not due to bad products, but unclear positioning, weak marketing, and unvalidated demand.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <MagicCard 
                  key={index}
                  className="p-8"
                  gradientColor="#D9D9D955"
                  gradientOpacity={0.5}
                >
                  <div className="p-3 bg-blue-50 rounded-xl mb-6 w-fit">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-left">
                    {point.description}
                  </p>
                </MagicCard>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-blue-50 p-10 rounded-2xl text-center">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">
                We Understand—And We're Here to Help
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Building without clarity is frustrating, risky, and costly. It doesn't have to be. TractionFast provides strategic clarity and rapid validation to ensure your startup grows predictably.
            </p>
            <button 
              onClick={handleBookCall}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Get Clarity & Predictable Growth Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      </section>
    </SectionBackground>
  );
};
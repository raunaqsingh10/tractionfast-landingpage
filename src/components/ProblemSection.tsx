import React from 'react';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    'Are you struggling to find product-market fit?',
    'Unsure how to get your product in front of the right customers?',
    'Worried about wasting time and money on the wrong ideas?'
  ];

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stop Wasting Time Building Products No One Wants
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              You've poured months into your idea, but how can you be sure customers will care?<br />The truth is, most startups fail because they build without validating.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 mb-12">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-red-50 rounded-lg shadow-md w-full sm:w-1/3 text-center"
              >
                <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-lg text-red-900 font-medium">{point}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-blue-50 p-8 rounded-xl text-center">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">
                We get it—and we're here to help
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              It's frustrating, overwhelming, and risky to build without knowing if there's demand. 
              But it doesn't have to be this way.
            </p>
            <div className="text-center">
              <button 
                onClick={scrollToHero}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition-opacity duration-200"
              >
                Let TractionFast Help You Get Clarity
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
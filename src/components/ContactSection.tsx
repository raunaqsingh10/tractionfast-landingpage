import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const ContactSection: React.FC = () => {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Something Great?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8">
            Book your free strategy call today and let's discuss how we can help
            you build a product people love.
          </motion.p>
          
          <motion.button
            variants={fadeInUp}
            onClick={scrollToHero}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition-opacity duration-200 mb-6"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Spot Now
          </motion.button>

          <motion.div variants={fadeInUp} className="flex items-center justify-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full w-fit mx-auto">
            <Users className="w-5 h-5 text-blue-600 mr-2" />
            <p className="text-sm font-medium text-blue-800">
              Only 4 spots left for December batch!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
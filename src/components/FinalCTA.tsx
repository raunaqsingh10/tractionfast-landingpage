import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const FinalCTA: React.FC = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/tractionfast-bookcall/45min', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:gap-16"
        >
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-gray-900">
              Ready to Gain Absolute Clarity and Predictable Growth?
            </h2>
            <p className="text-md max-w-[600px] font-medium text-gray-600 sm:text-xl">
              Limited slots available—We onboard only 10 new partners each batch to ensure maximum attention and results.
            </p>
          </motion.div>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <p className="text-sm font-medium text-blue-800">
                Only 8 spots left for April batch!
              </p>
            </div>

            <button
              onClick={handleBookCall}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-700 to-blue-700 rounded-full hover:opacity-90 transition-all duration-300 animate-pulse hover:animate-none"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Reserve Your Free Strategy Session
              <span className="absolute right-4 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
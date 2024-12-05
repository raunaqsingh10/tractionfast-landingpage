import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { benefits } from '../data';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Why Choose TractionFast?
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => {
            const Icon = Icons[benefit.icon as keyof typeof Icons];
            return (
              <motion.div
                key={benefit.id}
                variants={fadeInUp}
                className="hover-lift"
              >
                <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-4 bg-blue-600 rounded-full text-white mb-6 transform transition-transform group-hover:scale-110">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
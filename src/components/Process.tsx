import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { steps } from '../data/content';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Process: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="process">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          How It Works
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {steps.map((step, index) => {
            const Icon = Icons[step.icon as keyof typeof Icons];
            return (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className="mb-16 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                } w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}>
                  <div className="w-full md:w-1/2 p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                        <Icon size={28} />
                      </div>
                      <span className="text-3xl font-bold text-gray-900">
                        Step {step.id}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 p-8">
                    <div className="relative overflow-hidden rounded-xl aspect-video">
                      <img
                        src={`https://images.unsplash.com/photo-${1520607000000 + index}?auto=format&fit=crop&q=80&w=800`}
                        alt={step.title}
                        className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
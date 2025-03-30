import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';
import { benefits } from '../data';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="benefits">
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
              Why Choose TractionFast?
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = Icons[benefit.icon as keyof typeof Icons];
            return (
              <motion.div
                key={benefit.id}
                variants={fadeInUp}
                className="group hover-lift"
              >
                <div className={cn(
                  "p-8 rounded-xl transition-all duration-300",
                  "bg-gradient-to-br from-white to-gray-50",
                  "border border-gray-100 hover:border-gray-200",
                  "shadow-sm hover:shadow-lg hover:-translate-y-1"
                )}>
                  <div className="p-3 bg-blue-50 rounded-xl mb-6 w-fit group-hover:bg-blue-100 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 text-left">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-left">
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
import React from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { SectionBackground } from './ui/section-background';

export const MethodSection: React.FC = () => {
  const steps = [
    {
      icon: Target,
      title: 'Strategic Clarity',
      description: 'We help clearly define your ideal customers, sharpen your market positioning, and craft powerful messaging that deeply resonates.'
    },
    {
      icon: Zap,
      title: 'Rapid Market Validation',
      description: 'Using targeted ad campaigns, we validate demand swiftly, ensuring your product-market fit is real—not assumed.'
    },
    {
      icon: TrendingUp,
      title: 'Predictable Growth',
      description: 'We build structured marketing strategies and predictable lead-generation processes designed to fuel consistent business growth.'
    }
  ];

  return (
    <SectionBackground color="#000000" quantity={30}>
      <section className="py-16 bg-white/80 backdrop-blur-sm">
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
                The TractionFast Method—Clear, Validated, Proven
              </h2>
              <p className="text-md max-w-[600px] font-medium text-gray-600 sm:text-xl">
                Our unique three-step framework ensures you're building products customers genuinely want, 
                marketing strategically, and achieving sustainable growth.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={cn(
                      "group p-8 rounded-xl transition-all duration-300",
                      "bg-gradient-to-br from-white to-gray-50",
                      "border border-gray-100 hover:border-gray-200",
                      "shadow-sm hover:shadow-lg hover:-translate-y-1"
                    )}
                  >
                    <div className="p-3 bg-blue-50 rounded-xl mb-6 w-fit group-hover:bg-blue-100 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 text-left">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-left">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SectionBackground>
  );
};
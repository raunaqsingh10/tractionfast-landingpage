import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { SectionBackground } from './ui/section-background';

export const SolutionSection: React.FC = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/tractionfast-bookcall/45min', '_blank', 'noopener,noreferrer');
  };

  const plans = [
    {
      name: "Growth Accelerator",
      highlight: true,
      price: {
        usd: 749,
      },
      description: "Perfect for founders aiming to validate their market and establish initial traction",
      features: [
        "Strategic positioning guidance",
        "5 custom ad creatives",
        "Detailed Facebook ad campaigns setup",
        "15-day active campaign management",
        "Performance insights & analytics",
        "Personalized strategy session"
      ]
    },
    {
      name: "Marketing Co-founder",
      price: {
        usd: 999,
      },
      description: "Comprehensive support for founders ready to scale their marketing efforts",
      features: [
        "Comprehensive marketing partnership",
        "12 custom ad creatives",
        "Extensive campaign setup & optimization",
        "30-day full-service campaign management",
        "Unlimited A/B testing & optimizations",
        "Weekly strategic growth consultations"
      ]
    }
  ];

  return (
    <SectionBackground color="#000000" quantity={40}>
      <section className="py-16 bg-white/80 backdrop-blur-sm" id="pricing">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:gap-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 px-4 sm:gap-8">
              <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-gray-900">
                Flexible Pricing to Fuel Your Growth
              </h2>
              <p className="text-md max-w-[600px] font-medium text-gray-600 sm:text-xl">
                Choose the perfect plan to accelerate your startup's journey
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8"
          >
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative overflow-hidden rounded-2xl ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200'
                    : 'bg-white border border-gray-200'
                } p-8 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {plan.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl text-gray-900 tracking-wide mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl text-gray-900">${plan.price.usd}</span>
                    <span className="text-gray-500">USD</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleBookCall}
                  className={`w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center group ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-lg'
                      : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg'
                  } transition-all duration-300`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </SectionBackground>
  );
};
import React from 'react';
import { Facebook, MessageCircle, Brain, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { PricingCards } from './ui/pricing-cards';

export const SolutionSection: React.FC = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/tractionfast-bookcall/45min', '_blank', 'noopener,noreferrer');
  };

  const tiers = [
    {
      name: "Growth Accelerator",
      price: 749,
      description: "Founders aiming for clear, initial market validation, generating consistent leads, and strategic guidance to refine their offering",
      features: [
        { name: "3-5 custom ad creatives", included: true },
        { name: "Targeted Facebook ad campaign setup", included: true },
        { name: "15 days of campaign support", included: true },
        { name: "Detailed performance insights", included: true },
        { name: "Actionable market insights", included: true },
        { name: "1-on-1 strategy call", included: true },
      ],
      cta: {
        text: "Book Your Spot",
        onClick: handleBookCall,
      }
    },
    {
      name: "Marketing Co-founder",
      price: 999,
      description: "Founders who want a reliable marketing partner, freeing their time to focus exclusively on building their product or core service.",
      highlight: true,
      features: [
        { name: "Unlimited custom ad creatives", included: true },
        { name: "Comprehensive Facebook ad campaign setup", included: true },
        { name: "30 days of continuous campaign management and optimization", included: true },
        { name: "In-depth performance analytics with weekly reporting", included: true },
        { name: "Unlimited A/B testing", included: true },
        { name: "Weekly 1-on-1 strategy call", included: true },
      ],
      cta: {
        text: "Book Your Spot",
        onClick: handleBookCall,
      }
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-6">
            Your Path to Validation, Traction and Growth
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600">
            TractionFast empowers startups to validate ideas, connect with customers, and gain actionable insights—all in record time.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <PricingCards 
            tiers={tiers}
            className="gap-8"
            containerClassName="max-w-6xl"
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 flex items-center justify-center"
        >
          <div className="flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
            <Users className="w-5 h-5 text-blue-600 mr-2" />
            <p className="text-sm font-medium text-blue-800">
              Only 4 spots left for December batch!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import React from 'react';
import { Facebook, MessageCircle, Brain, CheckCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const SolutionSection: React.FC = () => {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const offerings = [
    {
      title: 'Custom Facebook Ad Campaigns',
      icon: Facebook,
      items: [
        'Professionally designed ad creatives tailored to your audience',
        'Campaigns optimized for lead generation and market validation'
      ]
    },
    {
      title: 'Real Customer Insights',
      icon: MessageCircle,
      items: [
        'Feedback from actual customers to refine your product or service',
        'Insights to understand what\'s working and where to pivot'
      ]
    },
    {
      title: 'Expert Strategy Guidance',
      icon: Brain,
      items: [
        'A dedicated strategy discussion call to plan your growth',
        'Ongoing support to ensure your campaigns deliver results'
      ]
    }
  ];

  const deliverables = [
    'Professionally designed Facebook ad creatives tailored to your audience',
    'High-converting ad copy optimized for engagement and lead generation',
    'Full setup and optimization of your ad campaigns for maximum reach and effectiveness',
    'A curated list of potential customers directly interested in your product/service',
    'Actionable insights based on responses from your target audience',
    'A 1-on-1 call to discuss your goals and refine your startup\'s marketing approach'
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
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {offerings.map((offering, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <offering.icon className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{offering.title}</h3>
              </div>
              <ul className="space-y-3">
                {offering.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-xl shadow-lg p-10 text-center mb-16 relative w-full md:w-1/2 mx-auto"
        >
          <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 rounded-bl-xl font-bold">
            One time
          </div>
          <h3 className="text-3xl font-bold mb-4">Get Traction Faster Than Ever Before</h3>
          <p className="text-2xl font-semibold mb-2">Starting at $200</p>
          <p className="text-red-500 mb-6">4 Spots left for December.</p>
          <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h4>
          <ul className="space-y-3 text-left inline-block">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <button 
              onClick={scrollToHero}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              <span className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Get Started Now
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
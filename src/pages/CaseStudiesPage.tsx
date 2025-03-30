import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/case-studies';
import { cn } from '../lib/utils';
import type { CaseStudy } from '../types/case-study';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const CaseStudiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCaseStudyClick = (study: CaseStudy) => {
    // Open PDF in a new tab
    if (study.link) {
      window.open(study.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600">
            Discover how TractionFast has helped startups validate their ideas and achieve remarkable growth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid gap-8 max-w-6xl mx-auto"
        >
          {caseStudies.map((study: CaseStudy) => (
            <motion.article
              key={study.id}
              variants={fadeInUp}
              className={cn(
                "group hover-lift bg-white rounded-2xl border border-gray-200/50",
                "shadow-sm hover:shadow-xl transition-all duration-500",
                "hover:border-gray-300/80 overflow-hidden"
              )}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 relative p-8 flex items-center justify-center bg-gray-50/50">
                  <img
                    src={study.image}
                    alt={study.companyName}
                    className={cn(
                      "w-32 h-32 object-contain rounded-lg",
                      "transform transition-all duration-500",
                      "group-hover:scale-110"
                    )}
                  />
                </div>
                <div className="md:w-3/4 p-8 bg-gradient-to-br from-white to-gray-50/20">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-full">
                      {study.industry}
                    </span>
                    <span className="px-4 py-1.5 text-sm font-medium text-green-700 bg-green-50 rounded-full">
                      {study.productType}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {study.companyName}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.summary}</p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Time to Market</p>
                      <p className="font-semibold text-gray-900 text-lg">
                        {study.timeToMarket}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Initial Users</p>
                      <p className="font-semibold text-gray-900 text-lg">
                        {study.initialUsers}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCaseStudyClick(study)}
                    className={cn(
                      "inline-flex items-center px-6 py-2 rounded-lg",
                      "text-blue-600 hover:text-blue-700 font-medium",
                      "bg-blue-50 hover:bg-blue-100 transition-all duration-300"
                    )}
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </main>
  );
};
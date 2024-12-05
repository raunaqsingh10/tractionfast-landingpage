import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/case-studies';
import type { CaseStudy } from '../types/case-study';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const CaseStudiesPage: React.FC = () => {
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
          className="grid gap-12 max-w-6xl mx-auto"
        >
          {caseStudies.map((study: CaseStudy) => (
            <motion.article
              key={study.id}
              variants={fadeInUp}
              className="hover-lift bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.companyName}
                    className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-full">
                      {study.industry}
                    </span>
                    <span className="px-4 py-1.5 text-sm font-medium text-green-700 bg-green-50 rounded-full">
                      {study.productType}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.companyName}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.summary}</p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Time to Market</p>
                      <p className="font-semibold text-gray-900">
                        {study.timeToMarket}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Initial Users</p>
                      <p className="font-semibold text-gray-900">
                        {study.initialUsers}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => window.open(study.link, '_blank')}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
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
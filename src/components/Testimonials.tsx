import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, Calendar } from 'lucide-react';
import { testimonials } from '../data/content';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Trusted by Founders Just Like You
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="hover-lift"
            >
              <div className="h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative">
                <Quote className="absolute top-4 right-4 text-blue-200" size={24} />
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-10"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.title} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            <span className="flex items-center">
              View Success Stories
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

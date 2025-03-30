import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { testimonials } from '../data/testimonials';
import { SectionBackground } from './ui/section-background';
import { TestimonialCard } from './ui/testimonial-card';

export const Testimonials: React.FC = () => {

  return (
    <SectionBackground color="#000000" quantity={35}>
      <section className="py-16 bg-white/80 backdrop-blur-sm overflow-hidden" id="testimonials">
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
                What Founders Say About Working With Us
              </h2>
              <p className="text-md max-w-[600px] font-medium text-gray-600 sm:text-xl">
                Join hundreds of founders who have transformed their startups with our strategic guidance
              </p>
            </motion.div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                  {[...Array(4)].map((_, setIndex) => (
                    testimonials.map((testimonial, i) => (
                      <TestimonialCard 
                        key={`${setIndex}-${i}`}
                        {...testimonial}
                      />
                    ))
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white/80 sm:block" />
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white/80 sm:block" />
            </div>
          </motion.div>

          <div className="text-center mt-16">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="flex items-center">
                Read Full Case Studies
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
};
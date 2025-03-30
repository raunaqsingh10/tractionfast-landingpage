import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { logEvent } from '../utils/analytics';
import { Typewriter } from './ui/typewriter';
import { AnimatedGridPattern } from './ui/animated-grid-pattern';

interface HeroProps {
  onBookCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  const handleBookCall = () => {
    logEvent('Button', 'Click', 'Hero - Book Call');
    window.open('https://cal.com/tractionfast-bookcall/45min', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        />
      </div>
      <div className="relative container mx-auto px-4 pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.875rem] font-bold text-gray-900 mb-6 leading-tight">
            Build <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Products</span>
            {" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Customers</span>
            {" "}Actually{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Want</span>
          </h1>
          <div className="text-xl sm:text-2xl text-gray-700 mb-10 leading-relaxed">
            <Typewriter
              prefix="We help startups and growing businesses "
              suffixes={[
                "validate ideas",
                "sharpen positioning",
                "drive predictable growth",
                "save valuable resources",
                "achieve product-market fit"
              ]}
              speed={40}
              deletionSpeed={30}
              pauseDuration={2500}
              className="text-gray-700"
            />
          </div>
          <button
            onClick={handleBookCall}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            <span className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Get Your Free Strategy Session
            </span>
          </button>
          
          {/* Trust Element */}
          <div className="mt-8 flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full w-fit mx-auto">
            <Users className="w-5 h-5 text-blue-600 mr-2" />
            <p className="text-sm font-medium text-blue-800">
              Limited to just 10 clients per batch—secure your spot today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
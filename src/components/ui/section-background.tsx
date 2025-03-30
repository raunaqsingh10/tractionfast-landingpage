import React from 'react';
import { AnimatedGridPattern } from './animated-grid-pattern';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
  pattern?: {
    squares?: number;
    opacity?: number;
    duration?: number;
  };
}

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  children,
  className = "",
  pattern = {
    squares: 30,
    opacity: 0.1,
    duration: 3,
  },
}) => {
  return (
    <div className={`relative ${className}`}>
      <AnimatedGridPattern
        className="absolute inset-0 -z-10"
        numSquares={pattern.squares}
        maxOpacity={pattern.opacity}
        duration={pattern.duration}
        repeatDelay={1}
      />
      {children}
    </div>
  );
};
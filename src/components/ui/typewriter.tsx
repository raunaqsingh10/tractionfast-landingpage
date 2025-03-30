import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypewriterProps {
  prefix: string;
  suffixes: string[];
  className?: string;
  cursor?: boolean;
  speed?: number;
  deletionSpeed?: number;
  pauseDuration?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  prefix,
  suffixes,
  className = '',
  cursor = true,
  speed = 50,
  deletionSpeed = 40,
  pauseDuration = 2000,
}) => {
  // Create the sequence array for the TypeAnimation component
  const sequence = suffixes.reduce<(string | number)[]>((acc, suffix, index) => {
    const isLast = index === suffixes.length - 1;
    return [
      ...acc,
      prefix + suffix, // Type the full text
      pauseDuration, // Pause
      prefix, // Delete back to prefix
      deletionSpeed, // Deletion speed
      ...(isLast ? [] : [speed]), // Add typing speed except for last item
    ];
  }, []);

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={cursor}
      repeat={Infinity}
      speed={speed}
      className={className}
      style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
    />
  );
};
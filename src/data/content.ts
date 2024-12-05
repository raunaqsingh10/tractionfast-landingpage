import { Benefit, Step, Testimonial } from '../types';

export const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Validate Fast',
    description: 'Test your ideas with real users before investing significant resources',
    icon: 'CheckCircle'
  },
  {
    id: 2,
    title: 'Acquire Customers',
    description: 'Get your first paying customers through proven acquisition strategies',
    icon: 'Users'
  },
  {
    id: 3,
    title: 'Iterate Confidently',
    description: 'Make data-driven decisions based on real user feedback',
    icon: 'Repeat'
  }
];

export const steps: Step[] = [
  {
    id: 1,
    title: 'Validate Your Idea',
    description: 'We help you test your assumptions and validate your idea with real potential customers',
    icon: 'Lightbulb'
  },
  {
    id: 2,
    title: 'Gain Initial Customers',
    description: 'Implement proven strategies to acquire your first paying customers',
    icon: 'UserPlus'
  },
  {
    id: 3,
    title: 'Iterate and Improve',
    description: 'Continuously improve your product based on real user feedback and data',
    icon: 'RefreshCw'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Founder & CEO',
    company: 'TechFlow',
    quote: 'TractionFast helped us validate our product idea in just weeks. Their guidance saved us months of development time.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    title: 'Co-founder',
    company: 'DataSync',
    quote: 'The structured approach to customer acquisition helped us get our first 100 customers faster than we thought possible.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 3,
    name: 'Emily Watson',
    title: 'Product Lead',
    company: 'GrowthLabs',
    quote: 'TractionFast\'s feedback-driven iteration process transformed how we build products. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
  }
];
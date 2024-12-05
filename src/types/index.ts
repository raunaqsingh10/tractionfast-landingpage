export * from './form';
export * from './case-study';

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FooterLink {
  id: number;
  label: string;
  href: string;
}

export interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}
export * from './form';
export * from './case-study';

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface Testimonial {
  author: TestimonialAuthor;
  text: string;
  href?: string;
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
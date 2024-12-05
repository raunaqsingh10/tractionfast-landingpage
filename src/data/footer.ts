import type { FooterSection } from '../types';

export const footerSections: FooterSection[] = [
  {
    id: 1,
    title: 'Company',
    links: [
      { id: 1, label: 'About Us', href: '/about' },
      { id: 2, label: 'Careers', href: '/careers' },
      { id: 3, label: 'Blog', href: '/blog' },
      { id: 4, label: 'Press', href: '/press' }
    ]
  },
  {
    id: 2,
    title: 'Product',
    links: [
      { id: 1, label: 'Features', href: '/features' },
      { id: 2, label: 'Pricing', href: '/pricing' },
      { id: 3, label: 'Case Studies', href: '/case-studies' },
      { id: 4, label: 'Documentation', href: '/docs' }
    ]
  },
  {
    id: 3,
    title: 'Resources',
    links: [
      { id: 1, label: 'Help Center', href: '/help' },
      { id: 2, label: 'Partner Program', href: '/partners' },
      { id: 3, label: 'Developer API', href: '/api' },
      { id: 4, label: 'Status', href: '/status' }
    ]
  },
  {
    id: 4,
    title: 'Legal',
    links: [
      { id: 1, label: 'Privacy Policy', href: '/privacy' },
      { id: 2, label: 'Terms of Service', href: '/terms' },
      { id: 3, label: 'Cookie Policy', href: '/cookies' },
      { id: 4, label: 'GDPR', href: '/gdpr' }
    ]
  }
];
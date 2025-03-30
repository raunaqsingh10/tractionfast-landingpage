import type { CaseStudy } from '../types/case-study';
import studioSwapPDF from '../data/TractionFast - StudioSwap Case Study.pdf';
import spineWellPDF from '../data/TractionFast - SpineWell Case Study.pdf';
//import studioSwapImage from '../studioswap casestudy image.png';
//import spineWellImage from '../spinewell casestudy image.png';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    companyName: 'StudioSwap',
    industry: 'Fashion',
    productType: 'SaaS',
    summary: 'An AI-powered platform that transforms clothing photos into professional catalog images by replacing faces with AI-generated fashion models, saving up to 90% of traditional photoshoot costs. It empowers small and medium retailers, designers, and boutique owners to create high-quality visuals quickly and affordably',
    timeToMarket: '3 months',
    initialUsers: '60+ in first quarter',
    //image: studioSwapImage,
    image: '../StudioSwap Logo.png',
    link: studioSwapPDF,
  },
  {
    id: 2,
    companyName: 'SpineWell',
    industry: 'Wellness',
    productType: 'Physical Product',
    summary: 'SpineWell provides personalized, evidence-based solutions for spinal health, helping individuals alleviate pain, improve posture, and maintain long-term wellness through expert guidance and innovative therapies.',
    timeToMarket: '2 months',
    initialUsers: '200 users',
    //image: spineWellImage,
    image: '../SpineWell Logo.png',
    link: spineWellPDF,
  },
];

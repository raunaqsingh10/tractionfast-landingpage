import type { Testimonial } from '../types';
import rahulImage from './testimonial-images/rahul-sharma.png';
import priyaImage from './testimonial-images/priya-nair.png';
import jasonImage from './testimonial-images/jason-lee.png';
import rohanImage from './testimonial-images/rohan-deshmukh.png';
import danielImage from './testimonial-images/daniel-kim.png';
import melissaImage from './testimonial-images/melissa-grant.png';
import aaravImage from './testimonial-images/aarav-menon.png';

export const testimonials: Testimonial[] = [
  {
    author: {
      name: 'Rahul Sharma',
      handle: 'GenWise',
      avatar: rahulImage
    },
    text: 'TractionFast didn\'t just run ads—they helped us completely redefine our positioning. We gained clarity on who our ideal customers are and dramatically boosted our early growth.'
  },
  {
    author: {
      name: 'Priya Nair',
      handle: 'FinFolio',
      avatar: priyaImage
    },
    text: 'TractionFast gave us absolute clarity on our market positioning. Within days, we had real leads and feedback that helped shape our entire product strategy.'
  },
  {
    author: {
      name: 'Jason Lee',
      handle: 'DevNest',
      avatar: jasonImage
    },
    text: 'I was struggling with getting consistent leads until I started working with TractionFast. Their ad creatives and targeting were spot-on.'
  },
  {
    author: {
      name: 'Rohan Deshmukh',
      handle: 'Skillera',
      avatar: rohanImage
    },
    text: 'The Growth Accelerator package was perfect for us. We validated our idea quickly and got the confidence to scale without guesswork.'
  },
  {
    author: {
      name: 'Daniel Kim',
      handle: 'AuthPilot',
      avatar: danielImage
    },
    text: 'Our ad campaigns finally started converting after TractionFast came in. Within two weeks, we were getting daily qualified leads.'
  },
  {
    author: {
      name: 'Melissa Grant',
      handle: 'TechFlow',
      avatar: melissaImage
    },
    text: 'Working with TractionFast transformed our approach to product validation. Their strategic insights helped us avoid costly mistakes and find our perfect market fit.'
  },
  {
    author: {
      name: 'Aarav Menon',
      handle: 'DataSync',
      avatar: aaravImage
    },
    text: 'The structured approach to customer acquisition helped us get our first 100 customers faster than we thought possible.'
  }
];
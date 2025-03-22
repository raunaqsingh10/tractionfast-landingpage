"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleBookCall = () => {
    window.open('https://cal.com/tractionfast-bookcall/45min', '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 whitespace-nowrap text-center"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Tab setPosition={setPosition} onClick={() => scrollToSection('pricing')}>
        Pricing
      </Tab>
      <Tab 
        setPosition={setPosition} 
        isLink={true} 
        to="/case-studies"
      >
        Case Studies
      </Tab>
      <Tab setPosition={setPosition} onClick={handleBookCall}>
        Book a Call
      </Tab>

      <Cursor position={position} />
    </ul>
  );
}

interface TabProps {
  children: React.ReactNode;
  setPosition: any;
  onClick?: () => void;
  isLink?: boolean;
  to?: string;
}

const Tab = ({
  children,
  setPosition,
  onClick,
  isLink = false,
  to = "",
}: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  
  const handleMouseEnter = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
    });
  };

  const content = (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-2 py-1 text-xs uppercase text-white mix-blend-difference sm:px-3 sm:py-1.5 md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );

  if (isLink && to) {
    return (
      <Link to={to} className="contents">
        {content}
      </Link>
    );
  }

  return content;
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default NavHeader;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from "../Black Logo cropped.png";
import NavHeader from './ui/nav-header';

interface NavbarProps {
  onBookCall?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  const handleBookCall = () => {
    window.open('https://cal.com/tractionfast-bookcall/45min', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          <div className="w-1/4 flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="h-6 w-auto object-contain sm:h-8"
              />
            </Link>
          </div>

          <div className="w-1/2 flex justify-center hidden md:flex">
            <NavHeader />
          </div>

          <div className="w-1/4 flex-shrink-0">
            {/* Empty div to maintain the three-column layout */}
          </div>

          <button
            className="md:hidden absolute right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white flex items-center justify-center">
            <div className="flex flex-col space-y-4 py-4 items-center">
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
              >
                Pricing
              </button>
              <Link
                to="/case-studies"
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <button
                onClick={handleBookCall}
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
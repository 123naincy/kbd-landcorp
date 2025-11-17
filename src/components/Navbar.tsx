import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {  Menu, X, ChevronDown } from 'lucide-react';
import logo from "../assets/kbd-final-logo.jpg";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If we're on home page, scroll to section
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Otherwise navigate to home with hash
      window.location.href = `/#${id}`;
    }
    setIsMobileMenuOpen(false);
  };

  // Determine if navbar should have solid background
  const shouldHaveSolidBg = location.pathname === '/about' || location.pathname === '/contact';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${shouldHaveSolidBg || isScrolled
          ? 'bg-gradient-to-r from-[#1F265A] via-[#252C66] to-[#1F265A] shadow-lg py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="logo"
            style={{ height: '4rem', borderRadius: '0.5rem', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link to="/" className="hover:text-[#FCAF2E] transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#FCAF2E] transition-colors">
            About
          </Link>
          {/* Projects Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#FCAF2E] transition-colors">
              Projects <ChevronDown size={16} />
            </button>

            {isProjectsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#1E2555] border border-[#FCAF2E]/30 rounded-lg shadow-lg p-2">
                <button
                  onClick={() => scrollToSection('eden-street')}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-[#FCAF2E] hover:text-[#1E2555] rounded-md transition-all"
                >
                  The Eden Street
                </button>
                <button
                  onClick={() => scrollToSection('#')}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-[#FCAF2E] hover:text-[#1E2555] rounded-md transition-all"
                >
                  Residential Plots in Sindhudurg
                </button>
                <button
                  onClick={() => scrollToSection('#')}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-[#FCAF2E] hover:text-[#1E2555] rounded-md transition-all"
                >
                  Luxury Commercial
                  Showrooms
                </button>
                  <button
                  onClick={() => scrollToSection('#')}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-[#FCAF2E] hover:text-[#1E2555] rounded-md transition-all"
                >
                Residential Plots in Abohar
                </button>
              </div>
            )}
          </div>



          <Link
            to="/contact"
            className="bg-[#FCAF2E] text-[#293066] px-6 py-2 rounded-full font-semibold hover:bg-[#c4a855] transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1E2555] border-t border-[#FCAF2E]/20 animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4 text-white">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-left hover:text-[#FCAF2E] transition-colors">
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-left hover:text-[#FCAF2E]">
              About
            </Link>

            {/* Mobile Projects Dropdown */}
            <div>
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="flex items-center justify-between w-full hover:text-[#FCAF2E]"
              >
                Projects <ChevronDown size={16} className={`${isProjectsOpen ? 'rotate-180' : ''} transition-transform`} />
              </button>

              {isProjectsOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  <button onClick={() => scrollToSection('eden')} className="text-left hover:text-[#FCAF2E]">
                    Eden Street
                  </button>
                  <button onClick={() => scrollToSection('panipat')} className="text-left hover:text-[#FCAF2E]">
                   Residential Plots in Sindhudurg
                  </button>
                  <button onClick={() => scrollToSection('sindhudurg')} className="text-left hover:text-[#FCAF2E]">
                  Luxury Commercial
Showrooms
                  </button>
                  <button onClick={() => scrollToSection('sindhudurg')} className="text-left hover:text-[#FCAF2E]">
                  Residential Plots in Abohar
                  </button>
                </div>
              )}
            </div>


            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#FCAF2E] text-[#1E2555] px-6 py-2 rounded-full font-semibold hover:bg-[#c4a855] transition-all duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

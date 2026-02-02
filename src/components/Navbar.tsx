import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/kbd-final-logo.jpg";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isTransparentPage =
    location.pathname === "/" ||
    location.pathname === "/bridal-shopping-commercial";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isTransparentPage && !isScrolled
          ? "bg-transparent py-6"
          : "bg-gradient-to-r from-[#1F265A] via-[#252C66] to-[#1F265A] shadow-lg py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center">
        {/* LOGO (LEFT) */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="KBD Logo"
            className="h-16 object-contain rounded-md"
          />
        </Link>

        {/* DESKTOP MENU (RIGHT) */}
        <div className="ml-auto hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="text-white no-underline hover:text-[#FCAF2E] transition">
            Home
          </Link>
          <Link to="/about" className="text-white no-underline hover:text-[#FCAF2E] transition">
            About
          </Link>
          <Link to="/eden-street" className="text-white no-underline hover:text-[#FCAF2E] transition">
            Eden Street
          </Link>
          <Link
            to="/bridal-shopping-commercial"
            className="text-white no-underline hover:text-[#FCAF2E] transition"
          >
            Bridal Shopping Commercial
          </Link>
          <Link to="/blog" className="text-white no-underline hover:text-[#FCAF2E] transition">
            Blogs
          </Link>
          <Link to="/gallery" className="text-white no-underline hover:text-[#FCAF2E] transition">
            Gallery
          </Link>

          <Link
            to="/contact"
            className="ml-2 bg-[#FCAF2E] text-[#293066] px-6 py-2 rounded-full font-semibold hover:bg-[#c4a855] transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden ml-auto text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1E2555] border-t border-[#FCAF2E]/20 animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white no-underline hover:text-[#FCAF2E]">
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white no-underline hover:text-[#FCAF2E]">
              About
            </Link>
            <Link to="/eden-street" onClick={() => setIsMobileMenuOpen(false)} className="text-white no-underline hover:text-[#FCAF2E]">
              Eden Street
            </Link>
            <Link
              to="/bridal-shopping-commercial"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white no-underline hover:text-[#FCAF2E]"
            >
              Bridal Shopping Commercial
            </Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-white no-underline hover:text-[#FCAF2E]">
              Blogs
            </Link>
            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-white no-underline hover:text-[#FCAF2E]">
              Gallery
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#FCAF2E] text-[#1E2555] px-6 py-2 rounded-full font-semibold text-center hover:bg-[#c4a855] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from "../assets/kbd-final-logo.jpg";
import { Link } from "react-router-dom";
import "./BridalCommercial/Hero.css";
export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#293066] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="logo"
                style={{ height: '4rem', borderRadius: '0.5rem', objectFit: 'contain' }}
              />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in finding the perfect property. Excellence in real estate since 2008.
            </p>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/kbdlandcorp" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D2B563] transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:text-[#293066]" />
              </a>

              <a href="https://twitter.com/kbdlandcorp" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D2B563] transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 group-hover:text-[#293066]" />
              </a>

              <a href="https://www.instagram.com/kbdlandcorp_?igsh=ZWFyenE1bWVlNGN3" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D2B563] transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:text-[#293066]" />
              </a>

              <a href="https://www.linkedin.com/in/kbdlandcorp" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D2B563] transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-[#293066]" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D2B563]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-[#D2B563] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#D2B563] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#D2B563] transition-colors">
                  Contact Us
                </Link>
              </li>

              {/* ⭐ ADDED BELOW ⭐ */}
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-[#D2B563] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-300 hover:text-[#D2B563] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* PROJECTS */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D2B563]">Our Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/eden-street" className="text-gray-300 hover:text-[#D2B563] transition-colors">
                  The Eden Street
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#D2B563] transition-colors">
                  Coming Soon Luxury Commercial Showrooms
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#D2B563] transition-colors">
                  Residential Plots in Sindhudurg
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-[#D2B563] transition-colors">
                  Residential Plots in Abohar
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D2B563]">Contact Info</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                Chandigarh-Manali Highway,<br />
                Mohali, Punjab, 140301
              </li>
              <li>
                <a href="tel:+918448220334" className="hover:text-[#D2B563] transition-colors">
                  +91 8448220334
                </a>
              </li>
              <li>
                <a href="mailto:enquiry@kbdlandcorp.in" className="hover:text-[#D2B563] transition-colors">
                  enquiry@kbdlandcorp.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} KBD LandCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

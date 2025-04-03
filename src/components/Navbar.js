import React, { useState } from 'react';
import { Phone, Clock, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Top bar - Hidden on mobile */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white hidden md:block" style={{height:'4rem', paddingTop:'1rem'}}>
        <div className="container mx-auto px-8 py-1 flex justify-between items-center">
          <div className="text-md">
            We are reliable & consistent IT Solution Team
          </div>
          
          <div className="flex items-center text-md">
            <Clock className="w-4 h-4 mr-2" />
            <span>Mon - Sat 9.00 AM - 18.00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#292d6e] rounded-lg flex items-center justify-center mr-2">
                <div className="w-4 h-4 border-2 border-white rotate-45"></div>
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">
                  <span className="text-[#292d6e]">Olam</span>
                </span>
                <span className="text-xs ml-1 text-[#84c43f] uppercase"><b>Technologies</b></span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu} 
                className="text-[#292d6e] focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 font-medium flex items-center">
                Home  
              </a>
              <a href="/about" className="text-gray-700 font-medium">About Us</a>
              <a href="/services" className="text-gray-700 font-medium flex items-center">
                Services
              </a>
              <a href="/projects" className="text-gray-700 font-medium">Projects</a>
              <a href="/contact" className="text-gray-700 font-medium">Contact Us</a>
            </div>

            {/* Desktop Contact and CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5 text-[#0B2A97]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Quick Call</span>
                  <span className="text-sm font-medium"><a href='tel:+255627404843'>(+255) 627 404 843</a></span>
                </div>
              </div>
                <a href='/services/shule-kiganjani'>
                  <button className="bg-[#292d6e] text-white px-6 py-2.5 rounded-full hover:bg-[#3c566c] transition-colors">
                    Bot Service
                  </button>

                </a>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50">
              <div className="flex flex-col items-center py-6 space-y-4">
                <a href="/" className="text-[#0B2A97] font-medium">Home</a>
                <a href="/about" className="text-gray-700 font-medium">About Us</a>
                <a href="/services" className="text-gray-700 font-medium">Services</a>
                <a href="/projects" className="text-gray-700 font-medium">Projects</a>
                <a href="/contact" className="text-gray-700 font-medium">Contact Us</a>
                
                {/* Mobile Contact Info */}
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-[#0B2A97]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">Quick Call</span>
                    <span className="text-sm font-medium"><a href='tel:+255627404843'>(+255) 627 404 843</a></span>
                  </div>
                </div>

                {/* Mobile CTA Button */}
                <a href="/services/shule-kiganjani">
                <button className="bg-[#292d6e] text-white px-6 py-2.5 rounded-full hover:bg-[#3c566c] transition-colors">
                  Bot Service
                </button>
                </a>

                {/* Mobile Business Hours */}
                <div className="flex items-center text-sm text-gray-600 mt-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Mon - Sat 9.00 AM - 18.00 PM</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
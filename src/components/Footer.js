import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-8">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center">
                <div className="mr-2">
                  <img src="./favicon.png" alt='logo' className="rounded-3xl h-10 w-auto sm:h-12"/>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">Olam</span>
                  <span className="text-xs ml-1 text-[#84c43f] uppercase"><b>Technologies</b></span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We are a reliable and consistent IT solutions provider dedicated to delivering innovative technology services to businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                <a href="" className="w-10 h-10 rounded-full bg-[#292d6e] flex items-center justify-center hover:bg-[#84c43f] transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="" className="w-10 h-10 rounded-full bg-[#292d6e] flex items-center justify-center hover:bg-[#84c43f] transition-colors">
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a href="" className="w-10 h-10 rounded-full bg-[#292d6e] flex items-center justify-center hover:bg-[#84c43f] transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="" className="w-10 h-10 rounded-full bg-[#292d6e] flex items-center justify-center hover:bg-[#84c43f] transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-[#84c43f] transition-colors">About Company</a>
                </li>
                <li>
                  <a href="/services" className="text-gray-300 hover:text-[#84c43f] transition-colors">Our Services</a>
                </li>
                <li>
                  <a href="/gallery" className="text-gray-300 hover:text-[#84c43f] transition-colors">Gallery</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-[#84c43f] transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/services/shule-kiganjani" className="text-gray-300 hover:text-[#84c43f] transition-colors">AI Chatbot Development</a>
                </li>
                <li>
                  <a href="/services" className="text-gray-300 hover:text-[#84c43f] transition-colors">Web Development</a>
                </li>
                <li>
                  <a href="/services" className="text-gray-300 hover:text-[#84c43f] transition-colors">App Development</a>
                </li>
                <li>
                  <a href="/services" className="text-gray-300 hover:text-[#84c43f] transition-colors">Graphics Design</a>
                </li>

              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#84c43f] mr-3" />
                  <span className="text-gray-300">Dar es salaam, Tanzania</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-[#84c43f] mr-3" />
                  <a href="mailto:olamtechnologies.co@gmail.com" className="text-gray-300 hover:text-[#84c43f] transition-colors">
                    olamtechnologies.co@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-[#84c43f] mr-3" />
                  <a href="tel:+255 627 404 843" className="text-gray-300 hover:text-[#84c43f] transition-colors">
                    +255 627 404 843
                  </a>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-[#84c43f] mr-3" />
                  <span className="text-gray-300">Mon - Sat 9.00 AM - 18.00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Olam Technologies. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="" className="text-gray-400 hover:text-[#84c43f] text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="" className="text-gray-400 hover:text-[#84c43f] text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="" className="text-gray-400 hover:text-[#84c43f] text-sm transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
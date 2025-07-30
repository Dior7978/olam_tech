import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import PagesHeroSection from '../components/PagesHeroSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PagesHeroSection 
        title="Contact Us" 
        breadcrumb="Contact"
      />
      
      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-8 transform -translate-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone Number</h3>
                <p className="text-gray-600">+255 627 404 843</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Email Address</h3>
                <a href="mailto:olamtechnologies.co@gmail.com"className="text-blue-600">info@olamtec.co.tz</a>
                
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                <p className="text-gray-600">Ennovate Ventures, Mbezi Shule</p>
                <p className="text-gray-600">Dar es salaam, Tanzania</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold mb-4">We'd love to hear from you.</h2>
            <p className="text-gray-600 mb-6">
              At our IT solution company, we are committed to providing exceptional customer service and support. 
              If you are experiencing technical difficulties or need assistance with one of our services,
            </p>
            <h3 className="font-semibold mb-4">Your benefits:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full border-2 border-blue-600"></div>
                <span className="text-gray-600">Client-oriented</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full border-2 border-blue-600"></div>
                <span className="text-gray-600">Independent</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full border-2 border-blue-600"></div>
                <span className="text-gray-600">Competent</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full border-2 border-blue-600"></div>
                <span className="text-gray-600">Results-driven</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full border-2 border-blue-600"></div>
                <span className="text-gray-600">Problem-solving</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full border-2 border-blue-600"></div>
                <span className="text-gray-600">Transparent</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form className="space-y-6" action='https://formspree.io/f/xeoarlzj' method='POST'>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                
              </div>
              
              <div>
                <input
                  type="email"
                  name='email'
                  placeholder="Enter your Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                </div>

              <div>
                <textarea
                  placeholder="Write your Message"
                  name='message'
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                SUBMIT MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
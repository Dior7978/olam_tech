import React from 'react';
import { CheckCircle, Users, BarChart, Globe } from 'lucide-react';
import PagesHeroSection from '../components/PagesHeroSection';
import TeamMembers from '../components/TeamMember';
import CallToAction from '../components/CallToAction';

const About = () => {
  return (
    <div className="min-h-screen">
      <PagesHeroSection 
        title="About Us" 
        breadcrumb="About"
      />

<div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className='shadow-lg p-8 rounded-lg'>
            <img 
              src="./images/services.webp" 
              alt="Vision illustration" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              To be a leading force in digital transformation, empowering businesses 
              and organizations with innovative technological solutions that drive 
              growth and success in the digital age.
            </p>

          </div>

          {/* Mission */}
          <div className='shadow-lg p-8 rounded-lg'>
            <img 
              src="./images/devices.jpg" 
              alt="Mission illustration" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              To deliver exceptional technology solutions through cutting-edge AI, 
              web development, and creative services that help our clients achieve 
              their strategic objectives and stay ahead in a rapidly evolving digital landscape.
            </p>

          </div>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Chatbot */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Chatbot Development</h3>
              <p className="text-gray-600">
                Intelligent automation solutions for customer service, registration, 
                and data management, tailored to your specific needs.
              </p>
            </div>

            {/* Website Development */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Development</h3>
              <p className="text-gray-600">
                Dynamic, user-friendly websites that bring your vision to life 
                with modern design and robust functionality.
              </p>
            </div>

            {/* App Development */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Application Development</h3>
              <p className="text-gray-600">
                Custom mobile applications for Android and iOS platforms, 
                designed to meet your unique business requirements.
              </p>
            </div>

            {/* Graphics Design */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Graphics Design</h3>
              <p className="text-gray-600">
                Creative visual designs for events and branding, crafted to 
                make your message stand out and connect with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Olam Technologies?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver 
            solutions that drive real business value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Expertise */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Our team of skilled professionals brings years of experience and 
              deep technical knowledge to every project.
            </p>
          </div>

          {/* Custom Solutions */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
            <p className="text-gray-600">
              We create tailored solutions that perfectly align with your 
              business objectives and requirements.
            </p>
          </div>

          {/* Innovation */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
            <p className="text-gray-600">
              We stay at the forefront of technology to provide you with 
              cutting-edge solutions that drive growth.
            </p>
          </div>
        </div>
      </div>

    <TeamMembers />
      {/* Call to Action */}
    <CallToAction />
    </div>
  );
};

export default About;
import React from 'react';
import { ArrowRight, Play, Users, Rocket, Award } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Experienced Team",
      description: "Our team of experts brings years of industry experience to deliver exceptional results."
    },
    {
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technology to provide innovative solutions for your business."
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Proven Track Record",
      description: "Successfully delivered hundreds of projects with outstanding client satisfaction."
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="bg-blue-50 rounded-3xl p-4 lg:p-8" style={{height:'40rem'}}>
              <img 
                src="./images/comp_img.webp" 
                alt="Professional team meeting" 
                className="w-full h-auto rounded-2xl shadow-lg"
                style={{height:'35rem',width:'100%',objectFit:'cover'}}
              />
              {/*  U shape decoration */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden lg:block">
                <div className="w-24 h-32 bg-[#84c43f] rounded-r-full" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-600">Discover</span>
              <span className="text-xl">💡</span>
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                Why Choose Us
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-navy-900 leading-tight">
              Why Choose Us?
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-md">
              We bring together the best talent and technology to help businesses thrive in the digital age. 
              Our commitment to excellence sets us apart.
            </p>

            {/* Reasons Grid */}
            <div className="grid gap-2 mt-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href='/contact'>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
                  Hire Us
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
              
            <a href='/gallery'>
              <button className="flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <Play className="w-4 h-4" />
                </div>
                View Gallery
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
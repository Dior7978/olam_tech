import React from 'react';

const ProjectInquiryBanner = () => {
  return (
    <div 
      className="relative py-16 md:py-20"
      style={{
        backgroundImage: "url('./images/Hero-section.png')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >

      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Have any project in mind? Please Don't hesitate
          </h2>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            Contact Us 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectInquiryBanner;
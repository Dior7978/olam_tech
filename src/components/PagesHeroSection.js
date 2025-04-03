import React from 'react';

const PagesHeroSection = ({ title, breadcrumb }) => {
  return (
    <section 
      className="relative text-white py-20 overflow-hidden bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `linear-gradient(rgba(2, 11, 45, 0.85), rgba(2, 11, 45, 0.85)), url(/images/hero-bg.jpg)` // Replace with your actual image path
      }}
    >
      {/* Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: '4rem 4rem',
              transform: 'skewY(-2deg)',
              transformOrigin: 'top left'
            }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-[#84c43f] text-white px-4 py-1 rounded-full text-sm font-medium">
              {breadcrumb}
            </span>
          </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              {title}
            </h1>
          </div>
    </section>
  );
};

export default PagesHeroSection;


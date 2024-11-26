import React from 'react';

const CallToAction = () => {
  return (
    <div 
      className="bg-blue-600 text-white py-16" 
      style={{
        background: "url('../images/Hero-section.png')", 
        backgroundPosition: 'center', 
        backgroundSize: 'cover'
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-8">
          Let's work together to bring your vision to life with our innovative solutions.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CallToAction;

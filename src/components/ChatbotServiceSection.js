import React from 'react';

const ChatbotServiceSection = () => {
  const services = [
    {
      icon: "🤖",
      title: "AI-Powered Chat Assistant",
      description: "Developing a comprehensive AI chatbot solution that aligns with your business communication needs."
    },
    {
      icon: "💬",
      title: "24/7 Customer Support",
      description: "Developing a comprehensive support system that aligns with customer service automation."
    },
    {
      icon: "🔒",
      title: "Secure Conversation System",
      description: "Developing a comprehensive security protocol that aligns with data protection standards."
    }
  ];

  return (
    <div className="relative bg-[#0B1340] py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('./images/chatbot.jpg')",
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height:'100%',
          opacity: '0.9'
        }}
      />
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#84c43f] uppercase text-sm tracking-wider" style={{fontSize:'14px', letterSpacing:'4px'}}>
              our ai chatbots
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
            We Are Increasing Business Success With Technology
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] 
                         backdrop-blur-sm rounded-xl p-4 transition-all 
                         border border-[rgba(255,255,255,0.1)] max-w-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatbotServiceSection;
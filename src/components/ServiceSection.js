import React from 'react';
import { Bot, Globe, Smartphone, Palette } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-sm shadow-md transition-shadow">
    <div className="mb-4">
      <Icon className="w-12 h-12 text-blue-500" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServiceSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbot Development",
      description:
        "Create intelligent chatbots to automate communication, enhance efficiency, and streamline customer service.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Design and develop user-friendly, dynamic websites that cater to your unique needs and bring your vision to life.",
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description:
        "Develop custom mobile applications for Android and iOS platforms, tailored to your specific requirements and project goals.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Create engaging visual designs, including posters and other event materials, that incorporate your specific branding.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-[#84c43f] uppercase" style={{fontSize:'14px', letterSpacing:'4px'}}>
          MORE ABOUT OUR COMPANY
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
          Services We Provide
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Service Card */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm shadow-md transition-shadow">
            <img 
              src="./images/team2.jpg"
              alt="IT Management"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Team Collaboration
              </h3>
              <p className="text-gray-600 mb-4">
              Enhance team productivity and streamline workflows with our collaborative tools and solutions. Our expert team can help you implement effective collaboration strategies, choose the right tools, and train your team to maximize productivity and efficiency.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full 
                hover:bg-blue-700 transition-colors">
                Get Our Help
              </button>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
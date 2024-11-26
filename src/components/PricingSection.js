import React from 'react';
import { Bot, Globe, Smartphone, PenTool, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12" />,
      name: "AI Chatbot Development",
      description: "Intelligent chatbots to automate communication and enhance efficiency for customer service, registration, and data management.",
      features: [
        "Custom AI Flow Integration",
        "Natural Language Processing",
        "Multi-platform Integration",
        "Analytics Dashboard",
        "24/7 Automated Support",
        "Custom Training Data"
      ],
      startingPrice: "2,499",
      new: true 
    },
    {
      icon: <Globe className="w-12 h-12" />,
      name: "Website Development",
      description: "Dynamic, user-friendly websites that bring your vision to life with modern design and powerful functionality.",
      features: [
        "Responsive Design",
        "CMS Integration",
        "SEO Optimization",
        "Performance Optimization",
        "Security Features",
        "Analytics Integration"
      ],
      startingPrice: "1,999",
      popular: true
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      name: "Application Development",
      description: "Custom mobile applications for both Android and iOS platforms, tailored to your specific requirements.",
      features: [
        "Cross-platform Development",
        "User-friendly Interface",
        "Offline Functionality",
        "Push Notifications",
        "API Integration",
        "App Store Submission"
      ],
      startingPrice: "4,999"
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      name: "Graphics Design",
      description: "Professional visual designs for events, branding, and marketing materials that capture your brand essence.",
      features: [
        "Brand Identity Design",
        "Marketing Materials",
        "Social Media Graphics",
        "Event Posters",
        "Print-ready Files",
        "Source Files Included"
      ],
      startingPrice: "999"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#84c43f] uppercase" style={{fontSize:'14px', letterSpacing:'4px'}}>
            our pricing
            </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services & Pricing</h2>
          <p className="text-lg text-gray-600">
            Comprehensive technology solutions tailored to elevate your business. Choose the service that best fits your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative bg-white rounded-xl shadow-lg transition-transform hover:-translate-y-2 ${
                service.popular || service.new ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              {service.new && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    New
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Icon & Title */}
                <div className="text-blue-500 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">${service.startingPrice}</span>
                  <span className="text-gray-600 ml-2">starting price</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full group bg-gray-50 hover:bg-blue-500 text-gray-900 hover:text-white rounded-lg py-3 px-6 font-semibold transition-colors duration-200 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="mt-16 text-center bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-6">
            Let's discuss your specific requirements and create a tailored package for your business.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 px-8 font-semibold transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
// pages/Services.js
import React from 'react';
import PagesHeroSection from '../components/PagesHeroSection';
import ServiceSection from '../components/ServiceSection';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const Services = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We begin by understanding your needs and objectives, creating a detailed project roadmap."
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our team works on creating solutions that align with your requirements and brand identity."
    },
    {
      number: "03",
      title: "Testing & Refinement",
      description: "Rigorous testing ensures everything works perfectly before launch."
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We help you launch successfully and provide ongoing support and maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PagesHeroSection 
        title="Our Services" 
        breadcrumb="Services"
      />

      {/* Main Services Section */}
      <ServiceSection />

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#84c43f] uppercase" style={{fontSize:'14px', letterSpacing:'4px'}}>HOW WE WORK</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Our Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-50 rounded-lg p-6 h-full">
                  <span className="text-4xl font-bold text-[#84c43f] mb-4 block">{step.number}</span>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-8 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#84c43f] uppercase" style={{fontSize:'14px', letterSpacing:'4px'}}>WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of Working With Us</h2>
              <div className="space-y-4">
                {[
                  "Expert team with proven track record",
                  "Customized solutions for your needs",
                  "Timely delivery and efficient execution",
                  "Ongoing support and maintenance"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="./images/teamwork.jpg"
                alt="Benefits"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
};

export default Services;
import React from 'react';
import { MessageSquare, Bot, Database, Users, BarChart, ChevronRight, School, PhoneCall, Smartphone } from 'lucide-react';
import PagesHeroSection from '../components/PagesHeroSection';

const ShuleKiganjani = () => {
  
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-[#84c43f]" />,
      title: "WhatsApp Integration",
      description: "Seamlessly connect through WhatsApp, providing instant responses 24/7 on either students' results or any other information."
    },
    {
      icon: <Database className="w-8 h-8 text-[#84c43f]" />,
      title: "Smart Data Management",
      description: "Efficiently handle student records, and results while maintaining organized digital databases."
    },
    {
      icon: <Users className="w-8 h-8 text-[#84c43f]" />,
      title: "Enhanced Customer Care",
      description: "Provide instant responses to inquiries about admissions, fees, events, and other school-related matters."
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#84c43f]" />,
      title: "Marketing & Analytics",
      description: "Promote school events, track engagement, and gather insights about parent and student interactions."
    }
  ];

  const demoVideos = [
    {
      title: "WhatsApp Integration Demo",
      description: "See how easily your school can connect with parents and students through WhatsApp automation.",
      placeholder: "../videos/shule_kiswahili.mp4"
    },
    {
      title: "Student Registration Process",
      description: "Watch how the bot handles new student registrations and data management.",
      placeholder: "../videos/shule_intro.mp4"
    },
    {
      title: "Results & Reports Access",
      description: "Experience how parents and students can securely access academic results and reports.",
      placeholder: "../videos/view_results.mp4"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PagesHeroSection 
        title="Shule Kiganjani Bot" 
        breadcrumb="Services / Shule Kiganjani"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-6 h-6 text-[#84c43f]" />
                <span className="text-[#84c43f] uppercase tracking-wider text-sm font-bold">WHATSAPP SCHOOL BOT</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Automate Your School's Communication & Management</h2>
              <p className="text-gray-600 mb-8" style={{lineHeight:'1.9'}}>Shule Kiganjani is a powerful WhatsApp-integrated chatbot that streamlines school operations, enhances communication, and provides exceptional customer service. Connect with students and parents instantly through their preferred messaging platform.</p>
              <div className="flex gap-4">
                <button className="bg-[#84c43f] hover:bg-[#6da32f] text-white px-6 py-3 rounded-lg flex items-center transition-colors">
                  Request Service
                  <ChevronRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border-2 border-[#84c43f] text-[#84c43f] px-6 py-3 rounded-lg hover:bg-[#84c43f] hover:text-white transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="../images/shule1.avif"
                alt="WhatsApp Bot Interface"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bg-white p-4 rounded-lg shadow-lg" style={{bottom:'25px',left:"-40px",boxShadow:'-2px 2px 2px #ccc'}}>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-8 h-8 text-[#84c43f]" />
                  <div>
                    <p className="font-semibold">24/7 Available</p>
                    <p className="text-sm text-gray-600">Instant Responses</p>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white p-4 rounded-lg shadow-lg" style={{top:'25px',right:"-25px",boxShadow:'-2px 3px 2px #ccc'}}>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-8 h-8 text-[#84c43f]" />
                  <div>
                    <p className="font-semibold">24/7 Available</p>
                    <p className="text-sm text-gray-600">Instant Responses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Streamline your school's operations with our intelligent WhatsApp bot solution.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white" style={{background:'url("../images/board.jpg")', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <School className="w-6 h-6 text-[#84c43f]" />
              <span className="text-[#84c43f] uppercase tracking-wider text-md font-bold">PERFECT FOR</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Use Cases</h2>
            <p className="text-[#fff] max-w-2xl mx-auto">Discover how schools are utilizing our WhatsApp bot to improve their operations.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Academic Management</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#84c43f]" />
                  <span>Fast Student results search</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#84c43f]" />
                  <span>Showing specific type of results accurately</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#84c43f]" />
                  <span>Showing position of the student in the class</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Information Management</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#84c43f]" />
                  <span>School events & activities</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#84c43f]" />
                  <span>Contacts & Location support</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#84c43f]" />
                  <span>Extracurricular activities</span>
                </li>
              </ul>
            </div>
            {/* <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Communication</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#84c43f]" />
                  <span>Event notifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#84c43f]" />
                  <span>Fee reminders</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-[#84c43f]" />
                  <span>Emergency alerts</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Demo Videos Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bot className="w-6 h-6 text-[#84c43f]" />
              <span className="text-[#84c43f] uppercase tracking-wider text-sm">SEE IT IN ACTION</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Watch Demo Videos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See how Shule Kiganjani can transform your school's communication and management.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {demoVideos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <video 
                  controls 
                  className="w-full rounded-lg shadow-lg transition-transform group-hover:scale-105"
                  poster="../images/demo-placeholder.png"
                >
                  <source src={video.placeholder} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3 className="text-xl font-semibold mt-4">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6db1d8]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Modernize Your School's Communication?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">Join schools already using Shule Kiganjani to enhance their operations and parent engagement.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-[#84c43f] hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors">
              Request Service
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#84c43f] px-6 py-3 rounded-lg transition-colors">
              See Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShuleKiganjani;
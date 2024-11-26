import React from 'react';
import { Bot, Globe, Palette, MessageSquare } from 'lucide-react';
import PagesHeroSection from '../components/PagesHeroSection';
import CallToAction from '../components/CallToAction';

const ProjectCard = ({ title, description, icon: Icon, stats, tags }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <div className="p-6">
      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {stats && (
        <div className="text-sm text-gray-500 mb-4">
          {stats}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
    const chatbotProjects = [
        {
          title: "School Information & Academic Bot - Mtambani Pre & Primary School",
          description: "Comprehensive chatbot system providing school information and personalized academic reports for students and parents.",
          stats: "Serving entire school community",
          clientDetails: [
            "Instant access to school information and announcements",
            "Automated academic report generation for students",
            "School calendar and event updates",
            "Fee structure and payment information",
            "Direct communication channel with administration"
          ],
          tags: ["Education", "Academic Reports", "School Info", "Student Services"]
        },
        {
          title: "Academic Assistant Bot - Mivumoni Islamic Seminary Secondary",
          description: "Integrated chatbot platform combining academic reporting with comprehensive school information services.",
          stats: "Enhanced parent-school communication",
          clientDetails: [
            "Islamic education program information",
            "Student performance tracking",
            "Academic report generation",
            "School policies and guidelines",
            "Event schedules and notifications"
          ],
          tags: ["Secondary Education", "Islamic Education", "Academic Support"]
        },
        {
          title: "School Management Bot - Acclavia Pre & Primary School",
          description: "Interactive platform facilitating school information access and academic performance monitoring.",
          stats: "Streamlined administrative processes",
          clientDetails: [
            "Real-time academic progress tracking",
            "Automated report card generation",
            "School activities and programs information",
            "Parent-teacher communication support",
            "Administrative announcements"
          ],
          tags: ["Primary Education", "School Management", "Academic Reports"]
        },
        {
          title: "Church Information Assistant Bot",
          description: "Dedicated church information system providing instant access to church schedules, events, and community information.",
          stats: "Supporting church community engagement",
          clientDetails: [
            "Weekly service schedules",
            "Church event calendar",
            "Ministry information and contacts",
            "Biblical resources and readings",
            "Community announcements"
          ],
          tags: ["Church Services", "Community Support", "Event Management"]
        }
      ];

      const websiteProjects = [
        {
          title: "GI-Desk - Gender Based and Intimate Partner Violence Support",
          description: "A comprehensive platform for GI-Desk NGO, focused on supporting victims of gender-based and intimate partner violence in Tanzania.",
          stats: "Registered NGO: ooNGO/R/5824",
          clientDetails: [
            "Online counseling service platform",
            "Resource center for GBV education",
            "Success stories and testimonials showcase",
            "Donation management system",
            "Emergency support contact system",
            "Community outreach program management",
            "Volunteer registration and management"
          ],
          features: {
            mission: "Supporting people experiencing gender based and intimate partner violence",
            established: "August 2023",
            focus: [
              "Counseling services",
              "Community education",
              "Violence prevention",
              "Victim support",
              "Female genital mutilation prevention"
            ]
          },
          tags: ["NGO", "Social Impact", "Community Support", "GBV Prevention"]
        },
        {
          title: "E-commerce Platform - StyleMart",
          description: "Full-featured e-commerce website with inventory management, payment processing, and customer analytics.",
          stats: "100K+ monthly visitors",
          tags: ["E-commerce", "Payment Integration", "Analytics"]
        }
      ];

  const designProjects = [
    {
      title: "Brand Identity Package",
      description: "Complete brand identity development including 2 corporate logos and 5 event posters for various clients.",
      stats: "7 successful deliverables",
      tags: ["Branding", "Logo Design", "Print Design"]
    }
  ];

  return (
    <div className="min-h-screen">
      <PagesHeroSection 
        title="Our Projects" 
        breadcrumb="Projects"
      />

      {/* Chatbot Projects */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16">
            <div className="flex flex-col mx-auto items-center">
                <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-1 bg-[#84c43f] mr-3"></div>
                <span className="text-[#84c43f] uppercase tracking-widest text-xs font-semibold">
                    Our Chatbots
                </span>
                <div className="w-12 h-1 bg-[#84c43f] ml-3"></div>
                </div>
            </div>
          <h2 className="text-3xl font-bold mb-6 text-center">AI Chatbot Solutions</h2>
          <div className="mb-8" style={{background:'url("./images/ai.jpg")',backgroundPosition:'45% 28%',backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'25rem'}}></div>
          <div className="grid md:grid-cols-2 gap-8">
            {chatbotProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                icon={Bot}
                {...project}
              />
            ))}
          </div>
        </div>

        {/* Website Projects */}
        <div className="mb-16">
            <div className="flex flex-col mx-auto items-center">
                <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-1 bg-[#84c43f] mr-3"></div>
                <span className="text-[#84c43f] uppercase tracking-widest text-xs font-semibold">
                    software
                </span>
                <div className="w-12 h-1 bg-[#84c43f] ml-3"></div>
                </div>
            </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Web Development</h2>
          <div className="mb-8" style={{background:'url("./images/code.jpg")',backgroundPosition:'center',backgroundRepeat:'no-repeat', backgroundSize:'100% 100%', height:'25rem'}}></div>
          <div className="grid md:grid-cols-2 gap-8">
            {websiteProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                icon={Globe}
                {...project}
              />
            ))}
          </div>
        </div>

        {/* Design Projects */}
        <div className="mb-16">
            <div className="flex flex-col mx-auto items-center">
                <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-1 bg-[#84c43f] mr-3"></div>
                <span className="text-[#84c43f] uppercase tracking-widest text-xs font-semibold">
                    Our Designs
                </span>
                <div className="w-12 h-1 bg-[#84c43f] ml-3"></div>
                </div>
            </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Creative Design</h2>
          <div className="mb-8" style={{background:'url("./images/design1.jpg")',backgroundPosition:'center', backgroundSize:'cover',backgroundRepeat:'no-repeat', height:'25rem'}}></div>
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {designProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                icon={Palette}
                {...project}
              />
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="bg-blue-50 rounded-xl p-8 mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Project Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">AI Chatbots</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Websites</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Event Posters</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Brand Logos</div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default Projects;
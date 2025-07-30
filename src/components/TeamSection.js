import React, { useRef, useState, useEffect } from 'react';
import { 
  FaFacebookF,  
  FaLinkedinIn, 
  FaInstagram,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const teamMembers = [
  {
    name: 'Jackson Rwegasira',
    role: 'CEO & Founder',
    image: './images/jason.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Joan Rhobi',
    role: 'Chief Stratergies Officer ',
    image: './images/joan.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
    {
    name: 'Marko Chikongoye',
    role: 'Chief Financial Officer',
    image: './images/marko.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
    {
    name: 'Egbert Chomba',
    role: 'Chief Operating Officer',
    image: './images/chomba.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
    {
    name: 'Kelvin Kweka',
    role: 'Chief Marketing Officer',
    image: './images/kweka.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Rwegasira Byabato',
    role: 'System admin',
    image: './images/mufasa.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Dionis Lenga',
    role: 'Developer, Graphics Designer',
    image: './images/dior.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Norah Ajuna',
    role: 'Finance Manager',
    image: './images/norah.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Johansen Mwijage',
    role: 'System admin, Graphics Designer',
    image: './images/johansen.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Jolene Msuya',
    role: 'System admin',
    image: './images/jolene.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'David Kiwelu',
    role: 'System admin',
    image: './images/kiwelu.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Richardson Pilot',
    role: 'System admin',
    image: './images/rich.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Glory Foya',
    role: 'Developer, System admin',
    image: './images/glory.png',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Sumaiya Kileo',
    role: 'System admin',
    image: './images/sumaiya.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Utwah Mwingira',
    role: 'System admin',
    image: './images/utwah.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Sabra Panduka',
    role: 'Marketing Officer',
    image: './images/sabra.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Stellah Alberts',
    role: 'Marketing Officer',
    image: './images/stellah.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  }
];

const TeamMembers = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
      
      return () => scrollContainer.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50 py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-1 bg-[#84c43f] mr-3"></div>
              <span className="text-[#84c43f] uppercase tracking-widest text-xs font-semibold">
                Our Team
              </span>
              <div className="w-12 h-1 bg-[#84c43f] ml-3"></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Experts
          </h2>
        </div>

        {/* Team Grid with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="min-w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden relative group"
              >
                {/* Member Image with Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover absolute inset-0 transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Social Icons Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center space-x-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex space-x-4">
                      <a 
                        href={member.socials.facebook} 
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                      >
                        <FaFacebookF className="w-5 h-5" />
                      </a>
                      <a 
                        href={member.socials.twitter} 
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                      >
                        <SiX className="w-5 h-5" />
                      </a>
                      <a 
                        href={member.socials.linkedin} 
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
                      >
                        <FaLinkedinIn className="w-5 h-5" />
                      </a>
                      <a 
                        href={member.socials.instagram} 
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
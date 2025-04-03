import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompanyWelcome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4' data-aos="fade-right">
            <div className="space-y-4 flex flex-col md:flex-col max-sm:-mb-12">
              <img
                src="./images/laptop.jpg"
                alt="Business people"
                className="rounded-lg shadow-lg mb-4 md:mb-0 w-full"
                data-aos="zoom-in"
                data-aos-delay="300"
              />
              <img
                src="./images/ai.jpg"
                alt="Business people"
                className="rounded-lg shadow-lg w-full max-sm:hidden"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
            </div>
            <div className='px-0 md:px-4 mt-4 md:mt-0'>
              <img
                src="./images/team.jpg"
                alt="Business people"
                className="rounded-lg shadow-lg w-full h-auto md:h-[25.9rem] object-cover max-sm:hidden"
                data-aos="zoom-in"
                data-aos-delay="500"
              />
            </div>
          </div>

          <div className="space-y-4 mt-6 md:mt-0" style={{lineHeight:1.9}} data-aos="fade-left">
            <span className='text-[#84c43f] uppercase' style={{fontSize:'14px', letterSpacing:'4px'}}>
              Welcome to Olam Technologies
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Make Your Business Great With Olam Technologies
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              An IT solution service company may serve clients from various industries
              such as healthcare, finance, education, and manufacturing. They may work
              on a project basis...
            </p>
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium text-sm md:text-base">Emergency Solutions Anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium text-sm md:text-base">Affordable price up to 2 years</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium text-sm md:text-base">Reliable & Experienced Team</span>
              </div>
            </div>
            <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="400">
                <a href='/about'>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm md:text-base">
                    Read More
                  </button>

                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyWelcome;
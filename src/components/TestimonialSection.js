import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      image: "./images/jason.jpg",
      content: "Olam Technologies transformed our IT infrastructure completely. Their emergency solutions and reliable team helped us achieve our digital transformation goals ahead of schedule.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Operations Director, InnovateCo",
      image: "./images/jason.jpg",
      content: "The affordable pricing and expert team at Olam made our transition to cloud services seamless. They've been instrumental in our company's growth.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "CEO, StartupHub",
      image: "./images/jason.jpg",
      content: "Working with Olam Technologies has been a game-changer. Their experienced team provided solutions that perfectly aligned with our business needs.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#cbebf6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <div className="inline-block mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-1 bg-[#84c43f] mr-3"></div>
              <span className="text-[#84c43f] uppercase tracking-widest text-xs font-semibold">
                testimonials
              </span>
              <div className="w-12 h-1 bg-[#84c43f] ml-3"></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-4 leading-[1.9]">
            Discover why businesses trust Olam Technologies for their IT solutions
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-8">
          {/* Carousel Navigation Buttons */}
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg mx-4">
                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={20}
                          className="fill-blue-500 text-blue-500"
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-500 leading-[1.9] text-center text-lg mb-8">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#84c43f] text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-4' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
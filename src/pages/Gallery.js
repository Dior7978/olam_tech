import React, { useState } from "react";
import { X } from "lucide-react";
import PagesHeroSection from "../components/PagesHeroSection";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  // Replace these with your actual image URLs
  const galleryImages = [
    "./images/devices.jpg",
    "./images/devices.jpg",
    "./images/devices.jpg",
    "./images/devices.jpg",
    "./images/devices.jpg",
    "./images/devices.jpg",
    "./images/devices.jpg",
    "./images/devices.jpg",
    "./images/devices.jpg",
    "./images/devices.jpg",
    "./images/devices.jpg",
  ];

  const openModal = (image) => {
    setActiveImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveImage("");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PagesHeroSection title="Gallery" breadcrumb="Home / Gallery" />

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore moments captured from our services, events, and projects.
            </p>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg"
                onClick={() => openModal(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-lg">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-400"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage}
              alt="Active"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

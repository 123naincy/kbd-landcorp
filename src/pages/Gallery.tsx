// src/pages/Gallery.jsx
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, FolderOpen } from "lucide-react";
import edenCover from "../assets/Eden.jpg";
import eden1 from "../assets/properties-five.jpeg";
import eden2 from "../assets/properties-four.jpeg";
import eden3 from "../assets/properties-seven.jpeg";
import eden4 from "../assets/properties-six.jpeg";
import eden5 from "../assets/properties-two.jpeg";
import awardscover from "../assets/awards-one.png";
import awards1 from "../assets/awards-two.png";
import awards2 from "../assets/awards-three.png";
import awards3 from "../assets/awards-four.png";

const galleryFolders = [
  {
    id: "eden-street",
    name: "Eden Street – Master Plan & Views",
    cover: edenCover,
    images: [eden1, eden2, eden3,eden4,eden5],
  },
   {
    id: "awards",
    name: "Eden Street – Master Plan & Views",
    cover: awardscover,
    images: [awards1, awards2, awards3],
  }
];

const Gallery = () => {
  const [activeFolder, setActiveFolder] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openFolder = (folder) => {
    setActiveFolder(folder);
    setCurrentIndex(0);
  };

  const closeModal = () => {
    setActiveFolder(null);
    setCurrentIndex(0);
  };

  const showPrev = () => {
    if (!activeFolder) return;
    setCurrentIndex((prev) =>
      prev === 0 ? activeFolder.images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    if (!activeFolder) return;
    setCurrentIndex((prev) =>
      prev === activeFolder.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      
      <main className="px-4 pb-16">
      {/* Page heading */}
      <section className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1F265A] mt-4 mb-2">
          Gallery
        </h1>
        <p className="text-gray-600 mb-8">
          Explore our projects folder-wise. Click on a folder to view images in
          a slider.
        </p>

        {/* Folder grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryFolders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => openFolder(folder)}
              className="group text-left bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={folder.cover}
                  alt={folder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-3 left-3 bg-white/90 rounded-full px-3 py-1 flex items-center gap-1 text-xs font-medium text-[#1F265A]">
                  <FolderOpen className="w-4 h-4" />
                  Folder
                </div>
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-[#1F265A] mb-1">
                  {folder.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {folder.images.length} photos
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal Slider */}
      {activeFolder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image and nav */}
            <div className="flex flex-col">
              <div className="relative w-full h-[65vh] flex items-center justify-center bg-black">
                {/* Prev */}
                <button
                  onClick={showPrev}
                  className="absolute left-3 md:left-5 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Image */}
                <img
                  src={activeFolder.images[currentIndex]}
                  alt={`${activeFolder.name} - ${currentIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
                />

                {/* Next */}
                <button
                  onClick={showNext}
                  className="absolute right-3 md:right-5 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption & counter */}
              <div className="px-4 py-3 bg-slate-900/95 text-white flex items-center justify-between text-sm">
                <div>
                  <div className="font-semibold">{activeFolder.name}</div>
                  <div className="text-xs text-gray-300">
                    Click arrows to navigate photos
                  </div>
                </div>
                <div className="text-xs text-gray-300">
                  {currentIndex + 1} / {activeFolder.images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
    </>
    
  );
};

export default Gallery;

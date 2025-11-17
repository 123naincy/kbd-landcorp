import { useState, useEffect } from 'react';
import { Play, ChevronDown } from 'lucide-react';
import bannerVideo from '../assets/kbd-video.mp4';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToNext = () => {
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <div className="animate-fade-in max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Welcome to <span className="text-[#FCAF2E]">KBD Group</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-lg">
            Building Dreams, Creating Legacies
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto drop-shadow">
            Your trusted partner in North India's real estate landscape. We deliver excellence in construction, innovation, and quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToNext}
              className="bg-[#FCAF2E] text-[#293066] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#c4a855] transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore Properties
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#293066] transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-scroll">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center text-white hover:text-[#FCAF2E] transition-colors"
          >
            <span className="text-sm mb-2">Scroll to Explore</span>
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

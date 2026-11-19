import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2000&auto=format&fit=crop')`,
      }}
    >
      {/* Dark Purple / Magenta Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a0a18]/95 via-[#2a0a18]/75 md:via-[#2a0a18]/60 to-[#2a0a18]/30 md:to-transparent pointer-events-none" />

      {/* Hero Content - Aligned Left & Vertically Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 pb-24 md:py-32">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Decorative Purple/Pink Gradient Line Container */}
          <div className="hero-accent-line space-y-6 sm:space-y-7">
            
            {/* Top Small Text */}
            <p className="text-pink-300 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">
              HAIR • SKIN • NAILS • BODY • BRIDAL
            </p>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.08] tracking-tight">
              One place. <br />
              Every service. <br />
              <span className="italic font-light text-pink-100">All of you.</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Your complete beauty and grooming destination in Sri Lanka—haircuts, colour, facials, bridal artistry, and premium skincare.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-4">
              {/* Primary Button */}
              <a
                href="#book"
                className="inline-flex items-center gap-2.5 bg-white text-black font-semibold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-pink-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-black/30 group"
              >
                <span>BOOK AN APPOINTMENT</span>
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>

              {/* Secondary Button */}
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-transparent border border-white text-white font-medium text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white/10 hover:border-pink-200 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm"
              >
                EXPLORE SERVICES
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Center Scroll Indicator with Bounce Animation */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <a
          href="#services"
          className="text-white/70 hover:text-white text-[10px] sm:text-xs tracking-[0.28em] uppercase font-light animate-bounce transition-colors duration-200 flex items-center gap-1.5"
        >
          <span>SCROLL TO DISCOVER</span>
          <span className="text-sm">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

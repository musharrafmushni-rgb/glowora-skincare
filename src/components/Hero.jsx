import { FiArrowUpRight, FiCalendar } from 'react-icons/fi';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2000&auto=format&fit=crop')`,
      }}
    >
      {/* Dark Purple / Magenta Gradient Overlay with Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a0a18]/95 via-[#2a0a18]/75 md:via-[#2a0a18]/60 to-[#2a0a18]/30 md:to-transparent pointer-events-none" />

      {/* Modern Trending Animated Ambient Aurora Glow */}
      <div className="absolute top-1/4 left-10 md:left-24 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tr from-pink-600/25 via-purple-600/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-16 right-10 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      {/* Hero Content - Aligned Left & Vertically Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 pb-24 md:py-32">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Decorative Purple/Pink Gradient Line Container */}
          <div className="hero-accent-line space-y-6 sm:space-y-7">

            {/* Trending Live Status / Availability Pill Badge */}
            <div 
              className="animate-fade-in-up inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-pink-200 text-xs sm:text-sm font-medium tracking-wide animate-float-slow"
              style={{ animationDelay: '50ms' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Accepting Appointments Today</span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="hidden sm:inline text-white/80 font-normal">Colombo & Polonnaruwa</span>
            </div>

            {/* Top Small Category Text */}
            <p 
              className="animate-fade-in-up text-pink-300 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase"
              style={{ animationDelay: '150ms' }}
            >
              HAIR • SKIN • NAILS • BODY • BRIDAL
            </p>

            {/* Main Heading with Staggered Fade-In */}
            <h1 
              className="animate-fade-in-up font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.08] tracking-tight"
              style={{ animationDelay: '250ms' }}
            >
              One place. <br />
              Every service. <br />
              <span className="italic font-light text-pink-100 bg-gradient-to-r from-pink-100 via-pink-200 to-white bg-clip-text">
                All of you.
              </span>
            </h1>

            {/* Subtext */}
            <p 
              className="animate-fade-in-up text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl"
              style={{ animationDelay: '350ms' }}
            >
              Your complete beauty and grooming destination in Sri Lanka—haircuts, colour, facials, bridal artistry, and premium skincare.
            </p>

            {/* Action Buttons with Modern Micro-Interactions */}
            <div 
              className="animate-fade-in-up flex flex-wrap items-center gap-4 pt-2 sm:pt-4"
              style={{ animationDelay: '450ms' }}
            >
              {/* Primary Button with Light Sweep (btn-shimmer) & Scale */}
              <a
                href="#book"
                className="btn-shimmer inline-flex items-center gap-2.5 bg-white text-black font-semibold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-pink-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-black/30 group"
              >
                <FiCalendar className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
                <span>BOOK AN APPOINTMENT</span>
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>

              {/* Secondary Button with Glassmorphism */}
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white/5 border border-white/40 text-white font-medium text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white/15 hover:border-pink-200 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md shadow-sm"
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
          className="text-white/70 hover:text-white text-[10px] sm:text-xs tracking-[0.28em] uppercase font-light animate-bounce transition-colors duration-200 flex items-center gap-1.5 group"
        >
          <span>SCROLL TO DISCOVER</span>
          <span className="text-sm group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

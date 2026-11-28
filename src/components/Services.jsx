import { useRef } from 'react';
import { FiFeather, FiStar, FiEye, FiDroplet, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    title: 'Pedicure',
    icon: FiFeather,
    description: 'Indulge in a rejuvenating foot ritual featuring soothing botanical soaks, gentle organic exfoliation, cuticle refinement, and deeply relaxing tension-relief massage.',
  },
  {
    id: 2,
    title: 'Nails Enhancements',
    icon: FiStar,
    description: 'Elevate your nails with premium gel overlays, durable extensions, and high-fashion couture artistry crafted meticulously to accentuate your individual style.',
  },
  {
    id: 3,
    title: 'Lash Extensions',
    icon: FiEye,
    description: 'Enhance your natural gaze with feather-light, customized volume lash extensions designed for captivating definition, effortless curl, and enduring elegance.',
  },
  {
    id: 4,
    title: 'Body Scrub',
    icon: FiDroplet,
    description: 'Polish and restore tired skin with our signature mineral sea salt and botanical oil scrub, awakening a velvety, deeply hydrated, and luminous all-over glow.',
  },
];

const Services = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative w-full py-20 px-6 md:px-12 bg-[#FDF1F0] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          
          {/* Subtle Butterfly Decorative Watermark SVG Behind Title */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 text-[#F29C8F]">
            <svg 
              className="w-44 h-32 sm:w-56 sm:h-40" 
              viewBox="0 0 100 80" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M50 42 C45 35, 30 15, 10 20 C-5 25, 0 50, 15 55 C28 59, 44 48, 48 45 C44 55, 32 68, 25 72 C18 76, 22 82, 30 78 C40 73, 46 58, 50 50 C54 58, 60 73, 70 78 C78 82, 82 76, 75 72 C68 68, 56 55, 52 45 C56 48, 72 59, 85 55 C100 50, 105 25, 90 20 C70 15, 55 35, 50 42 Z" />
              <circle cx="50" cy="38" r="2.5" />
              <path d="M49 36 Q45 26 38 23 M51 36 Q55 26 62 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          {/* Main Title */}
          <h2 className="relative font-serif text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            Our Services
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Dive into our world of care and signature treatments at our renowned beauty salon in Colombo.
          </p>
        </div>

        {/* Carousel Container with Side Navigation Arrows */}
        <div className="relative group/carousel">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll services left"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#F29C8F] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
          >
            <FiChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Horizontal Scrollable Row */}
          <div
            ref={carouselRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 sm:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] snap-center bg-white/80 hover:bg-white rounded-3xl p-8 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F29C8F]/25 flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* White Square Icon Box */}
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-[#F29C8F]/20 flex items-center justify-center p-4 mb-2 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-[#F29C8F] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Salmon Colored Small Horizontal Line */}
                  <div className="w-10 h-0.5 bg-[#F29C8F] my-4 rounded-full group-hover:w-16 transition-all duration-300" />

                  {/* Title in Serif Font */}
                  <h3 className="font-serif text-2xl text-gray-800 font-normal mb-3 group-hover:text-[#F29C8F] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Short Description with Line Clamp */}
                  <p className="text-sm text-gray-500 font-sans leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll services right"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#F29C8F] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
          >
            <FiChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/94770000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Glowora on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <FaWhatsapp className="text-3xl text-white relative z-10" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>
      </a>

    </section>
  );
};

export default Services;

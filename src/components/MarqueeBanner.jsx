const marqueeItems = [
  'Hair Couture & Colour',
  'Bespoke Bridal Artistry',
  'Medical-Grade Facials',
  '100% Organic Botanicals',
  'Luxury Unisex Salon',
  'Volume Lash Extensions',
  'Signature Body Polishing',
  'Colombo & Polonnaruwa',
];

const MarqueeBanner = () => {
  return (
    <div className="relative w-full bg-[#1c0710] border-y border-pink-500/20 py-4 sm:py-5 overflow-hidden select-none z-20">
      {/* Subtle edge fade gradient shadows */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#1c0710] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#1c0710] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="marquee-track flex items-center">
        {/* Render items twice for seamless infinite loop */}
        {[...marqueeItems, ...marqueeItems].map((text, idx) => (
          <div key={idx} className="flex items-center whitespace-nowrap">
            <span className="font-serif tracking-[0.25em] uppercase text-xs sm:text-sm text-pink-200/90 font-medium px-6 hover:text-white transition-colors duration-200">
              {text}
            </span>
            <span className="text-pink-400/60 text-xs select-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;

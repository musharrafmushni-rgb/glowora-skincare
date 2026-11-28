import { FiPhone, FiCheck, FiAward, FiUsers, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FiAward className="w-5 h-5 text-brand-pink" />,
      title: "Master Artistry",
      desc: "Top certified hair & skincare specialists",
    },
    {
      icon: <FiHeart className="w-5 h-5 text-brand-pink" />,
      title: "Clean Formulations",
      desc: "100% gentle organic botanical products",
    },
    {
      icon: <FiUsers className="w-5 h-5 text-brand-pink" />,
      title: "Unisex Luxury",
      desc: "Warm welcoming lounge for everyone",
    },
  ];

  return (
    <section id="about" className="relative w-full py-24 lg:py-32 bg-white text-gray-900 overflow-hidden">
      
      {/* Decorative Subtle Background Pattern */}
      <div className="absolute top-12 left-8 md:left-16 opacity-30 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="about-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D81B60" />
          </pattern>
          <rect width="120" height="120" fill="url(#about-dots)" />
        </svg>
      </div>

      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-pink-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Luxury Salon Imagery & Accents (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Frame Behind */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-pink-200/60 to-purple-100/40 border border-pink-200/50 shadow-sm pointer-events-none" />

              {/* Main Model & Salon Image */}
              <div className="relative z-10 overflow-hidden shadow-2xl bg-gray-100 border border-white">
                <img
                  src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000&auto=format&fit=crop"
                  alt="Glowora Luxury Beauty & Skincare"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative Dots Pattern at Bottom Right */}
              <div className="absolute -bottom-8 -right-8 z-0 hidden sm:block">
                <svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="about-dots-bottom" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="#D81B60" opacity="0.35" />
                  </pattern>
                  <rect width="140" height="140" fill="url(#about-dots-bottom)" />
                </svg>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border border-pink-100 shadow-xl p-4 sm:p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-50 border border-pink-200/60 flex items-center justify-center text-brand-pink font-serif font-bold text-xl">
                  8+
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Years Of Mastery</p>
                  <p className="text-sm sm:text-base font-serif font-bold text-gray-900">Polonnaruwa's Premier Salon</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Storytelling & Action (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:pl-6">
            
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-pink-50 border border-pink-200/70 text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-pink">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
              ABOUT GLOWORA SALON
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-[1.18] tracking-tight">
              A Sanctuary of Beauty, <br />
              <span className="italic font-light text-brand-pink">Crafted for Pure Elegance.</span>
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-gray-600 text-base sm:text-lg font-light leading-relaxed">
              <p>
                At <span className="font-medium text-gray-900">Glowora</span>, we pride ourselves on being the most prestigious one-stop beauty destination in Polonnaruwa. Located in the serene suburbs of <span className="font-medium text-gray-800">Polonnaruwa 06</span>, our unisex salon provides an inviting, refined atmosphere where every individual receives personalized care.
              </p>
              <p>
                Backed by years of trust and technical mastery, Glowora represents more than routine salon care—we deliver authentic transformations. From haute couture haircuts and bespoke bridal artistry to medical-grade facials, we design every touchpoint to awaken your radiant confidence.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-50/80 border border-gray-100 hover:border-pink-200 transition-colors">
                  <div className="mb-2.5">{item.icon}</div>
                  <h3 className="font-serif text-sm font-bold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-700 font-medium pt-1">
              <div className="flex items-center gap-2">
                <FiCheck className="text-brand-pink stroke-[3]" />
                <span>Unisex Grooming & Bridal Suites</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="text-brand-pink stroke-[3]" />
                <span>Certified Skin & Hair Aestheticians</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="tel:+94770000000"
                className="inline-flex items-center justify-center gap-3 bg-[#E88C80] hover:bg-[#d67b6f] active:scale-95 text-white font-medium text-sm tracking-wider uppercase px-8 py-4 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FiPhone className="text-lg" />
                <span>Make A Call</span>
              </a>

              <a
                href="https://wa.me/94770000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] active:scale-95 text-white font-medium text-sm tracking-wider uppercase px-8 py-4 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default About;

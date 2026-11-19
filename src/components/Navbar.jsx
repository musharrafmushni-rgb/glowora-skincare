import { useState } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo (White text, luxury aesthetic) */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:border-white transition-all duration-300">
              <svg 
                className="w-4 h-4 fill-current text-pink-300 group-hover:scale-110 transition-transform duration-300" 
                viewBox="0 0 24 24"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
              </svg>
            </div>
            <span className="font-serif font-bold text-2xl sm:text-3xl tracking-widest text-white uppercase">
              Glowora
            </span>
          </a>

          {/* Desktop Menu Links (White & light gray with hover effects) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-white text-xs lg:text-sm font-medium tracking-widest uppercase transition-all duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-pink-300 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: BOOK AN APPOINTMENT Solid White Button with Black Text */}
          <div className="hidden md:flex items-center">
            <a
              href="#book"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-pink-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <span>BOOK AN APPOINTMENT</span>
              <FiArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions: Compact CTA + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="#book"
              className="bg-white text-black font-semibold text-[10px] tracking-wider uppercase px-3.5 py-2 rounded-full hover:bg-pink-100 transition-colors"
            >
              BOOK NOW
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 text-white hover:text-pink-300 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Drawer / Overlay */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out border-b border-white/10 bg-[#230815]/95 backdrop-blur-2xl ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100 py-6 px-8 shadow-2xl'
            : 'max-h-0 opacity-0 overflow-hidden py-0 px-8'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-200 hover:text-pink-300 text-sm uppercase tracking-widest font-medium py-1.5 transition-colors border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-pink-100 transition-all shadow-md"
            >
              <span>BOOK AN APPOINTMENT</span>
              <FiArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="relative w-full py-20 px-6 md:px-12 bg-white overflow-hidden">

            {/* Decorative Background Pattern (Top Left) */}
            <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="dots-top" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2" fill="#D81B60" />
                    </pattern>
                    <rect x="0" y="0" width="100" height="100" fill="url(#dots-top)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

                {/* LEFT SIDE: Image with Decorative Dots */}
                <div className="relative flex justify-center md:justify-start">
                    {/* Main Image */}
                    <img
                        src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop"
                        alt="Glowora Skincare Model"
                        className="w-full max-w-md h-auto object-cover shadow-2xl relative z-10"
                        style={{ borderRadius: '0px' }} // Sharp edges as requested
                    />

                    {/* Decorative Dots (Bottom Right behind the image) */}
                    <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-0">
                        <svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="dots-bottom" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="2" fill="#D81B60" opacity="0.4" />
                            </pattern>
                            <rect x="0" y="0" width="150" height="150" fill="url(#dots-bottom)" />
                        </svg>
                    </div>
                </div>

                {/* RIGHT SIDE: Text Content */}
                <div className="space-y-6">
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
                        About Us
                    </h2>

                    <div className="space-y-4 text-gray-600 leading-relaxed font-sans text-sm md:text-base">
                        <p>
                            At Glowora, we pride ourselves on being the most prestigious one-stop salon in Polonnaruwa. Located in the suburbs of Polonnaruwa 06, our unisex salon offers a warm, welcoming space for everyone seeking premium beauty care and grooming services.
                        </p>
                        <p>
                            With years of expertise and trust behind our name, Glowora has grown to represent not just a mere salon experience, but a commitment to real beauty transformations. Whether it's everyday grooming or a full makeover, expect results that truly speak for themselves with Glowora's signature salon experience.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="tel:+94770000000"
                            className="flex items-center justify-center gap-2 bg-[#F29C8F] hover:bg-[#e0897c] text-white px-8 py-3.5 font-medium transition-colors duration-300"
                            style={{ borderRadius: '0px' }}
                        >
                            <FiPhone className="text-lg" />
                            Make A Call
                        </a>
                        <a
                            href="https://wa.me/94770000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#F29C8F] hover:bg-[#e0897c] text-white px-8 py-3.5 font-medium transition-colors duration-300"
                            style={{ borderRadius: '0px' }}
                        >
                            <FaWhatsapp className="text-xl" />
                            WhatsApp
                        </a>
                    </div>
                </div>

            </div>

            {/* Floating Action Buttons (Fixed at Bottom Right) */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/94770000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                    title="Chat on WhatsApp"
                >
                    <FaWhatsapp className="text-3xl" />
                </a>

                {/* Generic Chat Button */}
                <button
                    className="w-14 h-14 bg-[#A5D6F1] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                    title="Live Chat"
                >
                    <FiMessageCircle className="text-2xl" />
                </button>
            </div>

        </section>
    );
};

export default About;
/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#D85A7F',
        'brand-pink-dark': '#C23863',
        'brand-light': '#FDF2F4',
        'brand-green': '#2D5A43',
        'brand-green-dark': '#1F3E2E',
        'brand-gold': '#D4AF37',
        'brand-dark': '#1F2421',
        brand: {
          pink: '#D85A7F',
          'pink-dark': '#C23863',
          light: '#FDF2F4',
          green: '#2D5A43',
          'green-dark': '#1F3E2E',
          gold: '#D4AF37',
          dark: '#1F2421',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(28px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 5s ease-in-out infinite',
=======
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#D81B60',       // Main button & highlight color
          pinkHover: '#AD1457',  // Button hover color
          light: '#FFF0F5',      // Light pink background
          dark: '#1A1A1A',       // Dark text color
          green: '#4A5D23',      // Logo leaf color
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
>>>>>>> a12c8d04442bd702dd8144202efe40fc91348fc8
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
}
=======
}
>>>>>>> a12c8d04442bd702dd8144202efe40fc91348fc8

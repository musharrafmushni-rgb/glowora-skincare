/** @type {import('tailwindcss').Config} */
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
      },
    },
  },
  plugins: [],
}

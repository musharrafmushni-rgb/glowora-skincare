/** @type {import('tailwindcss').Config} */
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
          pink: '#D81B60',
          pinkHover: '#AD1457',
          light: '#FFF0F5',
          dark: '#1A1A1A',
          green: '#4A5D23',
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
      },
    },
  },
  plugins: [],
}

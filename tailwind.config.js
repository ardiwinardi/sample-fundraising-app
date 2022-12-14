/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2f2c61',
        secondary: 'rgba(243, 244, 244)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        logo: ['League Spartan', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar-hide')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '350px',
      // => @media (min-width: 450px) { ... }

      tablet: '768px',
      // => @media (min-width: 768px) { ... }

      desktop: '1366px',
      // => @media (min-width: 1366px) { ... }
    },

    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,md,html,js}', './src/*.{njk,md,html,js}'],
  theme: {
    extend: {
      colors: {
        'brand-grey': '#3d3e3f',
        'brand-red': '#c20e0e',
        'brand-dark-grey': '#2a2b2a',
      },
    },
  },
  plugins: [],
};

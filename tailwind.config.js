/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,md,html}'],
  theme: {
    extend: {
      colors: {
        'brand-grey': '#3d3e3f',
        'brand-red': '#c20e0e',
      },
    },
  },
  plugins: [],
};

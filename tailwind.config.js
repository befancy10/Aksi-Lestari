/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'neulis': ["Neulis"],
    },
    colors: {
      'hijau':{
        100: "#D7DDC2",
        200: "#A3B372",
        300: "#4E7E41",
      }
    },
    fontSize:{
      navbar: ['1.125rem', {
        lineHeight: '23px',
        letterSpacing: '-0.01em',
        fontWeight: 400,
      }],
      navbar2: ['12px', {
        lineHeight: '23px',
        letterSpacing: '-0.01em',
        fontWeight: 400,
      }],
    },
    extend: {},
  },
  plugins: [],
};

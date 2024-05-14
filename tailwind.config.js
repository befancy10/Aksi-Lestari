/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'neulisAlt-SemiBold': ["NeulisAlt-SemiBold"],
        'neulisAlt-Reguler': ["NeulisAlt-Reguler"],
        'neulisAlt-Reguler2': ["NeulisAlt-Reguler2"],
        'neulisAlt-Medium': ["NeulisAlt-Medium"],
        'neulis-Bold': ["Neulis-Bold"],
        'neulis-SemiBold': ["Neulis-SemiBold"],
        'monserrat-bold': ["Montserrat", "sans-serif"],
      },
      colors: {
        'hijau':{
          100: "#D7DDC2",
          200: "#A3B372",
          300: "#4E7E41",
        },
        'putih': "#FBFEFF",
      },
      fontSize:{
        navbar: ['1.125rem', {
          lineHeight: '23px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        navbar2: ['14px', {
          lineHeight: '20px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        button: ['16px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: 700,
        }],
        head1: ['64px', {
          lineHeight: '84px',
          letterSpacing: '-0.01em',
          fontWeight: 700,
        }],
        buttonExplore: ['24px', {
          lineHeight: '36px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
      },
    },
  },
  plugins: [],
};

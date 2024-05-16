/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'neulisAlt-SemiBold': ["NeulisAlt-SemiBold"],
        'neulisAlt-Bold': ["NeulisAlt-Bold"],
        'neulisAlt-Reguler': ["NeulisAlt-Reguler"],
        'neulisAlt-Reguler2': ["NeulisAlt-Reguler2"],
        'neulisAlt-Medium': ["NeulisAlt-Medium"],
        'neulisAlt-MediumItalic': ["NeulisAlt-MediumItalic"],
        'neulis-Bold': ["Neulis-Bold"],
        'neulis-SemiBold': ["Neulis-SemiBold"],
        'monserrat-reguler': ["Montserrat"],
        'monserrat-bold': ["Montserrat-Bold"],
        'miniStory': ["MiniStory"],
        'miniStory-Bold': ["MiniStory-Bold"],
      },
      colors: {
        'hijau':{
          100: "#D7DDC2",
          200: "#A3B372",
          300: "#4E7E41",
        },
        'putih': "#FBFEFF",
        'putihFont': "#FFFFFF",
        'putihBg': "#F5F5F5",
        'hitamFont': "#1F1F1F",
        'abuBg': "#F7F7F7"
      },
      fontSize:{
        navbar: ['1.125rem', {
          lineHeight: '23px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon1218: ['12px', {
          lineHeight: '18px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon1218_700: ['12px', {
          lineHeight: '18px',
          letterSpacing: '-0.01em',
          fontWeight: 700,
        }],
        navbar2: ['14px', {
          lineHeight: '20px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon1421: ['14px', {
          lineHeight: '21px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        button: ['16px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: 700,
        }],
        button400: ['16px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon2030: ['20px', {
          lineHeight: '30px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
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
        head2: ['36px', {
          lineHeight: '54px',
          letterSpacing: '-0.01em',
          fontWeight: 700,
        }],
        fon3654_400: ['36px', {
          lineHeight: '54px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon5075: ['50px', {
          lineHeight: '75px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
      },
    },
  },
  plugins: [],
};

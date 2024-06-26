/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'na-SB': ["NeulisAlt-SB"],
        'na-B': ["NeulisAlt-B"],
        'na-Reg': ["NeulisAlt-Reg"],
        'na-S': ["NeulisAlt-S"],
        'na-M': ["NeulisAlt-M"],
        'diff': ["NeulisAlt-Diff"],
        'n-B': ["Neulis-B"],
        'n-SB': ["Neulis-SB"],
        'm-R': ["Montserrat"],
        'm-B': ["Montserrat-B"],
        'ms': ["MiniStory"],
        'ms-B': ["MiniStory-B"],
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
        fon812: ['8px', {
          lineHeight: '12px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon1014: ['10px', {
          lineHeight: '14px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon1014_700: ['10px', {
          lineHeight: '14px',
          letterSpacing: '-0.01em',
          fontWeight: 700,
        }],
        navbar: ['1.125rem', {
          lineHeight: '23px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon1116_400: ['11px', {
          lineHeight: '16px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon1216_400: ['12px', {
          lineHeight: '16px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon1216_700: ['12px', {
          lineHeight: '16px',
          letterSpacing: '-0.01em',
          fontWeight: 700,
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
        fon1822_400: ['18px', {
          lineHeight: '22px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon1822_500: ['18px', {
          lineHeight: '22px',
          letterSpacing: '-0.01em',
          fontWeight: 500,
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
        fon2848_700: ['28px', {
          lineHeight: '48px',
          letterSpacing: '-0.01em',
          fontWeight: 700,
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
        fon4464_400: ['44px', {
          lineHeight: '64px',
          letterSpacing: '-0.01em',
          fontWeight: 400,
        }],
        fon4464_700: ['44px', {
          lineHeight: '64px',
          letterSpacing: '-0.01em',
          fontWeight: 700,
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

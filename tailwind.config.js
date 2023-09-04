/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue'       : '#3461FF',
      'bluehover'  : '#1B46E0',
      'white'      : '#FFFFFF',
      'lightgray'  : '#F5F5F5',
      'darkgray'   : '#565656',
      'buttonbg'   : '#E5EBFF',
      'partnersbg' : '#FAFAFA',
      'invblack'  : 'rgba(0, 0, 0, 0.6)',
    },
    fontFamily: {
      'poppings': 'Poppins , sans-serif',
    },
    extend: {
      spacing: {
        '16p'  : '16px',
        '18p'  : '18px',
        '72p'  : '72px',
        '100p' : '100px',
        '155p' : '155px',
        '286p' : '286px',
        '375p' : '343px',
        '448p' : '448px',
      },
      fontSize: {
        '28p' : '28px',
        '40p' : '40px',
        '64p' : '64px',
      }
    }
  },
  plugins: [],
}

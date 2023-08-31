/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue'       : '#3461FF',
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
        '375p' : '343px',
        '448p' : '448px',
      },
      fontSize: {
        '40p' : '40px',
      }
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue'      : '#3461FF',
      'lightgray' : '#F5F5F5',
      'darkgray'  : '#565656',
      'buttonbg'  : '#E5EBFF',
      'invblack'  : 'rgba(0, 0, 0, 0.6)',
    },
    fontFamily: {
      'poppings': 'Poppins , sans-serif',
    },
    extend: {
      spacing: {
        '16p' : '16px',
        '18'  : '18px',
        '100' : '100px',
        '375' : '343px',
        '540' : '540px',
      }
    }
  },
  plugins: [],
}

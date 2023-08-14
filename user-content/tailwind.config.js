/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center:true,
      screens: {
        lg: '1225px',
        xl: '1225px',
        '2xl': '1225px',
      }
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        open :  ['Open Sans', 'sans-serif'],
      },
      colors: {
        'pro-red': '#BC1A45',
        'pro-melon':'#FFD369',
        'pro-grey': '#666666',
        'pro-opengrey': '#DDDDDD',
        'pro-white': '#F7F7F7',
      },

      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};


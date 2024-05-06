/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#262836',
        'brand-red': '#ce011f',
        'light-bg' : '#f2f3f7'
      },
      height: {
        '544px' : '34rem',
        '404px' : '25.25rem',
        '464px' : '29rem',
        '592px' : '37rem'
        
      },
      width:{
        '784px' : '49rem',
        '400px' : '25rem',
        '944px' : '59rem'
      },
      margin:{
        'left' : '44.7rem',
        'top' : '3.25rem',
        '135px' : '8.438rem',
        's-top' : '3.25rem',
        's-left' : '17.2rem'
      },
      gridColumn:{
        'start-end' : '1 / 3',
      }
    },
  },
  plugins: [],
}


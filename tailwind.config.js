/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      'mob1': {'max': '425px'},
      'md':{'min': '767px'},
      'lg':{'min': '992px'},

    },
    zIndex:{
      'z-one': '-1',
    },
    flexBasis:{
      'new':'24%'
    }
  },
  plugins: [],
}


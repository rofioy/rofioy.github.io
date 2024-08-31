/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ["SUSE", "Ubuntu", "sans-serif"],
      },
      colors: {
        'cream': '#FFF5E1',
        'lightGreen': '#01FF9D',
        'navy': '#393F82',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}


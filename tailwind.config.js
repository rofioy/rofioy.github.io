/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins']
      },
      daisyui: {
        themes: ["light", "dark", "cupcake", "forest"],
      },
      borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'half': '6rem'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


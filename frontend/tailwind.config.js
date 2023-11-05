/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderColor: theme => ({
       DEFAULT: theme('colors.gray.300', 'currentColor'),
       'american-bright-blue': '#0084FF'
     }),

    extend: {
      fontFamily:{
      'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      textColor: {
        'american-red': '#D35757',
        'american-bright-blue': '#0084FF'
      },
      borderColor: {
        'american-red': '#D35757',
        'american-bright-blue': '#0084FF'
      },
      backgroundColor: {
        'american-blue-bg': '#002445',
        'american-red-bg': '#D35757',
        "american-red-2": "#A86666",
        "american-blue-2": "#0759A6"
      },
    },
  },
  plugins: [],
}
const colors = require('tailwindcss/colors')



module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes:{
        fadeOut :{
          '0%,100%': {opacity:0},
          '40%': {opacity:.5,	transform: 'scale(1.5)'},
        }
      },
      animation: {
        fadeOut: 'fadeOut 1.5s ease-in-out infinite',
        'pulse-slow': 'spin 3s linear infinite',
      },
      colors:{
        'fountain-blue': {
          DEFAULT: '#6AA9C7',
          '50': '#EFF6F9',
          '100': '#E1EDF4',
          '200': '#C3DCE8',
          '300': '#A5CBDD',
          '400': '#88BAD2',
          '500': '#6AA9C7',
          '600': '#4490B5',
          '700': '#35708C',
          '800': '#254F63',
          '900': '#162F3B'
        },
        'warm-gray': colors.warmGray,
          teal: colors.teal,
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

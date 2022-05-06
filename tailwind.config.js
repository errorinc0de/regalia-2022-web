const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      background: '#0D0D0D',
      text: '#E6E6E6',
      accent: '#0B74BF',
      debug: '#9D174D',
    },
    fontFamily: {
      primary: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      title: [
        '5rem',
        {
          letterSpacing: '0.25rem',
          lineHeight: '5rem',
        },
      ],
      'sub-title': [
        '2.25rem',
        {
          letterSpacing: '0rem',
          lineHeight: '2.5rem',
        },
      ],
      heading: [
        '2.25rem',
        {
          lineHeight: '2rem',
        },
      ],
      base: [
        '1rem',
        {
          letterSpacing: '0.05rem',
          lineHeight: '1.5rem',
        },
      ],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
  },
  plugins: [],
}

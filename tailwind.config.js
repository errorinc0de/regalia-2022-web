const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        dark: '#181818',
        light: '#e6e6e6',
        background: '#0D0D0D',
        text: '#F2F2F2',
        accent: '#0b74bf',
        debug: '#9D174D',
      },
      screens: {
        m: { raw: '(max-width: 600px)' }, // m as mobile
        t: { raw: '(max-width: 786px)' }, // t as tablet
      },
      fontSize: {
        title: [
          '5rem',
          {
            lineHeight: '5rem',
          },
        ],
        'sub-title': [
          '2.25rem',
          {
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
        sm: ['0.8rem', { letterSpacing: '0.0125rem' }],
        mini: ['0.625rem'],
        micro: ['0.5rem'],
      },
    },
    fontFamily: {
      primary: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
  },
  plugins: [require('flowbite/plugin')],
}

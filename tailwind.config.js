const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        body: {
          DEFAULT: '#646464',
          btn: '#454037',
        },
        primary: {
          light: '#CEBFA1',
          DEFAULT: '#8B744A',
          dark: '#8C754D',
          btn: '#cab26d',
        },
        gray: {
          100: '#F6F5F2',
          200: '#FEFAF2',
          400: '#9D9D9D',
        }
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      fontFamily: {
        'title': ['Ogilen', ...defaultTheme.fontFamily.serif],
        'heading': ['Diamond Bridge Demo', ...defaultTheme.fontFamily.serif],
        'body': ['Baskervville', ...defaultTheme.fontFamily.sans],
        'slab': ['Battambang', ...defaultTheme.fontFamily.sans],
        'sans': [...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bg: '#eee',
      text: '#000',
      fg: '#000',
    },
    fontFamily: 'Roboto Mono',
    fontWeight: {
      reg: 400,
      med: 500,
      bold: 700
    },
    lineHeight: '2rem',
    fontSize: {
      sm: '1rem',
      md: '1.20rem',
      lg: '2.5rem',
      xl: '3.75rem'
    },
    extend: {
      lineHeight: {
        'tight': '4rem',
        '12': '3rem',
      },
      fontFamily: {
        'Satoshi': ['Satoshi', 'sans-serif']
      },
      opacity: {
        '50': '0.5'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    })
  ],
}
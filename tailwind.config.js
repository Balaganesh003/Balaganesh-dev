/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        textSlate: '#8892b0',
        lightSlate: '#ccd6f6',
        primary: '#0c1324',
        bgNavy: '#0a192f',
        bgLightNavy: '#112240',
        textGreen: '#64ffda',
        secondary: 'rgba(0, 212, 255, 1)',
        headingColor: 'rgba(9, 9, 121, 1)',
      },
      fontFamily: {
        sans: ['SF Mono'],
      },
      keyframes: {
        giggleLeft: {
          '0%': {
            transform: 'translateX(5px)',
          },
          '50%': {
            transform: 'translateX(-5px)',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
        giggleRight: {
          '0%': {
            transform: 'translateX(-5px)',
          },
          '50%': {
            transform: 'translateX(5px)',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        giggleLeft: 'giggleLeft 300ms ease-in-out',
        giggleRight: 'giggleRight 300ms ease-in-out',
      },
    },
  },
  plugins: [],
};

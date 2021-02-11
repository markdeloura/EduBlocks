const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "python": "#3776AB",
        "microbit": "#00ED00",
        "raspberrypi": "#C51A4A",
        "circuitpython": "#64338e",
        'light-blue': colors.lightBlue,
        teal: colors.teal,
        rose: colors.rose,
        pink: {
          "200": "#F5A5C1",
          "300": "#F177A2",
          "400": "#EC4A83",
          "500": "#ff0066",
          "600": "#B91750"
        },
        navy: {
          "100": "#D1D1D8",
          "200": "#A4A2B1",
          "300": "#76748B",
          "400": "#393857",
          "500": "#1B173D",
          "600": "#161231",
          "700": "#100E25",
          "800": "#0B0918",
          "900": "#05050C",
        }
      }
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
      opacity: ['dark'],
      backgroundOpacity: ['dark'],
      borderOpacity: ['dark'],
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        semiFull: '60%',
        grid: '35%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

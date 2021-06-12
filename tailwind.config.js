const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './*.html',
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header': `url('./images/mobile/image-header.jpg')`,
        'header-desktop': `url('./images/desktop/image-header.jpg')`
      })
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#47C1FD',
      'secondary': '#FBD601',
    }),
    fontFamily: {
      'sans': ['Barlow', ...defaultTheme.fontFamily.sans],
      'serif': ['Fraunces', ...defaultTheme.fontFamily.serif]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

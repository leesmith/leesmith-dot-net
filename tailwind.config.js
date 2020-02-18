const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['inter', ...defaultTheme.fontFamily.sans]
      },
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}

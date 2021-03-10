module.exports = {
  purge: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  separator: '_',
  theme: {
    extend: {
      fontFamily: {
        sans: ['open-sans', 'sans-serif'],
        logo: ['pacifico', 'sans-serif'],
      },
    },
    colors: {
      turquoise: {
        light: '#defff3',
        DEFAULT: '#c3f4e4',
        dark: '#b2e0d1',
      },
      purple: {
        light: '#d1dffe',
        dark: '#afc8fd',
      },
      yellow: {
        light: '#fffcad',
        dark: '#f0eda2',
      },
      blue: {
        light: '#148cb7',
        dark: '#0076a5',
      },
      brown: {
        light: '#e5b58f',
        dark: '#cea182',
      },
      white: '#fff',
      gray: '#848484',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  separator: '_',
  theme: {
    extend: {
      backgroundImage: {
        flowers: "url('~/assets/flowers.svg')",
        basket: "url('~/assets/basket.svg')",
      },

      backgroundPosition: {
        'x-5': '5% 0%',
      },

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
        DEFAULT: '#0076a5',
        dark: '#0E6E90',
        darker: '#0F6889',
      },
      brown: {
        light: '#e5b58f',
        dark: '#cea182',
      },
      white: '#fff',
      black: '#000',
      gray: '#848484',
      transparent: 'transparent',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

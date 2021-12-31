module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'palais-j': "url('~assets/img/compress/palaisj.jpg')",
      }),
      colors: {
        gold: '#FFDF00',
      },
      spacing: {
        80: '20rem',
        108: '27rem'
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'font-sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

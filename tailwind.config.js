module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
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
  plugins: [],
}

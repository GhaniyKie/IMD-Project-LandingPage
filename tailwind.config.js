module.exports = {
  purge: [
    'index.html',
    'main.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        biru: {
          muda: '#B5EAEA',
          tua: '#2D6060',
          border: '#83C6C6',
          'text-border': '#428585'
        }
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

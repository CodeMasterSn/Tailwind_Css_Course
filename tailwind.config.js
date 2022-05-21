module.exports = {
  purge: [
    "./public/index.html"
  ],
  darkmode: false, //or 'media' or 'class'
  content: [],
  theme: {
    screens: {
      'mobile': '425px',
      // =>@media(min-width: 425px) {...}
      'tablet': '640px',
      // =>@media(min-width: 640px) {...}
      
      'up-tablet': '768px',
      // =>@media(min-width: 768px) {...}
      
      
      'laptop': '1024px',
      // =>@media(min-width: 1024px) {...}
      
      'desktop': '1280px',
      // =>@media(min-width: 1280px) {...}

    },
    extend: {},
  },
  variants: {
    extends: {},
  },
  plugins: [],
}

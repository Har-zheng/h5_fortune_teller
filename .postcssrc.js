module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines', '.van-', /^(.van)/, /^(.igno)/, 'van'], // 拥有该类名的元素保留px单位
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
      mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
    },
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    },

    "autoprefixer": {
      "browsers": ["Android >= 4.0", "iOS >= 7"]
    },
    "postcss-pxtorem": {
      "rootValue": 37.5,
      "propList": ["*"]
    }
  }
}
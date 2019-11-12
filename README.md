# h5_fortune_teller

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 记录下问题 
> 判断打开页面的环境是 微信 还是普通浏览器  如果是微信 摄像头的调用 直接使用微信的Js sdk
### vant 使用vw 方案时 vant样式也被vw话了 显得非常小 调整如下
```javascript
// 参考 https://segmentfault.com/q/1010000018826615
"postcss-px-to-viewport": {
  "viewportWidth": "750",
  "viewportHeight": 1334,
  "unitPrecision": 3,
  "viewportUnit": "vw",
  "selectorBlackList": [  // 数组形式  表示元素含有这个类的被忽略掉
    ".ignore",
    ".hairlines",
    ".van-", "/^(.van)/", "/^(.igno)/" // 
  ],
  "minPixelValue": 1,
  "mediaQuery": false
},
```




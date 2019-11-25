<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import comm_fun from './utils/CommonFunction'
import { mapActions } from 'vuex'
import { BeautyLatest } from './api/app'
import vueMixinCom from './mixin/vueMixinCom'
export default {
  mixins: [vueMixinCom],
  data() {
    return {
      _beforeUnload_time: null,
      once: true
    }
  },
  created() {
  },
  mounted() {
    console.log(comm_fun.GetRequestUrl())
    // 初始化 用户刷新时
    let GetRequestUrl_parmes = comm_fun.GetRequestUrl()
    let GetRequestUrl = JSON.stringify(GetRequestUrl_parmes)
    if (GetRequestUrl !== "{}") {
      sessionStorage.setItem('GetRequestUrl', GetRequestUrl)
    } else {
      GetRequestUrl_parmes = JSON.parse(sessionStorage.getItem('GetRequestUrl'))
    }
    this.save_url(GetRequestUrl_parmes)
    // 判断是否第一次进入页面 只执行一次函数
    let session_once =  JSON.parse(sessionStorage.getItem('once')) 
    console.log(session_once)
    if(session_once === null && this.once){
      this.once = false
      this.isBeautyLatest(GetRequestUrl_parmes)
      sessionStorage.setItem('once', this.once)
    }
    const app = sessionStorage.getItem('app')
    if (app !== null) {
      this.set_app(JSON.parse(app))
    }
    comm_fun.initWxShare()
    // 需要知道 当前用户是刷新还是关闭
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
    window.addEventListener('unload', e => this.unloadHandler(e))
  },
  methods: {
    ...mapActions([
      'save_url',
      'set_app'
    ]),
    isBeautyLatest(RequestUrl) {
      const copy_RequestUrl = JSON.parse(JSON.stringify(RequestUrl))
      copy_RequestUrl.client = 2
      // Object.assign({client: 2})
      BeautyLatest(copy_RequestUrl).then(res => {
        if (res.code === 0) {
          let { instance, original_id, result, user_channel_id, image } = res.data
          this.isReload({
            instance,
            original_id,
            result,
            user_channel_id,
            image
          })
          const app = sessionStorage.getItem('app')
          this.set_app(JSON.parse(app))
          this.$router.push({ name: 'facereport' })
        }
        // let 
      })
    },
    beforeunloadHandler(e) {
      this._beforeUnload_time = new Date().getTime();
    },
    unloadHandler(e) {
      console.log(e)
      this._gap_time = new Date().getTime() - this._beforeUnload_time;
      console.log(this._gap_time)
      //判断是窗口关闭还是刷新
      if (this._gap_time <= 5) {  // 小于5毫秒的状态被认为是关闭页面了
        //如果是登录状态，关闭窗口前，移除用户信息
        console.log(_gap_time)
        sessionStorage.removeItem("GetRequestUrl");
        sessionStorage.removeItem("app");
        sessionStorage.removeItem('once')
      }
    }
  },
  destroyed() {
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
    window.addEventListener('unload', e => this.unloadHandler(e))
  }
}
</script>
<style>
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: "PingFangSC-Regular", "PingFangSC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>

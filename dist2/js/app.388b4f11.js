(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fbd2f012","chunk-08246f02":"15bd0dcc","chunk-1100cea6":"70a16dc1","chunk-24e5d28b":"d5aea357","chunk-57724717":"e760d219","chunk-57b2c6b0":"28e69f50","chunk-69fe14a0":"b07fa175","chunk-cd9f5fa8":"045cb946"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-08246f02":1,"chunk-1100cea6":1,"chunk-24e5d28b":1,"chunk-57724717":1,"chunk-57b2c6b0":1,"chunk-69fe14a0":1,"chunk-cd9f5fa8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"26deefef","chunk-08246f02":"68037ace","chunk-1100cea6":"9155cc76","chunk-24e5d28b":"6f21db7f","chunk-57724717":"b3ef1665","chunk-57b2c6b0":"81692463","chunk-69fe14a0":"3aa93d90","chunk-cd9f5fa8":"42152d17"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("5cf0"),r=n.n(o);r.a},"1d99":function(e,t,n){"use strict";var o=n("23d5"),r=n.n(o);r.a},"23d5":function(e,t,n){},"3fe5":function(e,t,n){"use strict";var o=n("ea7e"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("96dd"),n("a60a"),n("e783"),n("8b1f");var o=n("6e6d"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("efce"),n("4634"),n("ed8b"),n("97a3")),s=n("be57"),c=n("591a"),u=n("b562");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={created:function(){},methods:f({},Object(c["b"])(["save_url","set_app"])),mounted:function(){console.log(s["a"].GetRequestUrl());var e=JSON.stringify(s["a"].GetRequestUrl());if("{}"!==e)sessionStorage.setItem("GetRequestUrl",e),this.save_url(s["a"].GetRequestUrl());else{var t=JSON.parse(sessionStorage.getItem("GetRequestUrl"));this.save_url(t)}var n=sessionStorage.getItem("app");null!==n&&this.set_app(JSON.parse(n)),s["a"].initWxShare()}},d=p,m=(n("034f"),n("4e82")),h=Object(m["a"])(d,r,a,!1,null,null,null),g=h.exports,v=n("c478"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("div",{staticClass:"conetnt"},[n("p",{staticClass:"title"},[n("i",{staticClass:"icon"}),n("span",[e._v(e._s(e.title))]),n("span",[e._v(e._s(e.title2))])]),n("div",{staticClass:"img-Head",class:{ConfirmCss:e.isConfirm}},[n("i",{ref:"img_Head"},[n("img",{ref:"top_img",class:{imgRotate:e.isRotate},attrs:{radius:"6",src:e.photo_img}})])]),n("div",{staticClass:"head-icon"},[n("p",{staticClass:"title"},[e._v(e._s(e.isTitle))]),n("p",{staticClass:"icon"})]),n("BaseRouterTransition",[n("p",{directives:[{name:"show",rawName:"v-show",value:e.isConfirm,expression:"isConfirm"}],staticClass:"title tip"},[e._v("满足以下要求，结果更准确")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isConfirm,expression:"isConfirm"}],staticClass:"need"},[n("div",{staticClass:"item"},[e._v("正面")]),n("div",{staticClass:"item"},[e._v("五官清晰")]),n("div",{staticClass:"item"},[e._v("不戴眼镜")]),n("div",{staticClass:"item"},[e._v("面部呈现完整")]),n("div",{staticClass:"item"},[e._v("无刘海遮挡")])]),n("BaseRouterTransition",[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isConfirm,expression:"!isConfirm"}],staticClass:"need-confirm"},[n("div",{staticClass:"need-confirm-content"},[n("p",[e._v("\n            头部姿势：\n            "),n("span",[e._v("正面")]),n("img",{attrs:{src:e.tip_img.correct,alt:""}})]),n("p",[e._v("\n            左眼状态：\n            "),n("span",[e._v("睁眼，未戴眼镜")]),n("img",{attrs:{src:e.tip_img.correct,alt:""}})]),n("p",[e._v("\n            右眼状态：\n            "),n("span",[e._v("睁眼，未戴眼镜")]),n("img",{attrs:{src:e.tip_img.correct,alt:""}})])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isConfirm,expression:"isConfirm"}],staticClass:"photograph-btn"},[n("van-uploader",{staticClass:"button",attrs:{"after-read":e.afterRead}},[n("van-button",{staticClass:"button-div btn_photo_bg",attrs:{id:"btn_photo",type:"primary"}},[n("van-icon",{attrs:{color:"#84FF00",size:"4vw",name:"photograph"}}),e._v("拍照/上传照片\n        ")],1)],1),n("p",[e._v("HTTP://WWW.MYREAL3D.COM")])],1),n("BaseRouterTransition",[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isConfirm,expression:"!isConfirm"}],staticClass:"bottom_btn"},[n("div",{staticClass:"button button-conf"},[n("van-button",{staticClass:"button-div btn_photo_bg btn_photo_color",attrs:{type:"primary"},on:{click:e.handleBtnAgain}},[e._v("重新上传")]),n("van-button",{staticClass:"button-div button-cancel btn_photo_bg",on:{click:e.handleBtnConfirm}},[e._v("确认上传")])],1),n("p",[e._v("HTTP://WWW.MYREAL3D.COM")])])])],1)])},w=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bg-img"},[o("img",{attrs:{src:n("a45f")}})])}],A=(n("7cfd"),n("61b7")),y=n("98e6"),_=n("143c"),x=n("855a");n("2427");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=n("65f6"),U={data:function(){return{title:"测测你颜值",title2:"属于哪一种类型?",isTitle:"",photo_img:n("b76f"),isConfirm:!0,tip_img:{correct:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA4CAMAAABwmqASAAAAk1BMVEUAAAADxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwUDxwWPcL6XAAAAMHRSTlMA8QX6o03dzunlJh8QCPbWsZQ3KgvtvbacfnJqXllBPjMWx4tvY0guHfOpgnlmU7/6TN/xAAABlUlEQVRIx53W15qCMBQE4NARCypYsGJbuzvv/3T7yeKaclaS/PdDAswJMDtZ3y7X3XmxVXAYApFNsPAATMxznQmepsbBdopKYRo8tvDrYBhcOagFZsF1Dy+lWfCMP4nRa3TwdjIIJjE4Hf3gJgRvox10xxC0tZNTiIa6wQMkS81g2YOk0Gx5CJnmZPtQOK5OcAHCl85gOSD4GskxCKNBc/AOVbzXuM0TsdepVmv76kbph9NlogCyiK5sEAbihZQOXLrk8+/LR/AVkh05SLeqnQ/+UnJfZ+S5lqKSfqjdnBp5nxigIXj0ITvn3lrqUu2hVywj8Bav/UOwV6dvAFFYL7oF76rOUAzZnSiB2vACqlb1toVb6BMVz3wPsrm85Danfxcm6qLiXYb/HsxBS+nKGm9O8uF0k9oS59w+vM9nzsMRh5csKy2JQLuwJrkPSpqzZjeozhnTsfRg++lZO4BUOl2l2OLIZdoSvhS9jDG76N7wD22E2lgvoP74jE7M1MqrTxVzwTP6zWzMAO/IrAywY3Zcv6noP1SEq/OgNc3TAAAAAElFTkSuQmCC",warning:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAM1BMVEUAAAD7ZAD6ZAD7ZAD9YwD7ZAD8ZAD5YQD7ZAD7ZAD7ZAD6ZAD7ZAD7ZAD8ZAD7ZAD7ZADc5bCPAAAAEHRSTlMA6gzDN5dwGNC0ot6BWCRIgBgKRwAAAQpJREFUOMu9lNt2hCAMRUmUi4BO/v9rOx2HniG6CH1o91v0cMkWcf8KeyLPk9kkT9JcOsuLPJNd5c3qbFILJzu7yw+72R0hTFaPVT6o42yUjmhrA3lC2xLCYutbMJ8/h5na+KXF0MelzYZVCg+06bDUsTY6Sxrq851dbpW/19Z49OV6q60Rvssgje2afUgDnrGS4tQGHRvqorNBAKnBEpQ2UoeNP2uKd9rQ/4FK6VOvZH/3Cw4HNumoMaIH6IM2A+hLYpKgrYeee96hp9PH+vmKs3G5F6pe8X5vFdpU5zAEDjzUCzJdJ8HegMc3Vb1kUeDe0GRHMg05+QX4m2wWNDgCJ9cXmaD4w/0dXyVhOsjXZsVVAAAAAElFTkSuQmCC"},file:null,isRotate:!1}},mixins:[x["a"]],components:{BaseRouterTransition:A["a"]},computed:D({},Object(c["c"])({parmes_url:function(e){return e.app.save_url}})),methods:D({},Object(c["b"])(["set_app"]),{afterRead:function(e){this.file=e,this.ConfirmUpload(e)},ConfirmUpload:function(e){console.log(e),this.photo_img=e.content,this.isTitle="确认照片",this.isConfirm=!1,this.getImgExif(e)},handleBtnConfirm:function(){var e=this;console.log("上传");var t=y["a"].loading({duration:0,message:"图片正在上传...",forbidClick:!0,loadingType:"spinner"});Object(u["c"])({version:1}).then((function(n){var o=n.data;console.log(o);var r=new C({getAuthorization:function(e,t){t({TmpSecretId:o.credentials.tmpSecretId,TmpSecretKey:o.credentials.tmpSecretKey,XCosSecurityToken:o.credentials.sessionToken,ExpiredTime:o.expiredTime})}}),a=e.file,i=e;a&&r.putObject({Bucket:o.bucket,Region:o.region,Key:"h5/ai/beauty/images/".concat((new Date).getTime(),"_")+a.file.name,Body:a.file},(function(e,n){n&&i.img_success(n,i,t,a.content),console.log(e||n)}))}))},img_success:function(e,t,n,o){var r=this,a=s["a"].img_location(e),i=t.parmes_url,c=i.channel_id,l=i.instance_id,f=i.client,p=i.open_id;console.log(t.parmes_url);var d={version:1,data:{channel_id:c,instance_id:l,image:a,client:f}};void 0!==p&&(d.data["open_id"]=p),Object(u["a"])(d).then((function(e){if(console.log(e),n.clear(),0===e.code){var t=e.data,a=t.instance,i=t.original_id,s=t.result,c=t.user_channel_id;r.$router.push({name:"analysisnew"}),r.isReload({parmes_data:d.data,instance:a,original_id:i,result:s,imgContent:o,user_channel_id:c})}else alert(JSON.stringify(e)),_["a"].alert({message:"图片上传失败!请重试"}).then((function(){r.$router.push({name:"PhotoPage"})}))})).catch((function(e){n.clear(),_["a"].alert({message:"图片上传超时!请重试"}).then((function(){r.$router.push({name:"PhotoPage"})}))}))},isReload:function(e){console.log(e),this.set_app(e),sessionStorage.setItem("app",JSON.stringify(e))},handleBtnAgain:function(){var e=this.$refs.top_img;e.style.left=0,e.style.marginLeft=0,this.isConfirm=!0,this.isRotate=!1,this.photo_img=n("b76f")}})},S=U,k=(n("5c95"),Object(m["a"])(S,b,w,!1,null,"66347a10",null)),P=k.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("div",{staticClass:"app--content",attrs:{"ios-scroll":""}},[n("base-router-transition",[n("router-view")],1)],1),n("div",{staticClass:"bar"},[n("TabBar")],1)])},T=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-barss"})},E=[],R={},B=R,N=(n("3fe5"),Object(m["a"])(B,M,E,!1,null,"2b42cd34",null)),L=N.exports,Z={components:{TabBar:L,BaseRouterTransition:A["a"]}},J=Z,Q=(n("1d99"),Object(m["a"])(J,j,T,!1,null,"606b9bd9",null)),q=Q.exports;o["a"].use(v["a"]);var I=new v["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:q,redirect:{name:"faceStart"},children:[{path:"/PhotoPage",name:"PhotoPage",component:P},{path:"/analysis",name:"analysis",component:function(){return n.e("about").then(n.bind(null,"4fe8"))}},{path:"/analysisnew",name:"analysisnew",component:function(){return n.e("chunk-08246f02").then(n.bind(null,"8d99"))}},{path:"/report",name:"report",component:function(){return n.e("chunk-57724717").then(n.bind(null,"71ff"))}},{path:"/facereport",name:"facereport",component:function(){return n.e("chunk-1100cea6").then(n.bind(null,"cb10"))}},{path:"/faceStart",name:"faceStart",component:function(){return n.e("chunk-69fe14a0").then(n.bind(null,"7d52"))}},{path:"/userInfo",name:"userInfo",component:function(){return n.e("chunk-57b2c6b0").then(n.bind(null,"079a"))}},{path:"/bootpage",name:"bootpage",component:function(){return n.e("chunk-24e5d28b").then(n.bind(null,"560c"))}}]},{path:"/friend",name:"friend",component:function(){return n.e("chunk-cd9f5fa8").then(n.bind(null,"71a6"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"4fe8"))}}]}),K={state:{app:{},save_url:{}},mutations:{SET_APP:function(e,t){e.app=t},SAVE_URL:function(e,t){console.log(t),e.save_url=t}},actions:{set_app:function(e,t){var n=e.commit;n("SET_APP",t)},save_url:function(e,t){var n=e.commit;n("SAVE_URL",t)}}},V=K,H={user:function(e){return e.app.name}},W=H;o["a"].use(c["a"]);var z=new c["a"].Store({modules:{app:V},state:{},mutations:{},actions:{},getters:W}),F=n("19f7");n("49e4");o["a"].use(F["a"]),o["a"].config.productionTip=!1,new o["a"]({router:I,store:z,render:function(e){return e(g)}}).$mount("#app")},"5c95":function(e,t,n){"use strict";var o=n("cfd9"),r=n.n(o);r.a},"5cf0":function(e,t,n){},"61b7":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade",mode:"out-in"},on:{beforeLeave:e.beforeLeave,enter:e.enter,afterEnter:e.afterEnter}},[e._t("default")],2)},r=[],a={name:"BaseRouterTransition",data:function(){return{prevHeight:0}},methods:{beforeLeave:function(e){this.prevHeight=getComputedStyle(e).height},enter:function(e){var t=getComputedStyle(e),n=t.height;e.style.height=this.prevHeight,setTimeout((function(){e.style.height=n}))},afterEnter:function(){}}},i=a,s=(n("b000"),n("4e82")),c=Object(s["a"])(i,o,r,!1,null,null,null);t["a"]=c.exports},"686d":function(e,t,n){},"855a":function(e,t,n){"use strict";n("4634");var o=n("6326"),r=n.n(o);t["a"]={methods:{getImgExif:function(e){var t=this;r()(e.file,(function(e,n){console.log(n);try{if(n.hasOwnProperty("exif")){var o=n.exif.get("Orientation");6===o&&(t.isRotate=!0)}}catch(r){console.log(r)}}),{meta:!0}),this.imgPosition()},imgPosition:function(){var e=this;setTimeout((function(){var t=e.$refs.top_img,n=e.$refs.img_Head,o=e.$refs.swipe_img,r=t.clientWidth,a=n.clientWidth;if(console.log(r),r>a){t.style.position="absolute";var i=r-a;t.style.left="-".concat(i/2,"px"),console.log(t.style.left)}else t.style.position="absolute",t.style.left="50%",t.style.marginLeft="-".concat(r/2,"px"),console.log(t.style.left);void 0!==o&&o.forEach((function(t,n){var r=o[n].clientWidth;r||e.imgPosition(),o[n].style.position="absolute",o[n].style.left="50%",o[n].style.marginLeft="-".concat(r/2,"px")}))}),10)}}}},a45f:function(e,t,n){e.exports=n.p+"img/ic_logo2.41661a0c.png"},b000:function(e,t,n){"use strict";var o=n("686d"),r=n.n(o);r.a},b562:function(e,t,n){"use strict";var o=n("2427"),r=n.n(o),a=n("3f98"),i=r.a.create({baseURL:"http://core-service.myreal3d.com",timeout:12e5});i.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),i.interceptors.response.use((function(e){console.log(e);var t=e.data;return 200!==e.status?(Object(a["a"])({message:t.message||"Error",type:"warning",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||Object(a["a"])({type:"warning",message:t.code}),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Promise.reject(e)}));var s=i;function c(e){return s({url:"/api/stsupload",method:"post",data:e})}function u(e){return s({url:"/api/ai/beauty",method:"post",data:e})}function l(e){return s({url:"http://core-service.myreal3d.com/api/wxgetreport",method:"POST",data:e})}function f(e){return s({url:"http://core-service.myreal3d.com/api/sendcode",method:"POST",data:e})}function p(e){return s({url:"/api/ai/bind",method:"POST",data:e})}n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return p}))},b76f:function(e,t,n){e.exports=n.p+"img/touxiang.2f7e6b94.png"},be57:function(e,t,n){"use strict";n("ed8b"),n("ebec"),n("4634"),n("e6d1");var o=n("debc"),r=n.n(o),a=n("00ca");function i(e){var t=e.Location,n=/^http:\/\/.*/i.test(t),o=/^https:\/\/.*/i.test(t);return n||o||(t="http://"+t),t}function s(){var e=window.location.hash,t={},n=e.substring(e.indexOf("?")+1).split("&");return n.forEach((function(e,n){var o=e.split("=");Object.defineProperty(t,o[0],{value:o[1],enumerable:!0})})),t}function c(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}function u(){if(console.log(c()),c()){var e=function(e){console.log(e);var t=s(),n=t.channel_id,o=t.instance_id,r=t.client;a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone"]}),a.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone"],success:function(e){console.log(e)}}),a.ready((function(){a.onMenuShareTimeline({title:"海洋鱼类图鉴",desc:"测！你能否统领这片海洋",link:"http://h5.myreal3d.com/fortune-teller/#/bootpage?channel_id=".concat(n,"&instance_id=").concat(o,"&client=").concat(r),imgUrl:"https://report.myreal3d.com/statics/img/shore.png",success:function(){alert("分享成功!")},cancel:function(){alert("未分享!")}}),a.onMenuShareAppMessage({title:"海洋鱼类图鉴",desc:"测！你能否统领这片海洋",link:"http://h5.myreal3d.com/fortune-teller/#/bootpage?channel_id=".concat(n,"&instance_id=").concat(o,"&client=").concat(r),imgUrl:"https://report.myreal3d.com/statics/img/shore.png",success:function(){alert("分享成功!")},cancel:function(){alert("未分享!")}}),a.onMenuShareQQ({title:"海洋鱼类图鉴",desc:"测！你能否统领这片海洋",link:"http://h5.myreal3d.com/fortune-teller/#/bootpage?channel_id=".concat(n,"&instance_id=").concat(o,"&client=").concat(r),imgUrl:"https://report.myreal3d.com/statics/img/shore.png",success:function(){alert("分享成功!")},cancel:function(){alert("未分享!")}}),a.onMenuShareQZone({title:"海洋鱼类图鉴",desc:"测！你能否统领这片海洋",link:"http://h5.myreal3d.com/fortune-teller/#/bootpage?channel_id=".concat(n,"&instance_id=").concat(o,"&client=").concat(r),imgUrl:"https://report.myreal3d.com/statics/img/shore.png",success:function(){alert("分享成功!")},cancel:function(){alert("未分享!")}})})),a.error((function(e){console.log(JSON.stringify(e))}))},t=window.location.href;r.a.ajax({type:"post",url:"https://wechat-api.myreal3d.com/api/jssdk/config",async:!1,data:{channel_id:"M3D",url:t},success:function(t){console.log(t),console.log(t.data);var n=null;void 0!==t.data.config&&(n=t.data.config);var o=Object.keys(n);o.length>=4?e(n):console.log("微信JSSDK缺少必要信息!")},error:function(e){alert("".concat(JSON.stringify(e),"错误"))}})}}function l(){window.onbeforeunload=function(){};var e=window.event.screenX-window.screenLeft,t=e>document.documentElement.scrollWidth-20;t&&window.event.clientY<0||window.event.altKey?(alert("是关闭而非刷新"),window.event.returnValue=""):alert("是刷新而非关闭")}t["a"]={img_location:i,GetRequestUrl:s,initWxShare:u,onbeforeunloadEnvt:l}},cfd9:function(e,t,n){},ea7e:function(e,t,n){}});
//# sourceMappingURL=app.388b4f11.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"25f5":function(t,s,e){},"4fe8":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"analysis"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isReport,expression:"isReport"}],staticClass:"content"},[a("div",{staticClass:"img-Head"},[a("div",{staticClass:"Head-radius"},[a("img",{staticClass:"transtion",attrs:{src:e("a6ba"),alt:""}}),a("van-image",{attrs:{round:"",src:t.imageHead},on:{error:t.errorimg}})],1),t._m(0)]),t._m(1),t._m(2),a("div",{staticClass:"transtion-css"},[a("img",{class:[t.status],attrs:{src:e("7dab"),alt:""}})]),a("div",{staticClass:"status-info"},[a("p",[t._v("\n        "+t._s(t.statusInfo[t.statusInfoNum].up)+"\n        "),a("i",{class:{active_:t.isActive.isActive1}})]),a("p",[t._v("\n        "+t._s(t.statusInfo[t.statusInfoNum].and)+"\n        "),a("i",{class:{active_:t.isActive.isActive2}})]),a("p",[t._v("\n        "+t._s(t.statusInfo[t.statusInfoNum].down)+"\n        "),a("i",{class:{active_:t.isActive.isActive3}})])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isReport,expression:"!isReport"}],staticClass:"report"},[a("div",{staticClass:"img-Head"},[a("div",{staticClass:"Head-radius"},[a("van-image",{attrs:{round:"",src:t.imageHead},on:{error:t.errorimg}})],1),a("p",[t._v("报告已生成!")])]),a("div",{staticClass:"report-input"},[a("div",{staticClass:"input-content"},[a("input",{directives:[{name:"show",rawName:"v-show",value:!t.isName,expression:"!isName"},{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入姓名领取报告"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),a("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.isName,expression:"!isName"}],attrs:{type:"info"},on:{click:t.handleSaveName}},[t._v("保存")]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.isName,expression:"isName"}]},[t._v(t._s(t.name))])],1)]),a("div",{staticClass:"receive"},[a("van-button",{class:{saveName:t.isName},attrs:{disabled:!t.isName,type:"info"},on:{click:t.handleReceiveReport}},[t._v("领取报告")])],1)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"feature"},[e("p",[t._v("上庭")]),e("p",[t._v("中庭")]),e("p",[t._v("下庭")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"title"},[a("img",{attrs:{src:e("f122")}}),t._v(" 智能解码中\n      "),a("img",{attrs:{src:e("7c43")}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"process-item"},[e("div",[t._v("测量三庭")]),e("div",[t._v("定位五官")]),e("div",[t._v("综合分析")])])}],A=(e("7cfd"),{data:function(){return{imageHead:e("84a6"),isActive:{isActive1:!1,isActive2:!0,isActive3:!0},status:"transtion-one",statusInfo:[{up:"上庭数据提取中",and:"中庭数据提取中",down:"下庭数据提取中"},{up:"定位眼长、眼高",and:"定位鼻高、鼻翼宽",down:"定位嘴宽、嘴唇厚度"},{up:"量取下颌角度",and:"对比各部位数据",down:"匹配五行格局"}],statusInfoNum:0,isReport:!0,name:"",isName:!1}},mounted:function(){},methods:{errorimg:function(t){console.log(t)},updateStatus:function(){var t=this;setTimeout((function(){t.statusInfoNum=1,t.status="transtion-two",s()}),2e3);var s=function(){setTimeout((function(){t.statusInfoNum=2,t.status="transtion-three",e()}),6e3)},e=function(){setTimeout((function(){t.isReport=!1}),2e3)}},handleSaveName:function(t){console.log(this.name),this.isName=!0},handleReceiveReport:function(){this.$router.push({name:"report"})}}}),n=A,o=(e("bb5a"),e("4e82")),r=Object(o["a"])(n,a,i,!1,null,"1a674eea",null);s["default"]=r.exports},"7c43":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAUCAMAAADfuh9AAAAAOVBMVEVHcEz39/f7+/v7+/v7+/v7+/v////7+/v6+vr8/Pz7+/v7+/v7+/v7+/v6+vr6+vr8/Pz7+/v6+vq4VfSJAAAAEnRSTlMAESGv64QGzNhGwvWWXS4zangJ6WBiAAAAfUlEQVQoz+2QSxKAIAxDiyDIb0Tvf1hpgVIWblybXTKPJgPcqzzAviYH/MhnxA0dAykcmYYM2YBeW5g6Y3/UpdEGSWx0JLNPdFMJQlHzxf4iYhOEdRgl9hmtWQgq1uw97oqnIFrxnEbLo5cE/Y1Tb8uryjpeBVNVJOEx4fEPZYUczQGfIckAAAAASUVORK5CYII="},"7dab":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMBAMAAACdPPCPAAAAFVBMVEVHcEz6+vr6+vr5+fn6+vr6+vr6+vqJMGXqAAAABnRSTlMAX9Qq9J9YaRgfAAAASUlEQVQI12NgAAJBBihgdjGAspjSFKCssLRUCIMxLS1NAMwyAbKcwSw1ICsJxGBNA4EAIEsMzEoEGuYGZqUYAA2DAAWgYRCQCgAz2BTsaT1X3AAAAABJRU5ErkJggg=="},"84a6":function(t,s,e){t.exports=e.p+"img/test.54da377d.png"},a6ba:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAAAWCAMAAACrHJp8AAAAUVBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////9jlXTzAAAAG3RSTlMA9yFeGP0QAQUK7CoyRlFqO7G/y+KXo4x21oE+GOZEAAADvElEQVRYw+2YiXLiQAxEsWMbH8Hc5vj/D10saUYtzdi1yW5VskeThAWTFPuq1bRms/lG2iba/MMCDC3fjDqQucAv/2shIpY8kKZrgqqmShQvzi/MEmz/GHhrFlnnUYqGciC9kw5R/JivvV5EqsrIsAKIOYbehF+VIksTkzFIJEI4BuCxI42kt/Ft1v5tz6JHryfp4m6kVwLCISAUgmDDKgHoEf4efj/rEYGSIVIqkQMgGRkJ8Ljv7y8978+XbqQra5r4np98ku4kYrhHhoAQPDjEN+MHmd79L3jQOwWRBJcEIFVmaA5gEkbCHmF/8P/SAZlIR9bpeGKdVfLM6xqLf8EhvD+Fn3Hhzlvw3fMr/RBDEHr3GUqRjvFJOjZLRJDJMyC5eiLC4xx4PEQXVn/p5y/R/K9LEL/u/BCGQpEBeoRqQXXgjDAZY0VYuikO7mNqgRZxYkaBTvCKyxKPBAdHoRyFClgkAEEkQUVfFPQDVJtHPd96YMj05psgVBMeAZ/6z0+wOHDUCY4BGKwnxIgWoZpBCSZmpIACHeMWZxY7PMrlok6JSHqHpC7qev6e7xZVxB90nzKM/C6Bn2d3yk5vZIfclBkDI1ovVjMqdlTgRJgYUmDEhFLbhGAhPI8zmibCsU6pi3UoH9IMrTbUisKbDh13QscFZrerpB0DU1wCi1g17KrgKZo7Q2o0pKKXdL6OmDkQOH2YrkKGKw7UbwRViyGBFjoM402iTVlNM6vrBOYCZzlSFZJqF6ZvHK2zbFRPJpQwqjGle82kQiLJjl/xAQ/Z0SM0gc2lz2S//fCU6JowumJshdBam761RNdIH0coQxDpT/vRP606TqcTEt2lVy38LBYb6ReXSQ/TK3woJaVMEx07GSb6kE102xJMd8KSMCx2a/OJiLOatgTxnuNnPhNNS3BAYk3glnAMZpnSzzlFIi1hqai6ql9Cx0pagnSqVptnt1o9y9g9k31tt94pDMLJGDC2ilPSPEPxXGiedzNBWJsOYpRDuj7mm2fa3KV5btOe7ra7ZJtpI79ucb8bSl9Ud2lRXejuN7PMiEVua1WIkWCTfMcyXqXbTLN0rNPyNrPBZv6JxdACJPdtcytyk9mR4/4DU/zuLejK/j5XrcEjmCi43jVwUBOBdECjbc1692UnDHF17MiBrT9jqNJTlyG3QAYiw7CwbpiTK/BIZxdeZbL5NqdXW3IqJJ9i5He9cLTZ5CAqj9wpVGdGBg2y/dzAfBuEa8fD8pVBaAzSqkH0L/w/YpckTFl8KZwfQx7PqEDwungAAAAASUVORK5CYII="},bb5a:function(t,s,e){"use strict";var a=e("25f5"),i=e.n(a);i.a},f122:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAUCAMAAADfuh9AAAAANlBMVEVHcEz7+/v7+/v9/f37+/v8/Pz7+/v7+/v6+vr7+/v8/Pz7+/v7+/v6+vr6+vr8/Pz8/Pz6+vo8A1JpAAAAEXRSTlMAC8IY1kb36+GGXTp0K7GeT7DQEVcAAACBSURBVCjP7dBZDoAgDARQ9t2l97+sFCwUjTdw/qZ50RYhek4HAH4TLHudgJJULQpnuThQmCGyx564iDgJmurWRHmJ+WMdsEcuCk5cHsJgP7hIsKwmm9hfYq4m1XobPQBbrV1vNBPZPVZr3/SBku9jYExUJzOWyIj5yQfxayop60RdEJMakOAqp7QAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=about.fbd2f012.js.map
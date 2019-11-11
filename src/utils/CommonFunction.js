import $ from 'jquery'
import {
  get
} from 'http'
const wx = require('weixin-js-sdk')

function img_location(data) {
  let url = data.Location
  var http = /^http:\/\/.*/i.test(url)
  var https = /^https:\/\/.*/i.test(url)
  if (!http && !https) {
    url = 'http://' + url
  }
  return url
}

function GetRequestUrl() {
  let url = window.location.hash
  let url_obj = {}
  let url_arr = url.substring(url.indexOf('?') + 1).split('&')
  url_arr.forEach((item, index) => {
    let new_url = item.split('=')
    Object.defineProperty(url_obj, new_url[0], {
      value: new_url[1],
      enumerable: true
    });
  })
  return url_obj
}

function isWeixin() {
  return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)

}

function initWxShare() {
  console.log(isWeixin())
  if (isWeixin()) {
    let url = window.location.href;
    $.ajax({
      type: 'post',
      url: 'https://wechat-api.myreal3d.com/api/jssdk/config',
      async: false,
      data: {
        channel_id: 'M3D',
        url,
      },
      success(res) {
        console.log(res);
        console.log(res.data);
        let result = null;
        if (res.data.config !== undefined) {
          result = res.data.config;
        }
        const arrList = Object.keys(result);
        if (arrList.length >= 4) {
          weixin_wechat(result)
        } else {
          console.log('微信JSSDK缺少必要信息!');
        }
      },
      error(res) {
        alert(`${JSON.stringify(res)}错误`);
      },
    });

    function weixin_wechat(result) {
      console.log(result)
      var {
        channel_id,
        instance_id
      } = GetRequestUrl()
      if (channel_id === undefined) {
        var {
          channel_id,
          instance_id
        } = JSON.parse(sessionStorage.getItem('GetRequestUrl'))
      }
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: result.appId, // 必填，公众号的唯一标识
        timestamp: result.timestamp, // 必填，生成签名的时间戳
        nonceStr: result.nonceStr, // 必填，生成签名的随机串
        signature: result.signature, // 必填，签名
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'], // 必填，需要使用的JS接口列表
      });
      wx.checkJsApi({
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success(res) {
          console.log(res);
        },
      });
      // ?channel_id=M3D&instance_id=98&client=2
      wx.ready(() => {
        wx.onMenuShareTimeline({
          title: '海洋鱼类图鉴', // 分享标题
          desc: '测！你能否统领这片海洋', // 分享描述
          // http://report-dev.myreal3d.com/
          link: `https://wechat-api.myreal3d.com/${channel_id}/ai/beauty?instance_id=${instance_id}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `https://report.myreal3d.com/statics/img/shore.png`, // 分享图标
          success() {
            // 设置成功
            alert('分享成功!');
          },
          cancel() {
            alert('未分享!');
          },
        });
        wx.onMenuShareAppMessage({
          title: '海洋鱼类图鉴', // 分享标题
          desc: '测！你能否统领这片海洋', // 分享描述
          link: `https://wechat-api.myreal3d.com/${channel_id}/ai/beauty?instance_id=${instance_id}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `https://report.myreal3d.com/statics/img/shore.png`, // 分享图标
          success() {
            // 设置成功
            alert('分享成功!');
          },
          cancel() {
            alert('未分享!');
          },
        });
        wx.onMenuShareQQ({
          title: '海洋鱼类图鉴', // 分享标题
          desc: '测！你能否统领这片海洋', // 分享描述
          link: `https://wechat-api.myreal3d.com/${channel_id}/ai/beauty?instance_id=${instance_id}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `https://report.myreal3d.com/statics/img/shore.png`, // 分享图标
          success() {
            // 用户确认分享后执行的回调函数
            alert('分享成功!');
          },
          cancel() {
            // 用户取消分享后执行的回调函数
            alert('未分享!');
          },
        });
        wx.onMenuShareQZone({
          title: '海洋鱼类图鉴', // 分享标题
          desc: '测！你能否统领这片海洋', // 分享描述
          link: `https://wechat-api.myreal3d.com/${channel_id}/ai/beauty?instance_id=${instance_id}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `https://report.myreal3d.com/statics/img/shore.png`, // 分享图标
          success() {
            // 用户确认分享后执行的回调函数
            alert('分享成功!');
          },
          cancel() {
            // 用户取消分享后执行的回调函数
            alert('未分享!');
          },
        });
      });
      wx.error((res) => {
        console.log(JSON.stringify(res));
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      });

    }
  }
}

function onbeforeunloadEnvt() //author: meizz
{
  window.onbeforeunload = function () {

  }
  var n = window.event.screenX - window.screenLeft;
  var b = n > document.documentElement.scrollWidth - 20;
  if (b && window.event.clientY < 0 || window.event.altKey) {
    alert("是关闭而非刷新");
    window.event.returnValue = ""; //这里可以放置你想做的操作代码
  } else {
    alert("是刷新而非关闭");
  }
}
export default {
  img_location,
  GetRequestUrl,
  initWxShare,
  onbeforeunloadEnvt
}
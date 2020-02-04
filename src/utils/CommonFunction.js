import $ from 'jquery'
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
        instance_id,
        render_url
      } = GetRequestUrl()
      if (channel_id === undefined) {
        var {
          channel_id,
          instance_id,
          render_url
        } = JSON.parse(sessionStorage.getItem('GetRequestUrl'))
      }
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: result.appId, // 必填，公众号的唯一标识
        timestamp: result.timestamp, // 必填，生成签名的时间戳
        nonceStr: result.nonceStr, // 必填，生成签名的随机串
        signature: result.signature, // 必填，签名
        jsApiList: ['chooseImage', 'uploadImage', 'downloadImage', 'getLocalImgData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'], // 必填，需要使用的JS接口列表
      });
      wx.checkJsApi({
        jsApiList: ['chooseImage', 'uploadImage', 'downloadImage', 'getLocalImgData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success(res) {
          console.log(res);
        },
      });
      // ?channel_id=M3D&instance_id=98&client=2
      wx.ready(() => {
        wx.onMenuShareTimeline({
          title: '红楼梦', // 分享标题
          desc: '测！你和红楼梦哪位人物相似', // 分享描述
          // http://report-dev.myreal3d.com/
          link: `https://wechat-api.myreal3d.com/${channel_id}/ai/beauty?instance_id=${instance_id}&${render_url}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
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
          title: '红楼梦', // 分享标题
          desc: '测！你和红楼梦哪位人物相似', // 分享描述
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
          title: '红楼梦', // 分享标题
          desc: '测！你和红楼梦哪位人物相似', // 分享描述
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
          title: '红楼梦', // 分享标题
          desc: '测！你和红楼梦哪位人物相似', // 分享描述
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
// 判断ios 还是安卓 或者其他
function AndroisIos() {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    return true;
  } else if (isIOS) {
    return false;
  }
  return '其他'
}
/** 
 * 
 * Base64 encode / decode 
 *
 * 
 */
function Base64() {
  // private property 
  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  // public method for encoding 
  this.encode = function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = _utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output +
        _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
        _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }
    return output;
  }

  // public method for decoding 
  this.decode = function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = _utf8_decode(output);
    return output;
  }

  // private method for UTF-8 encoding 
  var _utf8_encode = function (string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }
    return utftext;
  }

  // private method for UTF-8 decoding 
  var _utf8_decode = function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
}

export default {
  img_location,
  GetRequestUrl,
  initWxShare,
  onbeforeunloadEnvt,
  AndroisIos,
  isWeixin,
  Base64
}
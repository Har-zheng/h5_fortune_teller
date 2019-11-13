import html2canvas from 'html2canvas';
import $ from 'jquery'
// import jQuery  from 'jquery'
import domtoimage from 'dom-to-image';
// import jQueryCode from 'jquery.qrcode'
var COS = require('cos-js-sdk-v5')
import {
  imgCosupload
} from '../../../api/app'
// 合成图片时
const shore_001 = require('../../../assets/images02/shore/001.jpg')
const shore_001_1 = require('../../../assets/images02/shore/001-1.jpg')
const shore_002 = require('../../../assets/images02/shore/002.jpg')
const shore_003 = require('../../../assets/images02/shore/003.jpg')
const shore_004 = require('../../../assets/images02/shore/004.jpg')
const shore_005 = require('../../../assets/images02/shore/005.jpg')
const shore_006 = require('../../../assets/images02/shore/006.jpg')
const shore_007 = require('../../../assets/images02/shore/007.jpg')
const shore_008 = require('../../../assets/images02/shore/008.jpg')
const qr_code = require('../../../assets/images02/photograph/code.png')
export default {
  data() {
    return {
      screenShotImg: '',
    };
  },
  mounted() {
    setTimeout(() => {
      // this.html2canvas_img()
      // this.draw_canvas()
    }, 1000)
    // this.html2canvas_img()

  },
  methods: {
    html2canvas_img() {
      const targetDom = document.getElementById('con');
      const canvas2 = document.createElement('canvas');
      // const _canvas = document.querySelector('#con');
      const w = targetDom.clientWidth;
      const h = targetDom.clientHeight;
      // 将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
      canvas2.width = w * 2;
      canvas2.height = h * 2;
      canvas2.style.width = `${targetDom.clientWidth}px`;
      canvas2.style.height = `${targetDom.clientHeight}px`;
      const context = canvas2.getContext('2d');
      context.scale(4, 4);
      // 记录bug 问题   html写入canvas时位置要重新防止
      // context.translate(0, 0)
      html2canvas(targetDom, {
        // scale: 1,
        canvas: canvas2,
        useCORS: true,
        logging: false,
        windowWidth: targetDom.scrollWidth,
        windowHeight: targetDom.scrollHeight,
        // scrollX: 0,
        // scrollY: -window.scrollY,
        // x: 0
      }).then((canvas) => {
        // 【重要】关闭抗锯齿
        // context.mozImageSmoothingEnabled = false;
        // context.webkitImageSmoothingEnabled = false;
        // context.msImageSmoothingEnabled = false;
        // context.imageSmoothingEnabled = false;
        // 获取截取图片路径
        // console.log(canvas)
        // canvas.setAttribute("id",'test_canvas')
        // $(".report").append(canvas)
        const base64Url = canvas.toDataURL('image/jpeg', 0.3);
        // console.log(base64Url)
        function dataURLtoFile(dataurl, filename) {
          var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          return new File([u8arr], filename, {
            type: mime
          });
        }


        imgCosupload({
          version: 1
        }).then(res => {
          const data = res.data
          console.log(data)
          let cos = new COS({
            getAuthorization: function (options, callback) {
              // 异步获取临时密钥
              callback({
                TmpSecretId: data.credentials.tmpSecretId,
                TmpSecretKey: data.credentials.tmpSecretKey,
                XCosSecurityToken: data.credentials.sessionToken,
                ExpiredTime: data.expiredTime
              })
            }
          })
          var file_data = dataURLtoFile(base64Url, `${new Date().getTime()}_shore`)
          console.log(file_data)
          var this_ = this
          if (!file_data) return
          cos.putObject({
            Bucket: data.bucket,
            Region: data.region,
            Key: `h5/ai/beauty/shore/${new Date().getTime()}_jietu_${file_data.name}.png`,
            Body: file_data
          }, function (err, data) {
            if (data) {
              // this_.img_success(data, this_, Toast1, file_data.content)
              // console.log(data)
              this_.screenShotImg = 'http://' + data.Location
            }
            console.log(err || data)
          })
        })
        // this.domtoimage_img()
      }).catch((err) => {
        alert(err);
      });
    },
    domtoimage_img() {
      const node = document.getElementById('shore_img_src');
      const canvas2 = document.createElement('canvas');
      // const _canvas = document.querySelector('#con');
      const targetDom = $('#con')
      const w = targetDom.width();
      const h = targetDom.height() + 20;
      // 将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
      canvas2.width = w * 2;
      canvas2.height = h * 2;
      canvas2.style.width = `${targetDom.width()}px`;
      canvas2.style.height = `${targetDom.height()}px`;
      const context = canvas2.getContext('2d');
      context.scale(2, 2);
      domtoimage.toPng(node, {
          canvas: canvas2,
          // useCORS: true,
          logging: true,
          imageTimeout: 0
        })
        .then((dataUrl, canvas) => {

          // document.getElementById('shore_img_src').src = dataUrl
          // const img = new Image();
          // img.src = dataUrl;
          // this.screenShotImg = dataUrl;
          console.log(dataUrl);
          console.log(canvas);
        })
        .catch((error) => {
          console.error('oops, something went wrong!', error);
        });
    },
    // 合成的方式
    draw_canvas(index) {
      /* 
      qr_code // 二维码
      shore_001
      shore_001-1
      shore_002
      shore_003
      shore_004
      shore_005
      shore_006
      shore_007
      shore_008
      */
      var base64 = [];
      var data = [
        shore_001,
        shore_002,
        shore_003,
        shore_004,
        shore_005,
        shore_006,
        shore_007,
        shore_008,
        shore_001_1,
      ]; //图片数组
      var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
      canvas.width = 1500*1.5;
      canvas.height = 2668*1.5;

      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      ctx.fill();

      console.log(qr_code)
      console.log(data[0])
      var img = new Image;
      img.src = data[index-1];
      let this_ = this
      jQuery('#qrcode').qrcode({ width: 372*1.5, height: 372*1.5, text: `https://wechat-api.myreal3d.com/${this.save_url.channel_id}/ai/beauty?instance_id=${this.save_url.instance_id}` });
      
      var canvas_code = $('#qrcode').find("canvas").get(0);
      var code_url = canvas_code.toDataURL('image/jpeg');

      img.onload = function () {
        ctx.drawImage(img, 0, 0, 1500*1.5, 2668*1.5); //定位图片位置及大小
        // fn();
        // console.log(base64)
        var img2 = new Image;
        img2.src = code_url;
        img2.onload = function () {
          ctx.drawImage(img2, 145*1.5, 2105*1.5, 372*1.5, 372*1.5);
          // base64.push();
          // fn();
          this_.screenShotImg = canvas.toDataURL("image/jpeg", 0.2)
          // console.log(base64)
          console.log(this_.screenShotImg)
        }
      }
    }
  }
};
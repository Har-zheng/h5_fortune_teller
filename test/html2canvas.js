import html2canvas from 'html2canvas';
import $ from 'jquery'
import domtoimage from 'dom-to-image';
var COS = require('cos-js-sdk-v5')
import {
  imgCosupload
} from '../../../api/app'

export default {
  data() {
    return {
      screenShotImg: '',
    };
  },
  mounted() {
    setTimeout(() => {
      this.html2canvas_img()
    }, 600)
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
      context.scale(2, 2);
      // 记录bug 问题   html写入canvas时位置要重新防止
      // context.translate(0, 0)
      html2canvas(targetDom, {
        scale: 1,
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
        console.log(canvas)
        // canvas.setAttribute("id",'test_canvas')

        // $(".report").append(canvas)
        const base64Url = canvas.toDataURL('image/png');

        // 创建新的图片对象 
        let canvas_zip = document.createElement('canvas')
        // 获取对应的CanvasRenderingContext2D对象(画笔)
        let context_zip = canvas_zip.getContext('2d')

        let img = new Image()
        // 指定图片的DataURL(图片的base64编码数据)
        img.src = base64Url

        // 监听浏览器加载图片完成，然后进行进行绘制
        img.onload = async () => {
          console.log(img.height)
          canvas_zip.width = img.width / 1.9
          canvas_zip.height = img.height / 1.9
          context_zip.drawImage(img, 0, 0, canvas_zip.width, canvas_zip.height)
          let img_zip = canvas_zip.toDataURL(0.92)
          console.log(img_zip)
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
            var file_data = dataURLtoFile(img_zip, `${new Date().getTime()}_shore`)
            console.log(file_data)
            var this_ = this
            if (!file_data) return
            cos.putObject({
              Bucket: data.bucket,
              Region: data.region,
              Key: `h5/ai/beauty/images/${new Date().getTime()}_jietu_${file_data.name}.png`,
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
        }

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

  }
};
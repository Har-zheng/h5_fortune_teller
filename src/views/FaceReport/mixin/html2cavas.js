import html2canvas from 'html2canvas';
import $ from 'jquery'
import domtoimage from 'dom-to-image';

export default {
  data() {
    return {
      screenShotImg: '',
    };
  },
  mounted() {
    setTimeout(() => {
      this.html2canvas_img()
      // this.domtoimage_img()
    }, 3000)
    // this.html2canvas_img()

  },
  methods: {
    html2canvas_img() {
      const targetDom = $('#con');
      const canvas2 = document.createElement('canvas');
      // const _canvas = document.querySelector('#con');
      const w = targetDom.width();
      const h = targetDom.height() + 20;
      // 将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
      canvas2.width = w * 2;
      canvas2.height = h * 2;
      canvas2.style.width = `${targetDom.width()}px`;
      canvas2.style.height = `${targetDom.height()}px`;
      const context = canvas2.getContext('2d');
      context.scale(2, 2);
      // 记录bug 问题   html写入canvas时位置要重新防止
      context.translate(0, 0)
      html2canvas(targetDom[0], {
        canvas: canvas2,
        useCORS: true,
        logging: true,
      }).then((canvas) => {
        // 【重要】关闭抗锯齿
        // context.mozImageSmoothingEnabled = false;
        // context.webkitImageSmoothingEnabled = false;
        // context.msImageSmoothingEnabled = false;
        // context.imageSmoothingEnabled = false;
        // 获取截取图片路径
        console.log(canvas)
        $(".report").append(canvas)
        const base64Url = canvas.toDataURL();
        console.log(base64Url)
        // document.body.appendChild(canvas);
        // 存入页面指定位置
        this.screenShotImg = base64Url;
        // document.getElementById('screenShotImg').src = base64Url;
        // 后台操作处理
        // const base64 = `<img src=${base64Url} />`;
        // console.log(base64);
        // $('.share').css('display', 'none');
        $('.share_txt').css('display', 'block');
      }).catch((err) => {
        alert(err);
      });
    },
    domtoimage_img() {
      const node = document.getElementById('con');
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
      // context.scale(2, 2);
      domtoimage.toPng(node, {
          canvas: canvas2,
          useCORS: true,
          logging: true,
          imageTimeout: 0
        })
        .then((dataUrl) => {
          // const img = new Image();
          // img.src = dataUrl;
          this.screenShotImg = dataUrl;
          console.log(dataUrl);
        })
        .catch((error) => {
          console.error('oops, something went wrong!', error);
        });
    },

  }
};
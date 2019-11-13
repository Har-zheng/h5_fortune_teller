import comm_fun from '../utils/CommonFunction'
export default {

  methods: {

    uploadImg(file, Orientation) {
      return new Promise((resolve, reject) => {
        const imgElement = document.getElementById('imgElement')
        let {
          clientWidth,
          clientHeight
        } = imgElement
        let exif_clientWidth = null,
          exif_clientHeight = null
        if (Orientation * 1 === 6 || Orientation * 1 === 8) {
          exif_clientWidth = clientHeight
          exif_clientHeight = clientWidth
        } else {
          exif_clientWidth = clientWidth
          exif_clientHeight = clientHeight
        }
        // 大于500k的jpeg和png图片都缩小像素上传
        if (/\/(?:jpeg|png)/i.test(file.file.type) && file.file.size > 500000) {
          // 创建Canvas对象(画布)
          let canvas = document.createElement('canvas')
          // 获取对应的CanvasRenderingContext2D对象(画笔)
          let context = canvas.getContext('2d')

          // 创建新的图片对象 
          let img = new Image()
          // 指定图片的DataURL(图片的base64编码数据)
          img.src = file.content
          // 监听浏览器加载图片完成，然后进行进行绘制
          img.onload = async () => {

            // 指定canvas画布大小，该大小为最后生成图片的大小
            canvas.width = exif_clientWidth * 2
            canvas.height = exif_clientHeight * 2
            let x = 0,
              y = 0
            /* canvasWidth  canvasHeight  img 在canvas 视图的大小 相当于控制img本身的宽高问题 是否等比放在canvas中 截图后是否被拉伸等问题*/
            let canvasHeight = exif_clientHeight * 2
            let canvasWidth = exif_clientWidth * 2

            console.log(Orientation)
            switch (Orientation) {
              case 8:
                canvas.width = exif_clientHeight * 2
                canvas.height = exif_clientWidth * 2
                // 逆时针旋转90度  参考 https://segmentfault.com/a/1190000016535556
                context.rotate(-Math.PI / 2)
                x = -exif_clientWidth * 2
                // context.rotate(3 * 90 * Math.PI / 180)
                break;
              case 6:
                if (comm_fun.AndroisIos()) {
                  // 顺时针旋转90度
                  canvas.width = exif_clientWidth * 2
                  canvas.height = exif_clientHeight * 2
                  canvasWidth = exif_clientHeight * 2
                  canvasHeight = exif_clientWidth * 2
                  context.rotate(90 * Math.PI / 180)
                  y = -canvas.width
                } else {
                  canvas.width = exif_clientHeight * 2
                  canvas.height = exif_clientWidth * 2
                  canvasWidth = exif_clientWidth * 2
                  canvasHeight = exif_clientHeight * 2
                  context.rotate(90 * Math.PI / 180)
                  y = -canvas.width
                }
                break;
              case 3:
                // 顺时针旋转180度
                context.rotate(Math.PI)
                x = -exif_clientWidth * 2
                y = -exif_clientHeight * 2
                break;
              default:
                break;
            }
            /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，400，300是将图片按给定的像素进行缩小。
            如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。
            x 和y 控制img 在画布中 移动的位置 
            */
            context.drawImage(img, x, y, canvasWidth, canvasHeight)
            // 将绘制完成的图片重新转化为base64编码，file.file.type为图片类型，0.92为默认压缩质量
            file.content = canvas.toDataURL(file.file.type, 0.92)
            // console.log(file)
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
            const dataFile = await dataURLtoFile(file.content, `zip_img.jpg`)
            console.log(dataFile)
            resolve({
              content: file.content,
              file: dataFile
            })
            this.dataFileZip = dataFile
          }
        } else {
          resolve(file)
          return file
        }
      })

    }
  }
}
import $ from 'jquery'
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
        if (Orientation === 6 || Orientation === 8) {
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
            x = -exif_clientWidth * 2
            y = -exif_clientWidth * 2
            switch (Orientation) {
              case 1:
                context.rotate(-Math.PI / 2)
                // context.translate(-exif_clientWidth / 2, -exif_clientHeight / 2)
                console.log(Orientation)
                break;
              case 8:
                context.rotate(90)
                break;
              default:
                break;
            }


            /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，400，300是将图片按给定的像素进行缩小。
            如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。*/
            context.drawImage(img, 0, 0, exif_clientWidth * 2, exif_clientHeight * 2, 0, 0, exif_clientWidth * 2, exif_clientHeight * 2)
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
            const dataFile = await dataURLtoFile(file.content, `yasuo_.jpg`)
            console.log(dataFile)
            resolve({
              content: file.content,
              file: dataFile
            })
            this.dataFileZip = dataFile
            $('body').append(canvas)
          }

        } else {
          resolve(file)
          return file
        }
      })

    }
  }
}
import loadImage from 'blueimp-load-image'
import EXIF from 'exif-js'
export default {
  methods: {
    // 1 获取 file 图片的 源信息
    getImgExif(file) {
      const this_ = this
      const top_img = this.$refs.top_img
      // 读取img 中的exif 信息  被旋转   Orientation 对应如下
      /*
          0°	        1
          顺时针90°	  6
          逆时针90°	  8
          180°	      3
          .imgRotate {
      transform: rotate(-90deg);
    }
      */
     setTimeout(function () {
      EXIF.getData(file.file, function () {
        console.log(EXIF.getAllTags(this))
        let Orientation = EXIF.getTag(this, 'Orientation')
        console.log(Orientation)
        // switch (Orientation) {
        //   case 6:
        //     top_img.style.transform = 'rotate(-90deg)'
        //     break;
        //   case 8:
        //     top_img.style.transform = 'rotate(90deg)'
        //     break;
        //   case 3:
        //     top_img.style.transform = 'rotate(180deg)'
        //     break;
        //   default:
        //     break;
        // }
      })
     },1000)


      // loadImage(
      //   file.file,
      //   function (img, data) {
      //     // console.log(data)
      //     try {
      //       if (data.hasOwnProperty('exif')) {
      //         console.log(data.exif)
      //         var orientation = data.exif.get('Orientation')
      //         console.log(orientation)
      //         if (orientation === 1) {
      //           this_.isRotate = true
      //         }
      //       }
      //     } catch (error) {
      //       console.log(error)
      //     }
      //   }, {
      //   meta: true
      // }
      // )
      this.imgPosition()
    },
    imgPosition() {
      setTimeout(() => {
        const top_img = this.$refs.top_img
        const img_Head = this.$refs.img_Head
        const swipe_img = this.$refs.swipe_img
        const top_img_width = top_img.clientWidth

        const img_Head_width = img_Head.clientWidth
        console.log(top_img_width)
        if (top_img_width > img_Head_width) {
          top_img.style.position = 'absolute'
          const num_width = top_img_width - img_Head_width
          top_img.style.left = `-${num_width / 2}px`
          console.log(top_img.style.left)
        } else {
          top_img.style.position = 'absolute'
          top_img.style.left = '50%'
          top_img.style.marginLeft = `-${top_img_width / 2}px`
          console.log(top_img.style.left)
        }
        // console.log(swipe_img)
        if (swipe_img === undefined) return
        swipe_img.forEach((element, index) => {
          let swipe_img_width = swipe_img[index].clientWidth
          // console.log(swipe_img_width)
          if (!swipe_img_width) {
            this.imgPosition()
          }
          swipe_img[index].style.position = 'absolute'
          swipe_img[index].style.left = '50%'
          swipe_img[index].style.marginLeft = `-${swipe_img_width / 2}px`
        })

      }, 100)
    }
  }
}
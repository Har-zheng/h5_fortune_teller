import loadImage from 'blueimp-load-image'
import EXIF from 'exif-js'
import {
  resolve,
  reject
} from '_any-promise@1.3.0@any-promise'
export default {
  methods: {
    // 1 获取 file 图片的 源信息
    getImgExif(file) {
      return new Promise((resolve, reject) => {


        const this_ = this
        let file_img = file
        const top_img = this_.$refs.top_img
        const canvas_top_img = this_.$refs.canvas_top_img
        console.log(top_img, canvas_top_img)
        if (typeof file !== "string") {
          file_img = file.file
          this.imgPosition()
        } else {
          file_img = this_.$refs.top_img
          setTimeout(() => {
            // this.imgPosition()
          }, 1000)
        }

        // 读取img 中的exif 信息  被旋转   Orientation 对应如下
        /*
            0°	        1
            顺时针90°	  6
            逆时针90°	  8
            180°	      3
            .imgRotate {
              transform: rotate(-90deg);
            }
          case 6:
          top_img.style.transform = 'rotate(90deg)'
          break;
        */
        setTimeout(function () {
          try {
            EXIF.getData(file_img, function () {
              console.log(EXIF.getAllTags(this))
              let Orientation = EXIF.getTag(this, 'Orientation')
              this_.Orientation = Orientation
              console.log("exif" + Orientation)
              switch (Orientation) {
                case 8:
                  top_img.style.transform = 'rotate(-90deg)'
                  canvas_top_img.style.transform = 'rotate(-90deg)'
                  break;
                case 3:
                  top_img.style.transform = 'rotate(180deg)'
                  break;
                default:
                  break;
              }
              resolve(Orientation)
            })
          } catch (error) {
            console.log('图片没有EXIF信息')
          }
        }, 100)

        loadImage(
          file_img,
          function (img, data) {
            // console.log(data)
            try {
              if (data.hasOwnProperty('exif')) {
                console.log(data.exif)
                var orientation = data.exif.get('Orientation')
                console.log("loadImage" + orientation)
                if (orientation === 1) {
                  // this_.isRotate = true
                }
              }
            } catch (error) {
              console.log(error)
            }
          }, {
            meta: true
          }
        )

      })
    },
    imgPosition() {
      setTimeout(() => {
        const top_img = this.$refs.top_img
        const img_Head = this.$refs.img_Head
        const swipe_img = this.$refs.swipe_img
        const top_img_width = top_img.clientWidth

        const img_Head_width = img_Head.clientWidth
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
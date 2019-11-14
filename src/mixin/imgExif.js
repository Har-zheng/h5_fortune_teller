import loadImage from 'blueimp-load-image'
import EXIF from 'exif-js'
import comm_fun from '../utils/CommonFunction'
import $ from 'jquery'
export default {
  data() {
    return {
      isTransform: ''
    }
  },
  methods: {
    // 1 获取 file 图片的 源信息
    getImgExif(file) {
      return new Promise((resolve, reject) => {
        const this_ = this
        let file_img = file
        let top_img = this_.$refs.top_img
        // const canvas_top_img = this_.$refs.canvas_top_img
        console.log(top_img)
        if (typeof file !== "string") {
          file_img = file.file
        } else {
          file_img = this_.$refs.img_radio_img.src
          top_img = this_.$refs.img_radio_img
        }
        // 读取img 中的exif 信息  被旋转   Orientation 对应如下
        /*
            0°	        1
            顺时针90°	  6
            逆时针90°	  8
            180°	      3
              transform: rotate(-90deg);
            1记录问题 > 图片旋转 放在视图中显示的问题
              图片旋转后 宽 互换 高   
              计算上传图片比例问题
        */
        let Orientation
        console.log(file)
        try {
          EXIF.getData(file_img, function () {
            console.log(EXIF.getAllTags(this))
            Orientation = EXIF.getTag(this, 'Orientation')
            /* const top_img = this.$refs.top_img
             const top_img_width = top_img.clientWidth
             const top_img_height = top_img.clientHight
             if (Orientation === undefined) {
               top_img.style.width = '100%'
             }
             */
            this_.Orientation = Orientation
            console.log("exif" + Orientation)
            switch (Orientation) {
              case 8:
                top_img.style.transform = 'rotate(-90deg)'
                break;
              case 3:
                top_img.style.transform = 'rotate(180deg)'
                break;
              case 6:
                if (comm_fun.AndroisIos()) {
                  top_img.style.transform = 'rotate(90deg)'
                  top_img.style.height = '100%'
                }
                break;
              default:
                break;
            }
            resolve(Orientation)
          })
          loadImagefun()
        } catch (error) {
          loadImagefun()
          console.log('图片没有EXIF信息')
        }

        console.log(file_img)
        function loadImagefun() {
          console.log(file_img)
          loadImage(
            file_img,
            function (img, data) {
              console.log(data)
              const {
                originalHeight,
                originalWidth
              } = data
              this_.originalHeight_img = originalHeight
              this_.originalWidth_img = originalWidth
              // 计算图片比例
              const Proportion = originalWidth / originalHeight
              console.log(Proportion)
              console.log(Orientation)
              switch (Orientation) {
                case 8:
                  top_img.style.transform = 'rotate(-90deg)'
                  top_img.style.height = '100%'
                  top_img.style.width = `${100*Proportion}%`
                  break;
                case 3:
                  top_img.style.transform = 'rotate(180deg)'
                  break;
                case 6:
                  if (comm_fun.AndroisIos()) {
                    top_img.style.transform = 'rotate(90deg)'
                    top_img.style.height = '100%'
                    top_img.style.width = `${100*Proportion}%`
                  }
                  break;
                default:
                  if (Proportion > 1) {
                    top_img.style.height = '100%'
                    top_img.style.width = `${100*Proportion}%`
                  }
                  break;
              }
              this_.imgPosition(top_img)
            }, {
              meta: true
            }
          )
        }
      })
    },
    imgPosition(top_img_prmes) {
      const top_img = top_img_prmes
      const img_Head = this.$refs.img_Head
      const swipe_img = this.$refs.swipe_img
      const top_img_width = top_img.clientWidth
      const img_Head_width = img_Head.clientWidth
      if (top_img_width >= img_Head_width) {
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
    }
  }
}
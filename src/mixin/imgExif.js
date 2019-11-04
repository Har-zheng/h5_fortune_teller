import loadImage from 'blueimp-load-image'
export default {
  methods: {
    // 1 获取 file 图片的 源信息
    getImgExif(file) {

      console.log(file.file)
      const this_ = this
      loadImage(
        file.file,
        function (img, data) {
          console.log(data)
          try {
            var orientation = data.exif.get('Orientation')
            console.log(orientation)
            // dom.classList.remove('isActive')
            if (orientation === 6) {
              this_.isRotate = true
              // dom.classList.add('isActive')
            }
          } catch (error) {
            console.log(error)
          }
        }, {
        meta: true
      }
      )
        this.imgPosition()
    },
    imgPosition(){
      setTimeout(() => {
        const top_img = this.$refs.top_img
        const img_Head = this.$refs.img_Head
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
      }, 1)
    }
  }
}
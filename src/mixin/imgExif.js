import loadImage from 'blueimp-load-image'
export default {
  methods: {
    // 1 获取 file 图片的 源信息
    getImgExif(file) {
      const top_img = this.$refs.top_img
      const img_Head = this.$refs.img_Head
      console.log(top_img.style)
      console.log(img_Head.style)
      if(top_img.style.width > img_Head.style.width){
        top_img.style.position = 'absolute'
        img_Head
      }
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
            if (orientation === 1) {
              // this_.isRotate = true
              // dom.classList.add('isActive')
            }
          } catch (error) {
            console.log(error)
          }
        }, {
          meta: true
        }
      )
    }
  }
}
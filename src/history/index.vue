<template>
  <div class="home">
    <div class="bg-img"></div>
    <div class="conetnt">
      <div class="img-Head">
        <van-image
          radius="6"
          width="100"
          height="100"
          src="https://c-ssl.duitang.com/uploads/item/201603/08/20160308194110_PGhCJ.jpeg"
        />
      </div>
      <van-uploader :after-read="afterRead">
        <van-button icon="photo" type="primary">上传照片</van-button>
      </van-uploader>
      <img id="myImg" src="../../assets/img/face.jpg" alt />
      <canvas id="overlay"></canvas>
    </div>
  </div>
</template>
<script>
import * as faceapi from 'face-api.js';

export default {

  mounted() {
    this.init()
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // alert(JSON.stringify(file))
      console.log(file)
      console.log(123)
    },
    async init() {
      console.log(faceapi.nets)
      await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
      await faceapi.nets.faceExpressionNet.loadFromUri('/models')
      await this.run()
    },
    // 测试图片
    async run() {
      const input = document.getElementById('myImg')
      // const detections = await faceapi.detectAllFaces(input)
      const detections = await faceapi.detectAllFaces(input, new faceapi.SsdMobilenetv1Options())
      const detectionWithLandmarks = await faceapi.detectSingleFace(input).withFaceLandmarks()
      console.log(detections)

      // //  计算脸描述符
      // const results = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors()
      // console.log(results)

      //覆盖原来的img
      const displaySize = { width: input.width, height: input.height }
      // resize the overlay canvas to the input dimensions
      const canvas = document.getElementById('overlay')
      faceapi.matchDimensions(canvas, displaySize)


      /* Display detected face bounding boxes 显示检测人脸边界框 */
      // resize the detected boxes in case your displayed image has a different size than the original
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      console.log(resizedDetections)
      // draw detections into the canvas
      faceapi.draw.drawDetections(canvas, resizedDetections)

      /* Display face landmarks  显示面对地标*/
      const detectionsWithLandmarks = await faceapi.detectAllFaces(input).withFaceLandmarks()
      // resize the detected boxes and landmarks in case your displayed image has a different size than the original
      const resizedResults = faceapi.resizeResults(detectionsWithLandmarks, displaySize)
      // draw detections into the canvas
      faceapi.draw.drawDetections(canvas, resizedResults)
      // draw the landmarks into the canvas
      faceapi.draw.drawFaceLandmarks(canvas, resizedResults);


      // /* Display face expression results 表情显示结果 */
      const detectionsWithExpressions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceExpressions()
      // // resize the detected boxes and landmarks in case your displayed image has a different size than the original
      const resizedResultsexpression = faceapi.resizeResults(detectionsWithExpressions, displaySize)
      // // draw detections into the canvas
      faceapi.draw.drawDetections(canvas, resizedResults)
      // // draw a textbox displaying the face expressions with minimum probability into the canvas
      const minProbability = 0.05
      faceapi.draw.drawFaceExpressions(canvas, resizedResultsexpression, minProbability)


      const box = resizedDetections[0].box
      // see DrawBoxOptions below
      const drawOptions = {
        label: 'Hello I am a box!',
        lineWidth: 2
      }
      const drawBox = new faceapi.draw.DrawBox(box, drawOptions)
      drawBox.draw(document.getElementById('overlay'))

    }
  }
}
</script>
<style scoped>
.home {
  display: flex;
  justify-content: center; /*实现水平居中*/
  align-items: center; /*实现垂直居中*/
  height: 100%;
}
.bg-img {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  /* background: url("../../assets/img/bg.png") no-repeat 100% center; */
  opacity: 0.7;
  background-size: 100%;
  background-position: top;
}
.conetnt {
  line-height: 100%;
}
.img-Head {
  position: relative;
  bottom: 60px;
}
#myImg {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
}
#overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
}
</style>
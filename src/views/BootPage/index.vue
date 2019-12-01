<template>
  <div class="face_start">
    <!-- 
      autoplay自动播放 muted静音 preload预载 
      x5-video-player-fullscreen="true"
      x-webkit-airplay="allow"
      x5-video-orientation="portrait"
      x5-video-player-type="h5"
    -->
    <video id="video"
           v-show="!isShow"
           class="video"
           preload="auto"
           muted
           autoplay
           webkit-playsinline="true"
           playsinline="true"
           x5-video-player-fullscreen="true"
           x-webkit-airplay="allow"
           x5-video-orientation="portrait"
           x5-video-player-type="h5-page"
           ref="videoEle">
      <source :src="video_src"
              type="video/mp4" />您的浏览器不支持 video 标签。
    </video>
    <div class="logo"
         @click="handleBtnStart"></div>
  </div>
</template>
<script>
import comm_fun from '../../utils/CommonFunction'
export default {
  data() {
    return {
      isShow: false,
      mp4: 'http://m3d-storage-dev-1251693531.cos.ap-shanghai.myqcloud.com/template/config-ui/images/boot_animation.mp4',
      ts3M: 'http://m3d-storage-dev-1251693531.cos.ap-shanghai.myqcloud.com/template/config-ui/images/boot_animation_1.ts',
      ts2M: 'http://m3d-storage-dev-1251693531.cos.ap-shanghai.myqcloud.com/template/config-ui/images/boot_animation_5.ts',
      /**
       *  MP4 http://m3d-storage-dev-1251693531.cos.ap-shanghai.myqcloud.com/template/config-ui/images/boot_animation.mp4
       *  ts 2.9 http://m3d-storage-dev-1251693531.cos.ap-shanghai.myqcloud.com/template/config-ui/images/boot_animation_1.ts
       * ts 1.9m http://m3d-storage-dev-1251693531.cos.ap-shanghai.myqcloud.com/template/config-ui/images/boot_animation_5.ts
       */
      video_src: ''
    }
  },
  created(){
    console.log(comm_fun.AndroisIos() , comm_fun.isWeixin())
    if(comm_fun.AndroisIos() && comm_fun.isWeixin() ){
      this.video_src = this.ts3M
    }else{
      this.video_src = this.mp4 
    }
    
  },
  mounted() {
    window.onload = () => {
      const video = document.getElementById('video')
      console.log(video)
      video.addEventListener('ended', () => {
        this.isShow = true
      })
      function autoPlayAudio() {
        console.log(window.WeixinJSBridge)
        if (window.WeixinJSBridge) {
          WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
            video.play();
            console.log('getNetworkType')
          }, false);
        } else {
          document.addEventListener("WeixinJSBridgeReady", function () {
            video.play();
            console.log('WeixinJSBridgeReady')
          }, false);
        }
        // return false;
      }
      console.log('autoPlayAudio', autoPlayAudio())
    }
  },
  methods: {
    handleBtnStart() {
      console.log('start')
      this.$router.push({ name: 'PhotoPage' })
    },
  }
}
</script>
<style lang="scss" scoped>
.face_start {
  background: url("../../assets/images02/v2/start_bg_img.png") no-repeat;
  background-size: 100%;
  height: 100%;
  background-color: #fff;
  color: #fff;
  position: relative;
  .logo {
    background: url("../../assets/images02/v2/start_btn.png") no-repeat;
    background-size: 100%;
    width: 300px;
    height: 79px;
    margin: 0 auto;
    position: absolute;
    top: 900px;
    left: 50%;
    margin-left: -150px;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .video {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .top_img {
    .text,
    .english {
      width: 598px;
    }
    .text {
      height: 114px;
    }
    .english {
      height: 16px;
    }
    .test {
      width: 432px;
      height: 34px;
      margin-top: 25px;
      .van-image {
        width: 432px;
        height: 34px;
      }
    }
  }
  .footer {
    position: relative;
    z-index: 22;
    .a_ {
      margin-top: 140px;
      font-size: 12px;
      color: #28568f;
    }
    .code {
      position: relative;
      top: 35px;
      i {
        display: inline-block;
        background: url("../../assets/images02/photograph/kuang_code.png")
          no-repeat;
        background-size: 100%;
        width: 230px;
        height: 230px;
        position: absolute;
        left: 50%;
        margin-left: -115px;
        z-index: 1;
      }
      .van-image {
        position: relative;
        z-index: 2;
        width: 220px;
        height: 220px;
        margin-top: 4px;
      }
    }
    .QR_code {
      font-size: 30px;
      line-height: 16px;
      margin-top: 60px;
    }
    .footer_img {
      margin-top: 40px;
      .van-image {
        width: 235px;
        height: 71px;
      }
    }
  }
}
</style>
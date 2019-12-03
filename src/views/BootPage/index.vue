<template>
  <div class="face_start">
    <!-- 
      autoplay自动播放 muted静音 preload预载 
      x5-video-player-fullscreen="true"
      x-webkit-airplay="allow"
      x5-video-orientation="portrait"
      x5-video-player-type="h5"
    -->
    <video
      id="video"
      v-show="!isShow"
      class="video"
      muted
      autoplay="autoplay"
      webkit-playsinline="true"
      x-webkit-airplay="true"
      playsinline="true"
      x5-video-player-type="h5"
      x5-video-orientation="h5"
      x5-video-player-fullscreen="true"
      preload="auto"
      x5-playsinline
      @click="start_video"
      poster="../../assets/images02/v2/start_video.jpg"
      src="http://m3d-storage-dev-1251693531.cos.ap-shanghai.myqcloud.com/template/config-ui/images/boot_animation.mp4"
    ></video>
    <div class="andos" @click="start_video" v-show="isStart"></div>
    <div class="logo" :class="{'active': isBtn}" @click="handleBtnStart"></div>
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
      video_src: '',
      isStart: false,
      isBtn: false
    }
  },
  created() {
    if (comm_fun.AndroisIos() && comm_fun.isWeixin()) {
      this.isStart = true
    }
  },
  mounted() {
    window.onload = () => {
      const video = document.getElementById('video')
      console.log(video)
      video.addEventListener('ended', () => {
        if (comm_fun.AndroisIos() && comm_fun.isWeixin()) {
          this.isBtn = true
        } else {
          this.isShow = true
        }
        this.isStart = false
      })
      // this.start_video()
      function autoPlayAudio() {
        console.log(window.WeixinJSBridge)
        if (window.WeixinJSBridge) {
          WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
            video.play();
            console.log('getNetworkType')
          }, false);
        } else {
          document.addEventListener("WeixinJSBridgeReady", function () {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
              video.play()
              console.log('WeixinJSBridgeReady')
            });
          }, false);
        }
        // return false;
      }
      autoPlayAudio()
    }

  },
  methods: {
    handleBtnStart() {
      console.log('start')
      this.$router.push({ name: 'PhotoPage' })
    },
    start_video() {
      this.isStart = false
      const video = document.getElementById('video')
      console.log(video)
      video.addEventListener('ended', () => {
        if (comm_fun.AndroisIos() && comm_fun.isWeixin()) {
          this.isBtn = true
        } else {
          this.isShow = true
        }
      })
      video.play();
    }
  }
}
</script>
<style lang="scss" scoped>
.face_start {
  background: url("../../assets/images02/v2/start_bg_img.png") no-repeat;
  background-size: 100% 100%;
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
    top: 62%;
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
  .andos {
    background: url("../../assets/images02/v2/start_video.jpg") no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    z-index: 10000;
    position: fixed;
    top: 0;
  }
  .active {
    position: fixed;
    z-index: 999;
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
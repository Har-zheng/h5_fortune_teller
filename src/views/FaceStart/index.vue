<template>
  <div class="face_start">
    <div class="logo">
      <img src="../../assets/images02/photograph/LOGO_cc.png" alt />
    </div>
    <div class="top_img">
      <img class="text" src="../../assets/images02/photograph/haiyang.png" alt="加载失败!" />
      <img class="english" src="../../assets/images02/photograph/haiyang2.png" alt="加载失败!" />
      
      <img class="test" src="../../assets/images02/photograph/ic_bg4.png" alt="加载失败!" />
    </div>
    <div class="footer">
      <div class="code">
        <i></i>
        <img  src="../../assets/images02/photograph/code.png" alt />
      </div>
      <p class="QR_code">长按识别二维码</p>
      <div class="footer_img">
        <img  @click="startTesing" :src="qr_code_img" alt="加载失败!">
      </div>
      <p class="a_">
        HTTP://WWW.MYREAL3D.COM
        <br />BRAND 3D VIRTUAL FACIAL TREATMENT PLANNER
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qr_code_img: require('../../assets/images02/photograph/start_test.png')
    }
  },
  methods: {
    startTesing() {
      console.log('start')
      this.$router.push({name: 'PhotoPage'})
    }
  }
}
</script>
<style lang="scss" scoped>
.face_start {
  background: url("../../assets/images02/photograph/bj.jpg") no-repeat;
  background-size: 100%;
  height: 100%;
  background-color: #04032b;
  color: #fff;
  .logo {
    width: 80px;
    height: 79px;
    margin: 0 auto;
    padding: 62px 0 49px 0;
    img {
      width: 100%;
      height: 100%;
    }
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
      img {
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
      img {
        width: 235px;
        height: 71px;
      }
      
    }
  }
}
</style>
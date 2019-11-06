<template>
  <div class="face_start">
    <div class="logo" @click="handleBtnStart"></div>
  </div>
</template>
<script>
export default {
  methods: {
    handleBtnStart() {
      console.log('start')
      this.$router.push({ name: 'PhotoPage' })
    }
  }
}
</script>
<style lang="scss" scoped>
.face_start {
  background: url("../../assets/images02/photograph/bootpage.jpg") no-repeat;
  background-size: 100%;
  height: 100%;
  background-color: #04032b;
  color: #fff;
  .logo {
    width: 300px;
    height: 79px;
    margin: 0 auto;
    padding: 62px 0 49px 0;
    position: relative;
    top: 800px;
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
<template>
      <van-overlay  class="overlay">
      <div class="wrapper" @click.stop>
        <div class="block">
          <div class="brack" @click="handleBtnReturn"></div>
        </div>
      </div>
    </van-overlay>
</template>
<script>
export default {
  methods: {
    handleBtnReturn(){
      this.$emit('handleBtnReturn')
    }
  }
  
}
</script>
<style lang="scss" scoped>
  .overlay {
    // z-index: 3 !important;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: url("../assets/images02/v2/photo_bg_img.jpg") no-repeat;
    background-size: 100%;
  }
  .block {
    width: 100%;
    height: 100%;
    background-color: #fff;
    background: url("../assets/images02/v2/noman2.jpg") no-repeat;
    background-size: 100%;
    .brack {
      background: url("../assets/images02/v2/black.png") no-repeat;
      background-size: 100%;
      width: 385px;
      height: 90px;
      display: inline-block;
      margin-top: 1000px;
    }
  }
</style>
<template>
  <div class="home">
    <div class="bg-img"></div>
    <div class="conetnt">
      <p class="title">
        <!-- <i class="icon"></i> -->
        <span></span>
      </p>
      <BaseRouterTransition>
        <div class="from">
          <p class="from_p">
            <label for="name">姓名:</label>
            <input type="text" v-model="name" />
          </p>
          <p class="from_p">
            <label for="name">电话:</label>
            <input type="number" v-model="number" />
          </p>
          <div class="receive">
            <button class="btn_photo_bg" @click="handleSubmitInfo"></button>
          </div>
        </div>
      </BaseRouterTransition>
      <div class="photograph-btn">
        <p>请填写正确联系方式 <br/> 我们将尽快核对您的礼包信息</p>
        <div class="banner">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseRouterTransition from '../../components/BaseRouterTransition'
import { Dialog } from 'vant';
import { mapState } from 'vuex'

export default {
  data() {
    return {
      title: '填写信息',
      name: '',
      age: '',
      number: ''
    }
  },
  components: {
    BaseRouterTransition
  },
  mounted() {
  },
  methods: {
    // 保存姓名
    handleSubmitInfo(e) {
      let data = {
        name: this.name,
        age: this.age,
        number: this.number
      }
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: url("../../assets/images02/v2/photo_bg_img.jpg") no-repeat;
  background-size: 100%;
  height: 100%;
  overflow: hidden;
  width: 100%;
  color: #fff;
  background-color: #fff;
}
.bg-img {
  z-index: 1;
  padding: 50px 20px;
  text-align: right;
  img {
    height: 80px;
  }
}
.conetnt {
  position: relative;
  z-index: 2;
  line-height: 100%;
  // 宽度 计算 710 -减去两个padding值
  width: 740px;
  height: 100%;
  background: url("../../assets/images02/v2/scroll.png") no-repeat;
  background-size: 100%;
  border-radius: 30px 30px 0px 0px;
  margin: 0 auto;
  padding: 46px 0;
  .title {
    font-size: 30px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    text-align: center;
    margin-bottom: 36px;
    position: relative;
    .icon {
      display: inline-block;
      width: 52px;
      height: 56px;
      background: url("../../assets/images02/photograph/ic_bg3.png") no-repeat
        center;
      background-size: 100%;
      position: absolute;
      left: 0;
      bottom: -7px;
    }
    span {
      display: inline-block;
      background: url("../../assets/images02/v2/update_img.png") no-repeat;
      background-size: 100%;
      width: 362px;
      height: 48px;
      margin: 30px 0;
    }
  }
  .tip {
    margin-top: 60px;
    p {
      font-size: 16px;
    }
  }
  .from {
    // clear: both;
    padding: 0 100px;
    margin-top: 32px;
    .from_p {
      background: url("../../assets/images02/v2/icon_btn.png") no-repeat;
      background-size: 100%;
      // border-radius: 50px;
      height: 68px;
      line-height: 68px;
      margin-top: 20px;
      color: #90763f;
      label {
        font-size: 26px;
      }
      input {
        width: 420px;
        margin: 0 auto;
        border: none;
        background: none;
        height: 68px;
        margin-top: -6px;
      }
      input::-webkit-input-placeholder {
        color: #fff;
        font-size: 24px;
        font-weight: 400;
      }
    }
    .receive {
      .saveName {
        color: #fff;
      }
      .btn_photo_bg {
        border: none;
        width: 378px;
        height: 72px;
        margin-top: 38px;
        font-size: 36px;
        background: url("../../assets/images02/v2/sumit.png") no-repeat center;
        background-size: 100%;
        color: #e6eeff;
      }
    }
  }
}
.photograph-btn {
  // position: absolute;
  width: 100%;
  p {
    font-size: 28px;
    text-align: center;
    color: #71738c;
    font-weight: 400;
    line-height:40px;
    margin-top: 12px;
  }
  .banner{
    width: 616px;
    height: 336px;
    background: #CBCBCB;
    margin: 0 auto;
    margin-top: 39px;
  }
}
</style>
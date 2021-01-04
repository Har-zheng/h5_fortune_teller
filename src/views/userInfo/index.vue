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
            <input @blur="ios_blur" type="text" v-model="name" />
          </p>
          <p class="from_p">
            <label for="name">电话:</label>
            <input @blur="ios_blur" type="number" v-model="number" />
          </p>
          <div class="code_div">
            <p class="from_p from_code">
              <input type="number" v-model="code_num" @blur="ios_blur" placeholder="填写验证码" />
            </p>
            <span class="code" @click="handlegetCode">{{ btn_text }}</span>
          </div>

          <div class="receive">
            <button class="btn_photo_bg" @click="handleSubmitInfo"></button>
          </div>
        </div>
      </BaseRouterTransition>
      <div class="photograph-btn">
        <p>
          请填写正确联系方式
          <br />我们将尽快核对您的礼包信息
        </p>
        <div class="banner">
          <img  v-if="parmes_data.channel_id ==='M3D'" src="../../assets/images02/v2/banner.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseRouterTransition from '../../components/BaseRouterTransition'
import { Dialog } from 'vant';
import { mapState } from 'vuex'
import MobilePhoneVerification from '../../mixin/MobilePhoneVerification'
import channel from '../../mixin/channel'

export default {
  mixins: [MobilePhoneVerification,channel],
  data() {
    return {
      title: '填写信息'
    }
  },
  components: {
    BaseRouterTransition,
  },
  computed: {
    ...mapState({
       parmes_data: state => state.app.app.parmes_data
    })
  },
  mounted() {
  },
  methods: {
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
    .code_div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .from_p {
        width: 300px;
      }
      .from_code {
        height: 90px;
        background-size: 100% 80%;
        color: #90763f;
        input {
          text-indent: 20px;
        }
        input::placeholder {
          color: #90763f;
          padding-left: 18px;
        }
      }

      .code {
        color: #000;
        text-align: center;
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
    line-height: 40px;
    margin-top: 12px;
  }
  .banner {
    width: 616px;
    height: 336px;
    // background: #cbcbcb;
    margin: 0 auto;
    margin-top: 39px;
    img{
      width: 100%;
    }
  }
}
</style>
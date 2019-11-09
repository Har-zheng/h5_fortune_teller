<template>
  <div class="home">
    <div class="bg-img">
      <img src="../../../assets/images02/photograph/ic_logo2.png" />
    </div>
    <div class="conetnt">
      <div class="bg">
        <img src='../../../assets/images02/photograph/BusCoop.png' alt />
      </div>
    </div>
  </div>
</template>
<script>
import BaseRouterTransition from '../../../components/BaseRouterTransition'
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
  background: url("../../../assets/images02/photograph/ic_bg.jpg") no-repeat;
  background-size: 100%;
  height: 100%;
  overflow: hidden;
  width: 100%;
  color: #fff;
  background-color: #001037;
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
  width: 568px;
  height: 100%;
  background-color: #000025e6;
  border-radius: 30px 30px 0px 0px;
  margin: 0 auto;
  padding: 46px 53px 0 53px;
  .bg{
    width: 590px;
    height: 100%;
    img{
      width: 100%;
    }
  }
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
      background: url("../../../assets/images02/photograph/ic_bg3.png")
        no-repeat center;
      background-size: 100%;
      position: absolute;
      left: 0;
      bottom: -7px;
    }
    span {
      font-size: 36px;
      display: inline-block;
      line-height: 36px;
      color: #fff;
      font-weight: 400;
      position: relative;
    }
    span:after {
      content: "";
      display: inline-block;
      width: 91px;
      height: 6px;
      border-radius: 8px;
      position: absolute;
      background: #007acf;
      text-align: center;
      bottom: 0;
      left: 50%;
      margin-bottom: -36px;
      margin-left: -45px;
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
    padding: 0 36px;
    margin-top: 32px;
    .from_p {
      background: #002b8a;
      border-radius: 50px;
      line-height: 68px;
      margin-top: 20px;
      label {
        font-size: 26px;
      }
      input {
        // background-color: rgba(0, 0, 0, 0);
        width: 330px;
        margin: 0 auto;
        top: 63px;
        border: none;
        background: none;
        // background: url("../../assets/images/saomiao/edit.png") no-repeat;
        // background-size: 26px 26px;
        // background-position: 0 1.267vw;
        // text-indent: 46px;
      }
      input::-webkit-input-placeholder {
        color: #fff;
        font-size: 24px;
        font-weight: 400;
      }
    }
    .receive {
      // margin-top: 140px;
      .van-button {
        border-radius: 16px;
        // border: 2px solid rgba(62, 151, 255, 1);
        width: 310px;
        height: 120px;
        font-size: 30px;
        font-weight: 400;
        color: #fff;
      }
      .saveName {
        color: #fff;
      }
      .btn_photo_bg {
        border: none;
        margin-top: 38px;
        background: url("../../../assets/images02/photograph/tijiaoanniu.png")
          no-repeat center;
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
    font-size: 12px;
    text-align: center;
    color: #71738c;
    font-weight: 400;
    margin-top: 140px;
  }
}
</style>
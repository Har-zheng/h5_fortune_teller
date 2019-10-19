<template>
  <div class="analysis">
    <div class="content">
      <div class="img-Head">
        <div class="Head-radius">
          <img class="transtion" src="../../assets/images/saomiao/light.png" alt />
          <van-image @error="errorimg" round :src="imageHead" />
        </div>
        <div class="feature">
          <p>上庭</p>
          <p>中庭</p>
          <p>下庭</p>
        </div>
      </div>
      <p class="title">
        <img src="../../assets/images/saomiao/symbol1.png" /> 智能解码中
        <img src="../../assets/images/saomiao/symbol2.png" />
      </p>
      <div class="process-item">
        <div>测量三庭</div>
        <div>定位五官</div>
        <div>综合分析</div>
      </div>
      <div class="transtion-css">
        <img :class="[status]" src="../../assets/images/saomiao/status@2x.png" alt />
      </div>
      <div class="status-info">
        <p>
          上庭数据提取中
          <i :class="{ 'active_': isActive.isActive1 }"></i>
        </p>
        <p>
          中庭数据提取中
          <i :class="{ 'active_': isActive.isActive2 }"></i>
        </p>
        <p>
          下庭数据提取中
          <i :class="{ 'active_': isActive.isActive3 }"></i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageHead: require('../../../test/test.png'),
      isActive: {
        isActive1: false,
        isActive2: true,
        isActive3: true,
      },
      status: 'transtion-one'
    }
  },
  mounted() {
    this.updateStatus()
  },
  methods: {
    errorimg(e) {
      console.log(e)
    },
    // 过场 上传动画
    updateStatus() {
      const three = () => {
        setTimeout(() => {
        this.status = 'transtion-three'
        }, 6000)
      }
      setTimeout(() => {
        this.status = 'transtion-two'
        three()
      }, 2000)

    }
  }
}
</script>
<style lang="scss" scoped>
.analysis {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/saomiao/bg.png") no-repeat;
  background-size: 100% 100%;
  color: #fff;
  font-weight: 400;
}
.content {
  width: 585px;
  height: 750px;
  padding: 0 48px;
  background: url("../../assets/images/saomiao/bg_loding.png") no-repeat 50%;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
  top: 172px;
  .img-Head {
    position: relative;
    top: -126px;
    .Head-radius {
      width: 260px;
      height: 260px;
      margin: 0 auto;
      position: relative;
      border: 2px solid rgba(255, 255, 255, 1);
      overflow: hidden;
      border-radius: 50%;
    }
    .van-image {
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .transtion {
      position: absolute;
      left: 0;
      z-index: 2;
      width: 100%;
      animation: move 8s ease-in-out infinite;
    }
    .feature {
      position: absolute;
      z-index: 2;
      right: -60px;
      top: 16px;
      p {
        height: 58px;
        line-height: 58px;
        border-bottom: 1px solid #fafafa;
        width: 395px;
        text-align: right;
      }
    }
    @keyframes move {
      0% {
        top: -10px;
      }
      25% {
        top: 34.667vw;
      }
      50% {
        top: -10px;
      }
      75% {
        top: 34.667vw;
      }
      100% {
        top: -10px;
      }
    }
  }
  .title {
    font-size: 30px;
    line-height: 30px;
    margin-top: -72px;
    img {
      width: 17px;
      height: 10px;
      margin: 0 10px;
    }
  }
  .process-item {
    display: flex;
    justify-content: space-around;
    margin-top: 56px;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
  }
  .transtion-css {
    position: relative;
    // 12vw; 37.333vw 64vw
    img {
      width: 18px;
      height: 12px;
      position: absolute;
      left: 12vw;
    }
    .transtion-two {
      left: 37.333vw;
      animation: statusCssone 1.2s linear;
    }
    @keyframes statusCssone {
      0% {
        left: 12vw;
      }
      100% {
        left: 37.333vw;
      }
    }
    .transtion-three {
      left: 64vw;
      animation: statusCssthree 1.2s linear;
    }
    @keyframes statusCssthree {
      0% {
        left: 37.333vw;
      }
      100% {
        left: 64vw;
      }
    }
  }
  .status-info {
    margin-top: 42px;
    p {
      text-align: left;
      height: 80px;
      line-height: 80px;
      font-size: 24px;
      font-weight: 400;
      position: relative;
      border-bottom: 1px solid #327fe1;
      i {
        width: 22px;
        height: 22px;
        display: block;
        background: url("../../assets/images/photograph/correct.png") no-repeat;
        background-size: 100% 100%;
        float: right;
        margin-top: 29px;
      }
      .active_ {
        width: 30px;
        height: 30px;
        animation: rotatecss 1.2s linear infinite;
        background: url("../../assets/images/saomiao/loading.png") no-repeat;
        background-size: 100% 100%;
      }
      @keyframes rotatecss {
        0% {
          transform: rotate(0deg);
        }

        25% {
          transform: rotate(90deg);
        }

        50% {
          transform: rotate(180deg);
        }

        75% {
          transform: rotate(270deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    }
    p:nth-child(3) {
      border-bottom: none;
    }
  }
}
</style>
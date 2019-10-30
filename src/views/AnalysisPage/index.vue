<template>
  <div class="analysis">
    <div class="content" v-show="isReport">
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
          {{statusInfo[statusInfoNum].up}}
          <i :class="{ 'active_': isActive.isActive1 }"></i>
        </p>
        <p>
          {{statusInfo[statusInfoNum].and}}
          <i :class="{ 'active_': isActive.isActive2 }"></i>
        </p>
        <p>
          {{statusInfo[statusInfoNum].down}}
          <i :class="{ 'active_': isActive.isActive3 }"></i>
        </p>
      </div>
    </div>
    <!-- 面向报告生成页 -->
    <div class="report" v-show="!isReport">
      <div class="img-Head">
        <div class="Head-radius">
          <van-image @error="errorimg" round :src="imageHead" />
        </div>
        <p>报告已生成!</p>
      </div>
      <div class="report-input">
        <div class="input-content">
          <input v-show="!isName" type="text" v-model="name" placeholder="请输入姓名领取报告" />
          <van-button v-show="!isName" type="info" @click="handleSaveName">保存</van-button>
          <p v-show="isName">{{ name }}</p>
        </div>
      </div>
      <div class="receive">
        <van-button :class="{ saveName: isName }" :disabled="!isName" type="info" @click="handleReceiveReport">领取报告</van-button>
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
      status: 'transtion-one',
      statusInfo: [
        {
          up: '上庭数据提取中',
          and: '中庭数据提取中',
          down: '下庭数据提取中'
        },
        {
          up: '定位眼长、眼高',
          and: '定位鼻高、鼻翼宽',
          down: '定位嘴宽、嘴唇厚度'
        },
        {
          up: '量取下颌角度',
          and: '对比各部位数据',
          down: '匹配五行格局'
        }
      ],
      statusInfoNum: 0,
      isReport: true,
      name: '',
      isName: false
    }
  },
  mounted() {
    // this.updateStatus()
  },
  methods: {
    errorimg(e) {
      console.log(e)
    },
    // 过场 上传动画
    updateStatus() {
      setTimeout(() => {
        this.statusInfoNum = 1
        this.status = 'transtion-two'
        three()
      }, 2000)
      const three = () => {
        setTimeout(() => {
          this.statusInfoNum = 2
          this.status = 'transtion-three'
          is_report()
        }, 6000)
      }
      const is_report = () => {
        setTimeout(() => {
          this.isReport = false
        }, 2000)
      }
    },
    // 保存姓名
    handleSaveName(e){
      console.log(this.name)
      this.isName = true
    },
    handleReceiveReport() {
      this.$router.push({name: 'report'})
    }
  }
}
</script>
<style lang="scss" scoped>
.analysis {
  width: 100%;
  height: 100%;
  background: url("../../assets/images02/photograph/ic_bg.jpg") no-repeat;
  background-size: 100%;
  color: #fff;
  font-weight: 400;
  background-color: #001037;
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
.report {
  .img-Head {
    position: relative;
    top: 110px;
    .Head-radius {
      width: 334px;
      height: 334px;
      margin: 0 auto;
      position: relative;
      background: url("../../assets/images/saomiao/outerRing.png") no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      border-radius: 50%;
    }
    p {
      font-size: 30px;
      line-height: 30px;
      font-weight: 400;
    }
    .van-image {
      width: 260px;
      height: 260px;
      margin-top: 37px;
      z-index: 1;
    }
  }
  .report-input {
    margin-top: 230px;
    .input-content {
      width: 750px;
      height: 150px;
      background: url("../../assets/images/saomiao/bg_input.png") no-repeat;
      background-size: 100% 100%;
      input {
        position: relative;
        background-color: rgba(0, 0, 0, 0);
        width: 252px;
        margin: 0 auto;
        top: 63px;
        border: none;
        background: url("../../assets/images/saomiao/edit.png") no-repeat;
        background-size: 26px 26px;
        background-position: 0 1.267vw;
        text-indent: 36px;
      }
      input::-webkit-input-placeholder {
        color: #fff;
        font-size: 24px;
        font-weight: 400;
      }
      .van-button{
        position: relative;
        top:  63px;
        border-radius: 8px; 
      }
      p{
        line-height: 150px;
      }
    }
  }
  .receive {
    margin-top: 191px;
    .van-button {
      background: #3E97FF;
      border-radius: 16px;
      border: 2px solid rgba(62, 151, 255, 1);
      width: 310px;
      height: 68px;
      font-size:30px;
      font-weight:400;
      color: #fff;
    }
    .saveName{
      color: #fff;
    }
  }
}
</style>
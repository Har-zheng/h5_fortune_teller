<template>
  <div class="home">
    <div class="bg-img">
      <img src="../../assets/images02/photograph/ic_logo2.png" />
    </div>
    <div class="conetnt">
      <p class="title">
        <i class="icon"></i>
        <span>{{ title }}</span>
        <span>{{ title2 }}</span>
      </p>
      <div class="img-Head">
        <i :src="photo_img">
          <van-image :src="pro_img" />
        </i>
        <div class="feature">
          <p>上庭</p>
          <p>中庭</p>
          <p>下庭</p>
        </div>
      </div>
      <div class="head-icon">
        <p class="title">{{title3}}</p>
        <p class="icon"></p>
      </div>

      <BaseRouterTransition>
        <div v-show="isReport">
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
      </BaseRouterTransition>
      <BaseRouterTransition>
        <!-- 面向报告生成页 -->
        <div class="report" v-show="!isReport">
          <div class="report-input">
            <div class="input-content">
              <input v-show="!isName" type="text" v-model="name" placeholder="请输入您的姓名" />
              <!-- <van-button v-show="!isName" type="info" @click="handleSaveName">保存</van-button> -->
              <p v-show="isName">{{ name }}</p>
            </div>
          </div>
          <div class="receive">
            <van-button
              :class="{ saveName: isName }"
              class="btn_photo_bg"
              @click="handleReceiveReport"
            >领取报告</van-button>
          </div>
        </div>
      </BaseRouterTransition>
      <div class="photograph-btn">
        <p>HTTP://WWW.MYREAL3D.COM</p>
      </div>
    </div>
  </div>
</template>
<script>
import BaseRouterTransition from '../../components/BaseRouterTransition'
import { Dialog } from 'vant';
export default {
  data() {
    return {
      title: '测测你颜值',
      title2: '属于哪一种类型?',
      title3: '智能解码中',
      isTitle: '',
      photo_img: require('../../assets/images02/photograph/photo02.png'),
      pro_img: require('../../assets/images02/photograph/photo01.png'),
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
      isActive: {
        isActive1: false,
        isActive2: true,
        isActive3: true,
      },
      isReport: false,
      isName: false,
      name: ''
    }
  },
  components: {
    BaseRouterTransition
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
          this.title3 = '报告生成完成，待确认身份'
          this.isReport = false
        }, 2000)
      }
    },
    // 保存姓名
    handleSaveName(e) {
      console.log(this.name)

      this.isName = true
    },
    handleReceiveReport() {
      if (this.name === '') {
        console.log(this.name)
        Dialog.alert({
          message: '请输入姓名后领取报告!'
        }).then(() => {
          // on close
        });
      } else {
        console.log(this.name)
        this.$router.push({ name: 'report' })
      }
      
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: url("../../assets/images02/photograph/ic_bg.jpg") no-repeat;
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
  z-index: 2;
  line-height: 100%;
  // 宽度 计算 710 -减去两个padding值
  width: 568px;
  height: 100%;
  background-color: #000018cc;
  border-radius: 30px 30px 0px 0px;
  margin: 0 auto;
  padding: 46px 53px 0 53px;
  .title {
    font-size: 30px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    text-align: center;
    margin-bottom: 36px;
    .icon {
      display: inline-block;
      width: 52px;
      height: 56px;
      background: url("../../assets/images02/photograph/ic_bg3.png") no-repeat
        center;
      background-size: 100%;
      float: left;
      position: relative;
      bottom: 10px;
    }
    span {
      font-size: 36px;
      display: inline-block;
      line-height: 36px;
    }
    span:nth-child(1) {
      color: #ff71c1;
    }
    span:nth-child(2) {
      color: #4eb0ff;
    }
  }
  .tip {
    font-size: 30px;
    font-weight: 400;
    line-height: 24px;
    margin: 30px 0 27px 0;
    color: #0096ff;
  }
  .process-item {
    margin: 0 auto;
    // width: 360px;
    display: flex;
    justify-content: space-around;
    font-size: 25px;
    font-weight: 400;
    line-height: 24px;
    color: #55b9ff;
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
  // -css
  .status-info {
    width: 480px;
    margin: 0 auto;
    margin-top: 42px;
    p {
      text-align: left;
      height: 80px;
      line-height: 80px;
      font-size: 24px;
      font-weight: 400;
      position: relative;
      // border-bottom: 1px solid #327fe1;
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
.img-Head {
  margin-bottom: 26px;
  height: 310px;
  position: relative;
  i {
    display: inline-block;
    background: url("../../assets/images02/photograph/photo02.png") no-repeat;
    background-size: 100%;
    width: 310px;
    height: 310px;
  }
  .van-image {
    width: 260px;
    height: 260px;
    margin-top: 24px;
  }
  .feature {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 60px;
    font-size: 25px;
    p {
      color: #55b9ff;
      height: 58px;
      line-height: 58px;
      border-bottom: 1px dashed #55b9ff;
      width: 220px;
      text-align: right;
    }
    p:nth-child(1) {
      border-top: 1px dashed #55b9ff;
    }
  }
}
.head-icon {
  .title {
    font-size: 30px;
    margin-top: 55px;
  }
  .icon {
    width: 91px;
    height: 6px;
    border-radius: 7px;
    background: #007acf;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 46px;
  }
}
.photograph-btn {
  p {
    font-size: 12px;
    text-align: center;
    color: #71738c;
    font-weight: 400;
    margin-top: 42px;
  }
}
// 填写姓名
.report {
  .img-Head {
    position: relative;
    top: 110px;
    .Head-radius {
      width: 334px;
      height: 334px;
      margin: 0 auto;
      position: relative;
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
    // margin-top: 230px;
    .input-content {
      // height: 150px;
      // background: url("../../assets/images/saomiao/bg_input.png") no-repeat;
      background-size: 100% 100%;
      input {
        // background-color: rgba(0, 0, 0, 0);
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
      .van-button {
        border-radius: 8px;
      }
      p {
        line-height: 150px;
      }
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
      margin-top: 60px;
      background: url("../../assets/images02/photograph/tijiaoanniu.png")
        no-repeat center;
      background-size: 100%;
      color: #e6eeff;
    }
  }
}
</style>
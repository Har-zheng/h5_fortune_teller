<template>
  <div class="home">
    <div class="logo_img">
      <div class="bg-img"></div>
    </div>
    <div class="conetnt">
      <p class="title">
        <!-- <i class="icon"></i>
        <span>{{ title }}</span>
        <span>{{ title2 }}</span>-->
      </p>
      <div class="img-Head">
        <i>
          <div class="bg" ref="img_Head">
            <!-- <img ref="top_img" radius="8" :src="pro_img" /> -->
            <van-swipe :autoplay="1000" :show-indicators="false" vertical :touchable="false">
              <van-swipe-item v-for="(item ,index) in swper" :key="index">
                <img ref="swipe_img" radius="8" :src="item" />
              </van-swipe-item>
            </van-swipe>
          </div>
        </i>
        <!-- <div class="feature">
          <van-swipe :autoplay="1000" :show-indicators="false" vertical :touchable="false">
            <van-swipe-item v-for="(item ,index) in swper" :key="index">
              <img ref="swipe_img" radius="8" :src="item" />
            </van-swipe-item>
          </van-swipe>
        </div>-->
      </div>
      <div class="head-icon">
        <!-- <p class="title">{{title3}}</p>
        <p class="icon"></p>-->
      </div>

      <BaseRouterTransition>
        <div v-show="isReport">
          <div class="process-item">
            <div>测量三庭</div>
            <div>定位五官</div>
            <div>综合分析</div>
          </div>
          <div class="transtion-css">
            <div class="img_ios" :class="[status]">
              <img :src="status_img" alt />
            </div>
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
import { mapState, mapActions } from 'vuex'
import { img_location } from '../../utils/CommonFunction'
import imgExif from '../../mixin/imgExif'
import { wxgetreport } from '../../api/app'
// const h001 = require('../../assets/images02/haiwang/001.jpg')
const h001 = require('../../assets/images02/v2/hand/01.jpg')
const h002 = require('../../assets/images02/v2/hand/02.jpg')
const h003 = require('../../assets/images02/v2/hand/03.jpg')
const h004 = require('../../assets/images02/v2/hand/04.jpg')
const h005 = require('../../assets/images02/v2/hand/05.jpg')
const h006 = require('../../assets/images02/v2/hand/06.jpg')
const h007 = require('../../assets/images02/v2/hand/07.jpg')
const h008 = require('../../assets/images02/v2/hand/08.jpg')
const h009 = require('../../assets/images02/v2/hand/09.jpg')
const h010 = require('../../assets/images02/v2/hand/10.jpg')
const h011 = require('../../assets/images02/v2/hand/11.jpg')
const h012 = require('../../assets/images02/v2/hand/12.jpg')
export default {
  mixins: [imgExif],
  data() {
    return {
      title: '测测你颜值',
      title2: '属于哪一种类型?',
      title3: '智能解码中',
      isTitle: '',
      pro_img: '',
      status: 'transtion-one',
      status_img: require('../../assets/images02/v2/status_img.png'),
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
      isReport: true,
      isName: false,
      name: '',
      swper: [
        h001,
        h002,
        h003,
        h004,
        h005,
        h006,
        h007,
        h008,
        h009,
        h010,
        h011,
        h012,
      ]
    }
  },
  components: {
    BaseRouterTransition
  },
  computed: {
    ...mapState({
      image: state => state.app.app.parmes_data.image,
      imgContent: state => state.app.app.imgContent,
      Beauty_info: state => state.app.Beauty_info,
    })
  },
  watch: {
    Beauty_info: {
      handler(newVal) {
        console.log(newVal)
        if (newVal) {
          this.$router.push({ name: 'facereport' })
        }
      }
    }
  },
  created() {
    this.updateStatus()
  },
  mounted() {
    this.pro_img = this.imgContent
    // this.updateStatus()
    // this.getwxgetreport()
  },
  methods: {
    ...mapActions([
      'set_beauty_info'
    ]),
    errorimg(e) {
      console.log(e)
    },
    // 过场 上传动画
    updateStatus() {
      // this.imgPosition()
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
          if (this.Beauty_info) {
            this.$router.push({ name: 'facereport' })
          }
          // this.isReport = false
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
        // this.$router.push({ name: 'facereport' })
      }

    },
    getwxgetreport() {
      let data = {
        version: 1,
        data: {
          open_id: 'oYUGVwUQPL5gyNlVSaDpjRSuAY6k',
          channel_id: 'ys'
        }
      }
      wxgetreport(data).then(res => {
        console.log(res)
      })
    }
  },
  beforeDestroy() {
    this.set_beauty_info(false)
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
  background-color: #001037;
}
.logo_img {
  text-align: right;
  .bg-img {
    display: inline-block;
    z-index: 1;
    padding: 25px 20px;
    width: 210px;
    text-align: right;
    img {
      width: 100%;
    }
  }
}
.conetnt {
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
    .icon {
      display: block;
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
    span:nth-child(2) {
      color: #ff71c1;
    }
    span:nth-child(3) {
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
    padding: 0 173px;
    // width: 360px;
    display: flex;
    justify-content: space-around;
    font-size: 25px;
    font-weight: 800;
    line-height: 24px;
    color: #000;
  }
  .transtion-css {
    position: relative;
    // 12vw; 37.333vw 64vw
    .img_ios {
      position: absolute;
      width: 18px;
      height: 12px;
      left: 31vw;
      margin: 0 auto;
      top: -10px;
      img {
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
    }
    .transtion-two {
      left: 48vw;
      animation: statusCssone 1.2s linear;
    }
    @keyframes statusCssone {
      0% {
        left: 31vw;
      }
      100% {
        left: 48vw;
      }
    }
    .transtion-three {
      left: 66vw;
      animation: statusCssthree 1.2s linear;
    }
    @keyframes statusCssthree {
      0% {
        left: 48vw;
      }
      100% {
        left: 66vw;
      }
    }
  }
  // -css
  .status-info {
    width: 280px;
    margin: 0 auto;
    margin-top: 42px;
    p {
      text-align: left;
      height: 80px;
      line-height: 80px;
      font-size: 25px;
      font-weight: 400;
      position: relative;
      color: #000;
      // border-bottom: 1px solid #327fe1;
      i {
        width: 22px;
        height: 22px;
        display: block;
        background: url("../../assets/images02/v2/correct.png") no-repeat;
        background-size: 100% 100%;
        float: right;
        margin-top: 29px;
      }
      .active_ {
        width: 30px;
        height: 30px;
        animation: rotatecss 1.2s linear infinite;
        background: url("../../assets/images02/v2/loading.png") no-repeat;
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
  height: 604px;
  position: relative;
  i {
    display: inline-block;
    background: url("../../assets/images02/v2/tx_yuan.png") no-repeat;
    background-size: 100%;
    width: 700px;
    height: 604px;
    margin-left: 36px;
  }
  .bg {
    position: relative;
    width: 558px;
    height: 558px;
    overflow: hidden;
    display: inline-block;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 30px;
    margin-left: -12px;
    .van-swipe {
      height: 71vw;
      border-radius: 50%;
      .van-swipe-item {
        position: relative;
        width: 71vw !important;
        height: 71vw !important;
        overflow: hidden;
        display: inline-block;
        border-radius: 50%;
        margin: 0 auto;
        // margin-top: 16px;
      }
      img {
        height: 100%;
        text-align: center;
        margin: 0 auto;
        position: relative;
        border-radius: 50%;
      }
    }
  }
  img {
    height: 100%;
    text-align: center;
    margin: 0 auto;
  }
  .feature {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 0;
    font-size: 25px;
    margin-top: 24px;
    margin-left: -135px;
    width: 270px;
    height: 290px;
    .van-swipe {
      height: 260px;
      .van-swipe-item {
        position: relative;
        width: 310px !important;
        height: 270px !important;
        overflow: hidden;
        display: inline-block;
        border-radius: 8px;
        margin: 0 auto;
        margin-top: 16px;
      }
      img {
        border-radius: 8px;
        width: 100%;
        height: 100%;
        text-align: center;
        margin: 0 auto;
      }
    }
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
      padding-bottom: 22px;
      border-bottom: 2px solid #007acf;
      width: 344px;
      margin: 0 auto;
      input {
        // background-color: rgba(0, 0, 0, 0);
        width: 330px;
        margin: 0 auto;
        top: 63px;
        border: none;
        background: url("../../assets/images/saomiao/edit.png") no-repeat;
        background-size: 26px 26px;
        background-position: 0 1.267vw;
        text-indent: 46px;
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
      margin-top: 38px;
      background: url("../../assets/images02/photograph/tijiaoanniu.png")
        no-repeat center;
      background-size: 100%;
      color: #e6eeff;
    }
  }
}
</style>
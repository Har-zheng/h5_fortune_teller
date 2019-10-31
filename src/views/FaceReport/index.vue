<template>
  <div class="report">
    <div class="top">
      <img :src="top_img" alt />
      <p class="line">WHO AM I</p>
      <i class="redio"></i>
      <i class="icon"></i>
    </div>
    <div class="container">
      <div class="title">
        <i></i>
        <p>{{ personal_type.title }}</p>
      </div>
      <div class="assessment">
        <div class="info">
          <i class="icon"></i>
          <div class="text">
            <p class="text-title">综合评估</p>
            <span>{{ personal_type.describe }}</span>
          </div>
        </div>
        <van-button class="btn_photo_bg" @click="saveshare">保存分享</van-button>
        <p class="a_">
          HTTP://WWW.MYREAL3D.COM
          <br />BRAND 3D VIRTUAL FACIAL TREATMENT PLANNER
        </p>
        <p class="middle-title"></p>
      </div>
      <div class="footer-content">
        <div class="top" :style="{ 'z-index': 99}">
          <div class="hand-img">
            <i class="icon_yuan"></i>
            <div class="img-radio">
              <img src="../../assets/images02/photograph/timg01.jpg" alt />
            </div>
          </div>
          <p class="part_title">部位分析</p>
          <p class="item_p">
            <span class="title_span">{{ head_position[0].part }}</span>
            <span class="title_text">{{ head_position[0].describe }}</span>
          </p>
        </div>
        <div
          class="footer-middle"
          v-for="(item,index) in  head_position_new"
          :key="index"
          :style="{ 'z-index': head_position.length-index }"
        >
          <div class="bg_img">
            <p class="item_p">
              <span class="title_span">{{ item.part }}</span>
              <span class="title_text">{{ item.describe }}</span>
            </p>
          </div>
        </div>
        <div class="footer">
          <p class="a_">
            HTTP://WWW.MYREAL3D.COM
            <br />BRAND 3D VIRTUAL FACIAL TREATMENT PLANNER
          </p>
          <div class="code">
            <i></i>
            <img src="../../assets/images02/photograph/code.png" alt />
          </div>
          <p class="QR_code">长按识别二维码</p>
          <div class="footer_img">
            <img :src="qr_code_img" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { All_Types_Data } from '../../api/app'
import axios  from 'axios'
export default {
  data() {
    return {
      head_position: [
        {
          id: '001',
          part: '颞部宽:',
          describe: '颞部宽显得人思维缜密，逻辑能力强，权威大气。'
        },
        {
          id: '002',
          part: '颞部饱满：',
          describe: '思维冥界；为人亲和，情商高，会顾及别人的感受。'
        },
        {
          id: '002',
          part: '颞部饱满：',
          describe: '思维冥界；为人亲和，情商高，会顾及别人的感受。'
        },
        {
          id: '002',
          part: '颞部饱满：',
          describe: '思维冥界；为人亲和，情商高，会顾及别人的感受。'
        },
        {
          id: '002',
          part: '颞部饱满：',
          describe: '思维冥界；为人亲和，情商高，会顾及别人的感受。'
        },
        {
          id: '002',
          part: '颞部饱满：',
          describe: '思维冥界；为人亲和，情商高，会顾及别人的感受。'
        },
        {
          id: '002',
          part: '颞部饱满：',
          describe: '思维冥界；为人亲和，情商高，会顾及别人的感受。'
        },
        {
          id: '002',
          part: '颞部饱满：',
          describe: '思维冥界；为人亲和，情商高，会顾及别人的感受。'
        }
      ],
      
      overview: '你的长相就是人们口中传颂的海王鼻基底挺拔的你是个自信有想法且有征服欲望的人，两颞饱满让你有敏捷的思维，更好的理清和把控两性关系，眼睛下方的卧蚕让你更加迷人，大多数异性见了你都会被你的双眼深深吸引，你知道你自己有多么迷人，并且持续的散发着魅力，感情中你能够占据主导地位，拥有着号令整个海洋的潜力。你的目标不是一片小小的鱼塘，而是广阔的星辰大海。',
      top_img: require('../../assets/images02/photograph/timg01.jpg'),
      attribute: '海王',
      qr_code_img: '../../assets/images02/photograph/more_report.png',
      personal_type: {},
      type_num: 1
    }
  },
  computed: {
    head_position_new: function () {
      return this.head_position.filter((element, index) => {
        if (index !== 0) {
          return element
        }
      })
      console.log(arr)
    }
  },
  created() {
    this.get_all_types()
  },
  methods: {
    saveshare() {

    },
    headPositionMiddle() {
    },
    get_all_types() {
      // All_Types_Data().then(res => {
      //   // map filter find forEach
      //   const personal_type =  res.find((element, index) => {
      //     return element.type === this.type_num
      //   })
      //   console.log(personal_type)
      //   this.personal_type = personal_type
      // })
      axios.get('./config.json').then(res => {
        const data = res.data
        // map filter find forEach
        const personal_type =  data.find((element, index) => {
          return element.type === this.type_num
        })
        console.log(personal_type)
        this.personal_type = personal_type
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.report {
  font-family: Niagara Solid;
  font-weight: 400;
  color: #fff;
  background-color: #04032b;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  // overflow: scroll !important;
  z-index: 1;
  .top {
    position: relative;
    img {
      width: 100%;
      z-index: 1;
    }
    .line {
      position: absolute;
      top: 364px;
      font-size: 128px;
      font-weight: 400;
      color: #001a56;
      line-height: 172px;
      background: linear-gradient(0deg, #00a1fc 0%, #2c44d4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      z-index: 2;
      text-align: center;
      width: 100%;
    }
    .redio {
      background: url("../../assets/images02/photograph/beijing001.png")
        no-repeat;
      display: block;
      background-size: 100%;
      height: 90px;
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: 1;
    }
    .icon {
      background: url("../../assets/images02/photograph/LOGO_cc.png") no-repeat;
      background-size: 100%;
      display: block;
      width: 80px;
      height: 80px;
      position: absolute;
      top: 37px;
      left: 35px;
    }
  }
  .container {
    background: url("../../assets/images02/photograph/beijing002.jpg") no-repeat;
    background-size: 100%;
    height: 1700px;
    margin-top: -6px;
    position: relative;
    .title {
      text-align: center;
      position: relative;
      top: 45px;
      i {
        background: url("../../assets/images02/photograph/kuang.png") no-repeat;
        background-size: 100%;
        display: inline-block;
        width: 320px;
        height: 78px;
        position: absolute;
        top: 12px;
        left: 50%;
        margin-left: -160px;
      }
      p {
        position: relative;
        top: 12px;
        text-align: center;
        font-size: 68px;
        color: #001a56;
        line-height: 172x;
        background: linear-gradient(0deg, #00a1fc 0%, #2c44d4 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      padding-bottom: 78px;
    }
    .assessment {
      .info {
        margin: 0 auto;
        background: url("../../assets/images02/photograph/shuoming_kuang.png")
          no-repeat;
        background-size: 100%;
        width: 718px;
        height: 479px;
        .icon {
          display: block;
          width: 35px;
          height: 35px;
          background: url("../../assets/images02/photograph/dialogue.png")
            no-repeat;
          background-size: 100%;

          margin: 30px;
          float: left;
        }
        .text {
          float: left;
          margin: 30px 23px 47px 0;
          width: 598px;
          .text-title {
            font-size: 30px;
            font-weight: 800;
            text-align: left;
            margin-bottom: 20px;
          }
          .text-title:after {
            content: "";
            display: block;
            width: 91px;
            height: 6px;
            margin-top: 6px;
            border-radius: 7px;
            background: #fff;
          }
          span {
            display: inline-block;
            font-size: 24px;
            color: #fff;
            line-height: 35px;
            text-align: left;
          }
        }
      }

      .btn_photo_bg {
        clear: both;
        border: none;
        margin-top: 55px;
        width: 292px;
        height: 102px;
        background: url("../../assets/images02/photograph/tijiaoanniu.png")
          no-repeat center;
        background-size: 100%;
        color: #e6eeff;
      }
      .a_ {
        margin-top: 30px;
        font-size: 14px;
        color: #0b3fb3;
      }
      .middle-title {
        margin: 0 auto;
        margin-top: 56px;
        background: url("../../assets/images02/photograph/wanmei.png") no-repeat;
        width: 508px;
        background-size: 100%;
        height: 120px;
      }
    }
    .footer-content {
      clear: both;
      padding: 0 17px;
      position: relative;
      .top {
        background: url("../../assets/images02/photograph/buwei_01.png")
          no-repeat;
        background-size: 100%;
        height: 477px;
        margin: 0 auto;
        background-position-y: 115px;
        padding: 0 59px 0 37px;
        position: relative;
        z-index: 99;
        .hand-img {
          margin-top: 40px;
          text-align: center;
          position: relative;
          .img-radio {
            width: 220px;
            height: 220px;
            overflow: hidden;
            display: inline-block;
            border-radius: 50%;
            img {
              text-align: center;
              margin: 0 auto;
            }
          }
          .icon_yuan {
            position: absolute;
            left: 50%;
            margin-left: -115px;
            text-align: center;
            display: inline-block;
            width: 230px;
            height: 230px;
            z-index: 3;
            background: url("../../assets/images02/photograph/tx_yuan.png")
              no-repeat;
            background-size: 100%;
          }
        }
        .part_title {
          font-size: 36px;
          font-weight: 800;
          line-height: 35px;
          text-align: left;
        }
      }
      .item_p {
        margin-top: 40px;
        font-size: 30px;
        text-align: left;
        position: relative;
        .title_span {
          display: inline-block;
          position: absolute;
          left: 0;
          font-weight: 800;
          line-height: 38px;
          width: 160px;
        }
        .title_text {
          display: inline-block;
          position: absolute;
          right: 0;
          width: 445px;
          font-size: 30px;
          font-weight: 400;
          line-height: 38px;
        }
      }
      .footer-middle {
        // background: url('../../assets/images02/photograph')
        position: relative;
        .bg_img {
          background: url("../../assets/images02/photograph/buwei_02.png")
            no-repeat;
          background-size: 100%;
          height: 477px;
          padding: 0 59px 0 37px;
        }
        margin-top: -320px;
        // background-position-y: -115px;

        .item_p {
          padding-top: 172px;
        }
        z-index: 2;
      }
      .footer-middle:nth-child(2) {
        z-index: 20;
        margin-top: -180px;
      }
      .footer-middle:nth-child(3) {
        z-index: 19;
      }
      .footer-middle:nth-child(4) {
        z-index: 18;
      }
      .footer-middle:nth-child(5) {
        z-index: 17;
      }
      .footer {
        position: relative;
        z-index: 22;
        margin-top: -120px;
        .a_ {
          margin-top: 30px;
          font-size: 14px;
          color: #0b3fb3;
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
            width: 356px;
            height: 58px;
          }
        }
      }
    }
    .footer-content:after {
      content: "";
      display: block;
      background-color: #04032b;
      width: 100%;
      height: 90%;
      position: absolute;
      top: 320px;
      right: 0;
    }
  }
}
.app--content {
  background-color: #04032b;
}
</style>
<template>
  <div class="report">
    <div class="report_content">
      <div class="top">
        <img class="top_img" :src="top_img" alt />
        <span class="score">{{ similar *20 + 80}}%</span>
      </div>
      <div class="container">
        <div class="assessment">
          <!-- <div class="title-text">
            <p>
              你们最相似的
              <span>相貌特征</span>: {{ best_features }}
            </p>
            <p>
              你们最相似的
              <span>气质特征</span>: {{ best_temperament }}
            </p>
          </div>-->
          <div class="share_btn">
            <div id="share_img">
              <img :src="screenShotImg" id="shore_img_src" alt />
            </div>
            <van-button class="btn_photo_bg"></van-button>
          </div>
        </div>
        <div class="footer-content">
          <div class="top" :style="{ 'z-index': 99}">
            <div class="analysis_result">
              <img src="../../assets/images02/v2/analysis_result.png" />
            </div>
            <div class="hand-img">
              <i class="icon_yuan"></i>
              <div class="img-radio" ref="img_Head">
                <img ref="img_radio_img" :src="src_image" alt />
              </div>
            </div>

            <div class="part_item">
              <div
                class="item_list"
                v-for="(item,index) in  head_position"
                :class="{ 'img_active': img_num === index, 'depreciate':item.is_defect === -1,  'isDepreciate': (item.is_defect === -1 &&  img_num === index ) }"
                @click="handlePart(item,index)"
                :key="index"
              >
                <span class="title">{{ item.full_name }}</span>
                <span class="parts">{{ item.is_defect !== -1? '部位 分析': '面部 问题'}}</span>
              </div>
            </div>
            <div class="content">
              <p class="part_title">部位分析</p>
              <p class="item_p">
                <span class="title_span">{{ head_position[img_num].temperament }}</span>
                <!-- <span class="title_text">{{ head_position_all[0].explanation['D'] }}</span> -->
              </p>
            </div>
            <div class="content">
              <p class="part_title">解决方案</p>
              <p class="item_p">
                <span class="title_span">{{ head_position[img_num].improvement }}</span>
                <!-- <span class="title_text">{{ head_position_all[0].explanation['D'] }}</span> -->
              </p>
            </div>
          </div>
          <!-- <div
            class="footer-middle"
            v-for="(item,index) in  head_position_new"
            :key="index"
            :style="{ 'z-index': head_position_new.length-index }"
          >
            <div class="bg_img">
              <p class="item_p">
                <span class="title_span">{{ item.full_name }}</span>
                <span class="title_text">{{ item.explanation['D'] }}</span>
              </p>
            </div>
          </div>-->
          <div class="user_info">
            <div class="icon_img">
              <div class="sign_">
                <img class="sign" src="../../assets/images02/v2/sign.png" alt />
              </div>
              <div class="fuhao_">
                <img class="fuhao" src="../../assets/images02/v2/fuhao.png" alt />
              </div>
              <span>
                星
                <br />和
              </span>
            </div>
            <div class="content">
              <span class="icon_img"></span>
              <!-- head_position_all[img_num].promotion -->
              <p>
                请保持住你的最佳状态~
                <!-- 咨询 -->
                <!-- <span class="maney">（价值600元）</span> -->
              </p>
              <p>
                点击下图
                <strong>【申请注册】</strong>
                <br />可获得价值1000元的深度保湿面部护理*1次
                <br />*本次服务由
                <strong>【星和医美】</strong>提供
              </p>
              <p>*申请后客服将在7个工作日内致电与您联系</p>
              <i></i>
            </div>
            <div class="bth_register" @click="hanleBtnRegister"></div>
            <!-- <p class="p1">鼻基底、下颌、皱纹... ...</p>
            <p class="p2">更多面部详细参数点击获取</p>
            <div class="from">
              <p class="from_p">
                <label for="name">昵称:</label>
                <input @blur="ios_blur" type="text" v-model="name" />
              </p>
              <p class="from_p">
                <label for="number">电话:</label>
                <input type="number" @blur="ios_blur" v-model="number" />
              </p>
              <p class="from_p from_code">
                <input type="number" v-model="code_num" @blur="ios_blur" placeholder="填写验证码" />
                <button @click="handlegetCode">{{ btn_text }}</button>
              </p>
              <div class="receive">
                <van-button class="btn_photo_bg" @click="handleSubmitInfo">确认提交</van-button>
              </div>
            </div>
            -->
          </div>
          <!-- <div class="footer" v-show="isUser_id">
            <van-button type="info" @click="hanleBtnRetest">重测一次</van-button>
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
          </div>-->
          <div class="BusinessCooperation">
            <router-link :to="'buscoop'">
              <p>
                <img src="../../assets/images02/photograph/BusinessCooperation.png" alt />
              </p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="test_img" id="con">
        <div class="html2_cavars" :class="[isActive_back]" ref="html2_cavars">
          <span class="score">{{ similar *20 + 80}}%</span>
          <div class="assessment">
            <!-- <div class="title-text">
              <i class="before"></i>
              <p>
                你们最相似的
                <span>相貌特征</span>: 方脸
              </p>
              <p>
                你们最相似的
                <span>气质特征</span>: 英气
              </p>
              <i class="after"></i>
            </div>-->
          </div>
          <div class="seaking_code">
            <p>长按识别二维码</p>
            <div class="bg_font"></div>
          </div>
        </div>
      </div>
      <div id="qrcode" v-show="false"></div>
    </div>
  </div>
</template>
<script>
import { All_Types_Data, getSendCode, userBindInfo } from '../../api/app'
import { mapState } from 'vuex'
import axios from 'axios'
import { Dialog } from 'vant'
const h001 = require('../../assets/images02/v2/people/001.jpg')
const h002 = require('../../assets/images02/v2/people/002.jpg')
const h003 = require('../../assets/images02/v2/people/003.jpg')
const h004 = require('../../assets/images02/v2/people/004.jpg')
const h005 = require('../../assets/images02/v2/people/005.jpg')
const h006 = require('../../assets/images02/v2/people/006.jpg')
const h007 = require('../../assets/images02/v2/people/007.jpg')
const h008 = require('../../assets/images02/v2/people/008.jpg')
import html2cavas from './mixin/html2cavas'
import imgExif from '../../mixin/imgExif'
import { log } from 'util'
export default {
  mixins: [html2cavas, imgExif],
  data() {
    return {
      onle_one: [],
      head_position: [
        {
          degree: "适度",
          explanation: {
            C: "",
            D: ""
          },
          full_name: "鼻梁适度",
          is_defect: 0,
          label_id: 254,
          label_number: "p2_004_005_3",
          name: "鼻梁",
          solutions: [],
        }
      ],
      // 需要填写信息 获取到所有信息
      head_position_all: [
        {
          degree: "适度",
          explanation: {
            C: "",
            D: ""
          },
          full_name: "鼻梁适度",
          is_defect: 0,
          label_id: 254,
          label_number: "p2_004_005_3",
          name: "鼻梁",
          solutions: [],
        }
      ],
      overview: '',
      top_img: require('../../assets/images02/v2/people/001.jpg'),
      attribute: '海王',
      qr_code_img: require('../../assets/images02/photograph/more_report.png'),
      qr_code_shore_img: require('../../assets/images02/photograph/start_test.png'),
      personal_type: {},
      type_num: 1,
      isActive_back: '',
      src_image: '',
      img_num: 0,
      best_features: '方脸',
      best_temperament: '英气'
    }
  },
  computed: {
    head_position_new: function () {
      return this.head_position.filter((element, index) => {
        return element
      })
    },
    ...mapState({
      imgContent: state => state.app.app.imgContent,
      customized_features: state => state.app.app.instance.customized_features,
      level: state => state.app.app.result.level,
      gender: state => state.app.app.result.gender,
      test: state => state.app.app.result.test,
      original_id: state => state.app.app.original_id,
      parmes_data: state => state.app.app.parmes_data,
      score: state => state.app.app.result.score,
      similar: state => state.app.app.result.similar,
      best: state => state.app.app.result.best,
      user_channel_id: state => state.app.app.user_channel_id,
      save_url: state => state.app.save_url
    })
  },
  created() {
    this.get_all_types()
  },
  mounted() {
    // 当微信用户已扫描 直接进入道报告详情时 头像img需要后台返回了
    // console.log(this.imgContent)
    if (this.imgContent !== undefined || this.imgContent !== '') {
      this.src_image = this.imgContent
    } else {
      this.src_image = this.parmes_data.image
    }
    setTimeout(() => {
      this.getImgExif(this.src_image)
    }, 10)
    this.isImage()
  },
  methods: {
    headPositionMiddle() {
    },
    get_all_types() {
      this.type_num = this.level
      axios.get('./config.json').then(res => {
        const data = res.data
        // map filter find forEach
        const personal_type = data.find((element, index) => {
          return element.type === this.type_num
        })
        // console.log(personal_type)
        this.personal_type = personal_type
      })
      console.log(this.customized_features)
      const sele_item = []
      this.customized_features.filter((item, index) => {
        if (item.selected_label_id === 0) return
        const se = item.labels.filter((label_item, label_index) => {
          if (this.best === label_item.original.number) {
            this.best_features = label_item.full_name
          }
          return this.best.filter((best_item, best_index) => {
            if (best_item === label_item.original.number) {
              sele_item.push(label_item)
            }
          })
          // return item.original.selected_label_id === label_item.original.id
        })
      })
      this.head_position_all = sele_item
      const copy_all = JSON.parse(JSON.stringify(this.head_position_all))
      // let arr_is_defect_k = []
      // let arr_is_defect_b = []
      const arr_slot = []
      copy_all.forEach(element => {
        if (element.is_defect === 1) {
          arr_slot.unshift(element)
        } else {
          arr_slot.push(element)
        }
      });
      console.log(this.head_position_all)

      this.head_position = arr_slot

      // console.log(sele_item)
      // if (this.user_channel_id !== '') {
      //   for (let i = 0; i <= 9; i++) {
      //     this.head_position[i] = copy_all[i]
      //   }
      //   this.isUser_id = true
      //   return;
      // }
      // const user_data = JSON.parse(sessionStorage.getItem('user_data'))
      // console.log(user_data)
      // if (user_data !== null && user_data.image_id === this.original_id) {
      //   console.log(user_data.image_id)
      //   console.log(this.original_id)
      //   this.isUser_id = true
      //   // this.head_position = copy_all
      // } else if (copy_all.length >= 3) {
      //   for (let i = 0; i <= 9; i++) {
      //     this.head_position[i] = copy_all[i]
      //   }
      // }
    },
    // bg
    isImage() {
      if (this.gender === undefined) {
        this.gender = 'Female'
      }
      switch (this.type_num) {
        case 0:
          this.top_img = h001
          this.draw_canvas(1)
          break;
        case 1:
          this.top_img = h002
          this.draw_canvas(2)
          break;
        case 2:
          this.top_img = h003
          this.draw_canvas(3)
          break;
        case 3:
          this.top_img = h004
          this.draw_canvas(4)
          break;
        case 4:
          this.top_img = h005
          this.draw_canvas(5)
          break;
        case 5:
          this.top_img = h006
          this.draw_canvas(6)
          break;
        case 6:
          this.top_img = h007
          this.draw_canvas(7)
          break;
        case 7:
          this.top_img = h008
          this.draw_canvas(8)
          break;
        default:
          break;
      }
      if (this.gender === "Female" && this.type_num === 0) {
        this.top_img = h001_1
        this.draw_canvas(9)
      }
      let img_radio_img = this.$refs.img_radio_img
      console.log(img_radio_img)
    },
    // 重新测
    hanleBtnRetest() {
      this.$router.push({ name: 'PhotoPage' })
    },
    // 申请注册
    hanleBtnRegister() {
      this.$router.push({ name: 'userInfo' })
    },
    // 点击部位
    handlePart(item, index) {
      console.log(index)
      console.log(item)
      this.img_num = index
    }
  }
}
</script>
<style lang="scss" scoped>
.report_content {
  font-family: Niagara Solid;
  font-weight: 400;
  color: #fff;
  // overflow: scroll !important;
  z-index: 1;
  position: relative;
  overflow: hidden;
  padding-bottom: 46px;
  .top {
    position: relative;
    z-index: 1;
    .top_img {
      width: 100%;
      z-index: 1;
    }
    .score {
      position: absolute;
      top: 760px;
      right: 76px;
      color: #947540;
      font-size: 36px;
      font-weight: 800;
    }
    .line {
      position: absolute;
      top: 364px;
      font-size: 60px;
      font-weight: 400;
      color: #001a56;
      line-height: 172px;
      background: linear-gradient(0deg, #00a1fc 0%, #2c44d4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      z-index: 2;
      text-align: center;
      width: 100%;
      margin: 0 auto;
      span {
        text-align: center;
        display: block;
        // width: 280px;
        // margin-left: -140px;
      }
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
      background: url("../../assets/images02/photograph/LOGO_new.png") no-repeat;
      background-size: 100%;
      display: block;
      width: 141px;
      height: 127px;
      position: absolute;
      top: 37px;
      left: 35px;
    }
  }
  .container {
    background: url("../../assets/images02/v2/beijing002.jpg") no-repeat;
    background-size: 100%;
    background-position-y: -120px;
    // height: 1700px;
    margin-top: -10px;
    position: relative;
    z-index: 2;
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
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      padding-bottom: 78px;
    }
    .assessment {
      position: relative;
      top: -180px;
      .info {
        position: relative;
        margin: 0 auto;
        background: #030329;
        // background-size: 100%;
        width: 718px;
        border-radius: 0 36px 36px 36px;
        margin-bottom: 30px;
        // height: 479px;
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
          display: inline-block;
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
        .jiantou {
          display: inline-block;
          position: absolute;
          width: 37px;
          height: 27px;
          background: url("../../assets/images02/photograph/xiala.png")
            no-repeat;
          background-size: 100%;
          left: 50%;
          margin-left: -18px;
          bottom: 20px;
          animation: jantou_frame 1.2s infinite;
        }
        @keyframes jantou_frame {
          0% {
            bottom: 4vw;
          }
          100% {
            bottom: 0vw;
          }
          // 100% {
          //   bottom:  6vw;
          // }
        }
      }
      // 文字
      .title-text {
        margin: 0 auto;
        position: relative;
        p {
          color: #000;
          font-weight: 800;
          font-size: 36px;
          margin-bottom: 12px;
        }
        span {
          color: #947540;
        }
      }
      .share_btn {
        width: 375px;
        // height: 102px;
        position: relative;
        display: inline-block;
        margin-top: -40px;
        #share_img {
          z-index: 2;
          width: 375px;
          height: 102px;
          position: relative;
          margin-top: -80px;
          // position: absolute;
          top: 140px;
          // opacity: 0;
          img {
            width: 100%;
            height: 100%;
            opacity: 0;
            // display: none;
          }
        }
      }
      .btn_photo_bg {
        position: relative;
        z-index: 1;
        clear: both;
        border: none;
        margin-top: 32px;
        width: 375px;
        height: 102px;
        font-size: 30px;
        background: url("../../assets/images02/v2/save.png") no-repeat center;
        background-size: 100%;
        color: #e6eeff;
      }
      .tip_btn {
        clear: both;
        color: #0178ce;
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        margin-top: 20px;
        span {
          margin-bottom: 8px;
          display: block;
        }
      }
      .a_ {
        margin-top: 50px;
        font-size: 14px;
        color: #0b3fb3;
      }
      .middle-title {
        margin: 0 auto;
        margin-top: 56px;
        background: url("../../assets/images02/photograph/wanmei.png") no-repeat;
        width: 508px;
        background-size: 100%;
        height: 130px;
      }
    }
    .footer-content {
      clear: both;
      padding: 0;
      position: relative;
      .top {
        background: url("../../assets/images02/v2/scroll.png") no-repeat;
        background-size: 100%;
        height: 1500px;
        margin: 0 auto;
        background-position-y: 0;
        // margin-top: 60px;
        padding: 76px 59px 0 37px;
        position: relative;
        z-index: 99;
        .analysis_result {
          height: 48px;
          img {
            height: 100%;
          }
        }
        .hand-img {
          margin-top: 40px;
          text-align: center;
          position: relative;
          .img-radio {
            width: 560px;
            height: 570px;
            overflow: hidden;
            display: inline-block;
            border-radius: 50%;
            position: relative;
            margin: 2.333vw 0 0 3.8vw;
            img {
              width: 100%;
              text-align: center;
              margin: 0 auto;
            }
          }
          .icon_yuan {
            position: absolute;
            left: 0;
            margin-left: 1px;
            text-align: center;
            display: inline-block;
            width: 720px;
            height: 650px;
            z-index: 3;
            background: url("../../assets/images02/v2/tx_yuan.png") no-repeat;
            background-size: 100%;
          }
        }
        .content {
          padding: 18px 23px 0 23px;
          color: #000;
          .part_title {
            margin: 24px 0;
            font-size: 25px;
            line-height: 35px;
            text-align: left;
            font-weight: bold;
            margin-bottom: 12px;
          }
          .item_p {
            margin: 6px 0;
            font-size: 30px;
            text-align: left;
            font-weight: 800;
            // position: relative;
            .title_span {
              display: inline-block;
              // position: absolute;
              left: 0;
              font-weight: 400;
              line-height: 38px;
              width: 100%;
            }
            .title_text {
              display: inline-block;
              position: absolute;
              right: 0;
              width: 445px;
              font-size: 24px;
              font-weight: 400;
              line-height: 38px;
            }
          }
        }

        .part_item {
          display: flex;
          margin-top: 60px;
          justify-content: space-around;
          margin-left: 40px;
          .item_list {
            width: 58px;
            height: 326px;
            margin-right: 15px;
            background: url("../../assets/images02/v2/label1.png") no-repeat;
            background-size: 100% 100%;
            span {
              display: inline-block;
              height: 120px;
              width: 58px;
              font-size: 30px;
              word-wrap: break-word;
              letter-spacing: 0px;
              color: #000;
              text-align: center;
            }
            .title {
              top: 26px;
            }
            .parts {
              font-size: 18px;
              color: #8e743b;
              width: 29px;
              margin-top: 12px;
            }
          }
          .img_active {
            // width: 86px;
            height: 326px;
            background: url("../../assets/images02/v2/label1_select.png")
              no-repeat;
            background-size: 140%;
            background-position-x: -9px;
            position: relative;
            top: -30px;
            box-shadow: 15px 0 15px -15px #000;
          }
          .depreciate {
            background: url("../../assets/images02/v2/label2.png") no-repeat;
            background-size: 100% 100%;
          }
          .isDepreciate {
            background: url("../../assets/images02/v2/label2_select.png")
              no-repeat;
            background-size: 140%;
            background-position-x: -9px;
            position: relative;
            top: -30px;
            box-shadow: 15px 0 15px -15px #000;
          }
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
            width: 240px;
            height: 240px;
            position: absolute;
            left: 50%;
            margin-left: -120px;
            top: -5px;
            z-index: 1;
          }
          position: relative;
          width: 230px;
          height: 230px;
          // overflow: hidden;
          display: inline-block;
          border-radius: 8px;
          margin: 0 auto;
          margin-top: 16px;
          img {
            height: 100%;
            text-align: center;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }
        }
        .QR_code {
          font-size: 30px;
          line-height: 16px;
          margin-top: 60px;
        }
        .footer_img {
          position: relative;
          width: 375px;
          height: 98px;
          // overflow: hidden;
          display: inline-block;
          border-radius: 8px;
          margin: 0 auto;
          margin-top: 30px;
          img {
            height: 100%;
            text-align: center;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }
        }
      }
      .user_info {
        position: relative;
        z-index: 8;
        width: 100%;
        height: 700px;
        background: url("../../assets/images02/v2/footer_img.png") no-repeat;
        background-size: 100%;
        .icon_img {
          position: absolute;
          left: 196px;
          top: 200px;
          color: #000;
          .sign_ {
            width: 48px;
            height: 158px;
            .sign {
              width: 100%;
            }
          }
          .fuhao_ {
            width: 14px;
            position: relative;
            height: 20px;
            left: 16px;
            .fuhao {
              width: 100%;
            }
          }

          span {
            width: 48px;
            font-size: 24px;
            word-wrap: break-word;
          }
        }
        .content {
          width: 310px;
          position: absolute;
          top: 140px;
          left: 263px;
          font-size: 24px;
          line-height: 36px;
          color: #0c0c0c;
          font-weight: 400;
          text-align: left;
          padding-top: 10px;
          .icon_img {
            width: 220px;
            height: 60px;
            display: inline-block;
            background: url("../../assets/images02/v2/title.png") no-repeat;
            background-size: 100%;
            position: absolute;
            top: -16px;
            left: 50%;
            margin-left: -100px;
          }
          .maney {
            color: #9a5c4a;
          }
          strong {
            font-weight: 800;
          }
          p {
            margin-top: 34px;
          }
          p:nth-child(1) {
            margin-top: 12px;
          }
          p:nth-child(3),
          p:nth-child(4) {
            margin-top: 17px;
          }
          i {
            position: absolute;
            right: 0;
            display: inline-block;
            width: 120px;
            height: 70px;
            background: url("../../assets/images02/v2/xingfeng.png") no-repeat;
            background-size: 100%;
          }
        }
        .bth_register {
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -191px;
          width: 382px;
          height: 72px;
          background: url("../../assets/images02/v2/register.png") no-repeat;
          background-size: 100%;
        }
        .p1 {
          font-size: 46px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .p2 {
          font-size: 40px;
          color: #1573e8;
          font-weight: bold;
          margin-bottom: 70px;
        }
        .from {
          width: 568px;
          margin: 0 auto;
          // clear: both;
          // padding: 0 36px;
          // margin-top: 32px;
          .from_p {
            background: #002b8a;
            border-radius: 50px;
            line-height: 78px;
            margin-top: 20px;
            label {
              font-size: 26px;
            }
            input {
              // background-color: rgba(0, 0, 0, 0);
              font-family: Niagara Solid;
              width: 420px;
              margin: 0 auto;
              top: 63px;
              border: none;
              background: none;
              text-indent: 8px;
              // font-size: 46px;
              letter-spacing: 6px;
              font-weight: 200;
              // background: url("../../assets/images/saomiao/edit.png") no-repeat;
              // background-size: 26px 26px;
              // background-position: 0 1.267vw;
              // text-indent: 46px;
            }
            input::-webkit-input-placeholder {
              color: #fff;
              font-size: 24px;
              // font-weight: 400;
            }
          }
          .from_code {
            background: none;
            text-align: left;
            // position: relative;
            input {
              background: #002b8a;
              width: 300px;
              border-radius: 50px;
              text-indent: 50px;
              // position: absolute;
              // left: 0;
            }
            button {
              background: #002b8a;
              border: none;
              border-radius: 50px;
              font-size: 24px;
              width: 200px;
              float: right;
            }
          }
          .receive {
            // margin-top: 140px;
            .van-button {
              border-radius: 2.133vw;
              width: 41.333vw;
              height: 16vw;
              font-size: 4vw;
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
      }
    }
    .footer-content:after {
      content: "";
      display: block;
      // background-color: #04032b;
      width: 100%;
      height: 96%;
      position: absolute;
      top: 320px;
      right: 0;
    }
    // 商务合作
    .BusinessCooperation {
      margin-top: 60px;
      position: relative;
      z-index: 10;
      p {
        width: 200px;
        height: 90px;
        margin: 0 auto;
        display: inline-block;
        img {
          width: 100%;
          margin: 0 auto;
        }
      }
    }
  }

  //   截图截图
  .test_img {
    position: absolute;
    z-index: 0;
    top: 0;
    // top: 560vw;
    background: url("../../assets/images02/v2/beijing002.jpg") no-repeat;
    background-size: 100%;
    background-position-y: -600px;
    padding: 0 0 12px 0;
    // width: 1500px;
  }
  // .isActive_back {
  //   background: url("../../assets/images02/shore/001.jpg") no-repeat;
  //   background-size: 100%;
  //   width: 1500px;
  //   height: 2668px;
  // }
  .html2_cavars {
    background: url("../../assets/images02/v2/people/001.jpg") no-repeat;
    background-size: 100%;
    width: 1500px;
    height: 2860px;
    position: relative;
    .score {
      position: absolute;
      top: 1530px;
      right: 170px;
      color: #947540;
      font-size: 76px;
      font-weight: 800;
    }
    .seaking_code {
      background: url("../../assets/images02/photograph/code.png") no-repeat;
      background-size: 100% !important;
      width: 360px;
      height: 360px;
      position: absolute;
      left: 50%;
      margin-left: -180px;
      bottom: 180px;
      padding-bottom: 60px;
      p {
        width: 100%;
        color: #000;
        position: absolute;
        font-size: 50px;
        bottom: -10px;
        font-weight: bold;
        left: 0;
      }
      .bg_font {
        background: url("../../assets/images02/v2/font.png") no-repeat;
        background-size: 100%;
        width: 888px;
        height: 136px;
        position: absolute;
        left: 50%;
        margin: 10px 0;
        margin-left: -444px;
        bottom: -180px;
      }
    }
    .assessment {
      position: relative;
      top: 2260px;
      .info {
        position: relative;
        margin: 0 auto;
        background: #030329;
        // background-size: 100%;
        width: 1436px;
        border-radius: 0 72px 72px 72px;
        margin-bottom: 60px;
        // height: 479px;
        .icon {
          display: block;
          width: 70px;
          height: 70px;
          background: url("../../assets/images02/photograph/dialogue.png")
            no-repeat;
          background-size: 100%;
          margin: 60px;
          float: left;
        }
        .text {
          display: inline-block;
          margin: 600px 46px 94px 0;
          width: 1196px;
          .text-title {
            font-size: 60px;
            font-weight: 800;
            text-align: left;
            margin-bottom: 40px;
          }
          .text-title:after {
            content: "";
            display: block;
            width: 182px;
            height: 12px;
            margin-top: 12px;
            border-radius: 14px;
            background: #fff;
          }
          span {
            display: inline-block;
            font-size: 48px;
            color: #fff;
            line-height: 70px;
            text-align: left;
          }
        }
        .jiantou {
          display: inline-block;
          position: absolute;
          width: 37px;
          height: 27px;
          background: url("../../assets/images02/photograph/xiala.png")
            no-repeat;
          background-size: 100%;
          left: 50%;
          margin-left: -18px;
          bottom: 20px;
          animation: jantou_frame 1.2s infinite;
        }
        @keyframes jantou_frame {
          0% {
            bottom: 4vw;
          }
          100% {
            bottom: 0vw;
          }
          // 100% {
          //   bottom:  6vw;
          // }
        }
      }
      // 文字
      .title-text {
        margin: 0 auto;
        position: relative;
        p {
          color: #000;
          font-weight: 800;
          font-size: 72px;
          margin-bottom: 24px;
        }
        .before {
          position: absolute;
          display: inline-block;
          width: 1024px;
          height: 40px;
          background: url("../../assets/images02/v2/icon_jian.png") no-repeat;
          background-size: 100%;
          top: -92px;
          left: 16%;
          // margin-left: -500px;
        }
        .after {
          position: absolute;
          display: inline-block;
          width: 1024px;
          height: 40px;
          background: url("../../assets/images02/v2/icon_jian.png") no-repeat;
          background-size: 100%;
          bottom: -90px;
          left: 16%;
          // margin-left: -500px;
          transform: rotate(180deg);
        }
        span {
          color: #947540;
        }
      }
      .share_btn {
        width: 375px;
        // height: 102px;
        position: relative;
        display: inline-block;
        margin-top: -40px;
        #share_img {
          z-index: 2;
          width: 375px;
          height: 102px;
          position: relative;
          margin-top: -80px;
          // position: absolute;
          top: 165px;
          // opacity: 0;
          img {
            width: 100%;
            height: 100%;
            opacity: 0;
            // display: none;
          }
        }
      }
      .btn_photo_bg {
        position: relative;
        z-index: 1;
        clear: both;
        border: none;
        margin-top: 32px;
        width: 375px;
        height: 102px;
        font-size: 30px;
        background: url("../../assets/images02/v2/save.png") no-repeat center;
        background-size: 100%;
        color: #e6eeff;
      }
      .tip_btn {
        clear: both;
        color: #0178ce;
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        margin-top: 20px;
        span {
          margin-bottom: 8px;
          display: block;
        }
      }
      .a_ {
        margin-top: 50px;
        font-size: 14px;
        color: #0b3fb3;
      }
      .middle-title {
        margin: 0 auto;
        margin-top: 56px;
        background: url("../../assets/images02/photograph/wanmei.png") no-repeat;
        width: 508px;
        background-size: 100%;
        height: 130px;
      }
    }
  }
  .isActive_001 {
    background: url("../../assets/images02/shore/001.jpg") no-repeat;
    background-size: 100%;
  }
  .isActive_001-1 {
    background: url("../../assets/images02/shore/001-1.jpg") no-repeat;
    background-size: 100%;
  }
  .isActive_002 {
    background: url("../../assets/images02/shore/002.jpg") no-repeat;
    background-size: 100%;
  }
  .isActive_003 {
    background: url("../../assets/images02/shore/003.jpg") no-repeat;
    background-size: 100%;
  }
  .isActive_004 {
    background: url("../../assets/images02/shore/004.jpg") no-repeat;
    background-size: 100%;
  }
  .isActive_005 {
    background: url("../../assets/images02/shore/005.jpg") no-repeat;
    background-size: 100%;
  }
  .isActive_006 {
    background: url("../../assets/images02/shore/006.jpg") no-repeat;
    background-size: 100%;
  }
  .isActive_007 {
    background: url("../../assets/images02/shore/007.jpg") no-repeat;
    background-size: 100%;
  }
  .isActive_008 {
    background: url("../../assets/images02/shore/008.jpg") no-repeat;
    background-size: 100%;
  }
}
.app--content {
  background-color: #04032b;
}
</style>
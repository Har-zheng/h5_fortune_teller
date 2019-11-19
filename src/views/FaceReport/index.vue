<template>
  <div class="report">
    <div class="report_content">
      <div class="top">
        <img class="top_img" :src="top_img" alt />
        <!-- <p class="line">
          <span>WHO AM I</span>
        </p>-->
        <!-- <i class="redio"></i> -->
        <i class="icon"></i>
      </div>
      <div class="container">
        <!-- <div class="title">
          <i></i>
          <p>{{ personal_type.title }}</p>
        </div>-->
        <div class="assessment">
          <div class="info">
            <i class="icon"></i>
            <div class="text">
              <p class="text-title">综合评估</p>
              <span>{{ personal_type.describe }}</span>
            </div>
            <div class="jiantou"></div>
          </div>
          <div class="share_btn">
            <div id="share_img">
              <img :src="screenShotImg" id="shore_img_src" alt />
            </div>
            <van-button class="btn_photo_bg" @click="saveshare">长按保存分享</van-button>
          </div>
          <p class="tip_btn">
            <span>保存图片分享给朋友</span>
            <span>测测TA是这片海域的哪条鱼?</span>
          </p>
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
              <div class="img-radio" ref="img_Head">
                <img ref="img_radio_img" :src="src_image" alt />
              </div>
            </div>
            <p class="part_title">部位分析</p>
            <p class="item_p">
              <span class="title_span">{{ head_position_all[0].full_name }}</span>
              <span class="title_text">{{ head_position_all[0].explanation['D'] }}</span>
            </p>
          </div>
          <div
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
          </div>

          <div class="user_info" v-show="!isUser_id">
            <p class="p1">鼻基底、下颌、皱纹... ...</p>
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
          </div>
          <div class="footer" v-show="isUser_id">
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
          </div>
          <div class="BusinessCooperation">
            <router-link :to="'buscoop'">
              <p>
                <img src="../../assets/images02/photograph/BusinessCooperation.png" alt />
              </p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="test_img">
        <div class="html2_cavars" :class="[isActive_back]" ref="html2_cavars" id="con">
          <!-- <div class="top">
          <img class="top_img" crossorigin="anonymous" :src="top_img" alt />
          <div class="hand-img">
            <i class="icon_yuan"></i>
            <div class="img-radio">
              <img crossorigin="anonymous" ref="canvas_top_img" :src="parmes_data_img" alt />
            </div>
          </div>
          <i class="redio"></i>
          <i class="icon"></i>
          </div>-->
          <div class="seaking_code"></div>
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
const h001 = require('../../assets/images02/haiwang/001.jpg')
const h001_1 = require('../../assets/images02/haiwang/001-1.jpg')
const h002 = require('../../assets/images02/haiwang/002.jpg')
const h003 = require('../../assets/images02/haiwang/003.jpg')
const h004 = require('../../assets/images02/haiwang/004.jpg')
const h005 = require('../../assets/images02/haiwang/005.jpg')
const h006 = require('../../assets/images02/haiwang/006.jpg')
const h007 = require('../../assets/images02/haiwang/007.jpg')
const h008 = require('../../assets/images02/haiwang/008.jpg')
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
      overview: '你的长相就是人们口中传颂的海王鼻基底挺拔的你是个自信有想法且有征服欲望的人，两颞饱满让你有敏捷的思维，更好的理清和把控两性关系，眼睛下方的卧蚕让你更加迷人，大多数异性见了你都会被你的双眼深深吸引，你知道你自己有多么迷人，并且持续的散发着魅力，感情中你能够占据主导地位，拥有着号令整个海洋的潜力。你的目标不是一片小小的鱼塘，而是广阔的星辰大海。',
      top_img: require('../../assets/images02/photograph/timg01.jpg'),
      attribute: '海王',
      qr_code_img: require('../../assets/images02/photograph/more_report.png'),
      qr_code_shore_img: require('../../assets/images02/photograph/start_test.png'),
      personal_type: {},
      type_num: 1,
      isUser_id: false,
      btn_text: '获取验证码',
      name: '',
      number: '',
      code_num: '',
      isSubmit: false,
      isActive_back: '',
      src_image: ''
    }
  },
  computed: {
    head_position_new: function () {
      return this.head_position.filter((element, index) => {
        if (index !== 0) {
          return element
        } else {
          this.onle_one = element
        }
      })
    },
    ...mapState({
      image: state => state.app.app.image,
      customized_features: state => state.app.app.instance.customized_features,
      level: state => state.app.app.result.level,
      gender: state => state.app.app.result.gender,
      test: state => state.app.app.result.test,
      original_id: state => state.app.app.original_id,
      parmes_data: state => state.app.app.parmes_data,
      score: state => state.app.app.result.score,
      user_channel_id: state => state.app.app.user_channel_id,
      save_url: state => state.app.save_url
    })
  },
  created() {
    this.get_all_types()
  },
  mounted() {
    // 当微信用户已扫描 直接进入道报告详情时 头像img需要后台返回了
    console.log(this.image)
    if (this.image !== undefined) {
      this.src_image = this.image
    } else {
      this.src_image = this.parmes_data.image
    }
    setTimeout(() => {
      this.getImgExif(this.src_image)
    }, 10)
    this.isImage()
  },
  methods: {
    // 失去焦点
    ios_blur() {
      window.scroll(0, 0);//失焦后强制让页面归位
    },
    handlegetCode() {
      if (this.number.length !== 11) {
        Dialog.alert({
          message: '请输入11位手机号!'
        }).then(() => {
          // on close
        });
        return
      }
      if (this.btn_text === '获取验证码' || this.btn_text === '重新获取') {
        this.btn_text = 60;
        const code_time = setInterval(() => {
          if (this.btn_text >= 0) {
            this.btn_text = this.btn_text - 1;
          }
          if (this.btn_text === 0) {
            this.btn_text = '重新获取';
            clearInterval(code_time);
          }
        }, 1000);
        console.log(this.number)
        let user_info = {
          version: 1,
          data: {
            mobile: this.number
          }
        }
        getSendCode(user_info).then(res => {
          console.log(res)
        })
      }
    },
    // 提交userinfo
    handleSubmitInfo() {
      if (this.number === '' || this.code_num === '' || this.name === '') {
        Dialog.alert({
          message: '请完善信息!'
        }).then(() => {
          // on close
        });
        return
      }
      console.log(this.isSubmit)
      if (this.isSubmit) return
      let user_info = {
        version: 1,
        data: {
          image_id: this.original_id,
          mobile: this.number,
          country_code: 86,
          code: this.code_num,
          nickname: this.name
        }
      }
      let { open_id } = this.parmes_data
      if (open_id !== undefined) {
        user_info.data['open_id'] = open_id
      }
      // "open_id": "asdasdadsdasdas",
      this.isSubmit = false
      userBindInfo(user_info).then(res => {
        console.log(res)
        if (res.code === 0) {
          this.isSubmit = true
          const user_data = res.data
          this.head_position = []
          this.head_position = this.head_position_all
          this.isUser_id = true
          if (this.head_position_all.length >= 3) {
            this.head_position[2].explanation['D'] = this.head_position_all[2].explanation['D']
            this.$set(this.head_position[2].explanation, 'D', this.head_position_all[2].explanation['D'])
          }
          //防止 刷新当前页面 已提交user info 丢失
          sessionStorage.setItem('user_data', JSON.stringify(user_data))
        } else {
          this.isSubmit = true
          alert(JSON.stringify(res))
        }
      })
    },
    saveshare() {

    },
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
        console.log(personal_type)
        this.personal_type = personal_type
      })
      console.log(this.customized_features)
      const sele_item = []
      this.customized_features.filter((item, index) => {
        if (item.selected_label_id === 0) return
        const se = item.labels.filter((label_item, label_index) => {
          return item.selected_label_id === label_item.label_id
        })
        console.log(se.length)
        if (se.length !== 0 && se[0].explanation === null) {
          se[0].explanation = {
            "C": '',
            "D": ''
          }
        }
        if (se.length !== 0 && se[0].hasOwnProperty('explanation') && se[0].explanation !== null) {
          // console.log(se[0])
          sele_item.push(se[0])
        }
      })
      this.head_position_all = sele_item
      const copy_all = JSON.parse(JSON.stringify(this.head_position_all))
      if (this.user_channel_id !== '') {
        this.head_position = this.head_position_all
        this.isUser_id = true
        return;
      }
      const user_data = JSON.parse(sessionStorage.getItem('user_data'))
      console.log(user_data)
      if (user_data !== null && user_data.image_id === this.original_id) {
        console.log(user_data.image_id)
        console.log(this.original_id)
        this.isUser_id = true
        this.head_position = copy_all
      } else if (copy_all.length >= 3) {
        for (let i = 0; i < 3; i++) {
          this.head_position[i] = copy_all[i]
        }
      }
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
    }
  }
}
</script>
<style lang="scss" scoped>
.report_content {
  font-family: Niagara Solid;
  font-weight: 400;
  color: #fff;
  background-color: #04032b;
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
    .line {
      position: absolute;
      top: 364px;
      font-size: 80px;
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
    background: url("../../assets/images02/photograph/beijing002.jpg") no-repeat;
    background-size: 100%;
    background-position-y: -300px;
    // height: 1700px;
    margin-top: -310px;
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
      .share_btn {
        width: 292px;
        // height: 102px;
        position: relative;
        display: inline-block;
        margin-top: -40px;
        #share_img {
          z-index: 2;
          width: 292px;
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
        margin-top: 55px;
        width: 292px;
        height: 102px;
        font-size: 30px;
        background: url("../../assets/images02/photograph/tijiaoanniu.png")
          no-repeat center;
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
            position: relative;
            img {
              width: 100%;
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
          font-size: 24px;
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
      background-color: #04032b;
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
    z-index: 1;
    top: 0;
    top: 500vw;
    background-color: #00124d;
    padding: 0 0 12px 0;
    width: 1500px;
  }
  // .isActive_back {
  //   background: url("../../assets/images02/shore/001.jpg") no-repeat;
  //   background-size: 100%;
  //   width: 1500px;
  //   height: 2668px;
  // }
  .html2_cavars {
    background: url("../../assets/images02/shore/001-1.jpg") no-repeat;
    background-size: 100%;
    width: 1500px;
    height: 2668px;
    position: relative;
    .seaking_code {
      background: url("../../assets/images02/photograph/code.png") no-repeat;
      background-size: 100%;
      width: 372px;
      height: 372px;
      position: absolute;
      left: 140px;
      bottom: 190px;
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
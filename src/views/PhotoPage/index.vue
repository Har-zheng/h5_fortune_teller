<template>
  <div class="home">
    <div class="bg-img">
      <!-- <div class="ios_bug_style">
        <img src="../../assets/images02/photograph/LOGO.png" />
      </div>-->
    </div>
    <div class="conetnt">
      <p class="title">
        <span :class="{'isTopImg': !isConfirm}"></span>
      </p>
      <div class="img-Head">
        <div class="img-Head-bg"></div>
        <div class="ios_bug" ref="img_Head">
          <!-- <img  :class="isTransform" radius="6" v-if="isConfirm" :src="photo_img_dom" /> -->
          <img id="imgElement" :class="isTransform" ref="top_img" radius="6" :src="photo_img" />
        </div>
        <!-- <div class="logo" style="margin-top: -10px;">
          <img src="../../assets/images02/photograph/LOGO_cc.png" alt />
        </div>-->
      </div>
      <div class="head-icon">
        <!-- <p class="title">{{ isTitle }}</p> -->
        <!-- <p class="icon"></p> -->
      </div>
      <!-- <BaseRouterTransition>
        <p class="title tip" v-show="isConfirm">满足以下要求，结果更准确</p>
      </BaseRouterTransition>-->
      <div class="need" v-show="isConfirm">
        <div class="item">正面</div>
        <div class="item">五官清晰</div>
        <div class="item">不戴眼镜</div>
        <div class="item">面部呈现完整</div>
        <div class="item">无刘海遮挡</div>
      </div>
      <BaseRouterTransition>
        <div class="need-confirm" v-show="!isConfirm">
          <div class="need-confirm-content">
            <div class="p">
              头部姿势：
              <span>{{ glass === 'default'? isGlass[glass]: isheadpose }}</span>
              <div class="img_with">
                <img
                  :src="isheadpose === '正面'? tip_img.correct: tip_img.warning"
                  alt
                  v-show="isLoading"
                />
              </div>

              <i v-show="!isLoading" class="active_" alt />
            </div>
            <div class="p">
              眼部状态：
              <span>{{isGlass[glass] }}</span>
              <div class="img_with">
                <img
                  :src="glass === 'None'? tip_img.correct: tip_img.warning"
                  alt
                  v-show="isLoading"
                />
              </div>
              <i v-show="!isLoading" class="active_" alt />
            </div>
          </div>
        </div>
      </BaseRouterTransition>
      <div class="photograph-btn" v-show="isConfirm">
        <van-uploader class="button" :after-read="afterRead">
          <van-button class="button-div btn_photo_bg" id="btn_photo" type="primary"></van-button>
        </van-uploader>
        <p>HTTP://WWW.MYREAL3D.COM</p>
      </div>

      <BaseRouterTransition>
        <div class="bottom_btn" v-show="!isConfirm">
          <div class="button button-conf">
            <van-button
              class="button-div btn_photo_bg btn_photo_color"
              @click="handleBtnAgain"
              type="primary"
            ></van-button>
            <van-button class="button-div button-cancel btn_photo_bg" @click="handleBtnConfirm"></van-button>
          </div>
          <p>HTTP://WWW.MYREAL3D.COM</p>
        </div>
      </BaseRouterTransition>
    </div>
    <OverlayBreak class="Overlay" v-show="showOverlay" @handleBtnReturn="handleBtnReturn"></OverlayBreak>
  </div>
</template>
<script>
import BaseRouterTransition from '../../components/BaseRouterTransition'
import comm_fun from '../../utils/CommonFunction'
var COS = require('cos-js-sdk-v5')
import { imgCosupload, ImgUrlBeauty } from '../../api/app.js'
import { mapActions, mapState } from 'vuex'
import { Toast, Dialog } from 'vant'
import imgExif from '../../mixin/imgExif'
import imgZip from '../../mixin/imgZip'
import axios from 'axios'
import vueMixinCom from '../../mixin/vueMixinCom.js'
import OverlayBreak from '../../components/overlay_break'
export default {
  data() {
    return {
      title: '测测你颜值',
      title2: '属于哪一种类型?',
      isTitle: '',
      photo_img: require('../../assets/images02/v2/img_hecheng.jpg'),
      photo_img_dom: require('../../assets/images02/photograph/touxiang.png'),
      isConfirm: true,
      tip_img: {
        correct: require('../../assets/images02/v2/correct.png'),
        warning: require('../../assets/images02/v2/waring.png'),
      },
      file: null,
      isRotate: false,
      dataFileZip: null,
      Orientation: '',
      //上传的状态记录
      isUploadSuccess: '',
      glass: 'default',
      isGlass: {
        default: '正在读取信息...',
        None: '未佩戴眼镜',
        Dark: '佩戴墨镜',
        Normal: '佩戴普通眼镜'
      },
      isheadpose: '',
      isLoading: false,
      headpose: {},
      originalWidth_img: '',
      exif_clientHeight: '',
      showOverlay: false
    }
  },
  mixins: [imgExif, imgZip, vueMixinCom],
  components: {
    BaseRouterTransition,
    OverlayBreak
  },
  computed: {
    ...mapState({
      parmes_url: state => state.app.save_url,
      Beauty_info: state => state.app.Beauty_info,

    })
  },
  watch: {
    glass: {
      handler(newVal) {
        this.isLoading = !this.isLoading
      }
    },
    headpose: {
      handler(newVal) {
        if (-5 <= this.headpose['pitch_angle'] <= 5 && -5 <= this.headpose['roll_angle'] <= 5 && -5 <= this.headpose['yaw_angle'] <= 5) {
          this.isheadpose = '正面'
        } else {
          this.isheadpose = '头部姿态不符合'
          this.tips(this.isheadpose)
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'set_app',
      'set_beauty_info'
    ]),
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // alert(JSON.stringify(file))
      // console.log(file)
      // 在这里应该调用上传接口  做一些用户操作提示性的tip
      this.file = file
      this.ConfirmUpload(file)
    },
    ConfirmUpload(file) {
      console.log("加载图片" + file)
      this.photo_img = file.content
      this.isTitle = '确认照片'
      this.isConfirm = false
      this.getImgExif(file).then(orien => {
        this.uploadImg(this.file, this.Orientation).then(res => {
          this.dataFileZip = res
          console.log(this.dataFileZip)
          imgCosupload({ version: 1 }).then(res => {
            const data = res.data
            let cos = new COS({
              getAuthorization: function (options, callback) {
                // 异步获取临时密钥
                callback({
                  TmpSecretId: data.credentials.tmpSecretId,
                  TmpSecretKey: data.credentials.tmpSecretKey,
                  XCosSecurityToken: data.credentials.sessionToken,
                  ExpiredTime: data.expiredTime
                })
              }
            })
            var file_data = this.dataFileZip
            var this_ = this
            if (!file_data) return
            cos.putObject({
              Bucket: data.bucket,
              Region: data.region,
              Key: `h5/ai/beauty/images/${new Date().getTime()}_` + file_data.file.name,
              Body: file_data.file
            }, function (err, data) {
              if (data) {
                this_.img_success(data, this_, file_data.content)
              }
              console.log(err || data)
            })
          })
        })
      })
    },
    // 确认 上传
    handleBtnConfirm() {
      console.log('上传')
      console.log(this.isUploadSuccess)
      const this_ = this
      switch (this.isUploadSuccess) {
        case '':
          this.$router.push({ name: 'analysisnew' })
          break;
        case 'male':
          this.showOverlay = true
          break;
        case 'success':
          this.$router.push({ name: 'analysisnew' })
          setTimeout(() => {
            this_.set_beauty_info(true)
          }, 8000)
          break;
        case 'fail':
          Dialog.alert({
            message: '图片上传失败!请重试'
          }).then(() => {
            this.$router.push({ name: 'PhotoPage' })
          });
          break;
        case 'timeout':
          Dialog.alert({
            message: '图片上传失败,请联系客服!'
          }).then(() => {
            this.$router.push({ name: 'PhotoPage' })
          });
          break;
        default:
          throw ('未知错误!')
          break;
      }
    },
    // 上传成功后 通知url到后台
    img_success(data, this_, imgContent) {
      const image = comm_fun.img_location(data)
      // "version": 1, "data": {"image": "http://domain.jpg"}
      const { channel_id, instance_id, client = 2, open_id } = this_.parmes_url
      console.log(this_.parmes_url)
      var parmes_data = {
        version: 1,
        data: {
          channel_id, // 渠道id
          instance_id,  // 配置的实例
          image,
          client,
          type: 1
        }
      }
      // let url = '/api/ai/beauty'
      if (open_id !== undefined) {
        parmes_data.data['open_id'] = open_id
      }
      ImgUrlBeauty(parmes_data).then(res => {
        console.log(res)
        if (res.code === 0) {
          let { instance, original_id, result, user_channel_id } = res.data
          this.isReload({
            parmes_data: parmes_data.data,
            instance,
            original_id,
            result,
            imgContent,
            user_channel_id
          })
          // 读取result参数  红楼梦 男拒绝  gender性别 glass是否佩戴眼镜 headpose 头部状态是否正确
          const { gender, headpose, glass } = result
          if (gender !== "Female") {
            // 提示男生不得扫描(遮罩)
            this.isUploadSuccess = 'male'
          } else {
            this.isUploadSuccess = 'success'
          }
          this.headpose = headpose
          console.log('headpose' + JSON.stringify(this.headpose))
          this.glass = glass
          this.set_beauty_info(!this.Beauty_info)
        } else {
          this.isUploadSuccess = 'fail'
          alert(JSON.stringify(res))
          // 临时添加固定数据
          // axios.get('./ai_beauty.json').then(res => {
          //   console.log(res)
          //   let { instance, original_id, result, user_channel_id } = res.data.data
          //   this.isReload({
          //     parmes_data: parmes_data.data,
          //     instance,
          //     original_id,
          //     result,
          //     imgContent,
          //     user_channel_id
          //   })
          //   // 读取result参数  红楼梦 男拒绝  gender性别 glass是否佩戴眼镜 headpose 头部状态是否正确
          //   const { gender, headpose, glass } = result
          //   if (gender !== "Female") {
          //     // 提示男生不得扫描(遮罩)
          //     this.showOverlay = true
          //     return;
          //   }
          //   this.headpose = headpose
          //   console.log('headpose' + JSON.stringify(this.headpose))
          //   this.glass = glass
          //   this.isUploadSuccess = 'success'
          //   this.set_beauty_info(!this.Beauty_info)
          // })
        }
      }).catch(error => {
        // Toast1.clear();
        console.log(error)
        this.isUploadSuccess = 'timeout'

      })
    },
    // 重新上传
    handleBtnAgain() {
      const top_img = this.$refs.top_img
      top_img.style.left = 0
      top_img.style.marginLeft = 0
      top_img.style.transform = 'rotate(0deg)'
      this.isConfirm = true
      this.isRotate = false
      // 面貌的重置
      this.glass = 'default'
      this.photo_img = require('../../assets/images02/v2/img_hecheng.jpg')
      // 重置css Transform 动画
      this.isTransform = ''
      document.getElementById('imgElement').style = null
    },
    // loading   提示框
    tips(message) {
      Dialog.alert({
        message
      }).then(() => {
        this.handleBtnAgain()
      });
    },
    // 返回
    handleBtnReturn() {
      this.handleBtnAgain()
      this.showOverlay = false
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: url("../../assets/images02/v2/photo_bg_img.jpg") no-repeat;
  background-size: 100%;
  height: 100%;
  // overflow-y: scroll;
  // overflow-x: hidden;
  overflow: hidden;
  width: 100%;
  color: #fff;
  background-color: #fff;
  .Overlay {
    z-index: 3 !important;
  }
}
.bg-img {
  padding: 20px 0;
  width: 100%;
  position: relative;
  .ios_bug_style {
    margin: 0 auto;
    width: 220px;
    height: 80px;
    position: absolute;
    right: 70px;
    img {
      width: 100%;
      height: 100%;
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
      display: inline-block;
      background: url("../../assets/images02/v2/update_img.png") no-repeat;
      background-size: 100%;
      width: 362px;
      height: 48px;
    }
    .isTopImg {
      background: url("../../assets/images02/v2/confirm_photo.png") no-repeat;
      background-size: 100%;
    }
  }
  .tip {
    font-size: 30px;
    font-weight: 400;
    line-height: 24px;
    margin: 30px 0 27px 0;
    color: #0096ff;
  }
  .need {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 480px;
    margin: 0 auto;
    margin-top: 28px;
    color: #000;
    .item {
      background-size: 100% 100%;
      margin-bottom: 30px;
      font-size: 24px;
      font-weight: 400;
      position: relative;
      margin: 0 18px;
    }
    .item:before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #000;
      position: absolute;
      top: -10px;
      border-radius: 50%;
      margin-top: 0;
      margin-left: 6px;
      word-wrap: break-word;
    }
    .item:nth-child(1) {
      width: 24px;
    }
    .item:nth-child(2) {
      width: 24px;
    }
    .item:nth-child(3) {
      width: 24px;
    }
    .item:nth-child(4) {
      width: 24px;
    }
    .item:nth-child(5) {
      width: 24px;
    }
  }
  .need-confirm {
    // width: 585px;
    height: 180px !important;
    background-size: 100% 100%;
    .need-confirm-content {
      padding: 46px 162px 45px 162px;
      .p {
        position: relative;
        text-align: left;
        font-size: 25px;
        font-weight: 800;
        line-height: 24px;
        color: #000;
        margin-bottom: 45px;
        .img_with {
          display: inline-block;
          position: absolute;
          right: 0;
          width: 22px;
          height: 22px;
          margin: 0 auto;
        }
        span {
          color: #000;
          font-weight: 400;
        }
        img {
          width: 100%;
          height: 100%;
          margin: 0 auto;
        }
      }
      .active_ {
        display: block;
        width: 30px;
        height: 30px;
        animation: rotatecss 1.2s linear infinite;
        background: url("../../assets/images02/v2/loading.png") no-repeat;
        background-size: 100% 100%;
        float: right;
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
  }
  .button {
    .button-div {
      width: 310px;
      height: 108px;
      border-radius: 16px;
      background: #3e97ff;
      border: 2px solid rgba(62, 151, 255, 1);
      margin-top: 94px;
    }

    .btn_photo_bg {
      border: none;
      margin-top: 12px;
      background: url("../../assets/images02/v2/photo_btn.png") no-repeat center;
      background-size: 100%;
      color: #e6eeff;
      font-size: 30px;
    }
    .button-cancel {
      margin-top: 30px;
      background: #0f293e;
      color: #c0c0c0;
      border: none;
      background: url("../../assets/images02/v2/confirm_sumit.png") no-repeat
        center;
      background-size: 100%;
    }
    #btn_photo {
      width: 388px;
      .van-icon {
        position: relative;
        top: 4px;
      }
    }
  }
  .bottom_btn {
    p {
      font-size: 12px;
      text-align: center;
      color: #71738c;
      font-weight: 400;
      margin-top: 42px;
    }
    .button-conf {
      display: flex;
      justify-content: center;
      .button-div {
        margin-top: 32px;
        width: 250px;
      }
      .btn_photo_color {
        background: url("../../assets/images02/v2/re_upload.png") no-repeat
          center;
        background-size: 100%;
        color: #7bd5ff;
        margin-right: 12px;
      }
    }
  }
}
.img-Head {
  margin-bottom: 26px;
  width: 310px;
  overflow: hidden;
  margin: 0 auto;
}
.head-icon {
  .title {
    margin: 18px 0 26px 0;
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
.img-Head {
  width: 700px;
  height: 604px;
  position: relative;
  // background: url("../../assets/images02/photograph/photo02.png") no-repeat;
  background-size: 100%;
  .img-Head-bg {
    z-index: 2;
    width: 100%;
    height: 604px;
    position: absolute;
    left: 50%;
    margin-left: -330px;
    background: url("../../assets/images02/v2/tx_yuan.png") no-repeat;
    background-size: 100%;
  }

  .ios_bug {
    z-index: 1;
    position: relative;
    width: 550px;
    height: 550px;
    overflow: hidden;
    display: inline-block;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 20px;
    img {
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }
    .imgRotate {
      transform: rotate(-90deg);
    }
    .activeTransform6 {
      transform: rotate(90deg);
      height: 100%;
    }
    .activeTransform8 {
      transform: rotate(-90deg);
      height: 100%;
    }
  }
  .ConfirmCss {
    background: none;
  }
}
</style>
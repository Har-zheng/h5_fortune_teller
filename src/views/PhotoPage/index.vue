<template>
  <div class="home">
    <div class="bg-img">
      <img src="../../assets/images/photograph/ic_logo.png" />
    </div>
    <div class="conetnt">
      <p class="title">{{ title }}</p>
      <div class="img-Head">
        <van-image radius="6" :src="photo_img" />
      </div>
      <BaseRouterTransition>
        <p class="title tip" v-show="isConfirm">满足以下要求，结果更准确</p>
      </BaseRouterTransition>
      <div class="need" v-show="isConfirm">
        <div class="item">正面</div>
        <div class="item">面部呈现完整</div>
        <div class="item">无刘海遮挡</div>
        <div class="item">五官清晰</div>
        <div class="item">不戴眼镜</div>
      </div>
      <BaseRouterTransition>
        <div class="need-confirm" v-show="!isConfirm">
          <div class="need-confirm-content">
            <p>
              头部姿势：
              <span>非正面</span>
              <img :src="tip_img.warning" alt />
            </p>
            <p>
              左眼状态：
              <span>睁眼，未戴眼镜</span>
              <img :src="tip_img.correct" alt />
            </p>
            <p>
              右眼状态：
              <span>睁眼，未戴眼镜</span>
              <img :src="tip_img.correct" alt />
            </p>
          </div>
        </div>
      </BaseRouterTransition>
      <van-uploader class="button" :after-read="afterRead" v-show="isConfirm">
        <van-button class="button-div" icon="photograph" type="primary">拍照/上传照片</van-button>
      </van-uploader>
      <BaseRouterTransition>
        <div class="button button-conf" v-show="!isConfirm">
          <van-button class="button-div" @click="handleBtnConfirm" type="primary">确认上传</van-button>
          <van-button
            class="button-div button-cancel"
            @click="handleBtnAgain"
            type="warning"
            plain
          >重新上传</van-button>
        </div>
      </BaseRouterTransition>
    </div>
  </div>
</template>
<script>
import BaseRouterTransition from '../../components/BaseRouterTransition'
export default {
  data() {
    return {
      title: '拍照或上传照片',
      photo_img: 'https://c-ssl.duitang.com/uploads/item/201603/08/20160308194110_PGhCJ.jpeg',
      isConfirm: true,
      tip_img: {
        correct: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAKlBMVEVHcExTxBlPxBdTxBpSxBhIvBBTxBpTxBlSxBpAvwBTxBpUxhZPxBhTxBofySxjAAAADXRSTlMA9iTiahPSs4II6jpKwZa0fAAAAJ1JREFUGNNjYGBgCCkWNHdlAIMZsnfv3r3YCWIy5d4FgWsKQLbyXQgwYmDgzIWyr01g4LgLAw0MgRCGiexdUQZfMPOywsG7VxhqoRoV715nsL17yw0ozLT27mUG2bvSrLlGDFpA60BshnCQMJBte/fiBgaQMFANUK80A0gYqBdo5sUNIGGgmSC7REDCQLuQ3YDsNmQ3o/gF2Y8IvwMAs8CFitooq+UAAAAASUVORK5CYII=',
        warning: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAQlBMVEVHcEz7YwD7ZAD7ZAD7YAD6ZAD7ZAD7ZAD9YQD6YwD6ZAD7YwD6ZAD7YwD7YwD6YQD5YwD7ZAD7ZAD5YwD5ZAD6ZADE7TqlAAAAFXRSTlMAPIb3HGT96Azgo8POdVA2WMqUra0oWXaXAAAAoklEQVQY04WR2w6EIAxEB0WgqKDu9v9/dctFohiz89J2oO0hAH+kiNTTdZbZuoc9sGjoXT0me9Sd/eWsT7dPBocg4+9bF+YVWJmXqztJ/9TCFY4P4GA2F8gMNwPzDbLAWSA1mQbpC5xzJfriRlNKFUs0Mdsz17Iepy3AVotd672mm8BRzSt3Ern0srbJn/mK87K8e2kpZdaHLAKZ3jQUXj72BwWvEjrekOUzAAAAAElFTkSuQmCC',
      }
    }
  },
  components: {
    BaseRouterTransition
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // alert(JSON.stringify(file))
      // console.log(file)
      // 在这里应该调用上传接口  做一些用户操作提示性的tip
      this.ConfirmUpload(file)

    },
    ConfirmUpload(file) {
      console.log(file)
      this.photo_img = file.content
      this.title = '确认照片'
      this.isConfirm = false
    },
    // 确认 上传
    handleBtnConfirm() {
      console.log('上传')
    },
    // 重新上传
    handleBtnAgain() {
      this.isConfirm = true
      this.photo_img = 'https://c-ssl.duitang.com/uploads/item/201603/08/20160308194110_PGhCJ.jpeg'
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: url("../../assets/images/photograph/ic_bg.png") no-repeat 50%;
  background-size: 100% 100%;
  height: 100%;
  overflow: hidden;
  width: 100%;
  color: #fff;
}
.bg-img {
  z-index: 1;
  margin-bottom: 73px;
  img {
    width: 372px;
    height: 80px;
    margin-top: 73px;
  }
}

.conetnt {
  z-index: 2;
  line-height: 100%;
  // 宽度 计算 710 -减去两个padding值
  width: 604px;
  height: 100%;
  background-color: #0f293e;
  border-radius: 30px 30px 0px 0px;
  margin: 0 auto;
  padding: 36px 53px 0 53px;
  .title {
    font-size: 30px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    text-align: center;
    margin-bottom: 36px;
  }
  .tip {
    font-size: 24px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
    margin: 30px 0 27px 0;
  }
  .need {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .item {
      height: 62px;
      line-height: 62px;
      background: url("../../assets/images/photograph/juxing.png") no-repeat;
      background-size: 100% 100%;
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 400;
    }
    .item:nth-child(1) {
      width: 140px;
    }
    .item:nth-child(2) {
      width: 224px;
    }
    .item:nth-child(3) {
      width: 200px;
    }
    .item:nth-child(4) {
      width: 176px;
    }
    .item:nth-child(5) {
      width: 176px;
    }
  }
  .need-confirm {
    width: 585px;
    height: 253px !important;
    background: url("../../assets/images/photograph/confirmjuxing.png")
      no-repeat 100%;
    background-size: 100% 100%;
    margin-top: -43px;
    .need-confirm-content {
      padding: 46px 124px 45px 91px;
      p {
        text-align: left;
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        color: #adadad;
        margin-bottom: 45px;
        span {
          color: #fff;
        }
        img {
          width: 22px;
          height: 22px;
          float: right;
        }
      }
    }
  }
  .button {
    .button-div {
      width: 310px;
      height: 68px;
      border-radius: 16px;
      background: #3e97ff;
      border: 2px solid rgba(62, 151, 255, 1);
      margin-top: 94px;
    }
    .button-cancel {
      margin-top: 30px;
      background: #0f293e;
      color: #c0c0c0;
      border: 2px solid #ff976a;
    }
  }
  .button-conf {
    .button-div {
      margin-top: 32px;
    }
  }
}
.img-Head {
  margin-bottom: 73px;
}
.img-Head .van-image {
  width: 310px;
  height: 310px;
}
</style>
<template>
  <div class="firend-help">
    <div class="analysis-score">
      <div class="analysis-up">
        <div class="title">
          <p>面相分析</p>
        </div>
      </div>
      <div class="analysis-and analysis-and-senile">
        <div class="score-text">
          <p class="analysis-p text-title">
            苹果肌下垂
            <!-- <span v-if="isUnlockSuccess">解锁成功</span> -->
          </p>
          <div class="analysis-img senile">
            <img :src="imageHead" alt />
            <img :src="imageHead" alt />
          </div>
          <div v-if="isUnlockSuccess">
            <div class="analysis-div"></div>
            <div class="analysis-div analysis-div2"></div>
            <p class="invitation">
              <i></i>
              好友邀请你助力，帮ta解锁分析
            </p>
            <div class="good-friend">
              <div>
                <img :src="imageHead" alt />
              </div>
              <div>
                <!-- <img :src="imageHead" alt /> -->
              </div>
              <div>
                <img :src="imageHead" alt />
              </div>
            </div>
          </div>
          <p
            v-if="!isUnlockSuccess"
            class="unlock-success"
          >It was a humorously perilous business for both of us. For, before we proceed further</p>
        </div>
      </div>
      <div class="analysis-down"></div>
    </div>
    <van-button type="info">帮Ta解锁</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageHead: require('../../../test/test.png'),
      isUnlockSuccess: true
    }
  }
}
</script>
<style lang="scss" scoped>
#app{
   background: rgba(15, 41, 62, 1);
}
.firend-help {
  width: 750px;
  height: 100%;
  background: rgba(15, 41, 62, 1);
  font-weight: 400;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  
  .analysis-score {
    padding-top: 115px;
    width: 718px;
    margin: 0 auto;
    width: 694px;
    .analysis-up {
      background: url("../../assets/images/report/bg_top.png") no-repeat;
      background-size: 100%;
      .title {
        width: 315px;
        height: 90px;
        background: url("../../assets/images/report/juxing.png") no-repeat;
        background-size: 100% 100%;
        line-height: 90px;
        text-align: center;
        margin: 0 auto;
        position: relative;
        top: -38px;
        p {
          font-size: 26px;
        }
      }
    }
    .analysis-and {
      background: url("../../assets/images/report/bg_and.png") no-repeat;
      background-size: 100% 100%;
      padding: 0 42px 0 42px;
      z-index: 2;
      position: relative;
      top: -40px;
      .score-text {
        font-size: 24px;
        text-align: left;
        font-weight: 500;
        margin-top: -38px;
        .text-title {
          padding: 40px 0 0 0;
          margin: 30px 0;
          span {
            float: right;
            color: #3e97ff;
          }
        }
        // 设计
        .design {
          margin-bottom: 0;
          font-weight: 500;
          font-size: 24px;
          line-height: 33px;
        }
        .describe {
          line-height: 33px;
        }
        // 颜值分析
        .analysis-img {
          display: flex;
          img {
            width: 222px;
            height: 256px;
          }
          p {
            margin-left: 30px;
          }
        }
        .senile {
          justify-content: space-between;
          img {
            width: 302px;
            height: 256px;
          }
        }
        .analysis-div {
          width: 634px;
          height: 30px;
          background: #256193;
          margin: 20px 0;
        }
        .analysis-div2 {
          width: 417px;
        }
        .invitation {
          i {
            display: inline-block;
            width: 32px;
            height: 34px;
            background: url("../../assets/images/report/lock.png") no-repeat;
            background-size: 100%;
            margin-right: 14px;
          }
        }
        // 衰老分析
        .unlock-success {
          margin-top: 21px;
        }
        .good-friend {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 38px;
          div{
            width: 190px;
            background: #173C5B;
            background: url('../../assets/images/report/people_bg.png') no-repeat;
            background-size: 100%;
          }
          img {
            width: 190px;
            height: 190px;
          }
        }
        .score-img {
          width: 634px;
          height: 208px;
        }
      }
    }
    // 衰老
    .analysis-and-senile {
      padding-bottom: 0;
    }
    // s设计
    .design-and {
      padding-bottom: 0;
    }
    .analysis-down {
      z-index: 3;
      background: url("../../assets/images/report/bg_down.png") no-repeat;
      background-size: 100%;
      padding: 0 42px 38px 42px;
      outline: none;
      position: relative;
      top: -40px;
      height: 30px;
    }
  }
  .van-button {
    width: 310px;
    height: 68px;
    background: rgba(62, 151, 255, 1);
    border-radius: 16px;
    border: 2px solid rgba(62, 151, 255, 1);
    margin-top: 68px;
  }
}
</style>
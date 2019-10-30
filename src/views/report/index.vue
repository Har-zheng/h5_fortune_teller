<template>
  <div class="report">
    <div class="content">
      <div class="top">
        <p>{{ name }}的面相报告</p>
      </div>
      <div class="img-Head">
        <div class="Head-radius">
          <van-image round :src="imageHead" />
        </div>
        <div class="feature">
          <p>上庭</p>
          <p>中庭</p>
          <p>下庭</p>
        </div>
      </div>
      <div class="score">
        <div class="title">
          <p>颜值分 93</p>
        </div>
        <div class="score-text">
          <p class="text-title">您的颜值分处在人群中的1%，可以称得上是倾国倾城！</p>
          <p
            class="describe"
          >It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends;</p>
        </div>
      </div>
      <div class="analysis-score analysis-top">
        <div class="analysis-up">
          <div class="title">
            <p>颜值分析</p>
          </div>
        </div>
        <div class="analysis-and">
          <div class="score-text">
            <p class="analysis-p text-title">脸型：瓜子脸</p>
            <div class="analysis-img">
              <img :src="imageHead" alt />
              <p
                class="describe"
              >It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends;</p>
            </div>
          </div>
          <div class="score-text">
            <p class="analysis-p text-title">脸型：瓜子脸</p>
            <div class="analysis-img">
              <img :src="imageHead" alt />
              <p
                class="describe"
              >It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends;</p>
            </div>
          </div>
        </div>
        <div class="analysis-down"></div>
      </div>
      <div class="analysis-score">
        <div class="analysis-up">
          <div class="title">
            <p>衰老分析</p>
          </div>
        </div>
        <div class="analysis-and analysis-and-senile">
          <div class="score-text">
            <p class="analysis-p text-title">
              苹果肌下垂
              <span v-if="isUnlockSuccess">解锁成功</span>
            </p>
            <div class="analysis-img senile">
              <img :src="imageHead" alt />
              <img :src="imageHead" alt />
            </div>
            <div v-if="isUnlockSuccess">
              <div class="analysis-div"></div>
              <div class="analysis-div analysis-div2"></div>
              <p class="invitation">
                <i></i> 邀请3位好友助力，解锁分析
                <van-button type="info">邀请</van-button>
              </p>
              <div class="good-friend">
                <img :src="imageHead" alt />
                <img :src="imageHead" alt />
                <img :src="imageHead" alt />
              </div>
            </div>
            <p v-if="!isUnlockSuccess" class="unlock-success">
              It was a humorously perilous business for both of us. For, before we proceed further 
            </p>
          </div>
        </div>
        <div class="analysis-down"></div>
      </div>
      <div class="analysis-score">
        <div class="analysis-up">
          <div class="title">
            <p>颜值分析</p>
          </div>
        </div>
        <div class="analysis-and">
          <div class="score-text">
            <p class="analysis-p text-title">脸型：瓜子脸</p>
            <div class="analysis-img">
              <img :src="imageHead" alt />
              <p
                class="describe"
              >It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends;</p>
            </div>
          </div>
        </div>
        <div class="analysis-down"></div>
      </div>
      <div class="analysis-score">
        <div class="analysis-up">
          <div class="title">
            <p>设计建议</p>
          </div>
        </div>
        <div class="analysis-and design-and">
          <div class="score-text">
            <p
              class="analysis-p text-title design"
            >The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and his holder were ever tied together. This improvement upon the original usage was introduced by no less a man than Stubb, in order to afford the imperilled harpooneer the strongest possible guarantee for the faithfulness and vigilance of his monkey-rope holder.</p>
          </div>
        </div>
        <div class="analysis-down"></div>
      </div>
      <div class="analysis-score">
        <div class="analysis-up">
          <div class="title">
            <p>颜值提升</p>
          </div>
        </div>
        <div class="analysis-and design-and">
          <div class="score-text">
            <p class="analysis-p text-title design">
              <img class="score-img" src="../../assets/images/report/test.png" alt />
            </p>
            <p class="analysis-p text-title design">
              <img class="score-img" src="../../assets/images/report/test.png" alt />
            </p>
          </div>
        </div>
        <div class="analysis-down"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '吉赛尔',
      imageHead: require('../../../test/test.png'),
      isUnlockSuccess: true
    }
  }
}
</script>
<style lang="scss" scoped>
.report {
  width: 750px;
  padding-bottom: 80px;
  background: rgba(15, 41, 62, 1);
  font-weight: 400;
  color: #fff;

  .content {
    .top {
      width: 315px;
      height: 90px;
      background: url("../../assets/images/report/juxing.png") no-repeat;
      background-size: 100% 100%;
      margin: 0 auto;
      line-height: 90px;
      position: relative;
      top: 18px;
      p {
        font-size: 24px;
      }
    }
    .img-Head {
      position: relative;
      top: 27px;
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
      .feature {
        position: absolute;
        z-index: 2;
        left: 89px;
        top: 48px;
        p {
          height: 58px;
          line-height: 58px;
          border-bottom: 1px solid #fafafa;
          width: 245px;
          text-align: left;
        }
      }
    }
    .score {
      width: 634px;
      padding: 0 42px 38px 42px;
      background: url("../../assets/images/report/bg.png") no-repeat;
      background-size: 100% 100%;
      margin: 0 auto;
      margin-top: 73px;

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
      .score-text {
        font-size: 24px;
        text-align: left;
        font-weight: 500;
        margin-top: -38px;
        .text-title {
          margin: 30px 0;
        }
        .describe {
          line-height: 33px;
        }
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
      }
    }
    .analysis-score {
      width: 718px;
      margin: 0 auto;
      margin-top: 30px;
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
            .van-button {
              float: right;
              width: 130px;
              height: 50px;
              border-radius: 8px;
            }
          }
          // 衰老分析
          .unlock-success{
            margin-top: 21px;
          }
          .good-friend {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-top: 38px;
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
      .analysis-and-senile{
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
    .analysis-top {
      margin-top: 70px;
    }
  }
}
</style>
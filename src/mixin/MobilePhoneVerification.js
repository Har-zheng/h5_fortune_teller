import {
  Dialog,
  Toast
} from 'vant'
import {
  getSendCode,
  userBindInfo
} from '../api/app'
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      isUser_id: false,
      btn_text: '获取验证码',
      name: '',
      number: '',
      code_num: '',
      isSubmit: false,
    }
  },
  computed: {
    ...mapState({
      original_id: state => state.app.app.original_id,
      parmes_data: state => state.app.app.parmes_data,
    })
  },
  methods: {
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
        getSendCode({
          mobile: this.number
        }).then(res => {
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
        image_id: this.original_id,
        mobile: this.number,
        country_code: 86,
        code: this.code_num,
        nickname: this.name
      }
      console.log(typeof this.parmes_data)
      if (this.parmes_data !== undefined) {
        let {
          open_id
        } = this.parmes_data
        if (open_id !== undefined) {
          user_info['open_id'] = open_id
        }
      }
      // "open_id": "asdasdadsdasdas",
      this.isSubmit = false
      userBindInfo(user_info).then(res => {
        console.log(res)
        if (res.code === 0) {
          this.isSubmit = true
          const user_data = res.data
          this.isUser_id = true

          //防止 刷新当前页面 已提交user info 丢失
          sessionStorage.setItem('user_data', JSON.stringify(user_data))
          this.$router.push({
            name: 'facereport'
          })
        } else if (res.code === 10951) {
          Toast('注册成功');
          this.$router.push({
            name: 'facereport'
          })
        } else {
          this.isSubmit = true
          alert(JSON.stringify(res))
        }
      })
    },
    // 失去焦点
    ios_blur() {
      window.scroll(0, 0); //失焦后强制让页面归位
    },
  }
}
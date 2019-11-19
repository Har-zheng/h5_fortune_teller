export default {
  methods: {
        // 用户刷新储存
        isReload(data) {
          // console.log(data)
          this.set_app(data)
          sessionStorage.setItem('app', JSON.stringify(data))
        },
  }
}
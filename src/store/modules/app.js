const app = {
  state: {
    app: [],
    save_url: {}
  },
  mutations: {
    SET_APP: (state, app_data) => {
      state.app =  app_data
    },
    SAVE_URL: (state, url) => {
      console.log(url)
      // Vue.state.set('save_url' , 'save_url', url)
      state.save_url =  url
    }
  },
  actions: {
    set_app: ({commit}, app_data)  => {
      commit('SET_APP',app_data)
    }
  }
}
export default app
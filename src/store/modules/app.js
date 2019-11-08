const app = {
  state: {
    app: {},
    save_url: {},
    Beauty_info: false
  },
  mutations: {
    SET_APP: (state, app_data) => {
      state.app =  app_data
    },
    SAVE_URL: (state, url) => {
      console.log(url)
      // Vue.state.set('save_url' , 'save_url', url)
      state.save_url =  url
    },
    SET_BEAUTY_INFO: (state, isSucess) => {
      console.log(isSucess)
      // Vue.state.set('save_url' , 'save_url', url)
      state.Beauty_info =  isSucess
    }
  },
  actions: {
    set_app: ({commit}, app_data)  => {
      commit('SET_APP',app_data)
    },
    save_url: ({commit}, data)  => {
      commit('SAVE_URL',data)
    },
    set_beauty_info: ({commit}, data) => {
      commit('SET_BEAUTY_INFO',data)
    }
  }
}
export default app
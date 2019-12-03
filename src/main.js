import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vant from 'vant';
// import eruda from 'eruda'
import 'vant/lib/index.css';
// import VConsole from 'vconsole';
// new VConsole()

Vue.use(Vant);
Vue.config.productionTip = false
// let el = document.createElement('div');
// document.body.appendChild(el);
// eruda.init({
//     container: el,
//     tool: ['console', 'elements']
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

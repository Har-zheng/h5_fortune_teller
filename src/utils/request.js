import axios from 'axios'
import {
  Notify
} from 'vant';
// 创建 axios 请求 
const service = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 15000 // 设置超时时间
})

// 请求响应拦截 拦截 头
service.interceptors.request.use(
  config => {
    // config.headers['token'] = 'ee72c0d6-0f69-4652-8c47-484d94a6cbdf'
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  /* 响应体 错误时及时做一些提示 */
  response => {
    console.log(response)
    const res = response.data
    if (response.status !== 200) {
      Notify({
        message: res.message || 'Error',
        type: 'warning',
        duration: 5 * 1000
      })
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        Notify({
          type: 'warning',
          message: res.code
        });
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)
export default service

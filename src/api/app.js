import request from '../utils/request'
export function upladImage (data){
  return request({
    method: 'post',
    url: '',
    data
  })
}
// 读取本地文件
export function All_Types_Data (){
  return request({
    method: 'get',
    url: './config.json'
  })
}
// 图片上传 /api/cosupload
export function imgCosupload(data) {
  return request({
    url: '/api/stsupload',
    method: 'post',
    data
  })
}
// 图片url 通知后台 /api/ai/beauty
export function ImgUrlBeauty(data) {
  return request({
    url: '/api/ai/beauty',
    method: 'post',
    data
  })
}
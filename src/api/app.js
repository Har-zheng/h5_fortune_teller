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
// 判断用户是否已经绑定过
export function wxgetreport(data){
  return request({
    url: 'http://core-service.myreal3d.com/api/wxgetreport',
    method: 'POST',
    data
  })
}
// 获取验证码
export function getSendCode(data){
  return request({
    url: 'http://core-service.myreal3d.com/api/sendcode',
    method: 'POST',
    data
  })
}
// 用戶綁定 提交信息 /api/ai/bind
export function userBindInfo(data){
  return request({
    url: '/api/ai/bind',
    method: 'POST',
    data
  })
}
// 判断此用户是否有扫描记录  yes=> 报告详情 no=> 正常开始扫描 /api/ai/beauty/latest
export function BeautyLatest(data){
  console.log(data)
  return request({
    url: '/api/ai/beauty/latest',
    method: 'POST',
    data: {
      version: 1,
      data
    }
  })
}
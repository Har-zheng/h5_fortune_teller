function img_location(data) {
  let url = data.Location
  var http = /^http:\/\/.*/i.test(url)
  var https = /^https:\/\/.*/i.test(url)
  if (!http && !https) {
    url = 'http://' + url
  }
  return url
}
function GetRequestUrl() {  
  let url =  window.location.href
  let url_obj = {}
  let url_arr =  url.substring(url.indexOf('?') + 1).split('&')
   url_arr.forEach((item, index) =>{
     let new_url =  item.split('=')
     Object.defineProperty(url_obj,new_url[0],{value:new_url[1], enumerable: true});
   })
   return url_obj 
}  
export default { img_location, GetRequestUrl }
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'
import 'normalize.css'
import WechatAPI from 'wechat-api'
import axios from 'axios'
// var config={access_token:'',jsapi_ticket:''};
// var sha1 = require('sha1');
// var request = require('request');
// var appId='wx63cdd1941cd86351'; //微信AppID(应用ID)
// var appSecret='415c4f07bba2d284437db46dd5feba1c'; //微信AppSecret(应用密钥)
// var url = require('url');
// let getTokenUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`;
// axios.get(getTokenUrl)
//   .then(function (response) {
//     console.log(response.access_token);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// request(getTokenUrl, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     let tokenData = JSON.parse(body);

//     config.access_token = tokenData.access_token; //存储在全局
//     console.log(tokenData.access_token)
//     let getTicketUrl = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${tokenData.access_token}&type=jsapi`;
//     request(getTicketUrl, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         let data = JSON.parse(body);
//         config.jsapi_ticket = data.ticket; //存储在全局

//         // 获取微信jssdk
//         let signatureStr = function (ticket, nonceStr, timestamp, url) {
//           let str = "jsapi_ticket=" + ticket + "&noncestr=" + nonceStr + "&timestamp=" + timestamp + "&url=" + url;
//           return sha1(str)
//         }
//           let obj = {};
//           obj.timestamp = parseInt(new Date().getTime() / 1000) + '', //生成签名的时间戳
//           obj.nonceStr = Math.random().toString(36).substr(2, 15), //生成签名的随机串
//           obj.appId = appId;
//           obj.signature = signatureStr(config.jsapi_ticket, obj.nonceStr, obj.timestamp, 'http://www.dyleyuan.cn/#/zhufu') //生成签名
//           console.log(obj)
//       }
//     })
//   }
// })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

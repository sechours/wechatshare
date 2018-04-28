<template>
  <div class="tx">
    <nv-loading :loading="loading"></nv-loading>
    <div class="content" v-show="!loading">
      <div>
        <img src="../image/hllogo.png" class="hllogo">
      </div>
      <div>
        <img src="../image/cfjn.png" class="img">
      </div>
      <div class="message">填入下列信息即刻生成您的专属贺卡
        <br>转发好友共享每日缤纷抽奖！</div>
      <div class="one">
        <input type="text" placeholder="填入要送给的人" v-model="to" onfocus="this.placeholder=''" onblur="this.placeholder='填入要送给的人'">
      </div>
      <div class="two">
        <input type="text" placeholder="输入你的名字" v-model="from" onfocus="this.placeholder=''" onblur="this.placeholder='输入你的名字'">
      </div>
      <div class="btn">
        <button @click="schk">生成贺卡</button>
      </div>
      <div class="message1">{{message}}</div>
      <div class="bottom">*济南恒隆广场保留对本次活动的最终解释权</div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import nvLoading from '../common/loading';
 
  var wx = require('weixin-js-sdk');
  export default {
    name: 'HelloWorld',
    data() {
      return {
        to: '',
        from: '',
        loading: true,
        message: ''
      }
    },
    components: {
      nvLoading
    },
    created() {
      this.loading = false;
      this.getwxiSignatureResource();
    },
    methods: {
      schk: function () {
        if (!this.to) {
          this.message = '请输入您想送给人的名字'
          setTimeout(() => {
            this.message = ''
          }, 1500)
          return false;
        } else if (!this.from) {
          this.message = '请输入您的名字'
          setTimeout(() => {
            this.message = ''
          }, 1500)
          return false;
        } else {
          this.$router.push({
            path: '/zhufu',
            query: {
              to: this.to,
              frompeople: this.from,
			  t:Date.now()
            }
          })
        }
      },

           getwxiSignatureResource() {
	   var nowurl= window.location.href;
	  
        axios.get('http://www.dyleyuan.cn/weixin/index.php?r='+Date.now(),{  
    params : {  
        url : nowurl  
    }  
}).then((response) => {
       
          let {appId,timestamp,nonceStr,signature} = response.data;
          wx.config({
            debug: false,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: [
              "onMenuShareTimeline",
              "onMenuShareAppMessage"
            ]
          });
          wx.ready(function () {
            wx.onMenuShareTimeline({
              title: "济南恒隆广场潮FUN吉年祝福", // 分享标题
              desc: "2018济南恒隆广场潮FUN吉年祝福",
              link: window.location.href, // 分享链接
              imgUrl: "http://www.dyleyuan.cn/weixin/weixin.png", // 分享图标
              success: function () {
                //alert("成功");
              },
              cancel: function () {
                alert("失败")
              }
            });
            wx.onMenuShareAppMessage({
              title: "济南恒隆广场潮FUN吉年祝福", // 分享标题
              desc: "2018济南恒隆广场潮FUN吉年祝福",
              link: window.location.href, // 分享链接
              imgUrl: "http://www.dyleyuan.cn/weixin/weixin.png", // 分享图标
              success: function () {
               // alert("成功");
              },
              cancel: function () {
                alert("失败")
              }
            })
          })
        })
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .tx {
    .content {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background-size: 100%;
      vertical-align: middle;
      display: block;
      background-color: #981216; // background-repeat: no-repeat;
      .hllogo {
        position: absolute;
        top: 10%;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 4.52rem;
        height: 0.91rem;
      }
      .img {
        height: 3.21rem;
        width: 3.68rem;
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .message {
        width: 5.64rem;
        height: 0.8rem;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 50%;
        color: white;
        font-size: 0.3rem;
        text-align: center;
        border-top: 1px dotted white;
        line-height: 0.4rem;
      }
      ;
      .one {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 60%;
        height: 0.85rem;
        width: 5.64rem;
        border-radius: 0.1rem;
        border: 0.1rem solid rgb(35, 24, 21);
        color: white;
        line-height: 0.85rem;
        overflow: hidden;
        input {
          width: 100%;
          height: 100%;
          background-color: #e7161a;
          color: white;
          outline: none;
          border: 0;
          font-size: 0.3rem;
          float: left;
          text-align: center;
        }
        ::-webkit-input-placeholder {
          /* WebKit, Blink, Edge */
          color: white;
        }
        :-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: white;
        }
        ::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: white;
        }
        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: white;
        }
      }
      .two {
        position: absolute;
        top: 70%;
        height: 0.85rem;
        width: 5.64rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        border: 0.1rem solid rgb(35, 24, 21);
        border-radius: 0.1rem;
        line-height: 0.85rem;
        overflow: hidden;
        input {
          width: 100%;
          height: 100%;
          background-color: #e7161a;
          color: white;
          outline: none;
          border: 0;
          font-size: 0.3rem;
          float: left;
          text-align: center;
        }
        ;
        ::-webkit-input-placeholder {
          /* WebKit, Blink, Edge */
          color: white;
        }
        :-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: white;
        }
        ::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: white;
        }
        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: white;
        }
      }
      .message1 {
        color: white;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 90%;
        font-size: 0.2rem;
        text-align: center;
      }
      .btn {
        position: absolute;
        top: 80%;
        height: 0.85rem;
        width: 5.64rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: 0.1rem;
        border: 0.1rem solid rgb(35, 24, 21);
        button {
          width: 100%;
          height: 100%;
          background-color: #ec8f26;
          color: c5c5c5;
          outline: none;
          border: 0;
          font-size: 0.3rem;
          float: left;
        }
      }
      ;
      .bottom {
        position: absolute;
        bottom: 0;
        font-size: 0.13rem;
        color: white;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
        background-color: #231815;
        height: 0.41rem;
        line-height: 0.41rem;
      }
    }
  }

</style>

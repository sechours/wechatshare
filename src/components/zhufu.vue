<template>
  <div class="tx">
    <nv-loading :loading="loading"></nv-loading>
    <div class="content" v-show="!loading">
      <div class="bgc"></div>
      <div class="men"></div>
      <div class="share"></div>
      <div class="logo"></div>
      <div class="send">送给：{{$route.query.to}}</div>
      <div :class="gx" class="gx1"></div>
      <div class="from">来自：{{$route.query.frompeople}}</div>
      <div class="zs" @click="zsyz"></div>
      <a href="https://gbnc5u.epub360.com.cn/v2/manage/book/v1jist/">
        <div class="cy"></div>
      </a>
      <div class="wawa"></div>
      <div class="bottom">*济南恒隆广场保留对本次活动的最终解释权</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  import nvLoading from '../common/loading';
  var wx = require('weixin-js-sdk');
  export default {
    name: "zhufu",
    data() {
      return {
        zhufuyu: ['gx1', 'gx2', 'gx3', 'gx4', 'gx5', 'gx6', 'gx7'],
        gx: '',
        to: '',
        from: '',
        loading: true,
        obj: {}
      };
    },
    components: {
      nvLoading
    },
    created() {
      this.loading = false
      this.gx = this.zhufuyu[2]
      this.getwxiSignatureResource()
    },
    methods: {
      zsyz: function () {
        this.$router.push({
          path: '/'
        })
      },
      getRandomNum: function (Min, Max) {
        let Range = Max - Min;
        let Rand = Math.random();
        return Min + Math.round(Rand * Range);
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
      mm() {
        // let {appId,timestamp,nonceStr,signature} = this.obj
      }
    },
    mounted() {
      this.gx = this.zhufuyu[2]
      this.loading = false
      this.gx = this.zhufuyu[this.getRandomNum(0, 6)]
      console.log(this.getRandomNum(0, 6))
    }
  };

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
      background-color: #dd2524;
      .bgc {
        width: 100%;
        height: 100%;
        left: 0;
        position: absolute;
        background: url('../image/bgc.png') repeat;
        background-size: 100%;
      }
      .men {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background: url('../image/men.png') no-repeat;
        background-size: 100%;
      }
      .share {
        background-image: url("../image/share.png");
        background-size: 100%;
        width: 2.03rem;
        height: 0.88rem;
        position: absolute;
        top: 0rem;
        right: 0.19rem;
        z-index: 2;
      }
      .logo {
        background-image: url("../image/logo.png");
        background-size: 100%;
        width: 4.75rem;
        height: 1.66rem;
        position: absolute;
        top: 1.16rem;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 1;
      }
      .send {
        position: absolute;
        top: 3.34rem;
        font-size: 0.38rem;
        color: white;
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        font-weight: 600;
      }
      .gx1 {
        position: absolute;
        top: 4.2rem;
        width: 4.31rem;
        height: 1.8rem;
        background: url("../image/A-01.png") no-repeat;
        background-size: 100%;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 2;
      }
      .gx2 {
        position: absolute;
        top: 4.2rem;
        width: 4.31rem;
        height: 1.8rem;
        background: url("../image/A-02.png") no-repeat;
        background-size: 100%;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 2;
      }
      .gx3 {
        position: absolute;
        top: 4.2rem;
        width: 4.31rem;
        height: 1.8rem;
        background: url("../image/A-03.png") no-repeat;
        background-size: 100%;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 2;
      }
      .g4 {
        position: absolute;
        top: 4.2rem;
        width: 4.31rem;
        height: 1.8rem;
        background: url("../image/A-04.png") no-repeat;
        background-size: 100%;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 2;
      }
      .g5 {
        position: absolute;
        top: 4.2rem;
        width: 4.31rem;
        height: 1.8rem;
        background: url("../image/A-05.png") no-repeat;
        background-size: 100%;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 2;
      }
      .gx6 {
        position: absolute;
        top: 4.2rem;
        width: 4.31rem;
        height: 1.8rem;
        background: url("../image/A-06.png") no-repeat;
        background-size: 100%;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 2;
      }
      .gx7 {
        position: absolute;
        top: 4.2rem;
        width: 4.31rem;
        height: 1.8rem;
        background: url("../image/A-07.png") no-repeat;
        background-size: 100%;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 2;
      }
      .from {
        position: absolute;
        top: 6.73rem;
        font-size: 0.38rem;
        color: white;
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        font-weight: 600;
      }
      .zs {
        background-image: url("../image/zsyz.png");
        background-size: 100%;
        width: 1.37rem;
        height: 1.37rem;
        position: absolute;
        bottom: 2.2rem;
        left: 1rem;
        z-index: 1;
      }
      .cy {
        background-image: url("../image/cycj.png");
        background-size: 100%;
        width: 1.37rem;
        height: 1.37rem;
        position: absolute;
        bottom: 2.2rem;
        right: 1rem;
        z-index: 1;
      }
      ;
      .wawa {
        background-image: url("../image/wawa.png");
        background-size: 100%;
        position: absolute;
        height: 4.075rem;
        width: 4.88rem;
        bottom: 0;
        margin: 0 auto;
        left: 0;
        right: 0;
      }
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

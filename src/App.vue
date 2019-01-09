<template>
    <div id="app">
        <keep-alive>
            <transition name="slide-fade" mode="out-in">
                <router-view/>
            </transition>
        </keep-alive>
        <audio ref="audio" id="bgmusic" autoplay="autoplay" preload="auto" loop="loop">
            <source src="./assets/font/cheerful.mp3" type="audio/mpeg"/>
        </audio>
        <div :class="[playing? 'playing' : 'paused']" @click="control" id="audio-bg" class="audio-bg"></div>
    </div>
</template>
<script>
  import Env from './utils/env';
  import { getWXConfig } from './api/';

  export default {
    name: 'app',
    data() {
      return {
        playing: false
      };
    },
    methods: {
      control() {
        if (this.$refs.audio.paused) {
          this.$refs.audio.play();
        } else {
          this.$refs.audio.pause();
        }
      },
      initWXConfig(callback) {
        // 注意参与配置的url必须处理： encodeURIComponent(window.location.href.split(‘#’)[0])
        let params = {
          url: encodeURIComponent(window.location.href.split('#')[0])
        };
        getWXConfig(params).then(res => {
          var data = res.data.content;
          console.log(data);
          wx.config({
            debug: false,
            appId: data.appid,
            timestamp: data.timestamp,
            nonceStr: data.noncestr,
            signature: data.signature,
            jsApiList: [//需要使用的JS接口列表,分享默认这几个，如果有其他的功能比如图片上传之类的，需要添加对应api进来
              'checkJsApi',
              'onMenuShareTimeline',//
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo'
            ]
          });
          var shareConfig = {
            title: '平安健康行',
            desc: '平安健康行',
            imgUrl: `${Env.baseUrl}static/images/1.png`,
            link: Env.baseUrl,
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          };

          wx.ready(function() {
            wx.onMenuShareAppMessage(shareConfig);
            wx.onMenuShareTimeline(shareConfig);
            wx.onMenuShareQQ(shareConfig);
            callback();
          });

        }).catch(error => {

        });
      }
    },
    mounted() {
      var that = this;
      this.$nextTick(() => {

        this.initWXConfig(() => {
          var autoplayVideo = document.getElementById('bgmusic');
          autoplayVideo.play();
        });

        //--创建页面监听，等待微信端页面加载完毕 触发音频播放
        document.addEventListener('DOMContentLoaded', function() {
          function audioAutoPlay() {
            var audio = document.getElementById('bgmusic');
            audio.play();
            document.addEventListener('WeixinJSBridgeReady', function() {
              audio.play();
            }, false);
          }

          audioAutoPlay();
        });
        //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
        // document.addEventListener('touchstart', function() {
        //   function audioAutoPlay() {
        //     var audio = document.getElementById('bgmusic');
        //     audio.play();
        //   }

        //   audioAutoPlay();
        // });

        var audioEl = document.getElementById('bgmusic');
        forceSafariPlayAudio();

        //  audioEl.play()

        function log(info) {
          console.log(info);
          // alert(info);
        }

        function forceSafariPlayAudio() {
          audioEl.load(); // iOS 9   还需要额外的 load 一下, 否则直接 play 无效
          audioEl.play(); // iOS 7/8 仅需要 play 一下
        }

        // 可以自动播放时正确的事件顺序是
        // loadstart
        // loadedmetadata
        // loadeddata
        // canplay
        // play
        // playing
        //
        // 不能自动播放时触发的事件是
        // iPhone5  iOS 7.0.6 loadstart
        // iPhone6s iOS 9.1   loadstart -> loadedmetadata -> loadeddata -> canplay
        audioEl.addEventListener(
          'loadstart',
          function() {
            log('loadstart');
          },
          false
        );
        audioEl.addEventListener(
          'loadeddata',
          function() {
            log('loadeddata');
          },
          false
        );
        audioEl.addEventListener(
          'loadedmetadata',
          function() {
            log('loadedmetadata');
          },
          false
        );

        audioEl.addEventListener(
          'play',
          function() {
            log('play');
          },
          false
        );
        audioEl.addEventListener(
          'playing',
          function() {
            log('正在播放');
            that.playing = true;
            // 当 audio 能够播放后, 移除这个事件
            //window.removeEventListener('touchstart', forceSafariPlayAudio, false);
          },
          false
        );
        audioEl.addEventListener(
          'pause',
          function() {
            log('暂停了');
            that.playing = false;
          },
          false
        );

        // 由于 iOS Safari 限制不允许 audio autoplay, 必须用户主动交互(例如 click)后才能播放 audio,
        // 因此我们通过一个用户交互事件来主动 play 一下 audio.
       // window.addEventListener('touchstart', forceSafariPlayAudio, false);
        //  audioEl.src =  "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3";

      });
    }
  };
</script>

<style lang="scss">
    audio {
        display: none;
    }

    .audio-bg {
        position: fixed;
        top: 0.6rem;
        right: 0.1rem;
        z-index: 200;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 0.4rem;
        overflow: hidden;

        &.playing {
            background: url('./assets//images//img//playing.png') no-repeat center;
            background-size: contain;
            animation: rotate 4s linear infinite;
        }

        &.paused {
            background: url('./assets//images//img//paused.png') no-repeat center;
            background-size: contain;
        }

    }

    webkit-keyframes rotate {
        from {
            transform: none;
        }

        to {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes rotate {
        from {
            transform: none;
        }
        to {
            transform: rotate(360deg);
        }
    }

    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background: linear-gradient(to bottom, #832621, #832621);
    }

    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all 0.3s ease;
    }

    .slide-fade-leave-active {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(-100%);
        opacity: 0;
    }

    .content {
        position: relative;
        height: 100%;
        background: #832621;
        text-align: center;
    }

    .content .logo {
        width: 2.32rem;
        height: 0.4rem;
        position: absolute;
        right: 0.32rem;
        top: 0.3rem;
        z-index: 100;
        background: url("./assets/images/img/LOGO.png") no-repeat center;
        background-size: contain;
    }
</style>

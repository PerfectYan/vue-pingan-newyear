<template>
  <div class="about">
    <Header :hasLatch="hasLatch"/>
    <div class="title">
      #步数兑加息，免费抽福利<br>
      来这里让你步步生财#
    </div>
    <div class="desc">
      进入平安金管家<br>
      打开点击平安有约·健康行<br>
      开启活动，进入：#步步生财#<br>
      活动，开始用你的步数为财富加息吧！
    </div>
    <cai-shen />
    <Button class="btn-download" text="即刻生财" @btnClick = 'download'></Button>
    <Footer :bgGold="bgGold" :iconGold="iconGold" />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import CaiShen from '@/components/CaiShen.vue'
  import Button from '@/components/Button.vue'

  export default {
    name: 'about',
    components: {
      Header,
      Footer,
      CaiShen,
      Button
    },
    data() {
      return {
        hasLatch: true,
        bgGold: true,
        iconGold: true
      }
    },
    methods: {
      download() {
        console.log('download');
      }
    }
  }
</script>

<style scoped lang="scss">
  .about{
    position: relative;
    height: 100%;
  }
  .title{
    width: 2.38rem;
    margin: 0.72rem auto 0;
    font-size: 0.2rem;
    font-family: "SourceHanSansSC-Bold";
    font-weight:bold;
    color: rgba(230,193,139,1);
    line-height: 0.3rem;
  }
  .desc{
    width: 3rem;
    margin: 0.3rem auto 0;
    padding: 0.24rem 0;
    font-size: 0.13rem;
    font-family: SourceHanSansSC-Regular;
    font-weight: 400;
    color: rgba(153,46,40,1);
    line-height: 0.25rem;
    background-color: rgba(230,193,139,1);
    border-radius: 0.04rem;
  }
  .btn-download{
    position: absolute;
    left: 50%;
    bottom: 0.8rem;
    margin-left: -0.66rem;
    z-index: 5;
  }
</style>


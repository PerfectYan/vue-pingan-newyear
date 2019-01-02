<template>
  <div class="loading">
    <Header :hasLatch="hasLatch"/>
    <div class="botao-daoying"></div>
    <div class="person-daoying"></div>
    <div class="botao"></div>
    <div class="person"></div>
    <p class="loading-text">步步生财 &nbsp;  加载中......</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Loading',
  components: {
    Header
  },
  data() {
    return {
      hasLatch: true
    }
  }
}
</script>

<style scoped lang="scss">
  .loading{
    position: relative;
    height: 100%;
    .botao{
      width: 100%;
      height: 2.54rem;
      position: absolute;
      left: 0;
      top: 6.2rem;
      @include bg-image('~@/assets/images/loading/botao',center/contain no-repeat);

    }
    .botao-daoying{
      width: 100%;
      height: 2.62rem;
      position: absolute;
      top: 8rem;
      @include bg-image('~@/assets/images/loading/botao-daoying',center/contain no-repeat);
    }
    .person{
      width: 6.47rem;
      height: 8.24rem;
      position: absolute;
      left: 2.5rem;
      top: .55rem;
      @include bg-image('~@/assets/images/loading/person',center/contain no-repeat);

    }
    .person-daoying{
      width: 6.47rem;
      height: 8.24rem;
      position: absolute;
      left: 2.5rem;
      top: 8.7rem;
      @include bg-image('~@/assets/images/loading/person-dy',center/contain no-repeat);

    }
    .loading-text{
      width: 100%;
      position: absolute;
      left: 0;
      top: 11rem;
      text-align: center;
      color: #E6C18B;
      font-size: 0.3rem;
    }
  }

</style>

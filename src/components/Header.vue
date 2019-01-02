<template>
  <div class="header">
    <div class="latch" v-if="hasLatch"></div>
    <div class="logo"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    hasLatch: {
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  .latch {
    display: block;
    margin: 0 auto;
    width: 0.65rem;
    height: 0.59rem;
    @include bg-image('~@/assets/images/common/latch',center/100% 100% no-repeat);
  }
  .logo{
    position: absolute;
    top: 0.15rem;
    right: 0.15rem;
    width: 1.16rem;
    height: 0.2rem;
    @include bg-image('~@/assets/images/common/logo',center/100% 100% no-repeat);
  }
</style>

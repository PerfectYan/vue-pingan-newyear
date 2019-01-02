<template>
  <div class="god">
    <div class="god-of-wealth"></div>
    <div class="icon-coins"></div>
  </div>
</template>

<script>
export default {
  name: 'Caishen',
  props: {
    hasLatch: {
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .god{
    position: relative;
    overflow: hidden;
    margin: 0.13rem auto 0;
    width: 1.7rem;
    height: 2.67rem;
  }
  .god-of-wealth {
    position: absolute;
    left: 0.13rem;
    bottom: -0.1rem;
    width: 1.26rem;
    height: 2.3rem;
    z-index: 1;
    @include bg-image('~@/assets/images/common/caishen',center/contain no-repeat);
  }
  .icon-coins{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;
    width: 1.36rem;
    height: 2.48rem;
    @include bg-image('~@/assets/images/common/coins',center/contain no-repeat);
  }
</style>

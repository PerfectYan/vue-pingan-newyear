<template>
  <div class="btn-default" v-text="text" @click="btnClick"></div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      required: true,
      default: ''
    }
  },
  methods: {
    btnClick() {
      this.$emit('btnClick');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .btn-default{
    width: 1.32rem;
    height: 0.5rem;
    line-height: 0.45rem;
    color: rgba(153,46,40,1);
    @include bg-image('~@/assets/images/common/btn',center/contain no-repeat);
    font-size: 0.2rem;
    font-weight: bold;
  }
</style>

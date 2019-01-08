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
    .header {
        position: relative;
        overflow: hidden;
        text-align: center;
    }

    .latch {
        display: block;
        margin: 0 auto;
        width: 1.3rem;
        height: 1.18rem;
        @include bg-image('~@/assets/images/common/latch', center/100% 100% no-repeat);
    }

    .logo {
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        width: 2.32rem;
        height: 0.4rem;
        @include bg-image('~@/assets/images/common/logo', center/100% 100% no-repeat);
    }
</style>

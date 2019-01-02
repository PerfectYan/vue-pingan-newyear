<template>
    <div class="footer">
        <div class="gold" v-if="bgGold"></div>
        <div class="icon-gold" v-if="iconGold"></div>
        <div class="wave"></div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            bgGold: {
                default: false
            },
            iconGold: {
                default: false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer {
        width: 100%;
        text-align: center;
        z-index: 2;
    }

    .gold {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2.98rem;
        @include bg-image('~@/assets/images/about/bg-gold', center/100% 100% no-repeat);
        z-index: 1;
    }

    .icon-gold {
        position: absolute;
        left: 2rem;
        bottom: .32rem;
        width: 3.84rem;
        height: 1.14rem;
        @include bg-image('~@/assets/images/about/icon-gold', center/100% 100% no-repeat);
        z-index: 3;
    }

    .wave {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.32rem;
        @include bg-image('~@/assets/images/common/wave', center/100% 100% no-repeat);
        z-index: 2;
    }
</style>

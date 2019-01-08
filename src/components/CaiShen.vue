<template>
    <div class="god">
        <div class="god-of-wealth"></div>
        <div class="icon-coins" v-if="hasCoins"></div>
    </div>
</template>

<script>
    export default {
        name: 'Caishen',
        props: {
            hasCoins: {
                default: false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .god {
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        width: 2.85rem;
        height: 5.35rem;
    }

    .god-of-wealth {
        position: absolute;
        left: 0.26rem;
        bottom: 0.2rem;
        width: 2.52rem;
        height: 4.6rem;
        z-index: 1;
        @include bg-image('~@/assets/images/common/caishen', center/contain no-repeat);
    }

    .icon-coins {
        position: absolute;
        left: 0;
        bottom: 0.8rem;
        z-index: 4;
        width: 2.85rem;
        height: 5.35rem;
        @include bg-image('~@/assets/images/common/coins', center/contain no-repeat);
    }
</style>

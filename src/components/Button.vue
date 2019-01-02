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
    .btn-default {
        width: 2.64rem;
        height: 1rem;
        line-height: 0.9rem;
        color: #7A1314;
        @include bg-image('~@/assets/images/common/btn', center/contain no-repeat);
        font-size: 0.4rem;
        font-family: 'SourceHanSansCN-Bold';
        font-weight: bold;
    }
</style>

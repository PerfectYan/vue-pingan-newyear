<template>
    <div class="content">
        <div class="logo"></div>
        <div class="top-cont">
            <div class="camara">
                <input class="file" type="file">
            </div>
            <strong>输入您的祝福语吧</strong>
            <div class="input-wrap">
                <input maxlength="20" placeholder="如: 祝您新的一年" type="text">
                <div class="input-icon"></div>
            </div>
        </div>

        <div class="botao"></div>
        <div class="btn" @click="goResult">生成祝福</div>
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
        },
        methods: {
            goResult() {
                this.$router.push('/result');
            }
        }
    }
</script>

<style scoped lang="scss">
    ::-webkit-input-placeholder {
        color: #B78660
    }

    /* 使用webkit内核的浏览器 */
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
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
        background: url('../assets/images/img/LOGO.png') no-repeat center;
        background-size: contain;

    }

    .top-cont {
        position: absolute;
        left: 50%;
        top: 1rem;
        z-index: 4;
        margin: 0 0 0 -3.47rem;
        width: 6.94rem;
        height: 9.44rem;
        background: url(../assets/images/img/step4-bg.png) no-repeat center;
        background-size: contain;
    }

    .botao {
        width: 100%;
        height: 2.87rem;
        position: absolute;
        left: 0;
        bottom: 0rem;
        z-index: 3;
        background: url(../assets/images/img/step4-btmbg.png) no-repeat center;
        background-size: contain;

    }

    .btn {
        color: #690004;
        font-size: 0.36rem;
        font-weight: bold;
        text-align: center;
        width: 2.65rem;
        height: 1rem;
        line-height: 0.95rem;
        position: absolute;
        left: 50%;
        top: 11rem;
        z-index: 4;
        margin: 0 0 0 -1.325rem;
        background: url('../assets/images/img/btn.png') no-repeat center;
        background-size: contain;
    }

    .camara {
        width: 1.77rem;
        height: 1.89rem;
        line-height: 0.85rem;
        position: absolute;
        left: 50%;
        top: 1.95rem;
        margin: 0 0 0 -0.885rem;
        background: url(../assets/images/img/camara.png) no-repeat center;
        background-size: contain;
    }

    .file {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        left: 0;
    }

    .top-cont strong {
        width: 6rem;
        font-size: 0.52rem;
        color: #690004;
        position: absolute;
        top: 6.2rem;
        left: 50%;
        margin-left: -3rem;

    }

    .input-wrap {
        width: 4.2rem;
        height: 0.5rem;
        position: absolute;
        top: 7.3rem;
        left: 50%;
        margin-left: -2.1rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #B78660;
    }

    .input-wrap input {
        height: 0.35rem;
        background: none;
        border: none;
        outline: none;
        font-size: 0.3rem;
        color: #690004;
        text-indent: 0.1rem;

    }

    .input-wrap .input-icon {
        width: 0.37rem;
        height: 0.33rem;
        background: url(../assets/images/img/icon6.png) no-repeat center;
        background-size: contain;
    }


</style>

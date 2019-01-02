<template>
    <div>
        <div class="content">
            <div class="logo"></div>
            <div class="caishen"></div>
            <div class="man"></div>
            <div class="woman"></div>
            <div class="botao"></div>

        </div>
        <div class="mask">
            <div class="top-cont">
                <div class="des-wrap">
                    <p>新的一年 </p>
                    <p>平步青云 步步高升 步步生财</p>
                    <p> 每一步，都精彩 每一步，都是财富</p>
                    <span class="icon icon1"></span>
                    <span class="icon icon2"></span>
                </div>
                <p class="choose-time">选择拜年时间</p>
                <p class="btm-info">滑动选择时间</p>
            </div>
            <div class="modal">
                <div class="year-wrap">
                    <div class="year">2019</div>
                    <div>己亥猪年</div>
                </div>
                <div class="time">
                    <select id="select-date">
                        <option value="1">正月.初一</option>
                        <option value="2">正月.初二</option>
                        <option value="3">正月.初三</option>
                        <option value="4">正月.初四</option>
                        <option value="5">正月.初五</option>
                        <option value="6">正月.初六</option>
                        <option value="7">正月.初七</option>
                        <option value="8">正月.初八</option>
                        <option value="9">正月.初九</option>
                        <option value="10">正月.初十</option>
                    </select>
                </div>
                <select id="select-sex">
                    <option value="1">男</option>
                    <option value="2">女</option>
                </select>
            </div>
            <div class="btn" @click="goGreeting">确认</div>
        </div>
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
            goGreeting() {
                this.$router.push('/greetings');
            }
        }

    }
</script>

<style scoped lang="scss">
    select {
        background: none;
        border: none;
        outline: none;
        appearance: none;
        -moz-appearance: none; /* Firefox */
        -webkit-appearance: none; /* Safari 和 Chrome */
    }

    #select-date {
        position: absolute;
        width: 2rem;
        left: 39%;
        top: 2.5rem;
        font-size: 0.36rem;
        color: #F8C488;
    }

    #select-sex {
        position: absolute;
        width: 2rem;
        left: 50%;
        top: 3.78rem;
        font-size: 0.36rem;
        color: #F8C488;
    }

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
        text-align: center;
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
        z-index: 12;
        background: url('../assets/images/img/LOGO.png') no-repeat center;
        background-size: contain;

    }

    .top-cont {
        position: relative;
        z-index: 11;
        width: 5.65rem;
        height: 5.72rem;
        margin: 0 auto;
        background: rgba(105, 7, 8, 0.9);
        border-bottom-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;

    }

    .des-wrap {
        width: 4.5rem;
        margin: 0 auto 0.6rem;
        position: relative;
        padding-top: 0.9rem;

    }

    .des-wrap p {
        font-size: 0.22rem;
        color: #E6C18B;
        line-height: 0.5rem;
    }

    .des-wrap .icon1 {
        position: absolute;
        left: 0;
        top: 1.3rem;
        width: 0.25rem;
        height: 0.3rem;
        border-top: 1px solid #E6C18B;
        border-left: 1px solid #E6C18B;
    }

    .des-wrap .icon2 {
        position: absolute;
        right: 0;
        bottom: -0.3rem;
        width: 0.25rem;
        height: 0.3rem;
        border-right: 1px solid #E6C18B;
        border-bottom: 1px solid #E6C18B;
    }

    .top-cont .btm-info {
        font-size: 0.24rem;
        color: #E6C18B;
        line-height: 0.8rem;
    }

    .caishen {
        position: absolute;
        left: -0.5rem;
        top: 6rem;
        z-index: 1;
        width: 5.85rem;
        height: 7.09rem;
        background: url('../assets/images/img/csy.png') no-repeat center;
        background-size: contain;
    }

    .man {
        position: absolute;
        left: 38%;
        top: 4.2rem;
        width: 3.52rem;
        height: 8.97rem;
        background: url('../assets/images/img/man.png') no-repeat center;
        background-size: contain;
    }

    .woman {
        position: absolute;
        right: -0.2rem;
        top: 4.85rem;
        z-index: 2;
        width: 3.16rem;
        height: 10.18rem;
        background: url('../assets/images/img/women.png') no-repeat center;
        background-size: contain;
    }

    .botao {
        width: 100%;
        height: 2.54rem;
        position: absolute;
        left: 0;
        bottom: -0.9rem;
        z-index: 3;
        background: url('../assets/images/img/botao.png') no-repeat center;
        background-size: contain;

    }

    .btn {
        color: #690004;
        font-size: 0.36rem;
        font-weight: bold;
        text-align: center;
        width: 2.65rem;
        height: 1rem;
        line-height: 0.85rem;
        position: absolute;
        left: 50%;
        top: 10.4rem;
        z-index: 4;
        margin: 0 0 0 -1.325rem;
        background: url('../assets/images/img/btn.png') no-repeat center;
        background-size: contain;
    }

    .choose-time {
        font-size: 0.4rem;
        color: #CB9E72;
        margin-bottom: -0.1rem;
        font-weight: bold;
    }

    .mask {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        background: rgba(105, 7, 8, 0.9);
    }

    .modal {
        width: 5.18rem;
        height: 5.57rem;
        position: absolute;
        left: 50%;
        top: 4.5rem;
        z-index: 12;
        color: #D89773;
        margin: 0 0 0 -2.59rem;
        background: url('../assets/images/img/modal.png') no-repeat center;
        background-size: contain;
    }

    .modal:after {
        content: '';
        position: absolute;
        right: -1.12rem;
        bottom: -0.26rem;
        width: 2.69rem;
        height: 1.12rem;
        background: url('../assets/images/img/yb.png') no-repeat center;
        background-size: contain;
    }

    .year-wrap {
        position: relative;
        z-index: 1000;
        font-size: 0.22rem;
        padding-top: 0.95rem;
    }

    .year {
        font-size: 0.52rem;
        margin-bottom: -0.15rem;
    }

    #select_dummy {
        opacity: 0;
    }

    .dwbg {
        left: 50% !important;
        top: 4.5rem !important;
        margin-left: -2.59rem;
        width: 5.18rem;
        height: 5.57rem;
        position: absolute;
        color: #E6C18B;
        background: url('../assets/images/img/modal.png') no-repeat center;
        background-size: contain;
    }
</style>

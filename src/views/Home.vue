<template>
    <div class="content">
        <div class="logo-r"></div> 
        <div class="logo"></div>
        <div class="top-cont">
            <div class="des-wrap">
                <p>新的一年 </p>
                <p>平步青云 步步高升 步步生财</p>
                <p> 每一步，都精彩 每一步，都是财富</p>
                <span class="icon icon1"></span>
                <span class="icon icon2"></span>
            </div>
            <p class="btm-info">拜年，也要来点 <strong>“步”</strong> 一样的</p>
            <p class="btm-info">2019年，邀财神一起 <strong>“趣”</strong> 拜年</p>
        </div>
        <div class="caishen"></div>
        <div class="man"></div>
        <div class="woman"></div>
        <div class="botao"></div>
        <div class="gold-l"></div>
        <div class="gold-m"></div>
        <div class="gold-r"></div>
        <div class="btn" @click="showModal" v-show="!isShowModal">开始拜年</div>

       <!-- 选日期弹窗 -->
        <SelectTime v-show="isShowModal"></SelectTime>

    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'
    import SelectTime from '@/views/Select.vue'

    export default {
        name: 'Loading',
        components: {
            Header, SelectTime
        },
        data() {
            return {
                hasLatch: true,
                isShowModal: false,
            }
        },
        methods: {
             showModal(){
                this.isShowModal = true;
            }
        },
        mounted(){
            let rate = window.innerWidth / 7.5;
            this.$nextTick(() => {
                if (window.innerHeight - 9 * rate < 4 * rate) {
                   document.querySelector('html').className = ' html'
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .html{
        .des-wrap{
           position: relative;
           top: -0.6rem;
           margin-bottom: -0.2rem;
           .icon2{
               bottom: -0.1rem;
           }
        }
        // .gold-l ,.gold-m , .gold-r
        .caishen, .man , .woman {
            transform: scale(0.8);           
        }
        .caishen{
            bottom: 0.2rem;
        }
        .man{
            bottom: -0.2rem;
        }
         .woman{
            bottom: -2.1rem;
        }
    }
    .top-cont{
        width: 5.65rem;
        height: 5.72rem;
        margin: 0 auto;
        background: #A2312B;
        border-bottom-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        box-shadow: 0 0.1rem 1rem rgba(0,0,0,0.3);
    }
    .des-wrap{
        width: 4.5rem;
        margin: 0 auto 0.8rem;
        position: relative;
        padding-top: 0.9rem;
    }
    .des-wrap p{
        font-size: 0.22rem;
        color: #E6C18B;
        line-height: 0.5rem;
    }
    .des-wrap .icon1{
        position: absolute;
        left: 0;
        top: 1.3rem;
        width: 0.25rem;
        height: 0.3rem;
        border-top: 1px solid #E6C18B;
        border-left: 1px solid #E6C18B;
    }
    .des-wrap .icon2{
        position: absolute;
        right: 0;
        bottom: -0.3rem;
        width: 0.25rem;
        height: 0.3rem;
        border-right: 1px solid #E6C18B;
        border-bottom: 1px solid #E6C18B;
    }
    .top-cont .btm-info{
        font-size: 0.3rem;
        color: #E6C18B;
        line-height: 0.5rem;
    }
    .caishen{
        position: absolute;
        left: -0.5rem;
        bottom: 0.3rem;
        z-index: 1;
        width: 5.85rem;
        height: 7.09rem;
        background:url('../assets/images/img/csy.png') no-repeat center;
        background-size: contain;
    }
    .man{
        position: absolute;
        left: 38%;
        bottom: 0rem;
        width: 3.52rem;
        height: 8.97rem;
        background:url('../assets/images/img/man.png') no-repeat center;
        background-size: contain;
    }
    .woman{
        position: absolute;
        right: -0.2rem;
        bottom: -2rem;
        z-index: 2;
        width: 3.16rem;
        height: 10.18rem;
        background:url('../assets/images/img/women.png') no-repeat center;
        background-size: contain;
    }
    .botao{
        width: 100%;
        height: 2.54rem;
        position: absolute;
        left: 0;
        bottom: -1rem;
        z-index: 3;
        background:url('../assets/images/img/botao.png') no-repeat center;
        background-size: contain;

    }
    .btn{
        color: #690004;
        font-size: 0.36rem;
        font-weight: bold;
        text-align: center;
        width:2.65rem;
        height: 1rem;
        line-height: 0.9rem;
        position: absolute;
        left: 50%;
        bottom: 1.4rem;
        z-index: 4;
        margin: 0 0 0 -1.325rem;
        background:url('../assets/images/img/btn.png') no-repeat center;
        background-size: contain;
    }
    .gold-l{
        width:3.2rem;
        height: 3.28rem;
        position: absolute;
        left: -0.1rem;
        bottom: 0.1rem;
        z-index: 2;
        background:url('../assets/images/img/gold-l.png') no-repeat center;
        background-size: contain;
    }
    .gold-m{
        width:2.66rem;
        height: 2.02rem;
        position: absolute;
        left: 40%;
        bottom: 0.26rem;
        z-index: 2;
        background:url('../assets/images/img/gold-m.png') no-repeat center;
        background-size: contain;
    }
    .gold-r{
        width:1.76rem;
        height: 2.52rem;
        position: absolute;
        right: -0.1rem;
        bottom: 0.1rem;
        z-index: 2;
        background:url('../assets/images/img/gold-r.png') no-repeat center;
        background-size: contain;
    }

</style>

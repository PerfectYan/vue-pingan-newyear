<template>
    <div class="loading">
         <div class="logo-r"></div> 
        <Header :hasLatch="hasLatch"/>
        <div class="botao-daoying"></div>
        <div class="person-daoying"></div>
        <div class="icon icon1"></div>
        <div class="icon icon2"></div>
        <div class="icon icon3"></div>
        <div class="icon icon4"></div>
        <div class="icon icon5"></div>
        <div class="botao"></div>
        <div class="person"></div>
        <div class="loading-text cp-preloader cp-preloader_type">
            <span class="cp-preloader__letter preloader1" data-preloader="步">步</span>
            <span class="cp-preloader__letter preloader2" data-preloader="步">步</span>
            <span class="cp-preloader__letter preloader3" data-preloader="生">生</span>
            <span class="cp-preloader__letter preloader4" data-preloader="财">财</span>
            <span class="cp-preloader__letter preloader5" data-preloader="加">加</span>
            <span class="cp-preloader__letter preloader6" data-preloader="载">载</span>
            <span class="cp-preloader__letter preloader7" data-preloader="中">中</span>
            <span class="cp-preloader__letter preloader8" data-preloader="...">...</span>

        </div>
        
        <!--<p class="loading-text">步步生财 &nbsp; 加载中......</p>-->
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
                hasLatch: true,
                hasCoins: false
            }
        },
        mounted() {
            setTimeout(()=>{
                this.$router.push('/home');
            },3000)
        }
    }
</script>

<style scoped lang="scss">
    .cp-preloader__letter{
        animation: fade 0.3s ease-in ;
        &.preloader2{
          animation-delay: 0.3s
        }
        &.preloader3{
          animation-delay: 0.6s
        }
        &.preloader4{
          animation-delay: 0.9s
        }
        &.preloader5{
          animation-delay: 1.2s
        }
        &.preloader6{
          animation-delay: 1.5s
        }
         &.preloader7{
          animation-delay: 1.8s
        }
         &.preloader8{
          animation-delay: 2.1s
        }

    }

    @-webkit-keyframes fade{
        from { transform: translateY(-100px); opacity: 0  }
        to { transform: none; opacity: 1; }
    }
   

    .icon{
        position: absolute;       
    }
    .icon1{
        width: 0.29rem;
        height: 0.36rem;
        top: 1.34rem;
        left: 45%;
        background: url('~@/assets/images/img/icon5.png') no-repeat center;
        background-size: 100%;
    }
    .icon2{
        width: 0.4rem;
        height: 0.4rem;
        top: 2.6rem;
        left: 48%;
        background: url('~@/assets/images/img/icon3.png') no-repeat center;
        background-size: 100%;
    }
    .icon3{
        width: 0.4rem;
        height: 0.4rem;
        top: 3.38rem;
        left: 58%;
        background: url('~@/assets/images/img/icon3.png') no-repeat center;
        background-size: 100%;
    }

    .icon4{
        width: 0.29rem;
        height: 0.36rem;
        top: 3.86rem;
        left: 30%;
        background: url('~@/assets/images/img/icon1.png') no-repeat center;
        background-size: 100%;
    }

    .icon5{
        width: 0.29rem;
        height: 0.36rem;
        top: 5rem;
        left: 57%;
        background: url('~@/assets/images/img/icon1.png') no-repeat center;
        background-size: 100%;
    }

    .loading {
        position: relative;
        height: 100%;
        overflow: hidden;
        .botao {
            width: 100%;
            height: 2.54rem;
            position: absolute;
            left: 0;
            top: 6.2rem;
            @include bg-image('~@/assets/images/loading/botao', center/contain no-repeat);

        }
        .botao-daoying {
            width: 100%;
            height: 2.62rem;
            position: absolute;
            top: 8rem;
            @include bg-image('~@/assets/images/loading/botao-daoying', center/contain no-repeat);
        }
        .person {
            width: 6.47rem;
            height: 8.24rem;
            position: absolute;
            left: 2.5rem;
            top: .55rem;
            @include bg-image('~@/assets/images/loading/person', center/contain no-repeat);

        }
        .person-daoying {
            width: 6.47rem;
            height: 8.24rem;
            position: absolute;
            left: 2.5rem;
            top: 8.7rem;
            @include bg-image('~@/assets/images/loading/person-dy', center/contain no-repeat);

        }
        .loading-text {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 1.6rem;
            text-align: center;
            font-size: 0.3rem;
        }

        /* basic style */
        .cp-preloader__letter{
            display: inline-block;
            position: relative;
            overflow: hidden;
            color: #E6C18B;
        }

        // .cp-preloader__letter:before{
        //     content: attr(data-preloader);
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     -webkit-animation-duration: 3s;
        //     animation-duration: 3s;
        //     -webkit-animation-iteration-count: infinite;
        //     animation-iteration-count: infinite;
        //     -webkit-animation-fill-mode: backwards;
        //     animation-fill-mode: backwards;
        // }

        // .cp-preloader__letter:nth-child(2):before{
        //     -webkit-animation-delay: 0.3s;
        //     animation-delay: 0.3s;
        // }

        // .cp-preloader__letter:nth-child(3):before{
        //     -webkit-animation-delay: 0.45s;
        //     animation-delay: 0.45s;
        // }

        // .cp-preloader__letter:nth-child(4):before{
        //     -webkit-animation-delay: 0.6s;
        //     animation-delay: 0.6s;
        // }

        // .cp-preloader__letter:nth-child(5):before{
        //     -webkit-animation-delay: 0.75s;
        //     animation-delay: 0.75s;
        // }

        // .cp-preloader__letter:nth-child(6):before{
        //     -webkit-animation-delay: 0.9s;
        //     animation-delay: 0.9s;
        // }

        // .cp-preloader__letter:nth-child(7):before{
        //     -webkit-animation-delay: 1.05s;
        //     animation-delay: 1.05s;
        // }

        // .cp-preloader__letter:nth-child(8):before{
        //     -webkit-animation-delay: 1.2s;
        //     animation-delay: 1.2s;
        // }

        // /* type 1 */

        // .cp-preloader_type .cp-preloader__letter:before{
        //     -webkit-animation-name: cp-preloader;
        //     animation-name: cp-preloader;
        // }

        // @-webkit-keyframes cp-preloader{

        //     0%, 100%{
        //         -webkit-transform: rotateY(-90deg);
        //         transform: rotateY(-90deg);
        //         opacity: 0;
        //     }

        //     20%, 50%{
        //         -webkit-transform: rotateY(0);
        //         transform: rotateY(0);
        //         opacity: 1;
        //     }

        //     65%{
        //         -webkit-transform: rotateY(0);
        //         transform: rotateY(0);
        //         opacity: .3;
        //     }

        //     80%{
        //         opacity: 0;
        //     }
        // }

        // @keyframes cp-preloader{

        //     0%, 100%{
        //         -webkit-transform: rotateY(-90deg);
        //         transform: rotateY(-90deg);
        //         opacity: 0;
        //     }

        //     20%, 50%{
        //         -webkit-transform: rotateY(0);
        //         transform: rotateY(0);
        //         opacity: 1;
        //     }

        //     65%{
        //         -webkit-transform: rotateY(0);
        //         transform: rotateY(0);
        //         opacity: .3;
        //     }

        //     80%{
        //         opacity: 0;
        //     }
        // }
    }

</style>

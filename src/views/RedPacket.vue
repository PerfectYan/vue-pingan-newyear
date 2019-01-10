<template>
    <div class="container">
        <!--结果-->
        <div class="result">
            <!--完成-->
            <div class="finish">
                <p class="redpack-txt"></p>
                <span class="" id="choujiang" @click="getRedPacket"></span>
                <span class="setframes"></span>
            </div>
        </div>

        <!--打开红包-->
        <div class="openRedPacket">
            <!--中奖了，现金红包-->
            <div class="money">
                <div class="money-box">
                    <span></span>
                    <span>恭喜您获得红包</span>
                </div>
                <div class="money-info">
                    <span><i id="money">88</i>元</span>
                    <span>请到您的微信钱包查看</span>
                </div>
                <div class="money-btn" @click="goHome"><img src="../assets/images/redpacket/img-10.png"></div>
            </div>
        </div>
    </div>
</template>

<script>

    import { getRedPacket } from '@/api/';

    export default {
        name: 'RedPacket',
        data() {
            return {
                hasLatch: true,
                bgGold: true,
                iconGold: true,
                hasCoins: true
            }
        },
        methods: {
            goHome() {
                this.$router.push('/home');
            },
            download() {
                window.location.href = 'https://ulink.lifeapp.pingan.com.cn/index.html?url=pars%3A%2F%2Fpars.pingan.com%2Fact_detail%3Faid%3D%E6%B4%BB%E5%8A%A8id'
            },
            querySelector(obj) {
                return document.querySelector(obj);
            },
            getRedPacket() {

            },
            showResultFinish() {
                var k = 0;
                var redPacketTxt = ["红包在手，运气我有！", "X9在向你招手！", "考验运气的时候到了！", "注入念力！呼唤X9！", "见证奇迹的时刻到了！"];
                setTimeout(() => {
                    this.querySelector('.result').style.display = 'block';
                    this.querySelector('.result').className = 'result fadeIn';
                    this.querySelector('.finish').style.display = 'block';
                    var r = parseInt(Math.random() * redPacketTxt.length);
                    this.querySelector('.redpack-txt').innerHTML = redPacketTxt[r];
                    setTimeout(() => {
                        this.querySelector('.finish').className = 'finish redPacketSacle';
                        this.querySelector('.finish span:nth-of-type(1)').addEventListener('touchstart',() => {
                            if (k < 1) {
                                this.querySelector('.finish span:nth-of-type(1)').style.display = 'none';
                                //playSound(2);
                                this.querySelector('.setframes').style.animationPlayState = 'running';
                                setTimeout(()=> { //等待服务器响应,返回结果
                                    var isOpen = true;
                                    if (isOpen) {
                                        this.querySelector('.setframes').style.animationPlayState = 'paused';
                                        getRedPacket().then((res)=>{
                                            console.log(res);
                                        });
                                    }
                                }, 3000);
                                k = 1;
                            }
                        }, false);
                    }, 500);
                }, 500);
            },
            setResult() {
                this.querySelector('.result').className = 'result fadeOut';
                this.querySelector('.openRedPacket').style.display = 'block';
                this.querySelector('.openRedPacket').className = 'openRedPacket fadeIn';
                setTimeout(() => {
                    this.querySelector('.result').style.display = 'none';
                    this.querySelector('.result').className = 'result';
                    this.querySelector('.finish').style.display = 'none';
                    this.querySelector('.finish').className = 'finish';
                    this.showMoney();
                }, 500);
            },
            showMoney() {
                this.querySelector('.money').style.display = 'block';
                this.querySelector('.money').className = 'money fadeIn';
                setTimeout(()=> {
                    this.querySelector('.money-box span:nth-of-type(1)').className = 'translateY';
                    this.querySelector('.money-box span:nth-of-type(2)').className = 'translateY';
                    this.querySelector('.money-info').className = 'money-info redPacketSacle';
                    this.querySelector('.money-btn').className = 'money-btn translateY';
                }, 300);
            }
        },
        mounted() {
            this.showResultFinish();
        }
    }
</script>

<style scoped lang="scss">
    .fadeOut {
        animation: fadeOut 0.5s ease forwards;
        -webkit-animation: fadeOut 0.5s ease forwards;
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @-webkit-keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .fadeIn {
        animation: fadeIn 0.5s ease forwards;
        -webkit-animation: fadeIn 0.5s ease forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .translateDownIn {
        animation: translateDownIn 0.5s ease forwards;
        -webkit-animation: translateDownIn 0.5s ease forwards;
    }

    @keyframes translateDownIn {
        from {
            opacity: 0;
            transform: translate3d(0, -200px, 0);
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    @-webkit-keyframes translateDownIn {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, -200px, 0);
        }
        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
        }
    }

    .translateY {
        animation: translateY 0.5s ease forwards;
        -webkit-animation: translateY 0.5s ease forwards;
    }

    @keyframes translateY {
        0% {
            transform: translateY(150px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    @-webkit-keyframes scaleY {
        0% {
            -webkit-transform: translateY(150px);
        }
        100% {
            -webkit-transform: translateY(0px);
        }
    }

    .money-btn.translateY {
        animation-delay: 0.5s;
        -webkit-animation-delay: 0.5s;
    }

    .redPacketSacle {
        animation: redPacketSacle 1s ease forwards;
        -webkit-animation: redPacketSacle 1s ease forwards;
    }

    @keyframes redPacketSacle {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }
        40% {
            opacity: 1;
            transform: scale(1.1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @-webkit-keyframes redPacketSacle {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.8);
        }
        40% {
            opacity: 1;
            -webkit-transform: scale(1.1);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
        }
    }

    .money-info {
        opacity: 0;
        animation-delay: 0.75s;
        -webkit-animation-delay: 0.75s;
    }

    .setframes {
        animation: setframes 1s steps(30, end) infinite;
        animation-play-state: paused;
        -webkit-animation: setframes 1s steps(30, end) infinite;
        -webkit-animation-play-state: paused;
    }

    @keyframes setframes {
        from {
            background-position: 0 0;
        }
        to {
            background-position: -4474px 0;
        }
    }

    @keyframes setframes {
        from {
            background-position: 0 0;
        }
        to {
            background-position: -4474px 0;
        }
    }


    .container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        max-height: 1080px;
        z-index: 5;
    }

    .result,
    .openRedPacket {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        opacity: 0;
        background: rgba(0, 0, 0, 0.75);
    }

    .finish {
        width: 5.55rem;
        height: 7.42rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -3.72rem 0 0 -2.78rem;
        background: url('~@/assets/images/redpacket/img-08.png') no-repeat center;
        background-size: contain;
        display: none;
        opacity: 0;
    }

    .finish p {
        display: block;
        width: 100%;
        height: auto;
        position: absolute;
        top: 2rem;
        left: 0;
        font-size: 20px;
        color: #fde0b2;
        text-align: center;
    }

    .finish span {
        width: 1.49rem;
        height: 1.49rem;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0.46rem 0 0 -0.75rem;
        border-radius: 0;
        background: url('~@/assets/images/redpacket/img-37.png') no-repeat;
        background-size: 100% 100%;
    }

    .finish span:nth-of-type(1) {
        background: url('~@/assets/images/redpacket/img-36.png') no-repeat;
        background-size: 100% 100%;
        z-index: 99;
    }

    .money {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        display: none;
        background: #FFFFFF;
        position: relative;
    }

    .money-box {
        width: 100%;
        height: 4.4rem;
        position: absolute;
        top: 0;
        left: 0;
    }

    .money-box span {
        display: block;
        position: absolute;
    }

    .money-box span:nth-of-type(1) {
        width: 100%;
        height: 4.74rem;
        top: -2.3rem;
        background: linear-gradient(-159deg, #ff8c69, #ff4747);
        border-radius: 0 0 50% 50%;
        transform: translateY(1.5rem);
        -webkit-transform: translateY(1.5rem);
        z-index: 10;
    }

    /*.money-box span:nth-of-type(2) {*/
    /*width: 153px;*/
    /*height: 200px;*/
    /*top: 110px;*/
    /*left: 50%;*/
    /*margin-left: -76px;*/
    /*z-index: 12;*/
    /*transform: translateY(150px);*/
    /*-webkit-transform: translateY(150px);*/
    /*}*/

    .money-box span:nth-of-type(2) {
        width: 3.14rem;
        height: 0.82rem;
        /*top: 343px;*/
        top: 3rem;
        left: 50%;
        margin-left: -1.57rem;
        text-align: center;
    }

    .money-info {
        width: 100%;
        height: 1.5rem;
        position: absolute;
        top: 5rem;
    }

    .money-info span {
        display: block;
        text-align: center;
    }

    .money-info span i {
        color: #ff5454;
        font-size: 106px;
        font-style: normal;
    }

    .money-info span:nth-of-type(1) {
        color: #555555;
        font-size: 22px;
    }

    .money-info span:nth-of-type(2) {
        color: #5370b1;
        font-size: 18px;
    }

    .money-btn {
        width: 100%;
        height: auto;
        position: absolute;
        bottom: 72px;
        left: 0;
        transform: translateY(200px);
        -webkit-transform: translateY(200px);
    }

    .money-btn img {
        display: block;
        width: 180px;
        height: 40px;
        margin: auto;
    }

</style>


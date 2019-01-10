<template>
    <div class="content">
        <div class="logo"></div>
        <div class="top-cont">
            <div class="top-bg"></div>
            <div :class="cls" class="person" :style="{backgroundImage: `url(${imgfile})`}"></div>
            <div class="gold"></div>
            <div class="btm-des-wrap">
                <strong>{{ date || '除夕夜' }}</strong>
                <p class="font26">健康行大运</p>
                <p class="wechat-id">微信ID：xxx</p>
                <div v-show="!!bless" class="des-wrap">
                    <div class="bless">{{ bless }}</div>
                    <span class="icon icon1"></span>
                    <span class="icon icon2"></span>
                </div>

            </div>
        </div>
        <div class="botao"></div>
        <div class="btn btn-left" @click="goGreetings">重新上传</div>
        <div class="btn btn-right" @click="getPosters">生成海报</div>
        <div class="btn-wrap">
             <!--<div class="btn go-home" @click="goHome">返回首页</div>-->
             <div class="btn btn-about" @click="goAbout">即刻生财</div>
        </div>
        <img :src="img_path" class="post-img">
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'
    import {getPosters} from '@/api/'

    export default {
        name: 'Loading',
        components: {
            Header
        },
        computed: {
            cls() {
                let uploadData = sessionStorage.getItem('uploadData');
                if (uploadData) {
                    uploadData = JSON.parse(uploadData);
                    this.pic_type = uploadData.pic_type;
                    this.imgfile = uploadData.img_path;
                    // 1汉服男 2中山装男 3汉服女 4旗袍女
                    switch (this.pic_type) {
                        case  1:
                            return 'man_hanfu';
                            break;
                        case  2:
                            return 'man_xifu';
                            break;
                        case  3:
                            return 'women_hanfu';
                            break;
                        case  4:
                            return 'women_qipao';
                            break;
                    }
                } else {
                    return ''
                }

            }
        },
        data() {
            return {
                hasLatch: true,
                show: false,
                isShowToast: false,
                content: '',
                bless: '',
                date: '',
                imgfile: '',
                pic_type: '',
                img_path: ''
            }
        },
        methods: {
            showToast(content){
                this.isShowToast =  true;
                this.content = content;
            },
            hideToast(){
                setTimeout(() => {
                    this.isShowToast =  false;
                }, 2000);
            },
            goHome(){
                this.$router.push('/');
            },
            goGreetings() {
                this.$router.push('/greetings');
            },
            goAbout() {
                this.$router.push('/about');
            },
            getPosters() {
                if (this.imgfile == '') {
                    this.showToast('请先上传您的照片');
                    this.hideToast();
                    return;
                }
                if (this.bless == '') {
                    this.showToast('请输入您的祝福语');
                    this.hideToast();
                    return;
                }

                const formData = new FormData();
                formData.append('bless', this.bless);
                formData.append('year_date', this.date);
                formData.append('imgfile', sessionStorage.getItem('img_file')||'');
                formData.append('pic_type', this.pic_type);

                getPosters(formData).then(res => {
                    sessionStorage.setItem('img_path', res.data.content.img_path);
                    this.$router.push('/result');
                }).catch(error => {
                    let message = error && error.data && error.data.message ? error.data.message : '系统繁忙，请稍后重试'
                    this.showToast(message);
                    this.hideToast();
                })
            }
        },
        mounted() {
            this.bless = sessionStorage.getItem('bless') || '';
            this.date = sessionStorage.getItem('date') || '';
            this.img_path = location.protocol+'//'+sessionStorage.getItem('img_path') || '';
            var rate = window.innerWidth / 7.5;
            this.$nextTick(() => {
                if (window.innerHeight < 12 * rate) {
                    document.querySelector('html').className = ' html'
                }
            })
        }
    }
</script>

<style scoped lang="scss">

    .html {
        .top-cont {
            transform: scale(0.9);
            -webkit-transform: scale(0.9);
        }
        .btn {
            bottom: 1rem;
        }
    }

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .content {
        position: relative;
        height: 100%;
        background: #832621;
        text-align: center;
    }

    .post-img{
        display: block;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 198;
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
        margin: 0 0 0 -2.95rem;
        width: 5.9rem;
        height: 8.5rem;
        overflow: hidden;
        border-radius: 0.2rem;
        box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.3);
    }

    .botao {
        width: 100%;
        height: 1.32rem;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 3;
        background: url(../assets/images/common/wave.png) no-repeat center;
        background-size: 100% 100%;

    }
    .btn-wrap{
        position: absolute;
        bottom: 0;
        z-index: 201;
        width: 100%;
        height: 3.65rem;
        padding-top: 0.6rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #802721;
        &::after{
            content: '长按保存图片';
            position: absolute;
            width: 100%;
            top: 0.4rem;
            color: #E6C18A;
            font-size: 0.3rem;

        }

    }

    .btn {
        color: #690004;
        font-size: 0.36rem;
        font-weight: bold;
        text-align: center;
        width: 2.65rem;
        height: 1rem;
        line-height: 0.9rem;
        position: absolute;
        bottom: 1.4rem;
        z-index: 4;
        background: url('../assets/images/img/btn.png') no-repeat center;
        background-size: contain;
        &.btn-left{
            left: 0.8rem;
        }
        &.btn-right{
            right: 0.8rem;
        }
        &.go-home{
            position: static;
             background-size: 80%;
        }
        &.btn-about{
             position: static;
              background-size: 80%;
            // z-index: 201;
            // left: 50%;
            // margin-left: -1.325rem;
            // bottom: .9rem;
        }
    }

    .top-cont strong {
        width: 6rem;
        display: block;
        font-size: 0.5rem;
        color: #690004;
        margin: 0.3rem 0 0;

    }

    .btm-des-wrap {
        position: absolute;
        width: 100%;
        height: 3.35rem;
        bottom: 0;
        background: #E6C18B;
    }

    .btm-des-wrap p {
        font-size: 0.24rem;
        color: #690004;
    }

    .des-wrap {
        position: relative;
        max-width: 4.4rem;
        padding: 0 0.4rem;
        margin: 0 auto;
    }

    .des-wrap .bless {
        font-size: 0.22rem;
        line-height: 0.5rem;
        color: #690004;
    }

    .des-wrap .icon1 {
        position: absolute;
        left: -0.1rem;
        top: 0;
        width: 0.25rem;
        height: 0.3rem;
        border-top: 2px solid #690004;
        border-left: 2px solid #690004;
    }

    .des-wrap .icon2 {
        position: absolute;
        right: 0rem;
        bottom: 0;
        width: 0.25rem;
        height: 0.3rem;
        border-right: 2px solid #690004;
        border-bottom: 2px solid #690004;
    }

    .btm-des-wrap .wechat-id {
        color: #fff;
        font-size: 0.3rem;
        margin: 0.2rem 0 0.15rem;
    }

    .btm-des-wrap .font26 {
        font-size: 0.26rem;
    }

    .top-bg {
        height: 100%;
        background: url(../assets/images/img/cs-bg.jpg) no-repeat center top;
        background-size: contain;
    }

    .save {
        font-size: 0.24rem;
        color: #E6C18B;
        width: 100%;
        position: absolute;
        top: 10.1rem;
    }

    .person {
        position: absolute;
        top: 0.9rem;
        right: -0.3rem;
        width: 3.2rem;
        height: 8.12rem;
        background-repeat: no-repeat;
        background-position: left top;
        background-size: contain;
    }

    .man_xifu {
        top: 0.9rem;
    }

    .man_hanfu {
        //top: 0.9rem;
    }

    .women_hanfu {
        top: 1.3rem;
    }

    .women_qipao {
        //top: 0.9rem;
    }

    .gold {
        position: absolute;
        top: 4.4rem;
        left: 45%;
        margin-left: -1.89rem;
        width: 3.78rem;
        height: 1.85rem;
        background: url('../assets/images/img/step5-gold.png') no-repeat center top;
        background-size: contain;
    }

</style>

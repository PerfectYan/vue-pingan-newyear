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
                <p class="wechat-id">{{nickName}}</p>
                <div v-show="!!bless" class="des-wrap">
                    <div class="bless">{{ bless }}</div>
                    <span class="icon icon1"></span>
                    <span class="icon icon2"></span>
                </div>

            </div>
        </div>
        <!-- <div class="botao"></div> -->
        <div class="save">长按保存图片</div>
       <div class="btn btn-right" @click="goRedPacket">即刻生财</div>

        <img :src="img_path" class="post-img">

        <Toast v-if="isShowToast" :content="content"></Toast>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue';
    import Toast from "@/components/toast.vue";
    import {getPosters} from '@/api/'

    export default {
        name: 'Loading',
        components: {
            Header, Toast
        },
        computed: {
            cls() {
                let uploadData = sessionStorage.getItem('uploadData');
                if (uploadData) {
                    uploadData = JSON.parse(uploadData);
                    let {pic_type, img_path, nickname } = uploadData;
                    this.pic_type = pic_type;
                    this.imgfile = img_path;
                    this.nickName = nickname+': 祝愿您';
                    // 1汉服男 2中山装男 3汉服女 4旗袍女
                    switch (pic_type) {
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
                nickName: '',
                img_path: ''
            }
        },
        methods: {
            goRedPacket() {
                this.$router.push('/redPacket');
            },
            showToast(content){
                this.isShowToast =  true;
                this.content = content;
            },
            hideToast(){
                setTimeout(() => {
                    this.isShowToast =  false;
                }, 2000);
            },
            goGreetings() {
                this.$router.push('/greetings');
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
                this.showToast('海报生成中···');
                getPosters(formData).then(res => {
                    sessionStorage.setItem('img_path', res.data.content.img_path);
                    this.hideToast();
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
     .post-img{
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 198;
        opacity: 0;
    }

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

    .btn {
        color: #690004;
        font-size: 0.36rem;
        font-weight: bold;
        text-align: center;
        width: 2.65rem;
        height: 1rem;
        line-height: 0.9rem;
        position: absolute;
        bottom: 1rem;
        z-index: 4;
        background: url('../assets/images/img/btn.png') no-repeat center;
        background-size: contain;
        &.btn-left{
            left: 0.8rem;
        }
        &.btn-right{
            left: 50%;
            bottom: 0.5rem;
            z-index: 200;
            margin-left: -1.325rem;
        }
    }
    .save{
        position: absolute;
        width: 100%;
        color: #E6C18A;
        font-size: 0.3rem;
        bottom: 2rem;
        z-index: 200;
        pointer-events: none; // 可以穿透到下一层， 比如复制遮罩层下的问题
    }



    .top-cont strong {
        width: 6rem;
        display: block;
        font-size: 0.5rem;
        color: #690004;
        margin: 0.3rem 0 0.05rem;

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
        font-size: 0.28rem;
        line-height: 0.5rem;
        color: #690004;
    }

    .des-wrap .icon1 {
        position: absolute;
        left: 0.1rem;
        top: 0;
        width: 0.25rem;
        height: 0.3rem;
        border-top: 2px solid #690004;
        border-left: 2px solid #690004;
    }

    .des-wrap .icon2 {
        position: absolute;
        right: 0.2rem;
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
// 644*995
    .man_xifu {
        top: 0.2rem;
        right: 0;
    }

// 727*979
    .man_hanfu {
        top: 0.26rem;
        right: -0.15rem;
        width: 3.64rem;
        height: 4.95rem;
        background-size: contain;
    }
// 641*780
    .women_hanfu {
        top: 1.25rem;
        right: -0.15rem;
        width: 3.2rem;
        height: 3.9rem;
        background-size: contain;
    }
// 530*770
    .women_qipao {
        top: 1.3rem;
        right: 0.1rem;
        width: 2.65rem;
        height: 3.85rem;
        background-size: contain;
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

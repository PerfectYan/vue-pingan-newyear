<template>
    <div class="about">
        <Header :hasLatch="hasLatch"/>
        <div class="title">
            #步数兑加息，免费抽福利<br>
            来这里让你步步生财#
        </div>
        <div class="desc">
            进入平安金管家<br>
            打开点击平安有约·健康行<br>
            开启活动，进入：#步步生财#<br>
            活动，开始用你的步数为财富加息吧！
        </div>
        <cai-shen :hasCoins="hasCoins" class="about-caishen"></cai-shen>
        <Button class="btn-download" text="即刻生财" @btnClick='download'></Button>
        <Footer :bgGold="bgGold" :iconGold="iconGold"/>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import CaiShen from '@/components/CaiShen.vue'
    import Button from '@/components/Button.vue'

    export default {
        name: 'About',
        components: {
            Header,
            Footer,
            CaiShen,
            Button
        },
        data() {
            return {
                hasLatch: true,
                bgGold: true,
                iconGold: true,
                hasCoins: true
            }
        },
        methods: {
            download() {
                let param = {
                    event: '点击',
                    label: '即刻生财'
                };
                window.PALifeOpen.trackEvent(param, function (data) {
                    console.debug('success', data);
                }, function (data) {
                    console.debug('failed ', data)
                });
                window.location.href = 'https://ulink.lifeapp.pingan.com.cn/index.html?url=pars%3A%2F%2Fpars.pingan.com%2Fact_detail%3Faid%3D%E6%B4%BB%E5%8A%A8id'
            }
        }
    }
</script>

<style scoped lang="scss">
    .about {
        position: relative;
        height: 100%;
    }

    .title {
        width: 4.76rem;
        margin: 1.45rem auto 0;
        font-size: 0.4rem;
        font-family: "SourceHanSansSC-Bold";
        font-weight: bold;
        color: rgba(230, 193, 139, 1);
        line-height: 0.6rem;
    }

    .desc {
        width: 6rem;
        margin: 0.61rem auto 0;
        padding: 0.34rem 0;
        font-size: 0.25rem;
        font-family: SourceHanSansSC-Regular;
        font-weight: 400;
        color: rgba(153, 46, 40, 1);
        line-height: 0.5rem;
        background-color: rgba(230, 193, 139, 1);
        border-radius: 0.08rem;
    }

    .about-caishen {
        width: 3.4rem;
        height: 6.2rem;
        position: absolute;
        left: 50%;
        margin-left: -1.7rem;
        bottom: 0;
    }

    .btn-download {
        position: absolute;
        left: 50%;
        bottom: 1.6rem;
        margin-left: -1.32rem;
        z-index: 5;
    }
</style>


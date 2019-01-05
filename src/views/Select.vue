<template>
    <div>      
        <div class="mask">
            <div class="logo"></div> 
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
                <div id="select-date">正月.初一</div>
                <div id="select-sex">男</div>
                <!-- <input id="select-date" type="text" value=""  placeholder="日期" /> 
                <input id="select-sex" type="text"  placeholder="性别" />  -->

            </div>
            <div class="btn" @click="goGreeting">确认</div>
        </div>
    </div>
</template>

<script>
   import Vue from 'vue'
    // @ is an alias to /src
    import Header from '@/components/Header.vue';

    const data1 = [
        {"name": "正月.初一"},
        {"name": "正月.初二"},
        {"name": "正月.初三"},
        {"name": "正月.初四"},
        {"name": "正月.初五"},
        {"name": "正月.初六"},
        {"name": "正月.初七"},
        {"name": "正月.初八"},   
        {"name": "正月.初九"},
        {"name": "正月.初十"},
        {"name": "正月.初十一"},
        {"name": "正月.初十二"},
        {"name": "正月.初十三"},
        {"name": "正月.初十四"},
        {"name": "正月.初十五"},  
        ];

    const data2 = [
        {"sex": "男"},
        {"sex": "女"},     
        ];    

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
                localStorage.setItem('date', document.getElementById('select-date').innerHTML)
                localStorage.setItem('sex', document.getElementById('select-sex').innerHTML)
                this.$router.push('/greetings');
            }
        },
        mounted(){
            //这样可以，nextTick里面的代码会在DOM更新后执行
            Vue.nextTick(function(){
                var modal = new LArea();
                modal.init({
                    'trigger': '#select-date', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
                    //'valueTo': '#value3', //选择完毕后id属性输出到该位置
                    'keys': {
                        name: 'name'
                    }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
                    'type': 1, //数据源类型
                    'data': data1 //数据源
                });
                // modal.value=["正月.初一",'', ''];//控制初始位置，注意：该方法并不会影响到input的value

                var modal2 = new LArea();
                modal2.init({
                    'trigger': '#select-sex', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
                    //'valueTo': '#value3', //选择完毕后id属性输出到该位置
                    'keys': {
                        name: 'sex'
                    }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
                    'type': 1, //数据源类型
                    'data': data2 //数据源
                });
               // modal2.value=["男",'', ''];//控制初始位置，注意：该方法并不会影响到input的value

            })
           
        }

    }
</script>

<style scoped lang="scss">
    ::-webkit-input-placeholder {
         color: #F8C488;
    }
    input {
        background: none;
        border: none;
        outline: none;
        //color: #F8C488;
        font-size: 0.36rem;
        color:transparent;
        text-shadow:0 0 0 #F8C488;
    }

    #select-date {
        position: absolute;
        width: 2rem;
        left: 34%;
        top: 2.5rem;
        font-size: 0.36rem;
        color: #F8C488;
    }

    #select-sex {
        position: absolute;
        width: 2rem;
        left: 35%;
        top: 3.78rem;
        font-size: 0.36rem;
        color: #F8C488;
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
        line-height: 0.9rem;
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
        padding-top: 1rem;
    }

    .year {
        font-size: 0.52rem;
        margin-bottom: -0.1rem;
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

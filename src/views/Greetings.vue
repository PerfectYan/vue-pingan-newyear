<template>
    <div class="content">
        <div class="logo"></div>
        <div class="top-cont">
            <div class="camara">
                <input ref="uploadFile" @change="change($event)" class="file" type="file" name="file" accept="image/*">
            </div>
            <strong>输入您的祝福语吧</strong>
            <div class="input-wrap">
                <input v-model="bless" maxlength="20" placeholder="如: 祝您新的一年" type="text">
                <div class="input-icon"></div>
            </div>
        </div>

        <div class="botao"></div>
        <div class="btn" @click="goResult">生成祝福</div>

        <Toast v-if="isShowToast" :content="content"></Toast>

    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'
    import Toast from '@/components/toast.vue'
    import { upload } from '@/api/'

    export default {
        name: 'Loading',
        components: {
            Header, Toast
        },
        data() {
            return {
                hasLatch: true,
                isShowToast: false,
                content: '',
                bless: ''
            }
        },
        mounted(){

        },
        methods: {
            showToast(content){
              this.isShowToast =  true;  
              this.content = content;           
            },
            hideToast(){
                 setTimeout(() => {
                  this.isShowToast =  false;
              }, 1500);
            },
            goResult() {
                var file = this.$refs.uploadFile.files;
                if (file.length == 0) {
                    this.showToast('请上传图片')
                    this.hideToast();
                    return
                 }
                if (file[0].type.match(/png|jpg|jpeg/) == null) {
                    this.showToast('不支持改格式的文件')
                    this.hideToast();
                    return
                }
                if (file[0].size / (1024 * 1024) > 3) {
                  // 大于3M
                  this.showToast('您上传的图片超过3M，请重新选择图片')
                  this.hideToast();
                  return
                }

                this.showToast('上传中...');

                const formData = new FormData();
                formData.append('imgfile', this.$refs.uploadFile.files[0]);
                formData.append('gender', localStorage.getItem('sex'));
                formData.append('year_date', localStorage.getItem('date'));
                upload(formData).then(res=>{
                   if(typeof res.data === 'string'){ // 
                     this.showToast('您上传的照片没有扫描到人脸，请重新选择包含人脸的照片');
                     this.hideToast();
                   }else if(res.data.code === 200){
                     this.showToast('上传成功');
                     this.hideToast();
                     this.bless && localStorage.setItem('bless', this.bless);
                     localStorage.setItem('uploadData', JSON.stringify(res.data.content)); // 1汉服男 2中山装男 3汉服女 4旗袍女 
                     setTimeout(()=>{                        
                         this.$router.push('/result');
                     }, 2000)
                   }
                }).catch(error=>{     
                    this.showToast(error.message);
                    this.hideToast();  
                })                         
            },
            change(e){               
                // var file = e.target.files[0];
                // console.log(file)
                // var reader = new FileReader();
                // var that = this;
                // reader.readAsDataURL(file);
                // reader.onload = function(e) {
                //     that.avatar = this.result
                // }
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
        top: 0.5rem;
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
        line-height: 0.9rem;
        position: absolute;
        left: 50%;
        bottom: 1.4rem;
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

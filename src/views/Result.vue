<template>
    <div class="content">
        <div class="logo"></div>
        <div class="top-cont">
			<div class="top-bg"></div>
			<div :class="cls" class="person" :style="{backgroundImage: `url(${img_path})`}" ></div>
			<div class="gold"></div>
			<div class="btm-des-wrap">
				<strong>{{ date ||  '除夕夜' }}</strong>
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
        <div class="btn">开始步步生财</div>
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
  computed:{
    cls(){
		let uploadData = localStorage.getItem('uploadData');
		if(uploadData){
			uploadData = JSON.parse(uploadData);
			let { pic_type, img_path } = uploadData;
			this.src = img_path;
			// 1汉服男 2中山装男 3汉服女 4旗袍女
			switch(pic_type){
				case  1:
				return 'man_hanfu'
				   break;
				case  2:
				return 'man_xifu'
				   break;
				case  3:
				return 'women_hanfu'
				   break;
				case  4:
				return 'women_qipao'
				   break;
			}
		}else{
			return ''
		}

	}
  },
  data() {
    return {
	  hasLatch: true,
	  show: false,
	  bless: '',
	  date: '',
    }
  },
  mounted(){
	  this.bless = localStorage.getItem('bless');
	  this.date =  localStorage.getItem('date');
	  this.img_path = localStorage.getItem('img_path')
  }
}
</script>

<style scoped lang="scss">
  html, body{
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }
	p{
		 margin: 0;
		padding: 0;
	}
    .content{
        position: relative;
        height: 100%;
        background: #832621;
        text-align: center;
    }
    .content .logo{
        width: 2.32rem;
        height: 0.4rem;
        position: absolute;
        right: 0.32rem;
        top: 0.3rem;
        background:url('../assets/images/img/LOGO.png') no-repeat center;
        background-size: contain;

    }
    .top-cont{
		position: absolute;
		left: 50%;
		top: 1rem;
		z-index: 4;
		margin: 0 0 0 -2.95rem;
        width: 5.9rem;
        height: 8.5rem;
		overflow: hidden;
		border-radius: 0.2rem;
		box-shadow: 0 0.1rem 1rem rgba(0,0,0,0.3);
    }

    .botao{
        width: 100%;
        height: 2.87rem;
        position: absolute;
        left: 0;
        bottom: 0rem;
        z-index: 3;
        background:url(../assets/images/img/step4-btmbg.png) no-repeat center;
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
	.top-cont strong{
		width: 6rem;
		display: block;
		font-size: 0.5rem;
		color: #690004;
		margin: 0.3rem 0 0;

	}
	.btm-des-wrap{
		position: absolute;
		width: 100%;
		height: 3.35rem;
		bottom: 0;
		background: #E6C18B;
	}
	.btm-des-wrap p{
		font-size: 0.24rem;
		color: #690004;
	}

	.des-wrap{
	    position: relative;
		max-width: 4.4rem;
		padding: 0 0.4rem;
		margin: 0 auto;
	}
	.des-wrap .bless{
	    font-size: 0.22rem;
		line-height: 0.5rem;
		color: #690004;
	}
	.des-wrap .icon1{
	    position: absolute;
	    left: -0.1rem;
	    top: 0;
	    width: 0.25rem;
	    height: 0.3rem;
	    border-top: 2px solid #690004;
	    border-left: 2px solid #690004;
	}
	.des-wrap .icon2{
	    position: absolute;
	    right: 0rem;
	    bottom: 0;
	    width: 0.25rem;
	    height: 0.3rem;
	    border-right: 2px solid #690004;
	    border-bottom: 2px solid #690004;
	}
	.btm-des-wrap .wechat-id{
		color: #fff;
		font-size: 0.3rem;
		margin: 0.2rem 0 0.15rem;
	}
	.btm-des-wrap .font26{
		font-size: 0.26rem;
	}
	.top-bg{
		height: 100%;
		background:url(../assets/images/img/cs-bg.jpg) no-repeat center top;
		background-size: contain;
	}
	.save{
		font-size: 0.24rem;
		color: #E6C18B;
		width:100%;
		position: absolute;
		top: 10.1rem;
	}
	.person{
		position: absolute;
		top: 0.9rem;
		right: -0.3rem;
		width: 3.2rem;
		height: 8.12rem;
		background-repeat: no-repeat;
		background-position: left top;
        background-size: contain;
	}
	.man_xifu{
		top: 0.9rem;
	}
	.man_hanfu{
		//top: 0.9rem;
	}
    .women_hanfu{
		top: 1.3rem;
	}
	.women_qipao{
		//top: 0.9rem;
	}

	.gold{
		position: absolute;
		top: 4.4rem;
		left: 45%;
		margin-left: -1.89rem;
		width: 3.78rem;
	    height: 1.85rem;
		background:url('../assets/images/img/step5-gold.png') no-repeat center top;
		background-size: contain;
	}

</style>

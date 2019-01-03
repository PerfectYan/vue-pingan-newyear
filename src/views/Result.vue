<template>
    <div class="content">
        <div class="logo"></div>
        <div class="top-cont">   
			<div class="top-bg"></div>
			<div class="person"></div>
			<div class="gold"></div>
			<div class="btm-des-wrap">
				<strong>除夕夜</strong>
				<p class="font26">健康行大运</p>
				<p class="wechat-id">微信ID：xxx</p>
				
				 <div class="des-wrap">
				    <p>新的一年 </p>
				    <p>平步青云,步步高升</p>
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
  data() {
    return {
      hasLatch: true
    }
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
        top: 11rem;
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
		max-width: 3.4rem;
		margin: 0 auto;
	}
	.des-wrap p{
	    font-size: 0.22rem;
	    line-height: 0.5rem;       
	}
	.des-wrap .icon1{
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 0.25rem;
	    height: 0.3rem;
	    border-top: 2px solid #690004;
	    border-left: 2px solid #690004;
	}
	.des-wrap .icon2{
	    position: absolute;
	    right: -0.1rem;
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
		background:url('../assets/images/img/step5-women.png') no-repeat center top;
		background-size: contain; 
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

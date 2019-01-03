<template>
  <div id="app">
    <keep-alive>
        <transition name="slide-fade" mode="out-in">
          <router-view/>
        </transition>
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family:  "Microsoft YaHei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(to bottom, #832621, #832621);
}
  /* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
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
        z-index: 100;
        background:url('./assets/images/img/LOGO.png') no-repeat center;
        background-size: contain; 

    }
</style>

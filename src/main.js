import '@/assets/style/reset.css' // 适配css
import '@/assets/js/reset' //flexible
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

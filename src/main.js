import '@/assets/style/reset.css' // 适配css
import '@/assets/js/reset' //flexible
import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/LArea'
import './assets/style/LArea.css'

import '../src/utils/exif';
import '../src/utils/processImg'


Vue.config.productionTip = false;
Vue.prototype.Axios = Axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

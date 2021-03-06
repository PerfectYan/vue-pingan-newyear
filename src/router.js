import Vue from 'vue'
import Router from 'vue-router'

import Loading from '@/views/Loading.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Select from '@/views/Select.vue'
import Greetings from '@/views/Greetings.vue'
import Preview from '@/views/Preview.vue'
import Result from '@/views/Result.vue'
import RedPacket from '@/views/RedPacket.vue'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            name: 'loading',
            component: Loading
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/select',
            name: 'select',
            component: Select
        },
        {
            path: '/greetings',
            name: 'greetings',
            component: Greetings
        },
        {
            path: '/preview',
            name: 'preview',
            component: Preview
        },
        {
            path: '/result',
            name: 'result',
            component: Result
        },
        {
            path: '/redPacket',
            name: 'redPacket',
            component: RedPacket
        }
    ]
})

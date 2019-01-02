import Vue from 'vue'
import Router from 'vue-router'

import Loading from '@/views/Loading.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Select from '@/views/Select.vue'
import Greetings from '@/views/Greetings.vue'
import Result from '@/views/Result.vue'

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
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
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
            path: '/result',
            name: 'result',
            component: Result
        },
    ]
})

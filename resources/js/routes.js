import Vue from 'vue';

import VueRouter from 'vue-router';

import Home from '@/js/components/Home';
import Register from '@/js/components/Register';
import Login from '@/js/components/Login';
import Dashboard from '@/js/components/Dashboard';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
    ]
});

export default router;
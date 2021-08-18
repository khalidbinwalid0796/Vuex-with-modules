import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/User/Home'
//let Home = require('../components/User/Home').default;

// User Component
import UserLogin from '../components/User/auth/UserLogin'
import UserRegister from '../components/User/auth/UserRegister'
import UserDashboard from '../components/User/UserDashboard'

const router = new VueRouter({
    mode: 'history',
    routes:[
        { path:'/', component: Home, name: 'Home'},

        // User Component with vue-router middleware
        { 
            path:'/user-login', component: UserLogin, name: 'UserLogin',
            beforeEnter: (to, from, next) => {
                const isAuthenticated = localStorage.getItem('userLoggedIn') ? true : false;
                if (to.name == 'UserLogin' && isAuthenticated) next({ name: 'UserDashboard' })
                else next(); //UserLogin
              }
        },
        { path:'/user-register', component: UserRegister, name: 'UserRegister'},

        { 
            path:'/user/user-dashboard', component: UserDashboard, name: 'UserDashboard',
            beforeEnter: (to, from, next) => {
                const isAuthenticated = localStorage.getItem('userLoggedIn') ? true : false;
                if (to.name !== 'UserLogin' && !isAuthenticated) next({ name: 'UserLogin' })
                else next()
              }
        },

    ]

  })

  export default router;
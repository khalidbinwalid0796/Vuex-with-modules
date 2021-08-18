import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AdminDashboard from '../components/Admin/AdminDashboard'
import AdminLogin from '../components/Admin/Auth/AdminLogin'


const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes:[

        { path:'/admin/dashboard', component: AdminDashboard , name: 'AdminDashboard'},
        { path:'/admin/login', component: AdminLogin , name: 'AdminLogin'},
    ]
  })
    
  //global middleware
  
    // router.beforeEach((to, from, next) => {
    //     let isAuthenticated = '';
    //     let adminDetail = localStorage.getItem('adminDetails') ? JSON.parse(localStorage.getItem('adminDetails')) : false;
    //     if(adminDetail){
    //         isAuthenticated = adminDetail.id && adminDetail.email ? true : false;
    //     }else{
    //         isAuthenticated = false;
    //     }
    //     if (to.name !== 'AdminLogin' && !isAuthenticated) next({ name: 'AdminLogin' })
    //     else if (to.name === 'AdminLogin' && isAuthenticated){
    //         next({ name: 'AdminDashboard' })
    //     } 
    //     else next()
    // })

  export default router;
require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue' //ai line na dile Vue.component is not a function error dekhai

Vue.component('admin-master', require('./components/Admin/AdminMaster.vue').default);

import router from './admin/routers'


const app = new Vue({
    el: '#admin',
    router
});

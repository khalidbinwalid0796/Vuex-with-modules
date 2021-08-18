/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue' //ai line na dile Vue.component is not a function error dekhai 

Vue.component('user-master', require('./components/User/UserMaster.vue').default);

import router from './user/routers'

//store support for vuex
import {store} from './common/store/store'

//Element UI install & support for design.-->bootstrap ar moto
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { locale })
//end

/*      
    toast message
    this.$message({
      message: 'Congrats, this is a success message.',
      type: 'success'
    });
*/

const app = new Vue({
    el: '#app',
    router,
    store
});

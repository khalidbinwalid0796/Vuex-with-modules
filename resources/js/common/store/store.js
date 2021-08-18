import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {user} from './modules/user'
import {admin} from './modules/admin'


export const store = new Vuex.Store({
    modules: {
     user : user,
     admin : admin,
    }
  })
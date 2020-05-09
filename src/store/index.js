import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import global from './module/global'
import login from './module/login'

Vue.use(Vuex)
const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'prod',
    getters,
    modules: {
        global,
        login
    }
})

export default store

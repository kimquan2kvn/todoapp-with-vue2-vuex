import Vue from 'vue'
import Vuex from 'vuex'

// import modules
import auth from './modules/auth'
import todos from './modules/todo'

Vue.use(Vuex)

const storeData = {
    modules: {
        auth,
        todos
    },

}

const store = new Vuex.Store(storeData)
export default store
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import user from './modules/user'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    user
  }
})

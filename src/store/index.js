import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  login: false,
  showLoginModal: false,
  userInfo: '',
  firebaseApp: ''
}

const mutations = {
  userLogin (state) {
    state.login = true
  },
  setUserInfo (state, info) {
    state.userInfo = info
  },
  setFirebase (state, app) {
    state.firebaseApp = app
  }
}

// const actions = {
//   login: ({ commit }) => commit('login'),
//   logout: ({ commit }) => commit('logout')
// }

const getters = {
  loggedIn: state => state.login,
  userInfo: state => state.userInfo,
  firebaseApp: state => state.firebaseApp
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})

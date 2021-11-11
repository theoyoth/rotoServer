export const state = () => ({
  setC: '',
})
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  getUserInfo(state) {
    return state.auth.user
  },
  isEdp(state) {
    return state.auth.user.level === 'edp'
  },
  isPa(state) {
    return state.auth.user.level === 'pa'
  },
  isSecurity(state) {
    return state.auth.user.level === 'security'
  },
  isadminTeknisi(state) {
    return state.auth.user.level === 'admin teknisi'
  },
  isTeknisilistrik(state) {
    return state.auth.user.level === 'teknisi listrik'
  },
  isTeknisiac(state) {
    return state.auth.user.level === 'teknisi ac'
  },
}
export const mutations = {
  printContext(state, ct) {
    state.setC = ct
  },
}
export const actions = {
  nuxtServerInit({ commit }, { req }, context) {
    commit('printContext', context)
  },
}

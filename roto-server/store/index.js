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
    return state.auth.user.role === 'EDP'
  },
  isPa(state) {
    return state.auth.user.role === 'PA'
  },
  isSecurity(state) {
    return state.auth.user.role === 'Security'
  },
  isadminTeknisi(state) {
    return state.auth.user.role === 'Admin teknisi'
  },
  isTeknisilistrik(state) {
    return state.auth.user.role === 'Teknisi listrik'
  },
  isTeknisiac(state) {
    return state.auth.user.role === 'Teknisi ac'
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

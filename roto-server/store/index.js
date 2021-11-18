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
    return state.auth.user.level === 'EDP'
  },
  isPa(state) {
    return state.auth.user.level === 'PA'
  },
  isSecurity(state) {
    return state.auth.user.level === 'Security'
  },
  isadminTeknisi(state) {
    return state.auth.user.level === 'Admin teknisi'
  },
  isTeknisilistrik(state) {
    return state.auth.user.level === 'Teknisi listrik'
  },
  isTeknisiac(state) {
    return state.auth.user.level === 'Teknisi ac'
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

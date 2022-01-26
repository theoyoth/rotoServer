export const state = () => ({
  alluserpa: [],
  allUsers: [],
})
export const mutations = {
  allpa(state, data) {
    state.alluserpa = data
  },
  allUsers(state, data) {
    state.allUsers = data
  },
}
export const actions = {
  async getallUserPa({ commit }, lokasi) {
    try {
      const resp = await this.$axios.get(`/users/pa/${lokasi}`)
      if (resp) {
        commit('allpa', resp.data)
      }
    } catch (err) {
      console.log(err)
    }
  },
  async getallUsers({ commit }) {
    try {
      const resp = await this.$axios.get('/users')
      if (resp) {
        commit('allUsers', resp.data)
      }
    } catch (err) {
      console.log(err)
    }
  },
}

export const state = () => ({
  alluserpa: [],
})
export const mutations = {
  allpa(state, data) {
    state.alluserpa = data
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
}

export const state = () => ({
  allmaintenancedata: [],
})
export const mutations = {
  allmaintenance(state, data) {
    state.allmaintenancedata = data
  },
}
export const actions = {
  async getallmaintenance({ commit }, { lokasi }) {
    try {
      const resp = await this.$axios.get(
        `/maintenance/security/alldata/${lokasi}`
      )
      commit('allmaintenance', resp.data)
    } catch (err) {
      console.log(err)
    }
  },
}

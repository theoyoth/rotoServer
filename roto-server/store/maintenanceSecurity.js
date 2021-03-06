export const state = () => ({
  hasilMaintenanceSecurity: [],
  allDataMaintenance: [],
})
export const mutations = {
  getSecurityMaintenance(state, data) {
    state.hasilMaintenanceSecurity = data
  },
  getAllData(state, da) {
    state.allDataMaintenance = da
  },
}
export const actions = {
  async getSecurity({ commit }, lokasi) {
    try {
      const resp = await this.$axios.get(`/maintenance/security/${lokasi}`)
      if (resp.data) {
        resp.data.forEach((d) => {
          commit('getSecurityMaintenance', d)
        })
      } else {
        console.log('no data maintenance')
      }
    } catch (err) {
      console.log(err)
    }
  },
  async getAllMaintenanceSecurity({ commit }, lokasi) {
    try {
      const resp = await this.$axios.get(
        `/maintenance/security/alldata/${lokasi}`
      )
      if (resp.data) {
        commit('getAllData', resp.data)
      } else {
        console.log('no data maintenance')
      }
    } catch (err) {
      console.log(err)
    }
  },
}

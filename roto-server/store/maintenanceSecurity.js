import axios from 'axios'

export const state = () => ({
  hasilMaintenanceSecurity: [],
})
export const mutations = {
  getSecurityMaintenance(state, data) {
    state.hasilMaintenanceSecurity = data
  },
}
export const actions = {
  async getSecurity({ commit }, { lokasi }) {
    try {
      const resp = await axios.get(
        `http://localhost:3000/server/maintenance/security/${lokasi}`
      )
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
}

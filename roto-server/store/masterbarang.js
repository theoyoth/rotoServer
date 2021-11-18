import axios from 'axios'

export const state = () => ({
  servers: [],
  cariserver: '',
})

// export const getters = {
//   isAuthenticated(state) {
//     return state.auth.loggedIn
//   },

//   getUserInfo(state) {
//     return state.auth.user
//   },
// }

export const mutations = {
  serversData(state, data) {
    state.servers = data
  },
  datacari(state, data) {
    state.cariserver = data
  },
  errormsg(state, data) {
    state.errormsg = data
  },
}
export const actions = {
  async getServersData({ commit }, { lokasiserver, idlogin }) {
    const response = await axios.get(
      `http://localhost:3000/server/masterserver/${lokasiserver}/${idlogin}`
    )
    commit('serversData', response.data)
  },
  async caribarangserver({ commit }, { lokasi, cari }) {
    const res = await axios.get(
      `http://localhost:3000/server/cariserver/${cari}/${lokasi}`
    )
    commit('datacari', res.data)
  },
  async deleteData({ commit }, { lokasi, id }) {
    const response = await axios.post(
      `http://localhost:3000/server/master/server/delete/${lokasi}/${id}`
    )
  },
}

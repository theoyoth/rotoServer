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
}
export const actions = {
  async getServersData({ commit }, lokasiserver) {
    const response = await axios.get(
      `http://localhost:3000/server/masterserver?lokasi=${lokasiserver}`
    )
    commit('serversData', response.data)
  },
  async caribarangserver({ commit }, cari) {
    const res = await axios.get(
      `http://localhost:3000/server/cariserver?cari=${cari}`
    )
    commit('datacari', res.data)
  },
}

import axios from 'axios'

export const state = () => ({
  lokasi: '',
})
export const mutations = {
  getLokasi(state, lok) {
    state.lokasi = lok
  },
}
export const actions = {
  async getLokasi({ commit }) {
    const lok = await axios.get('server/lokasi')
    commit('getLokasi', lok.data.lokasi)
  },
}

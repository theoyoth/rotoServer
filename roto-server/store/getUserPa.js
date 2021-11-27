import axios from 'axios'

export const state = () => ({
  alluserpa: [],
})
export const mutations = {
  allpa(state, data) {
    state.alluserpa = data
  },
}
export const actions = {
  async getallUserPa({ commit }) {
    try {
      const resp = await axios.get('http://localhost:3000/server/users/pa')
      if (resp) {
        commit('allpa', resp.data)
      }
    } catch (err) {
      console.log(err)
    }
  },
}

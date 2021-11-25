import axios from 'axios'

export const state = () => ({
  allfiles: '',
})
export const mutations = {
  getallfiless(state, data) {
    state.allfiles = data
  },
}
export const actions = {
  async getallfilesinuploads({ commit }) {
    try {
      const resp = await axios.get('http://localhost:3000/server/document/list')
      if (resp) {
        commit('getallfiless', resp.data)
      }
    } catch (err) {
      console.log(err)
    }
  },
}

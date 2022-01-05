import moment from 'moment'

export const state = () => ({
  datachartlabel: '',
  datachartsuhu: '',
})
export const mutations = {
  chartlabel(state, data) {
    state.datachartlabel = data
  },
  chartsuhu(state, data) {
    state.datachartsuhu = data
  },
}
export const actions = {
  async getDataSuhu({ commit }, { lokasi }) {
    const resp = await this.$axios.get(
      `/maintenance/security/alldata/${lokasi}`
    )
    if (resp.data) {
      const daftarLabel = resp.data.map((list) =>
        moment(list.tanggal).format('YYYY-MM-DD')
      )
      const daftarSuhu = resp.data.map((list) => list.suhu)
      commit('chartlabel', daftarLabel)
      commit('chartsuhu', daftarSuhu)
    }
  },
}

import axios from 'axios'

export const state = () => ({
  inputData: '',
  theerrors: '',
})

export const mutations = {
  getErrors(state, err) {
    state.errors = err
  },
  dataInput(state, getdata) {
    state.inputData = getdata
  },
}
export const actions = {
  async postInputServer({ commit }, inputServer) {
    const res = await axios.post(
      'http://localhost:3000/server/master/inputserver',
      {
        produk: inputServer.produk,
        merek: inputServer.merek,
        model: inputServer.model,
        processor: inputServer.processor,
        memori: inputServer.memori,
        internalStorage: inputServer.internalStorage,
        networkController: inputServer.networkController,
        storage: inputServer.storage,
        sumberDayaListrik: inputServer.sumberDayaListrik,
        tahun: inputServer.tahun,
        garansi: inputServer.garansi,
      }
    )
    if (res.data.errors) {
      commit('getErrors', res.data.errors)
      this.$router.push('/master/input/inputServer')
    } else {
      commit('dataInput', res.data)
      this.$router.push('/master/server')
    }
  },
}

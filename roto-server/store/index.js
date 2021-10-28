// export const getters = {
// isAuthenticated(state) {
//   return state.auth.loggedIn
// },
      
// getUserInfo(state) {
//    return state.auth.user
//   }
// }

export const state = ()=> ({
  isLogin : false
})
export const mutations = {
  SET_LOGIN(state, payload) {
    state.isLogin = payload
  }
}
// export const actions = {
//   nuxtServerInit({commit},context){
//     commit('setisauth',context.app.$auth.$state.LoggedIn)
//   }
// }

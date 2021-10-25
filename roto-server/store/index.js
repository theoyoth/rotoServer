export const getters = {
isAuthenticated(state) {
  return state.auth.loggedIn
},
      
getUserInfo(state) {
   return state.auth.user
  }
}

// export const state = ()=> ({
//   isAuth : false
// })
// export const mutations = {
//   setisauth(state, payload) {
//     state.isAuth = payload
//   }
// }
// export const actions = {
//   nuxtServerInit({commit},context){
//     commit('setisauth',context.app.$auth.$state.LoggedIn)
//   }
// }

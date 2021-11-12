export default function (context) {
  // const cook = context
  // console.log(context.$auth.$state.user.token)
  if (!context.$auth.$state.user.token) {
    return context.redirect('/')
  }
}

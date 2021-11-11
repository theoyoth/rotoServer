export default function ({ store, route }) {
  // If the user is not authenticated
  if (store.state.auth.loggedIn) {
    return route.path('/homepage')
  }
}

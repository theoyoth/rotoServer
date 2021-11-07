export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  if (!store.state.auth.loggedIn) {
    return redirect('/')
  } else {
    return redirect(route.path)
  }
}

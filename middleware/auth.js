export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.auth.loggedIn === false) {
    // console.log(store);
    return redirect("/login");
  }
}

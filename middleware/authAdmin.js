export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.auth.strategy !== "admin" || !store.state.auth.loggedIn) {
    // console.log(store);
    return redirect("/loginAdmin");
  }
}

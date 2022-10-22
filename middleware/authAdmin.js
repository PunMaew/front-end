export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.auth.loggedInAdmin === false) {
    // console.log(store);
    return redirect("/loginAdmin");
  }
}

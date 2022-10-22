export const state = () => ({
  auth: {
    loggedIn: false,
  },
  authAdmin: {
    loggedInAdmin: false,
  },
  user: {},
  currentMenu: "dashboard",
});

export const getters = {
  // getUserRegister: state => state.register
  // getPlayground: state => state.playground
};

export const actions = {
  // setLoading(context) {
  // context.commit("SET_LOADING", true);
  // }
};

export const mutations = {
  SET_LOGIN(state) {
    state.auth.loggedIn = true;
  },
  SET_USER(state, data) {
    state.user = data;
  },
  SET_MENU(state, data) {
    state.currentMenu = data;
  },
  SET_LOGIN_ADMIN(state) {
    state.auth.loggedIn = true;
  },
};

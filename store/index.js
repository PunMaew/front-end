export const state = () => ({
  auth: {
    loggedIn: false,
  },
  user: {},
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
};

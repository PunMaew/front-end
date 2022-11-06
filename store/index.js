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
  SET_FAVOR(state, data) {
    if (state.auth.user.favor.some((fav) => data === fav.itemId)) {
      let favIndex;
      for (let index = 0; index < state.auth.user.favor.length; index++) {
        if (state.auth.user.favor[index].itemId === data) {
          favIndex = index;
          break;
        }
      }
      console.log(favIndex);
      state.auth.user.favor.splice(favIndex, 1);
    } else {
      state.auth.user.favor.push({
        id: data,
        itemId: data,
      });
    }
  },
  SET_IDEAL(state, data) {
    state.auth.user.idealCat = data;
  },
};

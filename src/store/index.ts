import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
var state = {
  isMainNavShown_2: false,
  // 商品
  carList: [],
  isLoggedin: false,
  localCookie: "5dbcf358dd570f31ac06b2df"
};
var mutations = {
  mainNavShow_2(state: any, bool: boolean) {
    if (bool == undefined) {
      state.isMainNavShown_2 = !state.isMainNavShown_2;
    } else {
      state.isMainNavShown_2 = bool;
    }
  },
  enLogIn(state: any, bool: Boolean) {
    state.isLoggedin = bool;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {}
});

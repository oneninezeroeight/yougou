import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
var state = {
  isMainNavShown_2: false,
  // 商品
  carList: [],
  isLoggedin: false
  }
var mutations = {
  mainNavShow_2(state: any, bool: boolean) {
    state.isMainNavShown_2 = bool || !state.isMainNavShown_2;
  },
  enLogIn(state:any, bool:Boolean) {
    state.isLoggedin = bool
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {}
});

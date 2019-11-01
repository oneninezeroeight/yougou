import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
var state = {
  isMainNavShown_2: false,
  // 商品
  carList:[]
  }
var mutations = {
  mainNavShow_2(state: any, bool: boolean) {
    state.isMainNavShown_2 = bool || !state.isMainNavShown_2;
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {}
});

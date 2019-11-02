import Vue from "vue";
import "weui";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import storeX from 'store'; 
import "./assets/index.css";
import "./assets/Floor.css";
import "./assets/ygIndes.css";
import "./assets/brandshops.css"
import "./assets/h5.css";
import "./assets/productDetail-two.css";
import "./assets/login.css";
import "./assets/shoppingcart.css"
import "./assets/myIndex.css"
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  
  
  let isLoggedIn = storeX.get('user_session') != undefined && storeX.get('user_session').length > 0;
  store.commit('enLogIn', isLoggedIn);
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

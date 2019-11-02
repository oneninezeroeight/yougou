import Vue from "vue";
import VueRouter, { NavigationGuard, Route } from "vue-router";
import Contact from "../views/contact/contact.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "contact",
    component: Contact
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/search/search.vue")
  },
  {
    path: "/discover",
    name: "discover",
    component: () => import("../views/discover/discover.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart/cart.vue")
  },
  {
    path: "/product/:productId",
    name: "product",
    component: () => import("../views/product/product.vue")
  },
  {
    path: "/brand/:brandId/:page",
    name: "brand",
    component: () => import("../views/brand/brand.vue")
  },
  {
    path: "/type",
    name: "type",
    component: () => import("../views/type/type.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/xiaoxi",
    name: "xiaoxi",
    component: () => import("../views/xiaoxi/xiaoxi.vue")
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/mine/mine.vue")
  },
  {
    path: "/integrate",
    name: "integrate",
    component: () => import("../views/integrate/integrate.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;

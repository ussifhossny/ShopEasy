import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import ProductsCategories from "../views/ProductsCategories.vue"
import ProductsList from "../views/ProductsList.vue"

import Login from "../views/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductsCategories
    },
    {
      path: "/ProductsList",
      name: "ProductsList",
      component: ProductsList
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
  ]
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Albums from "../views/Albums.vue";
import Form from "../views/Form.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/albums",
      name: "Albums",
      component: Albums,
    },
    {
      path: "/form",
      name: "Form",
      component: Form,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
    },
  ],
});

export default router;

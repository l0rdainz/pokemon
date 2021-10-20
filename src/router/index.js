import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import { authGuard } from "../auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/pokemongenerator",
      name: "Random Pokemon",

      component: () =>
        import(/* webpackChunkName: "about" */ "../views/pokemongenerator.vue"),
        beforeEnter: authGuard
    },
    {
      path: "/pokemonsearch",
      name: "Pokemon Search",
      component: () =>
        import(/* webpackChunkName: "about" */ "../components/Pokemon.vue"),
        beforeEnter: authGuard
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    }


  ]
});

export default router;

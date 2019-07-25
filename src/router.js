import Vue from "vue";
import Router from "vue-router";
import Resume from "./views/Resume.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: About
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume
    },
    {
      path: "/cv",
      name: "cv",
      component: Resume
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

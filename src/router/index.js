import Vue from 'vue'
import VueRouter from "vue-router";
import Notes from "../views/notes/notes.vue"
import Home from "../views/home/home.vue"
import Games from "../views/games/games.vue"
import Apps from "../views/apps/apps.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/notes",
    name: "notes",
    component: Notes
  }
  ,
  {
    path: "/games",
    name: "games",
    component: Games
  },
  {
    path: "/apps",
    name: "apps",
    component: Apps
  }
];

const router = new VueRouter({
  routes,
});

export default router


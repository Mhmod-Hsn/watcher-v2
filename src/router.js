import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("./views/Home"),
    meta:{
      name: 'Home'
    }

  },
  {
    path: "/recommended",
    name: "Recommended",
    component: () =>
      import("./views/Recommended"),
  },
  {
    path: "/top-watched",
    name: "TopWatched",
    component: () =>
      import("./views/TopWatched"),
    meta:{
      name: 'Top Watched'
    }
  },
  {
    path: "/old-days",
    name: "OldDays",
    component: () =>
      import("./views/OldDays"),
    meta:{
      name: 'Old Days'
    }
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import("./views/Home.vue"),
  },
  {
    path: "/:id",
    name: "SingleVideo",
    component: () =>
      import("./views/SingleVideo.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_NAME} - ${to.meta.name?to.meta.name:to.name}`
  next()
})
export default router

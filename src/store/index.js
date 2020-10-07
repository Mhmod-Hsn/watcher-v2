import Vue from "vue"
import Vuex from "vuex"

// modules
import moduleLayout from "./modules/layout/moduleLayout"
import moduleVideo from "./modules/video/moduleVideo"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    layout: moduleLayout,
    video: moduleVideo,
  },
})

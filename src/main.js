import Vue from "vue"
import App from "./App.vue"
import router from "./router.js"
import store from "./store"
import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)

// Import FontAwesome
import "./assets/js/fontawesome"

import titleMixin from './mixins/titleMixin'
Vue.mixin(titleMixin);


/*
import VuePlyr from "vue-plyr/dist/vue-plyr";
Vue.use(VuePlyr['default']);

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false },
  },
  emit: ["ended"],
})
*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")

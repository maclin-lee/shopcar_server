import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import "./assets/css/font.css"
import "./assets/css/normal.css"
import apis from "./net/index"
import {Toast} from "components/toast/index"
import {loading} from "components/loading/index"
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)
Vue.config.productionTip = false
Vue.prototype.$apis=apis
Vue.prototype.$toast=Toast
Vue.prototype.$loading=loading
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import smoothScroll from 'vue-smoothscroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'es6-promise/auto'
import store from './store'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.use(smoothScroll)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
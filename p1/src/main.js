// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUi from 'element-ui'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import Qs from 'qs'

import Helloword from './components/HelloWorld'
import Login from './components/login'

Vue.prototype.qs = Qs
Vue.prototype.$ajax = Axios
Vue.config.productionTip = false
Axios.defaults.withCredentials = true
Vue.use(ElementUi)
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-fromurlencodeed'

/* eslint-disable no-new */




new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
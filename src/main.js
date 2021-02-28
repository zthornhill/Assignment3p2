// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSession from 'vue-session'
import '@mdi/font/css/materialdesignicons.css'
 
Vue.use(Vuetify, {
  icons: {
    iconfont: 'mdi'
  }
})
Vue.use(VueSession)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify : new Vuetify(),
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/adminlte-master/plugins/fontawesome-free/css/all.min.css'
import './assets/adminlte-master/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
import './assets/adminlte-master/css/adminlte.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //render: h => h(App)
  components: { App },
  template: '<App/>'
})

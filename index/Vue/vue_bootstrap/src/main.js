import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入jQuery、bootstrap
import $ from 'jquery'
import 'bootstrap'
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 全局注册 $
Vue.prototype.$ = $


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

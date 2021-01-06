import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入Axios并全局配置，设置端口和 node 服务端口一样3000
import Axios from 'axios'
Vue.prototype.HOST = 'http://localhost:3000'
Vue.prototype.$axios  = Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

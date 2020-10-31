// 配置路由信息
import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import about from '../components/about'
// 1.通过Vue.use(插件)，安装插件
Vue.use(Router)

// 2.创建vueRouter对象	
export default new Router({
  routes: [
    {
			path:'/home',
			component: home,
		},
		{
			path:'/about',
			component: about,
		}
  ]
})

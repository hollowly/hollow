//引入路由和路由方式
import { createRouter, createWebHistory } from "vue-router";


// 1. 引入组件，也就是.vue文件
const Home = () => import("@/views/Home");
const Add = () => import("@/views/Add");

// 2.配置路由
// path就是地址，name是名称，component组件，
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "add",
    component: Add,
  },
];

// 3.这里照着写就是了，就是一些配置，
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 最后导出
export default router;

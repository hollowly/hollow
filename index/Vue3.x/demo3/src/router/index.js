import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/Home");
const Add = () => import("@/views/Add");
const quict = () => import("@/components/quict");
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
  {
    path: "/quict",
    name: "quict",
    component: quict,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

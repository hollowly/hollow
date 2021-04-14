import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/Home");
const Add = () => import("@/views/Add");
const quict = () => import("@/components/quict");
const watcheffect = () => import("@/views/watchEffect");
const watch = () => import("@/views/watch");
const shallowReactive = () => import("@/views/shallowReactive");
const toRaw = () => import("@/views/toRaw");
const markRaw = () => import("@/views/markRaw");
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
  {
    path: "/watcheffect",
    name: "watcheffect",
    component: watcheffect,
  },
  {
    path: "/watch",
    name: "watch",
    component: watch,
  },
  {
    path: "/shallowReactive",
    name: "api",
    component: shallowReactive,
  },
  {
    path: "/toRaw",
    name: "toRaw",
    component: toRaw,
  },
  {
    path: "/markRaw",
    name: "markRaw",
    component: markRaw,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

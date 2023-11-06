import { createRouter, createWebHistory } from "vue-router";

import Home from "/src/components/pages/Home.vue";
import Auth from "/src/components/pages/Auth.vue";
import SuperReminder from "/src/components/pages/SuperReminder.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
  },
  {
    path: "/super_reminder",
    name: "superReminder",
    component: SuperReminder,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
export default router;

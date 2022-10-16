import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/pages/LandingPage.vue";
import RoomPage from "@/pages/RoomPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LandingPage,
    },
    { path: "/rooms/:key", component: RoomPage },
  ],
});

export default router;

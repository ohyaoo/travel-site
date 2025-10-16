import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomePage from "@/views/HomePage.vue";
import BookingPage from "@/views/BookingPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: HomePage },
  { path: "/booking", name: "booking", component: BookingPage },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

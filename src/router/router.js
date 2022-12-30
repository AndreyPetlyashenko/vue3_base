import main from "@/pages/main.vue";
import about from '@/pages/about.vue'
import userPage from '@/pages/postPage.vue'
import post_details from '@/pages/post_details.vue'
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: main },
  { path: "/posts", component: userPage },
  { path: "/about", component: about },
  { path: "/posts/:id", component: post_details }
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes
});
export default router;

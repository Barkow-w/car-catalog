import { createRouter, createWebHistory } from 'vue-router'
import CarsView from "@/views/CarsView.vue";
import CarDetailView from "@/views/CarDetailView.vue";
import CarPostView from "@/views/CarPostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Cars',
      component: CarsView
    },
    {
      path: '/car/:id',
      name: 'CarDetail',
      component: CarDetailView
    },
    {
      path: '/post/:id',
      name: 'CarPost',
      component: CarPostView
    }
  ]
})

export default router
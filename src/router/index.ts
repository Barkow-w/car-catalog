import { createRouter, createWebHistory } from 'vue-router'
import CarsView from "@/views/CarsView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cars',
      name: 'cars',
      component: CarsView
    }
  ]
})


import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AmbilAntrianView from '../views/AmbilAntrianView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ambil-antrian',
      name: 'ambil-antrian',
      component: AmbilAntrianView
    },
  ]
})

export default router

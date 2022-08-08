import { createRouter, createWebHistory } from 'vue-router'
import Modelo from '../views/Modelo.vue'
import Home from '../views/Home.vue'
import Canal from '../views/Canal.vue'
import MalaDireta from '../views/MalaDireta.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Modelo',
      name: 'Modelo',
      component: Modelo
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Canal',
      name: 'Canal',
      component: Canal
    },
    {
      path: '/MalaDireta',
      name: 'MalaDireta',
      component: MalaDireta
    }
  ]
})

export default router;

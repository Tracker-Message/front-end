import { createRouter, createWebHistory } from 'vue-router'
import Modelo from '../views/Modelo.vue'
import Home from '../views/Home.vue'
import Canal from '../views/Canal.vue'
import MalaDireta from '../views/MalaDireta.vue'
import Menu from '../views/Menu.vue'
//conteúdo principal
import MyModelos from '../views/MyModelos.vue'

//testes
import MyTable from '../views/MyCanais.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Modelo',
      name: 'Modelo',
      component: Modelo
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
    },
   {
      path: '/MyModelos',
      name: 'MyModelos',
      component: MyModelos
    },
    {
      path: '/MyCanais',
      name: 'MyCanais',
      component: MyTable
    },
  {
  path: '/Menu',
  name: 'Menu',
  component: Menu
  }
  ]
})

export default router;

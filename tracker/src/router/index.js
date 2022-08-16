import { createRouter, createWebHistory } from 'vue-router'
import Modelo from '../views/Modelo.vue'
import Home from '../views/Home.vue'
import Canal from '../views/Canal.vue'
import Status from '../views/Status.vue'

import Unidade from '../views/Unidade.vue'
import MalaDireta from '../views/MalaDireta.vue'
import Menu from '../views/Menu.vue'
//conteúdo principal
import MyModelos from '../views/MyModelos.vue'
import MyMala from '../views/MyMala.vue'
//testes
import MyCanais from '../views/MyCanais.vue'
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
      path: '/Unidade',
      name: 'Unidade',
      component: Unidade
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
      component: MyCanais
    },
    {
      path: '/Status',
      name: 'Status',
      component: Status
    },
    {
      path: '/MyMala',
      name: 'MyMala',
      component: MyMala
    },
  {
  path: '/Menu',
  name: 'Menu',
  component: Menu
  }
  ]
})

export default router;

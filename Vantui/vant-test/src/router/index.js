import { createRouter, createWebHistory } from 'vue-router'

import  Home from "@/views/Home/home.vue"
import  Categroy from "@/views/Categroy/Categroy.vue"
import  Search from "@/views/Search/Search.vue"
import  Mine  from  "@/views/Mine/Mine.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      redirect:"/home"
    },

    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/categroy',
      name: 'categroy',
      component: Categroy
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Search
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
  ]
})

export default router

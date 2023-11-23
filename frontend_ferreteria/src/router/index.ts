import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores';
import { getTokenFromLocalStorage } from '@/helpers';
import LoginView from "@/views/LoginView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    
    {
      path: "/login",
      name: "login",
      component: LoginView
    },



    {
      path: '/productovista',
      name: 'productovista',
      component: () => import('../views/ProductovistaView.vue')
    },

    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    },

    {
      path: '/detalle',
      name: 'detalle',
      component: () => import('../views/DetallesView.vue')
    },

    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductoView.vue'),
      children: [
        { path: '', component: () => import('../components/producto/ProductoList.vue') },
        { path: 'crear', component: () => import('../components/producto/ProductoCreate.vue') },
        { path: 'editar/:id', component: () => import('../components/producto/ProductoEdit.vue') }
      ]
    },



    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }



  ]
})



export default router

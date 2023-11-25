import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
      path: '/categorias',
      name: 'categorias',
      component: () => import('../views/CategoriaView.vue'),
      children: [
        { path: '', component: () => import('../components/categoria/CategoriaList.vue') },
        { path: 'crear', component: () => import('../components/categoria/CategoriaCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/categoria/CategoriaEdit.vue')
        }
      ]
    },
    {
      path: '/unidades',
      name: 'unidades',
      component: () => import('../views/UnidadView.vue'),
      children: [
        { path: '', component: () => import('../components/unidad/UnidadList.vue') },
        { path: 'crear', component: () => import('../components/unidad/UnidadCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/unidad/UnidadEdit.vue')
        }
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

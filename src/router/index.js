import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: HomeView
  },
  {
    path: '/catalogo',
    name: 'Catálogo',
    component: () => import('@/views/CatalogoView.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import('@/views/ServiciosView.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('@/views/ContactoView.vue')
  },
  {
    path: '/arreglo/:id',
    name: 'DetalleArreglo',
    component: () => import('@/views/DetalleArregloView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

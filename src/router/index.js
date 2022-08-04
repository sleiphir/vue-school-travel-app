import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: "Home", component: () => import('@/views/Home.vue') },
  { path: '/destination/:id/:slug', name: 'destination.show', component: () => import('@/views/DestinationShow.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
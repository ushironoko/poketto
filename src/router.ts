import { ComponentPublicInstance } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Index from '~/views/index.tsx'

const routerHistory = createWebHistory()

export const route = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/',
      component: Index as ComponentPublicInstance<any>,
    },
  ],
})

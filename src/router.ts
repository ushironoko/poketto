import { createRouter, createWebHistory } from 'vue-router'
import { Index } from '~/views/index.tsx'

export const routerHistory = createWebHistory()

export const route = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/',
      // 型が怪しいので一旦潰す
      component: Index as any,
    },
  ],
})

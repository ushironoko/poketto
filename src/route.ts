import Router from 'vue-router'
import Index from '~/views/index.tsx'

const routes = [
  {
    path: '/',
    component: Index
  },
]

export const route = new Router({
  routes
})

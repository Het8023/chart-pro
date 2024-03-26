import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/screen'
    },
    {
      path: '/screen',
      name: 'screen',
      component: () => import('../views/screen/index.vue')
    }
  ]
})

export default router

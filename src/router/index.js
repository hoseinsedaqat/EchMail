import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'InboxView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Inbox/InboxView.vue')
  },
  {
    path: '/calendar',
    name: 'CalendarView',
    component: () => import('@/views/Calendar/CalendarView.vue')
  },
  {
    path: '/message/:id',
    name: 'MessageView',
    component: () => import('@/views/Message/MessageView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

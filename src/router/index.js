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
  {
    path: '/starred',
    name: 'StarredView',
    component: () => import('@/views/Starred/StarredView.vue')
  },
  {
    path: '/sent',
    name: 'SentView',
    component: () => import('@/views/Sent/SentView.vue')
  },
  {
    path: '/contacts',
    name: 'ContactsView',
    component: () => import('@/views/Contacts/ContactsView.vue')
  },
  {
    path: '/contact/create',
    name: 'ContactCreateView',
    component: () => import('@/views/Contacts/ContactsCreate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

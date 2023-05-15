import { createRouter, createWebHistory } from 'vue-router';
import activityRouter from '@/utils/checkRouteWidth';

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
    // ? it's mean optional path
    path: '/message/:path?/:id',
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
  },
  {
    path: '/keep',
    name: 'KeepView',
    component: () => import('@/views/Keeps/KeepView.vue')
  },
  {
    path: '/keep/create',
    name: 'KeepCreateView',
    component: () => import('@/views/Keeps/KeepCreate.vue')
  },
  {
    path: '/compose/create',
    name: 'ComposeView',
    beforeEnter: activityRouter,
    component: () => import('@/views/Compose/ComposeCreate.vue')
  },
  {
    path: '/user/setting',
    name: 'SetingView',
    beforeEnter: activityRouter,
    component: () => import('@/views/Setting/SettingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
  routes
})

export default router

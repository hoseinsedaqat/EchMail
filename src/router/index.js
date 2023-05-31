import { createRouter, createWebHistory } from 'vue-router';

import activityRouter from '@/utils/checkRouteWidth';

export const routes = [
  {
    path: '/',
    name: 'InboxView',
    component: async () => await import('@/views/Inbox/InboxView.vue')
  },
  {
    path: '/calendar',
    name: 'CalendarView',
    component: async () => await import('@/views/Calendar/CalendarView.vue')
  },
  {
    // ? it's mean optional path
    path: '/message/:path?/:id',
    name: 'MessageView',
    component: async () => await import('@/views/Message/MessageView.vue')
  },
  {
    path: '/starred',
    name: 'StarredView',
    component: async () => await import('@/views/Starred/StarredView.vue')
  },
  {
    path: '/sent',
    name: 'SentView',
    component: async () => await import('@/views/Sent/SentView.vue')
  },
  {
    path: '/contacts',
    name: 'ContactsView',
    component: async () => await import('@/views/Contacts/ContactsView.vue')
  },
  {
    path: '/contact/create',
    name: 'ContactCreateView',
    component: async () => await import('@/views/Contacts/ContactsCreate.vue')
  },
  {
    path: '/keep',
    name: 'KeepView',
    component: async () => await import('@/views/Keeps/KeepView.vue')
  },
  {
    path: '/keep/create',
    name: 'KeepCreateView',
    component: async () => await import('@/views/Keeps/KeepCreate.vue')
  },
  {
    path: '/compose/create',
    name: 'ComposeView',
    beforeEnter: activityRouter,
    component: async () => await import('@/views/Compose/ComposeCreate.vue')
  },
  {
    path: '/user/setting',
    name: 'SetingView',
    beforeEnter: activityRouter,
    component: async () => await import('@/views/Setting/SettingView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorView',
    component: async () => await import('@/views/Error/ErrorView.vue')
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

export default router;

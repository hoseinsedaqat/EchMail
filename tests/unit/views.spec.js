import { mount } from '@vue/test-utils';

import { createRouter, createWebHistory } from 'vue-router';

import { setActivePinia, createPinia } from 'pinia';

import App from '../../src/App.vue';

import { routes } from "@/router";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})


beforeEach(() => {
  // creates a fresh pinia and make it active so it's automatically picked
  // up by any useStore() call without having to pass it to it:
  // `useStore(pinia)`
  setActivePinia(createPinia())
})

test('routing', async () => {
  router.push('/')

  // After this line, router is ready
  await router.isReady()

  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })
  expect(wrapper.html()).toContain('Compose')
})

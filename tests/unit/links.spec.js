import { mount } from '@vue/test-utils';

import { createRouter, createWebHistory } from 'vue-router';

import { routes } from "@/router";

import { setActivePinia, createPinia } from 'pinia';

import Left_Title from '@/exports/Left_Title.vue'

let router;

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })
  router.push('/');
  await router.isReady();
  setActivePinia(createPinia());
});

test('links', async () => {
    const wrapper = mount(Left_Title, {
      global: {
        plugins: [router],
      }
    })
  
    const push = jest.spyOn(router, 'push');
    await wrapper.find('a').trigger('click');
  
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith('/');
  })
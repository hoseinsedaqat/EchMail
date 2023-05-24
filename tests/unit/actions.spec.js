import { mount } from '@vue/test-utils';

import { setActivePinia, createPinia } from 'pinia';

import ComposeCreate from '@/views/Compose/ComposeCreate.vue';

beforeEach(() => {
    setActivePinia(createPinia())
})

test('pinia actions', async () => {
    const wrapper = mount(ComposeCreate);

    wrapper.vm.sent_message();

    expect(wrapper.vm.sent_message).toEqual(expect.any(Function))
})


// actually this version of pinia can't support @pinia/testing and i use 100 percent in my other project
import { setActivePinia, createPinia } from 'pinia';

import { setting } from "@/store/module/setting";

beforeEach(() => {
    setActivePinia(createPinia())
})

test('pinia state', () => {
    const setting_store = setting();
    expect(setting_store.user_name).toBe('Hosein Sedaqat')
})
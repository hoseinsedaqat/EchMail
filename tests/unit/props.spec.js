import { mount } from "@vue/test-utils";

import { setActivePinia, createPinia } from 'pinia';

import ListModel from '@/components/model/ListModel.vue';

import moment from 'moment/moment';

beforeEach(() => {
    setActivePinia(createPinia())
})

test('props', async () => {
    const wrapper = mount(ListModel, {
        props: {
            large_id: 'component_lg',
            data: [{
                id: 'd0b0dc8e-f197-4891-be96-3fc98bc38cd4',
                to: 'hosein@gmail.com',
                subject: 'this is important message',
                message: `the most personal it's most creative`,
                time: moment().format('MMMM D h:mm a'),
                check: false,
                starred: false,
                view: false,
            }],
            small_id: 'component_sm',
            links: '/message/inbox/',
            add_sttared: jest.fn(),
            is_sttared: false,
        }
    });

    expect(wrapper.props(['large_id'])).toBe('component_lg');

    expect(wrapper.props(['data'])).toStrictEqual([{
        id: 'd0b0dc8e-f197-4891-be96-3fc98bc38cd4',
        to: 'hosein@gmail.com',
        subject: 'this is important message',
        message: `the most personal it's most creative`,
        time: moment().format('MMMM D h:mm a'),
        check: false,
        starred: false,
        view: false,
    }]);

    expect(wrapper.props(['small_id'])).toBe('component_sm');

    expect(wrapper.props(['links'])).toBe('/message/inbox/');

    expect(wrapper.props(['add_sttared'])).toEqual(expect.any(Function));
    
    expect(wrapper.props(['is_sttared'])).toBe(false);
})
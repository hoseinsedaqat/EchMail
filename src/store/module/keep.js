import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment/moment';
import router from '@/router';


export const keep = defineStore('keep', {
    state: () => ({
        note: '',
        keeps: [],
    }),
    getters: {
        get_keeps_length: (state) => state.keeps.length,
    },
    actions: {
        add_keeps(note) {
            this.keeps.push({
                id: uuidv4(),
                time: moment().format('MMMM D h:mm a'),
                note
            })
            router.push('/keep')
        }
    }
})
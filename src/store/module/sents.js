import { defineStore } from 'pinia';
import router from '@/router';
import moment from 'moment/moment';
import { v4 as uuidv4 } from 'uuid';


export const sents = defineStore('sents', {
    state: () => ({
        sents: [],
        to: '',
        subject: '',
        message: '',
        msg_box: false,
    }),
    getters: {
        get_sents_length: (state) => state.sents.length,
        get_msg_box: (state) => state.msg_box,
    },
    actions: {
        sent_message() {
            this.sents.push({
                id: uuidv4(),
                to: this.to,
                subject: this.subject,
                message: this.message,
                time: moment().format('MMMM D h:mm a'),
                check: false,
                starred: false,
            })
            this.msg_box = false;
            router.push('/sent')
        },
        open_msg_box() {
            this.msg_box = true
        },
        close_msg_box() {
            this.msg_box = false
        },
    }
})
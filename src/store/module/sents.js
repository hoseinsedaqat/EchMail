import { useToast } from 'vue-toastification';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment/moment';
import router from '@/router';
const toast = useToast();


export const sents = defineStore('sents', {
    state: () => ({
        sents: [],
        msg_box: false,
    }),
    getters: {
        get_sents_length: (state) => state.sents.length,
        get_msg_box: (state) => state.msg_box,
    },
    actions: {
        delete_msg() {
            if (this.sents.filter(msg => msg.check !== false).length) {
                this.sents = this.sents.filter(msg => msg.check !== true)
                toast.success("Message Delete 😎✉")
            }
        },
        delete_msg_by_id(id) {
            this.sents = this.sents.filter(msg => msg.id !== id)
            router.push('/sent')
            toast.success('Message Delete 😎✉')
        },
        sent_message(to, subject, message) {
            this.sents.push({
                id: uuidv4(),
                to: to,
                subject: subject,
                message: message,
                time: moment().format('MMMM D h:mm a'),
                check: false,
                starred: false,
            });
            this.msg_box = false;
            router.push('/sent');
        },
        open_msg_box() {
            this.msg_box = true;
        },
        close_msg_box() {
            this.msg_box = false;
        },
    }
})
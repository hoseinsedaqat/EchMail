import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import router from '@/router';
import moment from 'moment/moment';

export const layout = defineStore('layout', {
    state: () => ({
        msg_box: false,
        aside: true,
        sents: [],
        inbox: [
            {
                id: uuidv4(),
                to: '77hosein88@gmail.com',
                subject: 'this is test',
                message: 'gmail clone',
                time: moment().format('MMMM D h:mm a'),
                check: false 
            }
        ],
        to: '',
        subject: '',
        message: '',
    }),
    getters: {
        get_msg_box: (state) => state.msg_box,
        get_aside: (state) => state.aside,
        get_sents_length: (state) => state.sents.length
    },
    actions: {
        open_msg_box() {
            this.msg_box = true
        },
        close_msg_box() {
            this.msg_box = false
        },
        aside_menu() {
            if (this.aside) {
                this.aside = false
                document.getElementById("n1").style.width = "14%";
                document.getElementById("n2").style.width = "75%";
            } else {
                this.aside = true;
                document.getElementById("n1").style.width = "15%";
                document.getElementById("n2").style.width = "70%";
            }
        },
        sent_message() {
            this.sents.push({
                id: uuidv4(),
                to: this.to,
                subject: this.subject,
                message: this.message,
                time: moment().format('MMMM D h:mm a'),
                check: false
            })
            this.msg_box = false;
            router.push('/sent')
        },
        delete_msg(){
            this.inbox = this.inbox.filter(msg => msg.check !== true)
        }
    }
})
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification'
import { InboxMessages } from '@/constants/InboxMessages';

const toast = useToast()

export const layout = defineStore('layout', {
    state: () => ({
        aside: true,
        starred: [],
        inbox: InboxMessages,
    }),
    getters: {
        get_aside: (state) => state.aside,
        get_inbox_length: (state) => state.inbox.length,
        get_starred_length: (state) => state.starred.length,
    },
    actions: {
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
        delete_msg() {
            if (this.inbox.filter(msg => msg.check !== false).length) {
                this.inbox = this.inbox.filter(msg => msg.check !== true)
                toast.success("Message Delete 😎✉")
                return;
            }
        },
        add_starred(id) {
            this.inbox.map(msg => {
                if (msg.id === id) {
                    if (msg.starred) {
                        msg.starred = false;
                        this.starred = this.starred.filter(msg => msg.starred !== false);
                        toast.error("Message UnStarred ⭐")
                    } else {
                        msg.starred = true;
                        this.starred.push(msg);
                        toast.success("Message Starred ⭐")
                    }
                }
            })
        },
    }
})
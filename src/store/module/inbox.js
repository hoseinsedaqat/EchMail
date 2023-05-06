import { InboxMessages } from '@/constants/InboxMessages';
import { useToast } from 'vue-toastification';
import { defineStore } from 'pinia';
const toast = useToast();



export const inbox = defineStore('inbox', {
    state: () => ({
        starred: [],
        inbox: InboxMessages,
    }),
    getters: {
        get_inbox_length: (state) => state.inbox.length,
        get_starred_length: (state) => state.starred.length,
    },
    actions: {
        delete_msg() {
            if (this.inbox.filter(msg => msg.check !== false).length) {
                this.inbox = this.inbox.filter(msg => msg.check !== true)
                // remove from starred if remove from inbox we shouldn't see it starred
                this.starred = this.starred.filter(msg => msg.check !== true)
                toast.success("Message Delete 😎✉")
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
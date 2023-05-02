import { defineStore } from 'pinia';

export const layout = defineStore('layout', {
    state: () => ({
        msg_box: false,
        aside: true
    }),
    getters: {
        get_msg_box: (state) => state.msg_box,
        get_aside: (state) => state.aside,
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
        }
    }
})
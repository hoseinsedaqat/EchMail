import { defineStore } from 'pinia';

export const layout = defineStore('layout', {
    state: () => ({
        aside: true,
    }),
    getters: {
        get_aside: (state) => state.aside,
        
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
    }
})
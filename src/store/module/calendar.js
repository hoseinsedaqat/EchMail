import { useToast } from 'vue-toastification';
import { defineStore } from 'pinia';
const toast = useToast();

export const calendar = defineStore('calendar', {
    state: () => ({
        show_date: new Date(),
        start_date: new Date(),
        end_date: new Date(),
        title: "",
        items: []
    }),
    getters: {},
    actions: {
        set_show_date(date) {
            this.show_date = date
        },
        add_item() {
            this.items.push({
                id: this.items.length,
                startDate: this.start_date,
                endDate: this.end_date,
                title: this.title
            });
            toast.success('your item add to calendar 📆😎')
        }
    }
})
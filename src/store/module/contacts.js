import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import router from '@/router';

export const contacts = defineStore('contacts', {
    state: () => ({
        contacts: [],
    }),
    getters: {
        get_contacts_length: (state) => state.contacts.length,
    },
    actions: {
        create_contacts(first_name, last_name, email) {
            this.contacts.push({
                id: uuidv4(),
                first_name: first_name,
                last_name: last_name,
                email: email
            })
            router.push('/contacts')
        }
    }
})
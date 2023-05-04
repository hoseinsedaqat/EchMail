import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import router from '@/router';
import { useToast } from 'vue-toastification'
import { InboxMessages } from '@/constants/InboxMessages';

const toast = useToast()

export const layout = defineStore('layout', {
    state: () => ({
        user_name: 'Hosein Sedaqat',
        user_mail: 'hsedaqat1378@gmail.com',
        img: '',
        aside: true,
        starred: [],
        contacts: [],
        inbox: InboxMessages,
    }),
    getters: {
        get_aside: (state) => state.aside,
        get_inbox_length: (state) => state.inbox.length,
        get_starred_length: (state) => state.starred.length,
        get_contacts_length: (state) => state.contacts.length,
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
        onFileChange(e) {
            try {
                var reader = new FileReader();
                reader.onload = () => {
                    this.img = reader.result;
                };

                reader.readAsDataURL(e.target.files[0]);
            } catch (e) {
                toast.info("Please Upload Image")
            }
        },
        setting_name_mail(name, mail) {
            this.user_name = name
            this.user_mail = mail
        },
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
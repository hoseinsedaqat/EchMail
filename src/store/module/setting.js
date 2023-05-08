import { closeModal } from '@/utils/closeModal';
import { useToast } from 'vue-toastification';
import { defineStore } from 'pinia';
const toast = useToast();


export const setting = defineStore('setting', {
    state: () => ({
        user_name: 'Hosein Sedaqat',
        user_mail: 'hsedaqat1378@gmail.com',
        img: '',
    }),
    getters: {},
    actions: {
        onFileChange(e) {
            try {
                var reader = new FileReader();
                reader.onload = () => {
                    this.img = reader.result;
                };

                reader.readAsDataURL(e.target.files[0]);
                toast.info('profile photo is uploaded 😎🤞')
                closeModal();
            } catch (e) {
                toast.info("Please Upload Image")
            }
        },
        setting_name_mail(name, mail) {
            this.user_name = name
            this.user_mail = mail
            closeModal()
        },
    }
})
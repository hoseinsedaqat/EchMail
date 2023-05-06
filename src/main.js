import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import './assets/tailwind.css';

import './assets/scss/main.scss';

import { createPinia } from 'pinia';

import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

import { vue_toast_notification } from '@/constants/VueToastNotification';

const app = createApp(App);

app.use(Toast, vue_toast_notification);

app.use(createPinia());

app.use(router);

app.mount('#app');

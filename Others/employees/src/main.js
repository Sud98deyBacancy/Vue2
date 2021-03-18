import { createApp } from 'vue';
import router from './router.js';
import app from './App.vue';
import BaseCard from './Components/UI/BaseCard.vue';
import BaseBtn from './Components/UI/BaseButton.vue';

const Mainapp=createApp(app).use(router);
Mainapp.component('base-card',BaseCard);Mainapp.component('base-button',BaseBtn);
Mainapp.use(router);
Mainapp.mount('#app');

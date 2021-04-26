import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { IconsPlugin, BCard, BContainer,BCol, BRow } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(IconsPlugin)
Vue.component("b-card", BCard);
Vue.component("b-container", BContainer);
Vue.component("b-col", BCol); Vue.component("b-row", BRow);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

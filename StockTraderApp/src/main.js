import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './Modules/Store';
import Home from './Components/Home.vue';
import PortFolio from './Components/PortFolio/portfolio.vue';
import Stocks from './Components/Stock/stocks.vue';
Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes:[{path:'/',component:Home},{path:'/portfolio',component:PortFolio},
  {path:'/stocks',component:Stocks}]
});
new Vue({
  el: '#app',
  router,store,
  render: h => h(App)
})

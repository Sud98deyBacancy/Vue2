import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuefirebase-9abe3-default-rtdb.europe-west1.firebasedatabase.app'
//axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'
new Vue({
  el: '#app',
  router, store,
  render: h => h(App)
})

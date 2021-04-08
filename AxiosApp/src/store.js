import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {idToken:null,userId:null},
  mutations: {
    authUser(state,userData){
      state.idToken = userData.Token; state.userId = userData.userId
    }
  },
  actions: {
    signup({commit},authData){
      axios.post('/accounts:signUp?key=AIzaSyCpSEwHCXqk7AhuCGXmDrojyWRrpLLHptk', 
      {email:authData.email,password:authData.password,returnSecureToken:true})
        .then(res => { console.log(res); commit('authUser',{ Token:res.data.idToken,userId:res.data.localId})
      }).catch(error => console.log(error))
    },
    login({commit},authData){
      axios.post('/accounts:signInWithPassword?key=AIzaSyCpSEwHCXqk7AhuCGXmDrojyWRrpLLHptk', 
      {email:authData.email,password:authData.password,returnSecureToken:true})
        .then(res => { console.log(res); commit('authUser',{ Token:res.data.idToken,userId:res.data.localId})
      }).catch(error => console.log(error))
      }
  },
  getters: {
    fetchUser(state){
    if(!state.idToken) { return ;}
    axios.get('/users.json' + 'auth=' + state.idToken).then(res => {console.log(res)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key];user.id = key
            users.push(user)
          }
          console.log(users); return users[state.userId].email
        }).catch(error => console.log(error))
    }
  }
})
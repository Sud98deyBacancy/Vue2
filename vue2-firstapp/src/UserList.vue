<template>
<body>
   <section class="container">
       <input type="text" name="AddUser"
       v-model.trim="Uname" placeholder="Add User" @keydown.enter="addUser"> <hr>
       <button @click="Show=!Show" class="btn btn-primary">{{Show?'Hide':'Show'}} Users</button>
      </section>
<br>

   <div class="container" v-if="Show">
           <app-header title="User List"></app-header>
      <hr>
        <app-body content="Add Users Here" :names=names></app-body>
        <hr>
        <div class="row">
        <app-footer title="Users are managed here"></app-footer>
        </div>
    </div>
  </body>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';
export default{
components:{ 'app-header':AppHeader,'app-body':AppBody,'app-footer':AppFooter },
data(){
  return { Show:false,Uname:'',names:['Samir','Amir','Amar','Kabir','Karan','Jaydeep'] };
},
methods:{
  addUser(){
    if(this.names.includes(this.Uname))
    { alert('User already exists'); }
    else {this.names.push(this.Uname); }
    }
}
}
</script>

<style scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
div{ color: gray;} hr{background-color: blue;}
</style>

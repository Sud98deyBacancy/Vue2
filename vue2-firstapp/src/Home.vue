<template>

<ul class="style">
  <transition name="fade" type="animation" appear>
     <li><h1 class="alert alert-info"> User : {{msg}}</h1></li>
   </transition> <br>
   <transition name="fade" type="animation" mode="out-in">
     <li v-if="show"><h1 key="true"> User : {{msg}}</h1></li>
     <li v-else ><h1 class="alert alert-danger" key="false"> User Warning </h1></li>
   </transition> <hr>
   <li> <button @click="message" class="btn btn-primary">Click</button> </li>
   <li> <button @click="show=!show" class="btn btn-primary">Animate</button> </li>
     <hr>
</ul>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Vue.js App',show:false
    }
  },
  methods:{
    message(){ alert('Welcome to VueJS User'); }
  }
}
</script>

<style>
.style {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 { font-weight: normal; }
ul { list-style-type: none;  padding: 0; }
li { display: inline-block; margin: 0 10px; }
a {  color: #42b983;}
.fade-enter{ opacity: 0; }
.fade-enter-active{ animation: fade-in 2s ease-in forwards; transition: opacity 2s;}
.fade-leave{animation: fade-out 2s ease-out forwards;}
.fade-leave-active{ transition: opacity 2s; opacity: 0; position: absolute;}
.fade-move{ transition: transform 2s;}
@keyframes fade-in {
  from {transform: translateY(20px); }
  to { transform: translateY(0);}
}
@keyframes fade-out {
  to{ transform: translateY(0);}
  from{ transform: translateY(20px); }
  }
</style>

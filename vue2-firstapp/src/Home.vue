<template>
<ul class="style">
     <li><h1> User : {{msg}}</h1></li>
     <li> <button @click="message" class="btn btn-primary">Click</button> </li>
     <hr>
</ul>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Vue.js App'
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

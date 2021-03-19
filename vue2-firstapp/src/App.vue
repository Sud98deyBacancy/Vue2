<template>
<div class="style">
  <img src="./assets/logo.png"> <hr>
  <home-page></home-page>
   <user-list></user-list>
</div>

</template>
<script>
import Home from './Home.vue';
import UserList from './UserList.vue';
export default{
  components:{'home-page':Home,'user-list':UserList}
}
</script>
<style></style>

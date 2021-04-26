<template>
<span v-if="username && name">@{{ username }} - {{ name }}</span>
<h6 v-else>Loading...</h6>
</template>

<script>
export default {
  name: 'PostUserInfo',props: ['userId', 'users'],
  data() {
    return { user2: null}
  },
  computed: {
    username: function() {
      var user1 = this.users.find(user => user.id === this.userId);
      if (user1) { return user1.username;}
      else return null;
    },
    name: function() {
      var user2 = this.users.find(user => user.id === this.userId);
      if (user2) return user2.name;
      else return null;
    },
  },
}
</script>
<template>
<div>
  <base-post :posts="allPosts"></base-post>
</div>
</template>

<script>
import { Service } from "../../service.js";
import BasePost from '../ui/BasePost.vue';

export default {
  components: { BasePost },name: 'Posts',
  created() { this.getAllPosts(); },
  data() {
    return {allPosts: [],}
  },
  methods: {
    getAllPosts() {
    Service.get(`posts`).then(res => {this.allPosts = res.data;})
    .catch(error => console.log(error));
    },
  }
}
</script>

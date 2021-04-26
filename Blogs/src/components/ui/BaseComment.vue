<template>
  <div>
    <b-col cols="12" v-if="comments">
    <b-col cols="10" v-for="comment in comments" :key="comment.id" class="comment">
      {{ comment.body }}
    </b-col>
  </b-col>
  <h5 v-else>Loading....</h5>
  </div>
  
</template>

<script>
export default {
  name: "baseComment", props: ["comments"]
};
</script>

<style scoped>
.comment {
  margin: 0 auto;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 4px gray;
  margin-bottom: 10px;
  border-radius: 15px;
  padding: 10px 10px;
  margin-top: 15px;
  background-color: white;
}

hr {
  width: 60%;
  color: gray;
}
</style>

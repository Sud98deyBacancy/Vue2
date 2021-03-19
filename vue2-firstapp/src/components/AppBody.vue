<template>
<div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="name in names" :key="name">
                              {{ name }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6" style="border: 1px solid red;">
                <p> {{ content}}</p>
            </div>
</div>
</template>
<script>
export default {
  props:['content','names']
}
</script>
<style scoped>
ul.list-group{border: 1px solid ridge; background-color: blue;}
</style>

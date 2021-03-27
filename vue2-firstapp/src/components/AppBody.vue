<template>
<div class="row">
            <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
              <transition-group name="fade">
              <li class="list-group-item" style="cursor:pointer"
              @click="removeItem(index)" v-for="(name,index) in names" :key="index">
                  {{ name }} </li>
              </transition-group>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6" style="border: 1px solid red;">
                <p> {{ content}}</p><br>
                <div v-for="name in selectedNames" :key="name"> {{ name}} </div>
            </div>
</div>
</template>
<script>
export default {
  props:['content','names'],
  data(){
    return { selectedNames:['Almanzor']};
  },
  methods:{
    removeItem(index){
      let name = this.names[index];
      if(this.selectedNames.includes(name)){ alert('User is Selected');  }
      else {this.selectedNames.push(name);  this.names.splice(index,1); }
      }
  }
}
</script>
<style scoped>
ul.list-group{border: 1px solid ridge; background-color: blue;}
</style>

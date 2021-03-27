import Vue from 'vue'
import App from './App.vue'
Vue.directive('bgcolor',{
  bind(el,binding,vnode){ 
  //  el.style.backgroundColor = binding.value; 
  var delay=0;
  if(binding.modifiers['delayed']){ delay = binding.value.delay; }
  setTimeout(()=>{
    if(binding.arg == 'background'){ el.style.backgroundColor = binding.value.color;}
    else { el.style.color = binding.value.color; } 
  },delay);
}
});
new Vue({
  el: '#app',
  render: h => h(App)
})

<template>
   <div class="row">
       <div class="col-sm-12">
           <h3 v-bgcolor.delayed="{color:'green',delay:2000}"> Quotes Added</h3>
         <div class="progress">
	    <div class="progress-bar" role="progressbar" aria-valuenow="60" 
    aria-valuemin="0" aria-valuemax="100" :style="{ width : (count/max) * 100 + '%'}">
	         {{ count}} / {{max}}
         </div>
         </div>
       </div>
   </div>
    	
</template>
<script>
export default {
    props:['count','max']
}
</script>